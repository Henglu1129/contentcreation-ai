import logoDescriprt from "@/assets/logo-descript.png";
import logoMidjourney from "@/assets/logo-midjourney.png";
import logoImages from "@/assets/logo-images.png";
import logoCapcut from "@/assets/logo-capcut.png";
import logoVeed from "@/assets/logo-veed.png";
import logoHubspot from "@/assets/logo-hubspot.jpg";
import logoCanva from "@/assets/logo-canva.png";
import logoRepurpose from "@/assets/logo-repurpose.jpg";
import logoMule from "@/assets/logo-mule.png";
import tooltipBubble from "@/assets/tooltip-bubble.svg";

const PricingSection = () => {
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

  // Calculate the translateX offset for each logo to reach center
  const getTranslateX = (index: number) => {
    const logoSize = 85;
    const gap = 16;
    const totalWidth = logoSize + gap;
    const centerIndex = 3.5;
    const distanceFromCenter = index - centerIndex;
    return -distanceFromCenter * totalWidth;
  };

  return (
    <section className="bg-yellow-light py-10 md:py-16 px-4 md:px-6">
      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes converge-logo-0 {
          0%, 10% { transform: translateX(0) scale(1); opacity: 1; }
          25%, 80% { transform: translateX(${getTranslateX(0)}px) scale(0); opacity: 0; }
          95%, 100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes converge-logo-1 {
          0%, 10% { transform: translateX(0) scale(1); opacity: 1; }
          25%, 80% { transform: translateX(${getTranslateX(1)}px) scale(0); opacity: 0; }
          95%, 100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes converge-logo-2 {
          0%, 10% { transform: translateX(0) scale(1); opacity: 1; }
          25%, 80% { transform: translateX(${getTranslateX(2)}px) scale(0); opacity: 0; }
          95%, 100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes converge-logo-3 {
          0%, 10% { transform: translateX(0) scale(1); opacity: 1; }
          25%, 80% { transform: translateX(${getTranslateX(3)}px) scale(0); opacity: 0; }
          95%, 100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes converge-logo-4 {
          0%, 10% { transform: translateX(0) scale(1); opacity: 1; }
          25%, 80% { transform: translateX(${getTranslateX(4)}px) scale(0); opacity: 0; }
          95%, 100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes converge-logo-5 {
          0%, 10% { transform: translateX(0) scale(1); opacity: 1; }
          25%, 80% { transform: translateX(${getTranslateX(5)}px) scale(0); opacity: 0; }
          95%, 100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes converge-logo-6 {
          0%, 10% { transform: translateX(0) scale(1); opacity: 1; }
          25%, 80% { transform: translateX(${getTranslateX(6)}px) scale(0); opacity: 0; }
          95%, 100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes converge-logo-7 {
          0%, 10% { transform: translateX(0) scale(1); opacity: 1; }
          25%, 80% { transform: translateX(${getTranslateX(7)}px) scale(0); opacity: 0; }
          95%, 100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes mule-appear {
          0%, 18% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          28% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
          34%, 72% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          85%, 100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        }
        .logo-animate-0 { animation: converge-logo-0 5s ease-in-out infinite; animation-delay: 0s; }
        .logo-animate-1 { animation: converge-logo-1 5s ease-in-out infinite; animation-delay: 0.05s; }
        .logo-animate-2 { animation: converge-logo-2 5s ease-in-out infinite; animation-delay: 0.1s; }
        .logo-animate-3 { animation: converge-logo-3 5s ease-in-out infinite; animation-delay: 0.15s; }
        .logo-animate-4 { animation: converge-logo-4 5s ease-in-out infinite; animation-delay: 0.15s; }
        .logo-animate-5 { animation: converge-logo-5 5s ease-in-out infinite; animation-delay: 0.1s; }
        .logo-animate-6 { animation: converge-logo-6 5s ease-in-out infinite; animation-delay: 0.05s; }
        .logo-animate-7 { animation: converge-logo-7 5s ease-in-out infinite; animation-delay: 0s; }
        .mule-animate { animation: mule-appear 5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; animation-delay: 0.2s; }
      `}</style>

      <div className="bg-[#FDFBF5] rounded-2xl p-6 md:p-12 max-w-[1200px] mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            One account. One subscription. All the AI you need.
          </h2>
          <p className="font-inter text-sm text-muted-foreground">
            <span className="highlight-yellow px-2 py-1">Multiple pro tools, a fraction of the price.</span>
          </p>
        </div>

        {/* Platform Icons with Animation */}
        <div className="relative flex justify-center items-center gap-2 md:gap-4 mb-10 md:mb-16 h-[60px] md:h-[85px] flex-wrap md:flex-nowrap">
          {/* Individual logos */}
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`w-10 h-10 md:w-[85px] md:h-[85px] rounded-full border border-foreground/10 flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0 logo-animate-${index}`}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Mule logo (appears when merged) */}
          <div className="absolute left-1/2 top-1/2 w-14 h-14 md:w-24 md:h-24 rounded-full border border-foreground/10 flex items-center justify-center shadow-lg overflow-hidden bg-[#FDFBF5] mule-animate">
            <img 
              src={logoMule} 
              alt="Mulerun" 
              className="w-full h-full object-contain p-1"
            />
          </div>
        </div>

        {/* Pricing Label */}
        <div className="text-center mb-8 md:mb-10">
          <h3 className="font-inter font-bold text-lg md:text-2xl leading-[120%] text-foreground">
            Multiple pro platforms — Mulerun handles it all.
          </h3>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-10 md:mb-12">
          <div className="bg-white border-t-4 border-t-lavender border border-foreground/10 rounded-lg px-4 md:px-6 pt-4 md:pt-6 pb-6 md:pb-8 w-full md:w-[300px] text-center">
            <span className="font-inter font-bold text-sm md:text-base text-foreground block mt-2 md:mt-4 mb-8 md:mb-12">
              Buy 8 pro platforms separately
            </span>
            <div className="font-inter font-bold text-2xl md:text-3xl text-gray-500 line-through">
              $164.98/month
            </div>
          </div>
          
          <div className="bg-yellow-light border-t-4 border-t-yellow-bright border border-foreground/10 rounded-lg px-4 md:px-6 pt-4 md:pt-6 pb-6 md:pb-8 w-full md:w-[300px] flex flex-col items-center">
            <span className="font-inter font-bold text-sm md:text-base text-foreground block mt-2 md:mt-4 mb-8 md:mb-12">
              Get the same with Mulerun
            </span>
            <div className="flex items-stretch -rotate-2">
              {/* Checkered border left */}
              <div 
                className="w-3 flex-shrink-0"
                style={{
                  background: `
                    repeating-conic-gradient(
                      #fdc17d 0% 25%, 
                      #fde4c4 0% 50%
                    ) 50% / 8px 8px
                  `
                }}
              />
              {/* Main content */}
              <div className="bg-[#fdc17d] px-2 py-1.5 whitespace-nowrap">
                <span className="font-inter font-bold text-base md:text-lg text-[#774002]">$19.9/month — Save 88%</span>
              </div>
              {/* Checkered border right */}
              <div 
                className="w-3 flex-shrink-0"
                style={{
                  background: `
                    repeating-conic-gradient(
                      #fdc17d 0% 25%, 
                      #fde4c4 0% 50%
                    ) 50% / 8px 8px
                  `
                }}
              />
            </div>
          </div>
          
          <div className="bg-yellow-light border-t-4 border-t-yellow-bright border border-foreground/10 rounded-lg px-4 md:px-6 pt-4 md:pt-6 pb-6 md:pb-8 w-full md:w-[300px] text-center">
            <span className="font-inter font-bold text-sm md:text-base text-foreground block mt-2 md:mt-4 mb-8 md:mb-12">
              Annual savings
            </span>
            <div className="font-inter font-bold text-2xl md:text-3xl text-[#774002]">
              $1,740.96/year
            </div>
          </div>
        </div>

        {/* Beyond Price Section */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="font-inter text-lg md:text-2xl leading-[120%] text-foreground">
            Beyond Price — <span className="font-bold">More Convenience with Mulerun</span>
          </h3>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row gap-3 justify-center mb-10 md:mb-12">
          {/* Card 1 */}
          <div className="relative bg-transparent border-2 border-[#fdc17d] rounded-lg p-3 w-full md:w-[220px] text-center overflow-hidden">
            {/* Orange triangle decoration */}
            <div 
              className="absolute top-0 left-0 w-10 h-10"
              style={{
                background: 'linear-gradient(135deg, #fdc17d 50%, transparent 50%)'
              }}
            />
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <path d="M7 8h2m2 0h2m2 0h2"></path>
              </svg>
            </div>
            <h4 className="font-inter font-bold text-sm text-foreground mb-1">No More Switching</h4>
            <p className="font-inter text-xs text-muted-foreground">
              Stop app-switching. Work in one place—3x faster workflow.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-transparent border-2 border-[#fdc17d] rounded-lg p-3 w-full md:w-[220px] text-center overflow-hidden">
            {/* Orange triangle decoration */}
            <div 
              className="absolute top-0 left-0 w-10 h-10"
              style={{
                background: 'linear-gradient(135deg, #fdc17d 50%, transparent 50%)'
              }}
            />
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <circle cx="8" cy="10" r="2"></circle>
                <path d="M8 12v4"></path>
                <line x1="14" y1="9" x2="18" y2="9"></line>
                <line x1="14" y1="13" x2="18" y2="13"></line>
              </svg>
            </div>
            <h4 className="font-inter font-bold text-sm text-foreground mb-1">Unified Billing</h4>
            <p className="font-inter text-xs text-muted-foreground">
              One invoice, one payment—no tracking due dates or charges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-transparent border-2 border-[#fdc17d] rounded-lg p-3 w-full md:w-[220px] text-center overflow-hidden">
            {/* Orange triangle decoration */}
            <div 
              className="absolute top-0 left-0 w-10 h-10"
              style={{
                background: 'linear-gradient(135deg, #fdc17d 50%, transparent 50%)'
              }}
            />
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h4 className="font-inter font-bold text-sm text-foreground mb-1">Team Sync</h4>
            <p className="font-inter text-xs text-muted-foreground">
              Coming soon: auto-sync—full end-to-end automation.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center">
          <a 
            href="https://mulerun.com/signup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-foreground text-background px-6 md:px-10 py-3 md:py-4 rounded-lg font-jetbrains font-bold text-base md:text-lg uppercase flex items-center gap-3 hover:bg-foreground/90 transition-colors"
          >
            Sign Up Now
            <span className="tracking-tighter">&gt;&gt;</span>
          </a>
          {/* Tooltip bubble - hidden on mobile, positioned on desktop */}
          <div className="relative -mt-4 ml-0 md:ml-80 hidden md:block">
            <img src={tooltipBubble} alt="" className="w-[280px] h-auto" />
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-8 px-4">
              <p className="font-jetbrains text-base font-bold text-center text-foreground">Get 300 free credits now.</p>
              <p className="font-jetbrains text-base font-bold text-center text-foreground">No card required.</p>
            </div>
          </div>
          {/* Mobile tooltip text */}
          <p className="md:hidden font-inter text-sm text-foreground/70 mt-3 text-center">
            Get 300 free credits now. No card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;