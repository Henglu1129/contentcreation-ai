import FeatureCard from "./FeatureCard";

const FeaturesGrid = () => {
  const sections = [
    {
      title: "Out of content ideas?",
      description: "How can I turn a vague thought into a full post — in seconds?",
      cards: [
        { title: "Turn Idea to Visual", description: "No design skills? No problem. Stunning results in seconds.", hasButton: true, link: "https://mulerun.com/@Rhino/illustrate-mind-spark-2", imageIndex: 0 },
        { title: "Write Copy", description: "Beat blank-page anxiety with on-brand, ready-to-use drafts.", hasButton: true, link: "https://mulerun.com/@cqplaquemh41i2k/content-pilot-ai", imageIndex: 1 },
      ],
      layout: "right",
    },
    {
      title: "Creating content takes forever?",
      description: "How can I auto-generate videos, podcasts, and subtitles — without filming or editing?",
      cards: [
        { title: "Make Shorts", description: "Auto-cut highlights that grab attention—perfect for social.", hasButton: true, link: "https://mulerun.com/@GrahamRabbb0e02/auto-short-video-creator", imageIndex: 2 },
        { title: "Generate Podcast", description: "Natural voice, ready to publish in seconds.", hasButton: true, link: "https://mulerun.com/@AngryBerry/podcast-generator", imageIndex: 3 },
        { title: "Translate Subtitles", description: "Accurate sync in 50+ languages—no editing needed.", hasButton: true, link: "https://mulerun.com/@Skynetbbb0bb3/subtitle-translate-ai-pro", imageIndex: 4 },
      ],
      layout: "left",
    },
    {
      title: "Great content, but no clicks?",
      description: "How can I get scroll-stopping titles and thumbnails — that actually convert?",
      cards: [
        { title: "Generate Title", description: "Scroll-stopping hooks tailored to your audience's interests.", hasButton: true, link: "https://mulerun.com/@yuzhou/youtube-title-generator-with-emojis", imageIndex: 5 },
        { title: "Create Thumbnail", description: "High-CTR visuals, optimized and done in one click.", hasButton: true, link: "https://mulerun.com/@summerail/youtube-awesome-thumbnail", imageIndex: 6 },
      ],
      layout: "right",
    },
    {
      title: "Posting to just one platform?",
      description: "How can I repurpose one video into posts for all social platforms — instantly?",
      cards: [
        { title: "Repurpose Content", description: "One piece, everywhere—zero rework.", hasButton: true, link: "https://mulerun.com/@YuTou_baby/youtube-video-to-social-content", imageIndex: 7 },
      ],
      layout: "left",
    },
  ];

  return (
    <section className="bg-yellow-light border-t border-b border-yellow-glow">
      {/* Top Decorative pixels */}
      <div className="relative h-[72px] hidden md:flex justify-start pl-[60px] pt-4">
        <div className="flex gap-[3px]">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-[45px] h-[72px] relative">
              {[...Array(8)].map((_, j) => (
                <div 
                  key={j} 
                  className="absolute w-[9px] h-[9px] bg-yellow-soft"
                  style={{
                    left: `${(j % 2) * 9 + Math.floor(j / 2) * 9}px`,
                    top: `${j * 9}px`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="pt-10 md:pt-14 pb-10 md:pb-14 px-4 md:px-[60px]">
          <div className={`flex flex-col lg:flex-row gap-8 lg:gap-[80px] items-center justify-center ${section.layout === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            {/* Text Content */}
            <div className={`flex flex-col gap-4 max-w-[400px] text-center lg:text-left ${section.layout === 'left' ? 'lg:text-right' : ''}`}>
              <h2 className="font-inter font-bold text-2xl md:text-[32px] leading-[120%] text-foreground">
                {section.title}
              </h2>
              <p className="font-inter font-medium text-base leading-normal text-muted-foreground">
                {section.description}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                {section.cards.slice(0, 2).map((card, cardIndex) => (
                  <FeatureCard 
                    key={cardIndex} 
                    title={card.title}
                    description={card.description}
                    hasButton={card.hasButton}
                    link={card.link}
                    imageIndex={card.imageIndex}
                  />
                ))}
              </div>
              {section.cards.length > 2 && (
                <div className="flex flex-col md:flex-row gap-4">
                  {section.cards.slice(2, 4).map((card, cardIndex) => (
                    <FeatureCard 
                      key={cardIndex + 2} 
                      title={card.title}
                      description={card.description}
                      hasButton={card.hasButton}
                      link={card.link}
                      imageIndex={card.imageIndex}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Decorative pixels */}
      <DecorativePixels />
    </section>
  );
};

const DecorativePixels = () => (
  <div className="relative h-[72px] hidden md:flex justify-start pl-[120px]">
    <div className="flex gap-[3px] rotate-180">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-[45px] h-[72px] relative">
          {[...Array(8)].map((_, j) => (
            <div 
              key={j} 
              className="absolute w-[9px] h-[9px] bg-yellow-soft"
              style={{
                left: `${(j % 2) * 9 + Math.floor(j / 2) * 9}px`,
                top: `${j * 9}px`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default FeaturesGrid;