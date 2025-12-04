import { ChevronsRight } from "lucide-react";
import featureImage1 from "@/assets/feature-image-1.png";

const InspirationSection = () => {
  return (
    <section className="py-16 bg-background">
      {/* Section 1 - When inspiration strikes */}
      <div className="px-[60px] py-12">
        <h2 className="font-inter font-bold text-5xl leading-[120%] text-foreground mb-10 max-w-[700px]">
          When inspiration strikes—<br />create instantly
        </h2>
        
        <div className="flex gap-[80px] items-start justify-center">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Card with lavender background */}
            <div className="bg-lavender/50 rounded-lg p-6 max-w-[500px] relative">
              {/* Decorative arrows */}
              <div className="absolute -top-4 right-8 flex gap-1">
                <ChevronsRight className="w-8 h-8 text-cyan rotate-180" />
                <ChevronsRight className="w-8 h-8 text-cyan rotate-180" />
                <ChevronsRight className="w-8 h-8 text-cyan rotate-180" />
              </div>
              
              <h3 className="font-jetbrains font-bold text-lg uppercase tracking-[0.2em] text-foreground mb-3">
                Illustrate Mind Spark 2
              </h3>
              <p className="font-inter text-base text-foreground/80 mb-5">
                Turn ideas or quotes into illustrated social posts with text and art in one click.
              </p>
              <a 
                href="https://mulerun.com/@Rhino/illustrate-mind-spark-2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded font-jetbrains font-bold text-sm uppercase tracking-wider"
              >
                Free Trial
                <ChevronsRight className="w-5 h-5" />
              </a>
              
              <div className="mt-6 pt-4 border-t border-foreground/10">
                <a 
                  href="https://mulerun.com/@cqplaquemh41i2k/content-pilot-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jetbrains font-bold text-sm uppercase tracking-[0.15em] text-foreground hover:text-foreground/70 transition-colors"
                >
                  Content Pilot AI
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative shrink-0">
            <div className="w-[420px] h-[340px] rounded-lg border-2 border-cyan/30 overflow-hidden bg-cyan/10">
              <img 
                src={featureImage1} 
                alt="AI Creative Tool"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom decorative pixels */}
            <div className="absolute -bottom-6 -right-6 flex gap-[2px]">
              {[...Array(4)].map((_, row) => (
                <div key={row} className="flex flex-col gap-[2px]">
                  {[...Array(4)].map((_, col) => (
                    <div 
                      key={col} 
                      className={`w-3 h-3 ${(row + col) % 2 === 0 ? 'bg-yellow-bright' : 'bg-yellow-soft'}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
