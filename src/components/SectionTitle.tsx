import { useEffect, useRef, useState } from "react";
import userstory1 from "@/assets/userstory-1.webp";
import userstory2 from "@/assets/userstory-2.webp";
import userstory3 from "@/assets/userstory-3.webp";
import userstory4 from "@/assets/userstory-4.webp";
import userstory5 from "@/assets/userstory-5.webp";
import userstory6 from "@/assets/userstory-6.webp";
import userstory7 from "@/assets/userstory-7.webp";
import userstory8 from "@/assets/userstory-8.webp";
import userstory9 from "@/assets/userstory-9.webp";

const column1Images = [userstory1, userstory2, userstory3];
const column2Images = [userstory4, userstory5, userstory6];
const column3Images = [userstory7, userstory8, userstory9];

const ScrollingColumn = ({ images, direction }: { images: string[]; direction: "up" | "down" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = direction === "up" ? 0 : scrollContainer.scrollHeight / 2;
    const scrollSpeed = direction === "up" ? 0.3 : -0.3;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        if (direction === "up" && scrollPosition >= scrollContainer.scrollHeight / 2) {
          scrollPosition = 0;
        } else if (direction === "down" && scrollPosition <= 0) {
          scrollPosition = scrollContainer.scrollHeight / 2;
        }
        
        scrollContainer.scrollTop = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [direction, isPaused]);

  return (
    <div 
      ref={scrollRef}
      className="flex flex-col gap-2 h-[500px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {[...images, ...images].map((img, i) => (
        <img 
          key={i} 
          src={img} 
          alt={`User story ${i + 1}`}
          className="w-full rounded-lg flex-shrink-0 shadow-sm transition-all duration-300 hover:brightness-110 hover:shadow-md hover:scale-[1.02]"
        />
      ))}
    </div>
  );
};

const SectionTitle = () => {
  return (
    <section className="bg-yellow-light py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
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
        
        {/* 3 columns scrolling vertically */}
        <div className="grid grid-cols-3 gap-6 py-8">
          <ScrollingColumn images={column1Images} direction="up" />
          <ScrollingColumn images={column2Images} direction="down" />
          <ScrollingColumn images={column3Images} direction="up" />
        </div>
        
        {/* Bottom dashed line */}
        <div className="border-t-2 border-dashed border-foreground/20" />
      </div>
      </div>
    </section>
  );
};

export default SectionTitle;