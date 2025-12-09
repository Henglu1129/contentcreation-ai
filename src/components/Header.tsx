import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import mulerunLogo from "@/assets/logo-icon.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-[120px] py-4 h-20 bg-background border-b border-border/20">
      <div className="flex items-center gap-4 md:gap-11">
        {/* Logo */}
        <a 
          href="https://mulerun.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-stone-dark rounded-sm py-1 pr-2 pl-0.5 h-10 hover:opacity-90 transition-opacity"
        >
          <div className="w-9 h-9 bg-card rounded-sm border border-border/10 flex items-center justify-center overflow-hidden">
            <img src={mulerunLogo} alt="MuleRun" className="w-7 h-7 object-contain" />
          </div>
          <span className="font-jakarta font-bold text-lg text-foreground">MuleRun</span>
        </a>

        {/* Nav Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          <a 
            href="https://mulerun.com/agent-store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
          >
            Agent Store
          </a>
          <a 
            href="https://mulerun.com/ambassadors" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
          >
            Ambassadors
          </a>
          <a 
            href="https://mulerun.com/docs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
          >
            DOCS
          </a>
          <a 
            href="https://mulerun.com/pricing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
          >
            PRICING
          </a>
        </nav>
      </div>

      {/* Right Buttons - Desktop */}
      <div className="hidden lg:flex items-center gap-4">
        <a 
          href="https://form.typeform.com/to/mkqp5k3B?utm_source=website" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
        >
          BE A CREATOR
        </a>
        <a 
          href="https://mulerun.com/signup" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded font-jetbrains font-bold text-sm uppercase tracking-tight hover:bg-primary/90 transition-colors"
        >
          Sign Up
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background border-b border-border z-50 lg:hidden">
          <nav className="flex flex-col p-4 gap-4">
            <a 
              href="https://mulerun.com/agent-store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Agent Store
            </a>
            <a 
              href="https://mulerun.com/ambassadors" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Ambassadors
            </a>
            <a 
              href="https://mulerun.com/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              DOCS
            </a>
            <a 
              href="https://mulerun.com/pricing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              PRICING
            </a>
            <a 
              href="https://form.typeform.com/to/mkqp5k3B?utm_source=website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              BE A CREATOR
            </a>
            <a 
              href="https://mulerun.com/signup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded font-jetbrains font-bold text-sm uppercase tracking-tight hover:bg-primary/90 transition-colors w-fit"
            >
              Sign Up
              <ArrowRight className="w-5 h-5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;