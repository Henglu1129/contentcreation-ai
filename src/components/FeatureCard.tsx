import { ArrowRight } from "lucide-react";
import cardImage1 from "@/assets/card-image-1.png";
import cardImage2 from "@/assets/card-image-2.png";
import cardTurnIdea from "@/assets/card-turn-idea.png";
import cardWriteCopy from "@/assets/card-write-copy.png";
import cardMakeShorts from "@/assets/card-make-shorts.png";
import cardPodcast from "@/assets/card-podcast.png";
import cardTranslate from "@/assets/card-translate.png";
import cardGenerateTitle from "@/assets/card-generate-title.png";
import cardThumbnail from "@/assets/card-thumbnail.png";
import cardRepurpose from "@/assets/card-repurpose.png";

interface FeatureCardProps {
  title: string;
  hasButton?: boolean;
  imageIndex?: number;
  link?: string;
}

const images = [cardTurnIdea, cardWriteCopy, cardMakeShorts, cardPodcast, cardTranslate, cardGenerateTitle, cardThumbnail, cardRepurpose, cardImage1, cardImage2];

const FeatureCard = ({ title, hasButton = false, imageIndex = 0, link }: FeatureCardProps) => {
  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardWrapper 
      {...cardProps}
      className={`bg-card rounded border border-yellow-glow pt-6 pr-5 pb-6 pl-5 flex items-center w-[280px] h-[100px] relative overflow-hidden card-shadow-yellow group ${link ? 'cursor-pointer hover:border-yellow-bright transition-colors' : ''}`}
    >
      {/* Browser Frame with Image */}
      <div 
        className="absolute right-[-1px] top-[6px] w-[110px] h-[98px] rounded-sm border border-foreground/10 overflow-hidden"
        style={{ boxShadow: "0px 2px 4px -0.75px rgba(0, 0, 0, 0.12), 0px 2px 6px -0.75px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="bg-stone-dark border-b border-card h-[9px] p-[3px] flex items-center gap-[3px]">
          <div className="w-[3px] h-[3px] rounded-full bg-card" />
          <div className="w-[3px] h-[3px] rounded-full bg-card" />
          <div className="w-[3px] h-[3px] rounded-full bg-card" />
        </div>
        <img 
          src={images[imageIndex % images.length]} 
          alt={title}
          className="w-[110px] h-[89px] object-cover object-center"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col gap-2 items-start h-10">
        <span className="font-inter font-semibold text-sm leading-normal text-foreground">
          {title}
        </span>
      </div>

      {/* Optional Button - shows on hover */}
      {hasButton && (
        <div className="absolute left-0 bottom-0 w-full h-8 bg-accent flex items-center justify-center gap-2 rounded-t-none border border-transparent opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="font-jetbrains font-bold text-xs uppercase tracking-tight text-accent-foreground">
            Free trial
          </span>
          <ArrowRight className="w-4 h-4 text-accent-foreground" />
        </div>
      )}
    </CardWrapper>
  );
};

export default FeatureCard;
