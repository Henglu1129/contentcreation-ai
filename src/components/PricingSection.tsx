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
  // Negative index = left side (needs positive translateX to move right)
  // Positive index = right side (needs negative translateX to move left)
  const getTranslateX = (index: number) => {
    const logoSize = 85;
    const gap = 16;
    const totalWidth = logoSize + gap;
    const centerIndex = 3.5;
    const distanceFromCenter = index - centerIndex;
    return -distanceFromCenter * totalWidth; // Negated to move toward center
  };

  return (
    <section className="bg-yellow-light py-16 px-6">
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

      <div className="bg-[#FDFBF5] rounded-2xl p-12 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-anton text-5xl md:text-6xl text-foreground mb-4">
            Mulerun's all-in-one edge
          </h2>
          <p className="font-inter text-sm text-muted-foreground">
            <span className="highlight-yellow px-2 py-1">Multiple pro tools, a fraction of the price.</span>
          </p>
        </div>

        {/* Platform Icons with Animation */}
        <div className="relative flex justify-center items-center gap-3 md:gap-4 mb-16 h-[85px]">
          {/* Individual logos */}
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`w-16 h-16 md:w-[85px] md:h-[85px] rounded-full border border-foreground/10 flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0 logo-animate-${index}`}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Mule logo (appears when merged) */}
          <div className="absolute left-1/2 top-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border border-foreground/10 flex items-center justify-center shadow-lg overflow-hidden bg-[#FDFBF5] mule-animate">
            <img 
              src={logoMule} 
              alt="Mulerun" 
              className="w-full h-full object-contain p-1"
            />
          </div>
        </div>

        {/* Pricing Label */}
        <div className="text-center mb-10">
          <h3 className="font-inter font-bold text-xl md:text-2xl leading-[120%] text-foreground">
            Multiple pro platforms — Mulerun handles it all.
          </h3>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <div className="bg-background border-t-4 border-t-lavender border border-foreground/10 rounded-lg p-6 py-[60px] w-full md:w-[300px]">
            <span className="font-inter font-bold text-sm text-foreground block mb-4">
              Buy 4 pro platforms separately
            </span>
            <div className="font-inter font-bold text-2xl text-stone-dark/50">
              ¥1,596/month
            </div>
          </div>
          
          <div className="bg-yellow-light border-t-4 border-t-yellow-bright border border-foreground/10 rounded-lg p-6 py-[60px] w-full md:w-[300px] relative">
            <span className="font-inter font-bold text-sm text-foreground block mb-4">
              Get the same with Mulerun
            </span>
            <div className="inline-block bg-yellow-bright/50 px-3 py-1 rounded">
              <span className="font-inter font-bold text-lg text-stone-dark">¥159/month</span>
              <span className="font-inter font-bold text-sm text-stone-dark ml-2">— Save 90%</span>
            </div>
          </div>
          
          <div className="bg-yellow-light border-t-4 border-t-yellow-bright border border-foreground/10 rounded-lg p-6 py-[60px] w-full md:w-[300px]">
            <span className="font-inter font-bold text-sm text-foreground block mb-4">
              Annual savings
            </span>
            <div className="font-inter font-bold text-2xl text-yellow-bright">
              ¥17,244/year
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