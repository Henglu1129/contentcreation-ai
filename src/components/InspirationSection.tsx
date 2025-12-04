import { useState } from "react";
import { ChevronsRight } from "lucide-react";
import illustrateCase from "@/assets/illustrate-case.webp";
import contentPilotCase from "@/assets/content-pilot-case.webp";
import showcase1 from "@/assets/showcase-1.webp";
import podcastCover from "@/assets/podcast-cover.webp";
import subtitleTranslate from "@/assets/subtitle-translate.jpg";

interface Tool {
  title: string;
  description: string;
  link: string;
  image: string;
}

const sectionTitles = [
  "When inspiration strikes—<br />create instantly",
  "You're the creator—<br />and the crew",
  "When inspiration strikes—<br />create instantly",
  "When inspiration strikes—<br />create instantly"
];

const InspirationBlock = ({ blockIndex }: { blockIndex: number }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const isReversed = blockIndex === 1; // 第二个section图片在左边

  const defaultTools: Tool[] = [
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

  const section2Tools: Tool[] = [
    {
      title: "Auto Short Video Creator",
      description: "Turn captions into 140-second cinematic shorts with script, voiceover, and visuals.",
      link: "https://mulerun.com/@GrahamRabbb0e02/auto-short-video-creator",
      image: showcase1
    },
    {
      title: "Podcast Generator",
      description: "Convert text into multi-speaker podcast audio in 10 languages—no mic needed.",
      link: "https://mulerun.com/@AngryBerry/podcast-generator",
      image: podcastCover
    },
    {
      title: "Subtitle Translate AI Pro",
      description: "Translate subtitles naturally while preserving tone, timing, and meaning across languages.",
      link: "https://mulerun.com/@Skynetbbb0bb3/subtitle-translate-ai-pro",
      image: subtitleTranslate
    }
  ];

  const tools = blockIndex === 1 ? section2Tools : defaultTools;

  return (
    <div className="mb-20 last:mb-0">
      {/* Main Title */}
      <h2 
        className={`font-anton text-[64px] leading-[110%] text-foreground mb-10 ${isReversed ? 'text-right' : ''}`}
        dangerouslySetInnerHTML={{ __html: sectionTitles[blockIndex] }}
      />
      
      {/* Tabs */}
      <div className="space-y-0">
        {tools.map((tool, index) => {
          const isExpanded = expandedIndex === index;
          
          if (isExpanded) {
            return (
              <div 
                key={index}
                className={`bg-lavender/50 rounded-lg p-6 relative flex gap-8 items-start ${isReversed ? 'flex-row-reverse' : ''}`}
                onMouseEnter={() => setExpandedIndex(index)}
              >
                {/* Decorative arrows */}
                <div className={`absolute top-4 flex ${isReversed ? 'left-[420px]' : 'right-[420px]'}`}>
                  <ChevronsRight className={`w-6 h-6 text-cyan ${isReversed ? '' : 'rotate-180'}`} />
                  <ChevronsRight className={`w-6 h-6 text-cyan -ml-2 ${isReversed ? '' : 'rotate-180'}`} />
                  <ChevronsRight className={`w-6 h-6 text-cyan -ml-2 ${isReversed ? '' : 'rotate-180'}`} />
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${isReversed ? 'text-right' : ''}`}>
                  <a 
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="font-jetbrains font-black text-xl uppercase tracking-wide text-foreground mb-3">
                      {tool.title}
                    </h3>
                    <p className="font-inter text-sm text-foreground/70 mb-4">
                      {tool.description}
                    </p>
                    <span className={`inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded font-jetbrains font-bold text-xs uppercase tracking-wider ${isReversed ? 'flex-row-reverse' : ''}`}>
                      {isReversed ? <ChevronsRight className="w-4 h-4 rotate-180" /> : null}
                      Free Trial
                      {!isReversed ? <ChevronsRight className="w-4 h-4" /> : null}
                    </span>
                  </a>
                </div>

                {/* Right: Image */}
                <div className="relative shrink-0">
                  <div className="w-[400px] aspect-video rounded-lg border-2 border-cyan/30 overflow-hidden bg-cyan/10">
                    <img 
                      src={tool.image} 
                      alt={tool.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  {/* Bottom decorative pixels */}
                  <div className={`absolute -bottom-4 flex gap-[2px] ${isReversed ? '-left-4' : '-right-4'}`}>
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
  );
};

const InspirationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1300px] mx-auto px-[60px]">
        {[0, 1, 2, 3].map((index) => (
          <InspirationBlock key={index} blockIndex={index} />
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;
