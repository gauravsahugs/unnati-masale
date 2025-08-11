import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-spices.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background: premium layered gradient with subtle texture */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium Indian spices assortment background"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/25 via-rich-orange/20 to-vibrant-red/25" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        {/* Subtle orbs for depth */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-warm-gold/20 to-rich-orange/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tl from-vibrant-red/15 to-warm-gold/15 blur-3xl" />

        {/* Gentle animated particles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-vibrant-red/40 animate-fade-in" />
          <div className="absolute top-1/3 right-[15%] w-2.5 h-2.5 rounded-full bg-warm-gold/40 animate-fade-in" />
          <div className="absolute bottom-1/3 left-[25%] w-3 h-3 rounded-full bg-rich-orange/30 animate-fade-in" />
          <div className="absolute bottom-24 right-[20%] w-2 h-2 rounded-full bg-vibrant-red/35 animate-fade-in" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="min-h-screen grid items-center py-20 lg:py-24">
          <div className="max-w-4xl space-y-8 animate-fade-in">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-merriweather">
              <span className="bg-gradient-to-r from-warm-gold via-rich-orange to-vibrant-red bg-clip-text text-transparent">
                Unnati Masale – Pure & Freah, Premium Quality Spices & Blends
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-foreground font-semibold max-w-2xl">
              {t('hero.brand')}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              {t('hero.description')}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant font-bold px-8 py-6 text-lg transition-all duration-300 group"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Explore products"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
