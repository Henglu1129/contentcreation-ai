import { useState } from "react";
import { ChevronsRight } from "lucide-react";
import illustrateCase from "@/assets/illustrate-case.webp";
import contentPilotCase from "@/assets/content-pilot-case.webp";

interface Tool {
  title: string;
  description: string;
  link: string;
  image: string;
}

const InspirationSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const tools: Tool[] = [
    {
      title: "Illustrate Mind Spark 2",
      description: "Turn ideas or quotes into illustrated social posts with text and art in one click.",
      link: "https://mulerun.com/@Rhino/illustrate-mind-spark-2",
      image: illustrateCase
    },
    {
      title: "Content Pilot AI",
      description: "Create platform-optimized social posts with hooks, CTAs, and hashtags in your brand voice.",
      link: "https://mulerun.com/@cqplaquemh41i2k/content-pilot-ai",
      image: contentPilotCase
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1300px] mx-auto px-[60px]">
        {/* Main Title */}
        <h2 className="font-anton text-[64px] leading-[110%] text-foreground mb-10">
          When inspiration strikes—<br />create instantly
        </h2>
        
        {/* Tabs */}
        <div className="space-y-0">
          {tools.map((tool, index) => {
            const isExpanded = expandedIndex === index;
            
            if (isExpanded) {
              // Expanded tab with blue background and image
              return (
                <div 
                  key={index}
                  className="bg-lavender/50 rounded-lg p-6 relative flex gap-8 items-start"
                  onMouseEnter={() => setExpandedIndex(index)}
                >
                  {/* Decorative arrows */}
                  <div className="absolute top-4 right-[420px] flex">
                    <ChevronsRight className="w-6 h-6 text-cyan rotate-180" />
                    <ChevronsRight className="w-6 h-6 text-cyan rotate-180 -ml-2" />
                    <ChevronsRight className="w-6 h-6 text-cyan rotate-180 -ml-2" />
                  </div>
                  
                  {/* Left: Content */}
                  <div className="flex-1">
                    <a 
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="font-jetbrains font-bold text-lg uppercase tracking-wide text-foreground mb-3">
                        {tool.title}
                      </h3>
                      <p className="font-inter text-sm text-foreground/70 mb-4">
                        {tool.description}
                      </p>
                      <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded font-jetbrains font-bold text-xs uppercase tracking-wider">
                        Free Trial
                        <ChevronsRight className="w-4 h-4" />
                      </span>
                    </a>
                  </div>

                  {/* Right: Image */}
                  <div className="relative shrink-0">
                    <div className="w-[400px] aspect-video rounded-lg border-2 border-cyan/30 overflow-hidden bg-cyan/10">
                      <img 
                        src={tool.image} 
                        alt={tool.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Bottom decorative pixels */}
                    <div className="absolute -bottom-4 -right-4 flex gap-[2px]">
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
              );
            } else {
              // Collapsed tab - just title
              return (
                <div 
                  key={index}
                  className="py-4 border-t border-foreground/10 cursor-pointer"
                  onMouseEnter={() => setExpandedIndex(index)}
                >
                  <h3 className="font-jetbrains font-bold text-lg uppercase tracking-wide text-foreground">
                    {tool.title}
                  </h3>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
