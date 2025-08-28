import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-banner.jpg';

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
      className="relative h-screen overflow-hidden mt-0"
    >
      {/* Background with parallax and readability overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed will-change-transform"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${offset * -1}px)`,
            filter: 'none',
          }}
        />
        {/* Left-side subtle gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-muted/70 via-muted/40 to-transparent" />
        {/* Stronger dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="h-screen grid items-center">
          <div className="max-w-4xl space-y-8">
            {/* Headline */}
            <h1 className="font-merriweather text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-fade-in drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] shadow-black">
              Pure & Fresh, Premium Quality Spices & Blends
            </h1>

            {/* Supporting copy */}
            <p className="text-base md:text-xl text-white max-w-2xl animate-fade-in drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] shadow-black">
              Premium Indian spices, freshly milled and sourced from the finest farms across India.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in">
              <Button
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 shadow-elegant px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-0.5 font-semibold"
                onClick={() => scrollTo('products')}
                aria-label="Explore products"
              >
                {t('hero.cta') || 'Explore Products'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-foreground backdrop-blur-sm px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-0.5 font-semibold"
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
