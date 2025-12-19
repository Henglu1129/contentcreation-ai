import { Play, Star, Users } from "lucide-react";
import creatorUmutAktu from "@/assets/creator-umut-aktu.jpg";

interface CreatorCard {
  thumbnail: string;
  duration: string;
  title: string;
  creatorName: string;
  creatorAvatar: string;
  fans: string;
  rating: number;
  stars: number;
  description: string;
  source: string;
  stats: string;
  videoUrl?: string;
}

const mockCards: CreatorCard[] = [
  {
    thumbnail: "https://img.youtube.com/vi/m8brjPr23j4/hqdefault.jpg",
    duration: "11:02",
    title: "Is It Possible to Produce 10 YouTube Motivational Videos a Day with AI?",
    creatorName: "Umut Aktu",
    creatorAvatar: creatorUmutAktu,
    fans: "150K",
    rating: 9.5,
    stars: 5,
    description: "Discover how AI automation transforms YouTube content creation - from script to publish in minutes. A must-watch for creators!",
    source: "From YouTube",
    stats: "18K views · 2 months ago",
    videoUrl: "https://www.youtube.com/watch?v=m8brjPr23j4"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=250&fit=crop",
    duration: "",
    title: "Here Is The Title.",
    creatorName: "LunaBloom",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    fans: "12.8w",
    rating: 9.2,
    stars: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    source: "From YouTube",
    stats: "One week ago · 1.2k Likes"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&h=250&fit=crop",
    duration: "8:42",
    title: "Here Is The Title.",
    creatorName: "LunaBloom",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    fans: "12.8w",
    rating: 9.2,
    stars: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    source: "From X",
    stats: "32,000 page views"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop",
    duration: "",
    title: "Here Is The Title.",
    creatorName: "LunaBloom",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    fans: "12.8w",
    rating: 9.2,
    stars: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    source: "From YouTube",
    stats: "One week ago · 1.2k Likes"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?w=400&h=250&fit=crop",
    duration: "8:42",
    title: "Here Is The Title.",
    creatorName: "LunaBloom",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    fans: "12.8w",
    rating: 9.2,
    stars: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    source: "From X",
    stats: "32,000 page views"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop",
    duration: "",
    title: "Here Is The Title.",
    creatorName: "LunaBloom",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    fans: "12.8w",
    rating: 9.2,
    stars: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...",
    source: "From YouTube",
    stats: "One week ago · 1.2k Likes"
  },
];

const RatingStars = ({ count }: { count: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
        />
      ))}
    </div>
  );
};

const CreatorCard = ({ card }: { card: CreatorCard }) => {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
      {/* Thumbnail - Clickable */}
      {card.videoUrl ? (
        <a href={card.videoUrl} target="_blank" rel="noopener noreferrer" className="block relative aspect-video group">
          <img
            src={card.thumbnail}
            alt={card.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/70 transition-colors">
              <Play className="w-5 h-5 text-white fill-white ml-1" />
            </div>
          </div>
          {/* Duration */}
          {card.duration && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
              {card.duration}
            </div>
          )}
        </a>
      ) : (
        <div className="relative aspect-video">
          <img
            src={card.thumbnail}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white ml-1" />
            </div>
          </div>
          {/* Duration */}
          {card.duration && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
              {card.duration}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-foreground mb-3">{card.title}</h3>

        {/* Creator info */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src={card.creatorAvatar}
            alt={card.creatorName}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-foreground">{card.creatorName}</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="w-3 h-3" />
              <span>{card.fans} Fans</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-muted text-foreground text-xs font-medium px-2 py-1 rounded">
            {card.rating}
          </span>
          <RatingStars count={card.stars} />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {card.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/50">
          <span>{card.source}</span>
          <span>{card.stats}</span>
        </div>
      </div>
    </div>
  );
};

const CreatorBreakoutSection = () => {
  return (
    <section className="bg-yellow-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-anton text-4xl md:text-6xl uppercase tracking-tight text-foreground mb-6">
            Become the Next Breakout Creator
          </h2>
          <p className="font-inter text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            See how creators are using these agents to make hit videos
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCards.map((card, index) => (
            <CreatorCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorBreakoutSection;
