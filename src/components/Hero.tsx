import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-spices.jpg';

const Hero = () => {
  const { t } = useLanguage();
  const [offset, setOffset] = useState(0);

  // Simple parallax effect for background image
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      aria-label="Unnati Masale premium hero section"
      className="relative min-h-[90vh] md:min-h-screen overflow-hidden"
    >
      {/* Background with parallax and readability overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed will-change-transform"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${offset * -1}px)`,
          }}
        />
        {/* Warm gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/30 via-rich-orange/20 to-vibrant-red/30" />
        {/* Neutral veil for WCAG-compliant contrast */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="min-h-[90vh] md:min-h-screen grid items-center py-16 md:py-24">
          <div className="max-w-4xl space-y-8">
            {/* Headline */}
            <h1 className="font-merriweather text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-warm-gold via-rich-orange to-warm-gold bg-clip-text text-transparent">
                Unnati Masale – Farm to Table Excellence
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl animate-fade-in">
              Premium Indian spices sourced directly from the finest farms —
              freshly milled, authentic, and brimming with aroma and purity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in">
              <Button
                size="lg"
                className="bg-vibrant-red text-white hover:bg-vibrant-red/90 shadow-elegant px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => scrollTo('products')}
                aria-label="Explore products"
              >
                {t('hero.cta') || 'Explore Products'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-vibrant-red text-vibrant-red hover:bg-vibrant-red hover:text-white px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => scrollTo('about')}
                aria-label="Know our story"
              >
                Know Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
