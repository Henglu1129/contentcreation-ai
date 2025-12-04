import { useState } from "react";
import { ChevronsRight } from "lucide-react";
import featureImage1 from "@/assets/feature-image-1.png";

interface ToolItemProps {
  title: string;
  description: string;
  link: string;
  isExpanded: boolean;
  onHover: () => void;
}

const ToolItem = ({ title, description, link, isExpanded, onHover }: ToolItemProps) => {
  return (
    <div 
      className="border-t border-foreground/10 py-4"
      onMouseEnter={onHover}
    >
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Title */}
        <h3 className={`font-anton text-xl uppercase tracking-[0.1em] text-foreground transition-all ${isExpanded ? 'mb-3' : ''}`}>
          {title}
        </h3>
        
        {/* Expanded content */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[200px]' : 'max-h-0'}`}>
          <p className="font-inter text-sm text-foreground/70 mb-4">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded font-jetbrains font-bold text-xs uppercase tracking-wider">
            Free Trial
            <ChevronsRight className="w-4 h-4" />
          </span>
        </div>
      </a>
    </div>
  );
};

const InspirationSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // First tab expanded by default

  const tools = [
    {
      title: "Illustrate Mind Spark 2",
      description: "Turn ideas or quotes into illustrated social posts with text and art in one click.",
      link: "https://mulerun.com/@Rhino/illustrate-mind-spark-2"
    },
    {
      title: "Content Pilot AI",
      description: "Generate engaging content ideas and full posts powered by AI in seconds.",
      link: "https://mulerun.com/@cqplaquemh41i2k/content-pilot-ai"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1100px] mx-auto px-[60px]">
        {/* Main Title - Above everything */}
        <h2 className="font-anton text-[64px] leading-[110%] text-foreground mb-10">
          When inspiration strikes—<br />create instantly
        </h2>
        
        {/* Blue container with tabs and image */}
        <div className="bg-lavender/50 rounded-lg p-6 relative flex gap-8 items-start">
          {/* Decorative arrows */}
          <div className="absolute top-4 right-[320px] flex">
            <ChevronsRight className="w-6 h-6 text-cyan rotate-180" />
            <ChevronsRight className="w-6 h-6 text-cyan rotate-180 -ml-2" />
            <ChevronsRight className="w-6 h-6 text-cyan rotate-180 -ml-2" />
          </div>
          
          {/* Left: Tools list */}
          <div className="flex-1">
            {tools.map((tool, index) => (
              <ToolItem 
                key={index}
                title={tool.title}
                description={tool.description}
                link={tool.link}
                isExpanded={expandedIndex === index}
                onHover={() => setExpandedIndex(index)}
              />
            ))}
          </div>

          {/* Right: Image */}
          <div className="relative shrink-0">
            <div className="w-[320px] h-[260px] rounded-lg border-2 border-cyan/30 overflow-hidden bg-cyan/10">
              <img 
                src={featureImage1} 
                alt="AI Creative Tool"
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
      </div>
    </section>
  );
};

export default InspirationSection;
