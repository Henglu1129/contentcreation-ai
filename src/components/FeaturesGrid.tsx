import FeatureCard from "./FeatureCard";

const FeaturesGrid = () => {
  const sections = [
    {
      title: "Out of content ideas?",
      description: "How can I turn a vague thought into a full post — in seconds?",
      cards: [
        { title: "Turn Idea to Visual", hasButton: true, link: "https://mulerun.com/@Rhino/illustrate-mind-spark-2" },
        { title: "Write Copy", hasButton: true, link: "https://mulerun.com/@cqplaquemh41i2k/content-pilot-ai" },
      ],
      layout: "right",
    },
    {
      title: "Creating content takes forever?",
      description: "How can I auto-generate videos, podcasts, and subtitles — without filming or editing?",
      cards: [
        { title: "Make Shorts", hasButton: true, link: undefined },
        { title: "Generate Podcast", hasButton: true, link: undefined },
        { title: "Translate Subtitles", hasButton: true, link: undefined },
      ],
      layout: "left",
    },
    {
      title: "Great content, but no clicks?",
      description: "How can I get scroll-stopping titles and thumbnails — that actually convert?",
      cards: [
        { title: "Generate Title", hasButton: false, link: undefined },
        { title: "Create Thumbnail", hasButton: false, link: undefined },
      ],
      layout: "right",
    },
    {
      title: "Posting to just one platform?",
      description: "How can I repurpose one video into posts for all social platforms — instantly?",
      cards: [
        { title: "Repurpose Content", hasButton: false, link: undefined },
        { title: "Auto Post", hasButton: false, link: undefined },
      ],
      layout: "left",
    },
  ];

  return (
    <section className="bg-yellow-light border-t border-b border-yellow-glow">
      {/* Top Decorative pixels */}
      <div className="relative h-[72px] flex justify-start pl-[60px] pt-4">
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
        <div key={sectionIndex} className="pt-14 pb-14 px-[60px]">
          <div className={`flex gap-[80px] items-center justify-center ${section.layout === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Text Content */}
            <div className="flex flex-col gap-4 max-w-[400px]">
              <h2 className="font-inter font-bold text-[32px] leading-[120%] text-foreground">
                {section.title}
              </h2>
              <p className="font-inter font-medium text-base leading-normal text-muted-foreground">
                {section.description}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                {section.cards.slice(0, 2).map((card, cardIndex) => (
                  <FeatureCard 
                    key={cardIndex} 
                    title={card.title} 
                    hasButton={card.hasButton}
                    link={card.link}
                    imageIndex={sectionIndex * 2 + cardIndex}
                  />
                ))}
              </div>
              {section.cards.length > 2 && (
                <div className="flex gap-4">
                  {section.cards.slice(2, 4).map((card, cardIndex) => (
                    <FeatureCard 
                      key={cardIndex + 2} 
                      title={card.title}
                      imageIndex={sectionIndex * 2 + cardIndex + 2}
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
  <div className="relative h-[72px] flex justify-start pl-[120px]">
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
