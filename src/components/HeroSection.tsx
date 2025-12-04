import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-image.webp";
import heroImage2 from "@/assets/hero-carousel-2.webp";
import heroImage3 from "@/assets/hero-carousel-3.webp";

const carouselImages = [heroImage2, heroImage1, heroImage3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-[60px] pt-20 pb-[60px] flex items-center justify-center gap-[80px]">
      <div className="flex flex-col gap-6 max-w-[580px]">
        <div className="flex flex-col items-start">
          <div className="pl-3 pr-3" style={{ transform: "rotate(2deg)" }}>
            <div className="bg-yellow-bright p-1">
              <h1 className="font-anton text-7xl leading-[120%] text-foreground">
                Your All-in-One
              </h1>
            </div>
          </div>
          <div 
            className="bg-yellow-light p-1 -mt-3 w-fit" 
            style={{ transform: "rotate(-1deg)" }}
          >
            <h1 className="font-anton text-7xl leading-[120%] text-foreground">
              AI Creation Platform
            </h1>
          </div>
        </div>

        <div className="py-2.5">
          <p className="font-inter font-medium text-lg leading-[140%] text-foreground max-w-[520px]">
            From idea and script to video and social posts—your entire creative workflow is powered by free AI tools.
            <br />
            No complex steps, just one click to generate professional content so you can focus on what matters: your creativity.
          </p>
        </div>

        <a 
          href="https://mulerun.com/signup" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-primary text-primary-foreground px-4 py-2.5 rounded h-[52px] w-fit font-jetbrains font-bold text-xl hover:bg-primary/90 transition-colors"
        >
          SIGN UP FOR FREE
          <ArrowRight className="w-6 h-6" />
        </a>
      </div>

      <div className="flex flex-col gap-5 items-center shrink-0">
        <div 
          className="rounded border-2 border-card w-[640px] h-[480px] overflow-hidden relative"
          style={{ boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.12)" }}
        >
          {carouselImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`AI Creation Platform ${index + 1}`}
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
