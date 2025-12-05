import { useEffect, useState } from "react";
import logoDescriprt from "@/assets/logo-descript.png";
import logoMidjourney from "@/assets/logo-midjourney.png";
import logoImages from "@/assets/logo-images.png";
import logoCapcut from "@/assets/logo-capcut.png";
import logoVeed from "@/assets/logo-veed.png";
import logoHubspot from "@/assets/logo-hubspot.jpg";
import logoCanva from "@/assets/logo-canva.png";
import logoRepurpose from "@/assets/logo-repurpose.jpg";
import logoMule from "@/assets/logo-mule.png";

const PricingSection = () => {
  const [isConverged, setIsConverged] = useState(false);
  
  const logos = [
    { src: logoDescriprt, alt: "Descript" },
    { src: logoMidjourney, alt: "Midjourney" },
    { src: logoImages, alt: "Images" },
    { src: logoCapcut, alt: "CapCut" },
    { src: logoVeed, alt: "Veed" },
    { src: logoHubspot, alt: "HubSpot" },
    { src: logoCanva, alt: "Canva" },
    { src: logoRepurpose, alt: "Repurpose" },
  ];

  useEffect(() => {
    // Animation cycle: spread (2s) -> converge (2s) -> merged display (2.5s) -> expand (2s) -> repeat
    const cycleAnimation = () => {
      // Start with spread state for 2 seconds
      setIsConverged(false);
      
      setTimeout(() => {
        // Converge to center
        setIsConverged(true);
      }, 2000);
      
      setTimeout(() => {
        // Start expanding back
        setIsConverged(false);
      }, 5500); // 2000 (wait) + 1000 (converge anim) + 2500 (merged display)
    };
    
    cycleAnimation();
    const interval = setInterval(cycleAnimation, 7500); // Full cycle duration
    
    return () => clearInterval(interval);
  }, []);

  // Calculate the translateX offset for each logo to reach center
  const getTranslateX = (index: number) => {
    const logoSize = 85;
    const gap = 16;
    const totalWidth = logoSize + gap;
    const centerIndex = 3.5;
    const distanceFromCenter = index - centerIndex;
    return distanceFromCenter * totalWidth;
  };

  return (
    <section className="bg-yellow-light py-16 px-6">
      <div className="bg-[#FDFBF5] rounded-2xl p-12 max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-anton text-5xl md:text-6xl text-foreground mb-4">
            Mulerun's all-in-one edge
          </h2>
          <p className="font-inter text-sm text-muted-foreground">
            <span className="highlight-yellow px-2 py-1">Multiple pro tools, a fraction of the price.</span>
          </p>
        </div>

        {/* Platform Icons with Animation */}
        <div className="relative flex justify-center items-center gap-3 md:gap-4 mb-12 h-[85px]">
          {/* Individual logos */}
          {logos.map((logo, index) => {
            const translateX = getTranslateX(index);
            
            return (
              <div 
                key={index}
                className="w-16 h-16 md:w-[85px] md:h-[85px] rounded-full border border-foreground/10 flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0 transition-all duration-1000 ease-in-out"
                style={{
                  transform: isConverged 
                    ? `translateX(${-translateX}px) scale(0)` 
                    : 'translateX(0) scale(1)',
                  opacity: isConverged ? 0 : 1,
                }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
          
          {/* Mule logo (appears when merged) */}
          <div 
            className="absolute left-1/2 top-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border border-foreground/10 flex items-center justify-center shadow-lg overflow-hidden bg-[#FDFBF5] transition-all duration-700 ease-in-out"
            style={{
              transform: isConverged 
                ? 'translate(-50%, -50%) scale(1)' 
                : 'translate(-50%, -50%) scale(0)',
              opacity: isConverged ? 1 : 0,
            }}
          >
            <img 
              src={logoMule} 
              alt="Mulerun" 
              className="w-full h-full object-contain p-1"
            />
          </div>
        </div>

        {/* Pricing Label */}
        <div className="text-center mb-8">
          <span className="font-inter text-sm text-muted-foreground">
            Multiple pro platforms = <span className="text-cyan">Mulerun has them all.</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="flex gap-6 justify-center mb-12">
          <div className="bg-background border border-foreground/20 rounded-lg p-6 w-[280px]">
            <span className="font-jetbrains text-xs uppercase text-muted-foreground block mb-2">
              Buy 3 separate accounts:
            </span>
            <div className="font-inter font-bold text-2xl text-foreground">
              $65-85/month
            </div>
          </div>
          
          <div className="bg-cyan rounded-lg p-6 w-[280px] relative">
            <span className="font-jetbrains text-xs uppercase text-foreground/70 block mb-2">
              Get everything with Mulerun:
            </span>
            <div className="font-inter font-bold text-lg text-foreground">
              starting at 
              <span className="text-2xl ml-1">$x.xx/mo</span>
            </div>
          </div>
          
          <div className="bg-background border border-foreground/20 rounded-lg p-6 w-[280px]">
            <span className="font-jetbrains text-xs uppercase text-muted-foreground block mb-2">
              Annual savings:
            </span>
            <div className="font-inter font-bold text-2xl text-yellow-bright">
              $17,264/year
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex justify-center gap-16 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-inter font-bold text-lg text-foreground mb-2">hit</h3>
            <p className="font-inter text-xs text-muted-foreground max-w-[200px]">
              Over countless AI features—video scripts, captions, thumbnails, shorts.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-inter font-bold text-lg text-foreground mb-2">Quality</h3>
            <p className="font-inter text-xs text-muted-foreground max-w-[200px]">
              No more juggling multiple tools. Everything in one place, one login, one workflow.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="font-inter font-bold text-lg text-foreground mb-2">$?</h3>
            <p className="font-inter text-xs text-muted-foreground max-w-[200px]">
              Predictable and scalable pricing for every stage of growth.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center">
          <button className="bg-foreground text-background px-6 py-3 rounded font-jetbrains font-bold text-sm uppercase flex items-center gap-2 hover:bg-foreground/90 transition-colors">
            Sign Up Now
            <span className="tracking-tighter">&gt;&gt;</span>
          </button>
          {/* Tooltip bubble */}
          <div className="relative mt-4">
            {/* Arrow pointing up */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-bright rotate-45" />
            {/* Bubble */}
            <div className="bg-yellow-bright text-foreground px-5 py-3 rounded-lg relative">
              <p className="font-inter text-sm font-medium text-center">Get 300 free credits now.</p>
              <p className="font-inter text-sm text-center">No card required.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;