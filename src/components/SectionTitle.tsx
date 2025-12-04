import { useEffect, useRef } from "react";
import showcaseImage1 from "@/assets/showcase-1.webp";
import contentPilotCase from "@/assets/content-pilot-case.webp";
import illustrateCase from "@/assets/illustrate-case.webp";
import podcastCover from "@/assets/podcast-cover.webp";
import youtubeThumbnail from "@/assets/youtube-thumbnail.webp";

const images = [
  showcaseImage1,
  contentPilotCase,
  illustrateCase,
  podcastCover,
  youtubeThumbnail,
];

const SectionTitle = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-yellow-light py-16 px-[120px]">
      <div className="text-center mb-4">
        <h2 className="font-anton text-5xl leading-[120%] text-foreground">
          The Toolkit Top Creators Rely On
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <p className="font-inter text-base text-muted-foreground text-center leading-relaxed">
          Tens of thousands of creators worldwide use these tools for thumbnails, short-form editing, 
          cross-platform adaptation, and subtitle translation—simple to use, professional results.
        </p>
      </div>

      {/* Image carousel with dashed lines */}
      <div className="mt-12">
        {/* Top dashed line */}
        <div className="border-t-2 border-dashed border-foreground/20" />
        
        {/* Scrolling images */}
        <div 
          ref={scrollRef}
          className="flex gap-6 py-8 overflow-hidden"
        >
          {/* Duplicate images for infinite scroll effect */}
          {[...images, ...images].map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt={`Showcase ${i + 1}`}
              className="h-[240px] w-auto rounded-lg flex-shrink-0 object-cover"
            />
          ))}
        </div>
        
        {/* Bottom dashed line */}
        <div className="border-t-2 border-dashed border-foreground/20" />
      </div>
    </section>
  );
};

export default SectionTitle;
