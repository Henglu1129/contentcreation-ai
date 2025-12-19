import { useState } from "react";
import { ChevronsRight } from "lucide-react";
import illustrateCase from "@/assets/illustrate-case.webp";
import contentPilotCase from "@/assets/content-pilot-case.webp";
import showcase1 from "@/assets/showcase-1.webp";
import podcastCover from "@/assets/podcast-cover.webp";
import subtitleTranslate from "@/assets/subtitle-translate.jpg";
import youtubeTitleGenerator from "@/assets/youtube-title-generator.webp";
import youtubeThumbnail from "@/assets/youtube-thumbnail.webp";
import youtubeSocialContent from "@/assets/youtube-social-content.webp";

interface Tool {
  title: string;
  description: string;
  link: string;
  image: string;
  imagePosition?: string;
}

const sectionTitles = [
  "When inspiration strikes—<br />create instantly",
  "You're the creator—<br />and the crew",
  "Great content deserves<br />great attention",
  "One piece.<br />Every platform."
];

const InspirationBlock = ({ blockIndex }: { blockIndex: number }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const isReversed = blockIndex === 1 || blockIndex === 3;

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
      image: subtitleTranslate,
      imagePosition: "object-top"
    }
  ];

  const section3Tools: Tool[] = [
    {
      title: "YouTube Title Generator with Emojis",
      description: "Generate 5 viral, emoji-rich YouTube titles with SEO hooks in seconds.",
      link: "https://mulerun.com/@kpviqlcmhm864vu/youtube-title-generator-with-emojis",
      image: youtubeTitleGenerator
    },
    {
      title: "YouTube Awesome Thumbnail",
      description: "Generate bold, face-focused YouTube thumbnails with integrated titles for high CTR.",
      link: "https://mulerun.com/@summerail/youtube-awesome-thumbnail",
      image: youtubeThumbnail
    }
  ];
  const section4Tools: Tool[] = [
    {
      title: "YouTube Video to Social Content",
      description: "Turn YouTube videos into ready-to-post social content for X, LinkedIn, and Instagram.",
      link: "https://mulerun.com/@YuTou_baby/youtube-video-to-social-content",
      image: youtubeSocialContent
    }
  ];

  const tools = blockIndex === 1 ? section2Tools : blockIndex === 2 ? section3Tools : blockIndex === 3 ? section4Tools : defaultTools;

  return (
    <div className="mb-12 md:mb-20 last:mb-0">
      {/* Main Title */}
      <h2 
        className={`font-anton text-2xl md:text-4xl lg:text-[64px] leading-[110%] text-foreground mb-4 md:mb-10 text-center lg:text-left ${isReversed ? 'lg:text-right' : ''}`}
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
                className={`bg-lavender/50 rounded-lg p-4 md:p-6 relative flex flex-col lg:flex-row gap-6 lg:gap-8 items-start ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                onMouseEnter={() => setExpandedIndex(index)}
              >
                {/* Decorative arrows - hidden on mobile */}
                <div className={`absolute top-4 hidden lg:flex ${isReversed ? 'left-[420px]' : 'right-[420px]'}`}>
                  <ChevronsRight className={`w-6 h-6 text-cyan ${isReversed ? '' : 'rotate-180'}`} />
                  <ChevronsRight className={`w-6 h-6 text-cyan -ml-2 ${isReversed ? '' : 'rotate-180'}`} />
                  <ChevronsRight className={`w-6 h-6 text-cyan -ml-2 ${isReversed ? '' : 'rotate-180'}`} />
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${isReversed ? 'lg:text-right' : ''}`}>
                  <a 
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="font-jetbrains font-black text-lg md:text-xl uppercase tracking-wide text-foreground mb-3">
                      {tool.title}
                    </h3>
                    <p className="font-inter text-sm text-foreground/70 mb-4">
                      {tool.description}
                    </p>
                    <span className={`inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded font-jetbrains font-bold text-xs uppercase tracking-wider ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                      {isReversed ? <ChevronsRight className="w-4 h-4 rotate-180 hidden lg:block" /> : null}
                      Free Trial
                      {!isReversed ? <ChevronsRight className="w-4 h-4" /> : <ChevronsRight className="w-4 h-4 lg:hidden" />}
                    </span>
                  </a>
                </div>

                {/* Right: Image */}
                <div className="relative shrink-0 w-full lg:w-auto">
                  <div className="w-full lg:w-[400px] aspect-[16/9] rounded-lg border-2 border-cyan/30 overflow-hidden bg-cyan/10">
                    <img 
                      src={tool.image} 
                      alt={tool.title}
                      className={`w-full h-full object-cover ${tool.imagePosition || 'object-center'}`}
                    />
                  </div>
                  {/* Bottom decorative pixels - hidden on mobile */}
                  <div className={`absolute -bottom-4 hidden lg:flex gap-[2px] ${isReversed ? '-left-4' : '-right-4'}`}>
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
                className={`group py-4 px-4 border-t border-foreground/10 cursor-pointer text-center lg:text-left transition-all duration-300 hover:bg-lavender/40 hover:border-lavender rounded-lg ${isReversed ? 'lg:text-right lg:ml-auto lg:w-fit' : ''}`}
                onMouseEnter={() => setExpandedIndex(index)}
                onClick={() => setExpandedIndex(index)}
              >
                <div className={`flex items-center gap-3 justify-center lg:justify-start ${isReversed ? 'lg:justify-end lg:flex-row-reverse' : ''}`}>
                  <ChevronsRight className={`w-5 h-5 text-foreground/40 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 ${isReversed ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  <h3 className="font-jetbrains font-bold text-base md:text-lg uppercase tracking-wide text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                    {tool.title}
                  </h3>
                </div>
              </div>
            );
          }
        })}
      </div>
      
      {/* Need More Button - only show for last block */}
      {blockIndex === 3 && (
        <div className="flex justify-center mt-10 md:mt-20">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSepPJzLzbaR9o3CAVr2klu8RSsXOh6omxBz_M1Zu6hZsz77aA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 md:gap-3 bg-foreground text-background px-6 md:px-10 py-4 md:py-5 rounded-lg font-jetbrains font-bold text-base md:text-xl uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_2.5s_ease-in-out_infinite]" />
            
            <span className="relative z-10">Need More?</span>
            <span className="relative z-10 flex items-center">
              <ChevronsRight className="w-5 h-5 md:w-6 md:h-6 animate-[bounce-x_1s_ease-in-out_infinite]" />
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

const InspirationSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-[1300px] mx-auto px-4 md:px-[60px]">
        {[0, 1, 2, 3].map((index) => (
          <InspirationBlock key={index} blockIndex={index} />
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;