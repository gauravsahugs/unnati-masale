import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import unnatiLogo from '@/assets/unnati-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About Us', href: '#about' },
    { label: 'Recipes', href: '#recipes' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={unnatiLogo} 
              alt="Unnati Masale Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary font-merriweather">Unnati Masale</h1>
              <p className="text-xs text-muted-foreground">Premium Quality Spices</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Selector & Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <select className="bg-card border border-border rounded-md px-3 py-2 text-sm text-foreground">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="te">తెలుగు</option>
            </select>
            <Button variant="default" className="shadow-warm">
              Get Quote
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
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <select className="bg-card border border-border rounded-md px-3 py-2 text-sm text-foreground w-full mb-2">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="te">తెలుగు</option>
              </select>
              <Button variant="default" className="mt-2 shadow-warm">
                Get Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;