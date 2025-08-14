import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import unnatiLogo from '@/assets/unnati-logo.png';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.recipes'), href: '#recipes' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="relative bg-gradient-to-r from-background/95 via-card/90 to-background/95 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-pulse"></div>
      
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={unnatiLogo} 
              alt="Unnati Masale Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-merriweather animate-pulse">
                Unnati Masale
              </h1>
              <p className="text-xs text-foreground/70 font-medium">{t('header.tagline')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Selector & Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-primary to-accent text-white hover:from-accent hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              {t('header.getQuote')}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4 bg-gradient-to-b from-background/50 to-card/50 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-md hover:bg-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mb-4">
                <LanguageSelector />
              </div>
              <Button 
                variant="default" 
                className="mt-2 w-full bg-gradient-to-r from-primary to-accent text-white hover:from-accent hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t('header.getQuote')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;