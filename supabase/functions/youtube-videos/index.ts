import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const YOUTUBE_API_KEY = Deno.env.get('YOUTUBE_API_KEY');

interface YouTubeVideoInfo {
  videoId: string;
  title: string;
  thumbnail: string;
  duration: string;
  viewCount: string;
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  channelThumbnail: string;
  subscriberCount: string;
}

function formatDuration(isoDuration: string): string {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "0:00";
  
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function formatViewCount(count: string): string {
  const num = parseInt(count);
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return count;
}

function formatSubscriberCount(count: string): string {
  const num = parseInt(count);
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(2)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return count;
}

function formatPublishedDate(publishedAt: string): string {
  const date = new Date(publishedAt);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours === 0) {
      return "Just now";
    }
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else if (diffDays === 1) {
    return "1 day ago";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { videoIds } = await req.json();
    
    if (!videoIds || !Array.isArray(videoIds) || videoIds.length === 0) {
      return new Response(
        JSON.stringify({ error: 'videoIds array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!YOUTUBE_API_KEY) {
      console.error('YOUTUBE_API_KEY is not set');
      return new Response(
        JSON.stringify({ error: 'YouTube API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Fetching videos:', videoIds);

    // Fetch video details
    const videoResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds.join(',')}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!videoResponse.ok) {
      const errorText = await videoResponse.text();
      console.error('YouTube API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch video data', details: errorText }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const videoData = await videoResponse.json();
    console.log('Video data received:', videoData.items?.length, 'videos');

    if (!videoData.items || videoData.items.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No videos found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get unique channel IDs
    const channelIds = [...new Set(videoData.items.map((item: any) => item.snippet.channelId))];
    
    // Fetch channel details
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelIds.join(',')}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!channelResponse.ok) {
      const errorText = await channelResponse.text();
      console.error('YouTube Channels API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch channel data', details: errorText }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const channelData = await channelResponse.json();
    console.log('Channel data received:', channelData.items?.length, 'channels');

    // Create channel lookup map
    const channelMap = new Map();
    channelData.items?.forEach((channel: any) => {
      channelMap.set(channel.id, {
        thumbnail: channel.snippet.thumbnails.default?.url || channel.snippet.thumbnails.medium?.url,
        subscriberCount: channel.statistics.subscriberCount
      });
    });

    // Build response
    const videos: YouTubeVideoInfo[] = videoData.items.map((item: any) => {
      const channelInfo = channelMap.get(item.snippet.channelId) || {};
      return {
        videoId: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        duration: formatDuration(item.contentDetails.duration),
        viewCount: formatViewCount(item.statistics.viewCount),
        publishedAt: formatPublishedDate(item.snippet.publishedAt),
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
        channelThumbnail: channelInfo.thumbnail || '',
        subscriberCount: formatSubscriberCount(channelInfo.subscriberCount || '0')
      };
    });

    console.log('Returning', videos.length, 'videos');

    return new Response(
      JSON.stringify({ videos }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in youtube-videos function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
