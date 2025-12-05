import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-cyan py-12 md:py-20 px-4 md:px-[120px] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="grid grid-cols-8 gap-4">
          {[...Array(32)].map((_, i) => (
            <div 
              key={i} 
              className="w-4 h-4 bg-foreground rounded-sm"
              style={{ 
                transform: `rotate(${Math.random() * 45}deg)`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center relative z-10">
        {/* Decorative Arrow */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-yellow-bright rotate-45" />
              ))}
            </div>
            <ArrowRight className="w-8 h-8 text-foreground" />
          </div>
        </div>

        <h2 className="font-anton text-4xl md:text-6xl leading-[110%] text-foreground mb-6">
          <span className="bg-yellow-bright px-2">Get a Mule Run</span>
          <br />
          <span className="bg-yellow-light px-2">Your Messes</span>
        </h2>

        <a 
          href="https://mulerun.com/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-card px-6 py-3 rounded font-jetbrains font-bold text-sm uppercase inline-flex items-center gap-2 mx-auto hover:bg-foreground/90 transition-colors"
        >
          Sign Up for Free
          <ArrowRight className="w-5 h-5" />
        </a>

        <p className="font-inter text-sm text-foreground/70 mt-4">
          Now, in Open Beta — experiment for free, no strings attached.
        </p>
      </div>
    </section>
  );
};

export default CTASection;