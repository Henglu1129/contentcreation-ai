import { ChevronsRight } from "lucide-react";
import featureImage1 from "@/assets/feature-image-1.png";

interface ToolItemProps {
  title: string;
  description: string;
  link: string;
}

const ToolItem = ({ title, description, link }: ToolItemProps) => {
  return (
    <div className="group border-t border-foreground/10 py-4">
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Collapsed state - just title */}
        <h3 className="font-jetbrains font-bold text-base uppercase tracking-[0.15em] text-foreground group-hover:mb-3 transition-all">
          {title}
        </h3>
        
        {/* Expanded state on hover */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-300">
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
        
        {/* Content row: Tabs on left, Image on right */}
        <div className="flex gap-[60px] items-start">
          {/* Left: Tools list */}
          <div className="flex-1 max-w-[500px]">
            <div className="bg-lavender/40 rounded-lg p-6 relative">
              {/* Decorative arrows */}
              <div className="absolute -top-2 right-8 flex">
                <ChevronsRight className="w-6 h-6 text-cyan rotate-180" />
                <ChevronsRight className="w-6 h-6 text-cyan rotate-180 -ml-2" />
                <ChevronsRight className="w-6 h-6 text-cyan rotate-180 -ml-2" />
              </div>
              
              {tools.map((tool, index) => (
                <ToolItem 
                  key={index}
                  title={tool.title}
                  description={tool.description}
                  link={tool.link}
                />
              ))}
            </div>
          </div>

          {/* Right: Image */}
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
