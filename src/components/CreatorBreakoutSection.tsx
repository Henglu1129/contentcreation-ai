import { Play, Star, Users } from "lucide-react";
import creatorUmutAktu from "@/assets/creator-umut-aktu.jpg";
import creatorPlanckMind from "@/assets/creator-planckmind.jpg";
import creatorAIMoneyManiac from "@/assets/creator-card3.jpg";
import creatorMartinCash from "@/assets/creator-martin-cash.jpg";
import creatorCard5 from "@/assets/creator-card5.jpg";
import creatorCard6 from "@/assets/creator-card6.jpg";

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
    title: "AI Otomasyonu ile Günde 10 YouTube Motivasyon Videosu Üretmek Mümkün mü?",
    creatorName: "Umut Aktu",
    creatorAvatar: creatorUmutAktu,
    fans: "150K",
    rating: 9.5,
    stars: 4.5,
    description: "Discover how AI automation transforms YouTube content creation - from script to publish in minutes. A must-watch for creators!",
    source: "From YouTube",
    stats: "18K views · 3 days ago",
    videoUrl: "https://www.youtube.com/watch?v=m8brjPr23j4"
  },
  {
    thumbnail: "https://img.youtube.com/vi/ygJsgrrUUH0/hqdefault.jpg",
    duration: "7:34",
    title: "MuleRun AI Agents Marketplace | Buy & Sell AI Agents Explained",
    creatorName: "PlanckMind",
    creatorAvatar: creatorPlanckMind,
    fans: "13.5K",
    rating: 9.1,
    stars: 4.25,
    description: "Explore the future of AI automation with MuleRun's marketplace - discover how to buy, sell, and deploy AI agents for your business!",
    source: "From YouTube",
    stats: "420 views · 2 days ago",
    videoUrl: "https://www.youtube.com/watch?v=ygJsgrrUUH0"
  },
  {
    thumbnail: "https://img.youtube.com/vi/RxXvya5v5Lw/hqdefault.jpg",
    duration: "11:20",
    title: "Make Money Selling AI Agents (MuleRun - World's Largest AI Agent Store)",
    creatorName: "AI Money Maniac",
    creatorAvatar: creatorAIMoneyManiac,
    fans: "16.3K",
    rating: 9.2,
    stars: 4.25,
    description: "Learn how to monetize AI agents on MuleRun - the world's largest marketplace for buying and selling AI automation tools!",
    source: "From YouTube",
    stats: "723 views · 1 day ago",
    videoUrl: "https://www.youtube.com/watch?v=RxXvya5v5Lw"
  },
  {
    thumbnail: "https://img.youtube.com/vi/HrKjPC_Racg/hqdefault.jpg",
    duration: "4:09",
    title: "I Let MuleRun's AI Agents Run My Creator Workflow — INSANE Results",
    creatorName: "Martin Cash",
    creatorAvatar: creatorMartinCash,
    fans: "36.7K",
    rating: 9.0,
    stars: 5,
    description: "Real creator tests MuleRun's AI agents on his workflow - see the jaw-dropping automation results that save hours of work!",
    source: "From YouTube",
    stats: "1K views · 1 day ago",
    videoUrl: "https://www.youtube.com/watch?v=HrKjPC_Racg"
  },
  {
    thumbnail: "https://img.youtube.com/vi/2FugAplwawk/hqdefault.jpg",
    duration: "9:57",
    title: "Stop Wasting Time—Let MuleRun Handle Your Daily Creative Work!",
    creatorName: "Inside Your Hustle",
    creatorAvatar: creatorCard5,
    fans: "420K",
    rating: 9.5,
    stars: 5,
    description: "Discover how MuleRun AI agents can automate your daily creative tasks and save you hours of work every day!",
    source: "From YouTube",
    stats: "9.6K views · 1 day ago",
    videoUrl: "https://www.youtube.com/watch?v=2FugAplwawk"
  },
  {
    thumbnail: "https://img.youtube.com/vi/FcCGfLFlfiM/hqdefault.jpg",
    duration: "5:49",
    title: "MuleRun 2.0 This AI Replaces Your Entire Ecom Team",
    creatorName: "INFINITE DIGITAL",
    creatorAvatar: creatorCard6,
    fans: "2.62M",
    rating: 9.2,
    stars: 5,
    description: "See how MuleRun 2.0 can automate your entire ecommerce team's workflow with powerful AI agents!",
    source: "From YouTube",
    stats: "79.8K views · 3 weeks ago",
    videoUrl: "https://www.youtube.com/watch?v=FcCGfLFlfiM"
  },
];

const RatingStars = ({ count }: { count: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        const diff = count - (starValue - 1);
        let fillPercent = 0;
        
        if (diff >= 1) {
          fillPercent = 100;
        } else if (diff > 0) {
          fillPercent = diff * 100;
        }
        
        return (
          <div key={i} className="relative w-3.5 h-3.5">
            {/* Background star (empty) */}
            <Star className="absolute inset-0 w-3.5 h-3.5 fill-gray-300 text-gray-300" />
            {/* Filled star with dynamic width */}
            {fillPercent > 0 && (
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercent}%` }}>
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
            )}
          </div>
        );
      })}
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
        <div className="text-center mb-12">
          <h2 className="font-anton text-5xl leading-[120%] text-foreground mb-4">
            Become the Next Breakout Creator
          </h2>
          <p className="font-inter text-sm md:text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            See how creators are using these agents to make hit videos.
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
