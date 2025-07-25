import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import unnatiLogo from '@/assets/unnati-logo.png';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About Us', href: '#about' },
    { label: 'Recipes', href: '#recipes' },
    { label: 'Contact', href: '#contact' }
  ];

  const productCategories = [
    'Ground Spices',
    'Blended Spices',
    'Whole Spices',
    'Specialty Masalas',
    'Organic Range'
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Stay Updated with Unnati Masale
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Get the latest recipes, cooking tips, and special offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-primary-foreground text-foreground"
              />
              <Button 
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={unnatiLogo} 
                alt="Unnati Masale Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-card-foreground font-merriweather">
                  Unnati Masale
                </h3>
                <p className="text-xs text-muted-foreground">Premium Quality Spices</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Delivering authentic Indian spices from farm to kitchen. 
              Experience the true taste of tradition with every pinch.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="#products"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">
                  Plot No. 56, New Industrial Area<br />
                  Kushmoda, Guna, MP – 473001
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Phone: +91-8224-929592</p>
              </div>
              <div>
                <p className="text-muted-foreground">Email: unnatimasaleguna@gmail.com</p>
              </div>
              <div>
                <p className="text-muted-foreground">Website: www.unnatimasale.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © 2025 Unnati Masale. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Quality Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;