import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroCarousel1 from "@/assets/hero-carousel-1.jpg";
import heroCarousel2 from "@/assets/hero-carousel-2.jpg";
import heroCarousel3 from "@/assets/hero-carousel-3.jpg";

const carouselImages = [heroCarousel2, heroCarousel1, heroCarousel3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 md:px-[60px] pt-10 md:pt-20 pb-10 md:pb-[60px] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[80px]">
      <div className="flex flex-col gap-6 max-w-[580px]">
        <h1 className="flex flex-col items-start">
          <div className="pl-3 pr-3" style={{ transform: "rotate(2deg)" }}>
            <div className="bg-yellow-bright p-1">
              <span className="font-anton text-4xl md:text-5xl lg:text-7xl leading-[120%] text-foreground block">
                Your All-in-One
              </span>
            </div>
          </div>
          <div 
            className="bg-yellow-light p-1 -mt-2 md:-mt-3 w-fit" 
            style={{ transform: "rotate(-1deg)" }}
          >
            <span className="font-anton text-4xl md:text-5xl lg:text-7xl leading-[120%] text-foreground block">
              AI Creation Platform
            </span>
          </div>
        </h1>

        <div className="py-2.5">
          <p className="font-inter font-medium text-base md:text-lg leading-[140%] text-foreground max-w-[520px]">
            From idea and script to video and social posts—your entire creative workflow is powered by free AI tools.
            <br />
            No complex steps, just one click to generate professional content so you can focus on what matters: your creativity.
          </p>
        </div>

        <a 
          href="https://mulerun.com/signup" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-primary text-primary-foreground px-4 py-2.5 rounded h-[52px] w-fit font-jetbrains font-bold text-lg md:text-xl hover:bg-primary/90 transition-colors"
        >
          SIGN UP FOR FREE
          <ArrowRight className="w-6 h-6" />
        </a>
      </div>

      <div className="flex flex-col gap-5 items-center shrink-0 w-full lg:w-auto">
        <div 
          className="rounded border-2 border-card w-full max-w-[640px] lg:w-[640px] aspect-[4/3] lg:h-[480px] overflow-hidden relative"
          style={{ boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.12)" }}
        >
          {carouselImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`AI Creation Platform ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-1">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-10 h-1.5 rounded-sm transition-colors ${
                index === currentIndex ? "bg-lavender" : "bg-stone-dark"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;