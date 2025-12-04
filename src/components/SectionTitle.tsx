const SectionTitle = () => {
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

      {/* Feature Grid */}
      <div className="grid grid-cols-3 gap-8 mt-12">
        {[
          { title: "Creative Tools", desc: "Access powerful AI tools for content creation" },
          { title: "Fast Generation", desc: "Generate content in seconds, not hours" },
          { title: "Multi-Platform", desc: "Create for every social platform at once" },
          { title: "Brand Consistent", desc: "Maintain your unique voice and style" },
          { title: "Analytics", desc: "Track performance and optimize content" },
          { title: "Collaboration", desc: "Work seamlessly with your team" },
        ].map((feature, i) => (
          <div key={i} className="text-center">
            <div className="w-12 h-12 bg-yellow-light rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-yellow-glow rounded" />
            </div>
            <h3 className="font-inter font-bold text-lg text-foreground mb-2">{feature.title}</h3>
            <p className="font-inter text-sm text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTitle;
