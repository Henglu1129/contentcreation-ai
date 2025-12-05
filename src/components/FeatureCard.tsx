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
  description?: string;
  hasButton?: boolean;
  imageIndex?: number;
  link?: string;
}

const images = [cardTurnIdea, cardWriteCopy, cardMakeShorts, cardPodcast, cardTranslate, cardGenerateTitle, cardThumbnail, cardRepurpose, cardImage1, cardImage2];

const FeatureCard = ({ title, description, hasButton = false, imageIndex = 0, link }: FeatureCardProps) => {
  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardWrapper 
      {...cardProps}
      className={`bg-card rounded border border-yellow-glow pt-8 pr-6 pb-8 pl-6 flex items-center w-full md:w-[357px] h-[130px] relative overflow-hidden card-shadow-yellow group ${link ? 'cursor-pointer hover:border-yellow-bright transition-colors' : ''}`}
    >
      {/* Browser Frame with Image */}
      <div 
        className="absolute right-[-1px] top-[8px] w-[140px] h-[126px] rounded-sm border border-foreground/10 overflow-hidden"
        style={{ boxShadow: "0px 2px 4px -0.75px rgba(0, 0, 0, 0.12), 0px 2px 6px -0.75px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="bg-stone-dark border-b border-card h-[11px] p-[3.55px] flex items-center gap-[3.55px]">
          <div className="w-[3.55px] h-[3.55px] rounded-full bg-card" />
          <div className="w-[3.55px] h-[3.55px] rounded-full bg-card" />
          <div className="w-[3.55px] h-[3.55px] rounded-full bg-card" />
        </div>
        <img 
          src={images[imageIndex % images.length]} 
          alt={title}
          className="w-[140px] h-[115px] object-cover object-center"
        />
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-5 items-start max-w-[180px]">
        <span className="font-inter font-semibold text-base leading-normal text-foreground">
          {title}
        </span>
        {description && (
          <span className="font-inter text-xs leading-tight text-muted-foreground">
            {description}
          </span>
        )}
      </div>

      {/* Optional Button - shows on hover */}
      {hasButton && (
        <div className="absolute left-0 bottom-0 w-full h-9 bg-accent flex items-center justify-center gap-2.5 rounded-t-none border border-transparent opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="font-jetbrains font-bold text-sm uppercase tracking-tight text-accent-foreground">
            Free trial
          </span>
          <ArrowRight className="w-5 h-5 text-accent-foreground" />
        </div>
      )}
    </CardWrapper>
  );
};

export default FeatureCard;