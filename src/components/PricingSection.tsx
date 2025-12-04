import { Check, ArrowRight, Twitter, Facebook, Youtube, Instagram, Send, Mail, Pause } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="bg-yellow-light py-16 px-[120px]">
      <div className="text-center mb-12">
        <h2 className="font-anton text-4xl text-foreground mb-2">
          Mulerun's all-in-one edge
        </h2>
        <p className="font-inter text-sm text-muted-foreground">
          Offering seamless YouTube content repurposing, AI shorts generation, script writing, and more in one platform.
        </p>
      </div>

      {/* Platform Icons */}
      <div className="flex justify-center gap-4 mb-12">
        <div className="w-10 h-10 bg-foreground/10 rounded flex items-center justify-center">
          <Twitter className="w-5 h-5 text-foreground" />
        </div>
        <div className="w-10 h-10 bg-foreground/10 rounded flex items-center justify-center">
          <Facebook className="w-5 h-5 text-foreground" />
        </div>
        <div className="w-10 h-10 bg-foreground/10 rounded flex items-center justify-center">
          <Youtube className="w-5 h-5 text-foreground" />
        </div>
        <div className="w-10 h-10 bg-foreground/10 rounded flex items-center justify-center">
          <Instagram className="w-5 h-5 text-foreground" />
        </div>
        <div className="w-10 h-10 bg-foreground/10 rounded flex items-center justify-center">
          <Send className="w-5 h-5 text-foreground" />
        </div>
        <div className="w-10 h-10 bg-foreground/10 rounded flex items-center justify-center">
          <Mail className="w-5 h-5 text-foreground" />
        </div>
        <div className="w-10 h-10 bg-foreground/10 rounded flex items-center justify-center">
          <Pause className="w-5 h-5 text-foreground" />
        </div>
      </div>

      {/* Pricing Label */}
      <div className="text-center mb-8">
        <span className="font-inter text-sm text-muted-foreground">
          Multiple pro platforms = <span className="text-cyan">Mulerun has them all.</span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="flex gap-6 justify-center mb-12">
        <div className="bg-background border border-foreground/20 rounded-lg p-6 w-[280px]">
          <span className="font-jetbrains text-xs uppercase text-muted-foreground block mb-2">
            Buy 3 separate accounts:
          </span>
          <div className="font-inter font-bold text-2xl text-foreground">
            $65-85/month
          </div>
        </div>
        
        <div className="bg-cyan rounded-lg p-6 w-[280px] relative">
          <span className="font-jetbrains text-xs uppercase text-foreground/70 block mb-2">
            Get everything with Mulerun:
          </span>
          <div className="font-inter font-bold text-lg text-foreground">
            starting at 
            <span className="text-2xl ml-1">$x.xx/mo</span>
          </div>
        </div>
        
        <div className="bg-background border border-foreground/20 rounded-lg p-6 w-[280px]">
          <span className="font-jetbrains text-xs uppercase text-muted-foreground block mb-2">
            Annual savings:
          </span>
          <div className="font-inter font-bold text-2xl text-yellow-bright">
            $17,264/year
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex justify-center gap-16 mb-12">
        <div className="text-center">
          <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="font-inter font-bold text-lg text-foreground mb-2">hit</h3>
          <p className="font-inter text-xs text-muted-foreground max-w-[200px]">
            Over countless AI features—video scripts, captions, thumbnails, shorts.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="font-inter font-bold text-lg text-foreground mb-2">Quality</h3>
          <p className="font-inter text-xs text-muted-foreground max-w-[200px]">
            No more juggling multiple tools. Everything in one place, one login, one workflow.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">💎</span>
          </div>
          <h3 className="font-inter font-bold text-lg text-foreground mb-2">$?</h3>
          <p className="font-inter text-xs text-muted-foreground max-w-[200px]">
            Predictable and scalable pricing for every stage of growth.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-foreground text-background px-6 py-3 rounded font-jetbrains font-bold text-sm uppercase flex items-center gap-2 mx-auto hover:bg-foreground/90 transition-colors">
          Check out Plan
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default PricingSection;
