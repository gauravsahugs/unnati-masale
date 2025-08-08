import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import unnatiLogo from '@/assets/unnati-logo.png';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.recipes'), href: '#recipes' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  const productCategories = [
    'Red Chilli Powder',
    'Turmeric Powder',
    'Coriander Powder',
    'Garam Masala',
    'Achar Masala'
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section - Blended with Footer */}
      <div className="bg-card/95 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              {t('newsletter.title')}
            </h3>
            <p className="text-card-foreground/80 mb-6 text-lg">
              {t('newsletter.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder={t('newsletter.placeholder')}
                className="bg-background text-foreground border-input focus:border-ring focus:ring-2 focus:ring-ring"
              />
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-elegant"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t('newsletter.subscribe')}
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
                  Unnati Enterprises
                </h3>
                <p className="text-xs text-muted-foreground">Premium Quality Spices</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Delivering authentic Indian spices from farm to kitchen. 
              Committed to purity, quality, and traditional flavors.
            </p>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">
                <strong>Address:</strong> Plot No. 56, New Industrial Area, Kushmoda, Guna, Madhya Pradesh - 473001
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Contact:</strong> +91-8224-929592
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Email:</strong> unnatimasaleguna@gmail.com
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Website:</strong> unnatimasale.com
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/unnati_masale?igsh=ZGtlYjI4N2NrbWdo&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/unnati-masale" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
              <a href="https://www.facebook.com/share/14GmBTPK9P4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
              <a href="https://x.com/unnatimasale?s=21" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">{t('footer.quickLinks', 'Quick Links')}</h4>
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
            <h4 className="font-semibold text-card-foreground mb-4">{t('footer.ourProducts', 'Our Products')}</h4>
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

          {/* Shopping & Platform Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground mb-4">{t('footer.shopOnline', 'Shop Online')}</h4>
            <div className="space-y-3">
              <a 
                href="https://www.flipkart.com/product/p/itme?pid=SCMHDAJ6NFUAKT8Z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <SiFlipkart className="h-4 w-4 text-blue-600" />
                <span>{t('footer.shopOnFlipkart', 'Shop on Flipkart')}</span>
              </a>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <div className="h-4 w-4 bg-yellow-500 rounded flex items-center justify-center text-white text-xs font-bold">B</div>
                <span>{t('footer.comingSoonBlinkit', 'Coming Soon on Blinkit')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <div className="h-4 w-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                <span>{t('footer.comingSoonZepto', 'Coming Soon on Zepto')}</span>
              </div>
              <a 
                href="https://wa.me/918224929592" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FaWhatsapp className="h-4 w-4 text-green-500" />
                <span>{t('footer.whatsappChat', 'WhatsApp Chat')}</span>
              </a>
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