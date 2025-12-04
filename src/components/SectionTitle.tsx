import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Elena Martinez",
    title: "Marketing Consultant",
    quote: 'I needed a LinkedIn post about client onboarding but had writer\'s block. Content Pilot AI gave me a concise, professional draft with a question hook and clear takeaways. I posted it as-is—got 3 DMs from potential clients that week.',
  },
  {
    name: "Noah Kim",
    title: "Personal Brand Coach",
    quote: 'I jotted down "confidence isn\'t loud" in my notes but didn\'t know how to share it. Illustrate Mind Spark 2 turned it into a minimalist illustrated post with soft typography. It became my most-shared piece on Instagram—followers called it "quietly powerful."',
  },
  {
    name: "Freya Nielsen",
    title: "Sustainability Blogger",
    quote: "I wanted to write about capsule wardrobes but kept overcomplicating it. Content Pilot AI generated a simple, actionable list with a warm tone. I used it for my newsletter—open rates were higher than average, and several readers said they tried the tips.",
  },
  {
    name: "Marcus Chen",
    title: "Tech Entrepreneur",
    quote: "Creating YouTube thumbnails used to take me hours. Now I generate professional ones in minutes. My click-through rate improved by 40% after switching to these AI tools.",
  },
  {
    name: "Sofia Rodriguez",
    title: "Content Creator",
    quote: "The subtitle translation feature is a game-changer. I can now reach audiences in 10+ languages without spending thousands on translation services.",
  },
];

const TestimonialCard = ({ name, title, quote }: { name: string; title: string; quote: string }) => (
  <div className="bg-background rounded-lg p-6 min-w-[320px] max-w-[320px] flex-shrink-0 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-muted" />
      <div>
        <p className="font-inter font-semibold text-sm text-foreground uppercase tracking-wide">{name}</p>
        <p className="font-inter text-xs text-muted-foreground uppercase tracking-wide">{title}</p>
      </div>
    </div>
    <p className="font-inter text-sm text-foreground leading-relaxed">{quote}</p>
  </div>
);

const SectionTitle = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-yellow-light py-16 px-[120px]">
      <div className="text-center mb-4">
        <h2 className="font-anton text-5xl leading-[120%] text-foreground">
          The Toolkit Top Creators Rely On
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <p className="font-inter text-base text-muted-foreground text-center leading-relaxed">
          Tens of thousands of creators worldwide use these tools for thumbnails, short-form editing, 
          cross-platform adaptation, and subtitle translation—simple to use, professional results.
        </p>
      </div>

      {/* Testimonials with dashed lines */}
      <div className="mt-12">
        {/* Top dashed line */}
        <div className="border-t-2 border-dashed border-foreground/20" />
        
        {/* Scrolling testimonials */}
        <div 
          ref={scrollRef}
          className="flex gap-6 py-8 overflow-hidden"
        >
          {/* Duplicate testimonials for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
        
        {/* Bottom dashed line */}
        <div className="border-t-2 border-dashed border-foreground/20" />
      </div>
    </section>
  );
};

export default SectionTitle;
