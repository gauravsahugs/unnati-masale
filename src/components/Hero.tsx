import { Button } from '@/components/ui/button';
import { ArrowRight, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background - brand gradient with subtle texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/25 via-rich-orange/20 to-vibrant-red/25" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        {/* Subtle orbs for depth */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-warm-gold/20 to-rich-orange/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tl from-vibrant-red/15 to-warm-gold/15 blur-3xl" />

        {/* Floating particles for gentle motion */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-vibrant-red/40 animate-float" />
          <div className="absolute top-1/3 right-[15%] w-2.5 h-2.5 rounded-full bg-warm-gold/40 animate-float delay-1000" />
          <div className="absolute bottom-1/3 left-[25%] w-3 h-3 rounded-full bg-rich-orange/30 animate-float delay-2000" />
          <div className="absolute bottom-24 right-[20%] w-2 h-2 rounded-full bg-vibrant-red/35 animate-float delay-500" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid min-h-screen items-center py-24">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-merriweather">
              <span className="bg-gradient-to-r from-warm-gold via-rich-orange to-vibrant-red bg-clip-text text-transparent animate-gradient">
                Unnati Masale – Pure & Freah, Premium Quality Spices & Blends
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-foreground font-semibold">
              {t('hero.brand')}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              {t('hero.description')}
            </p>

            {/* Pill - placed after content for better flow */}
            <div className="inline-flex items-center gap-3 bg-card/90 border border-warm-gold/30 shadow-elegant backdrop-blur-md rounded-full px-5 py-2">
              <Award className="w-5 h-5 text-vibrant-red" aria-hidden="true" />
              <span className="text-sm sm:text-base font-medium text-foreground">Farm Fresh • Authentic • Pure</span>
            </div>

            {/* CTAs */}
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

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="text-center space-y-2 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-warm-gold/20">
                <div className="text-2xl font-bold text-vibrant-red">{t('hero.natural')}</div>
                <div className="text-muted-foreground text-sm font-medium">{t('hero.naturalText')}</div>
              </div>
              <div className="text-center space-y-2 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-warm-gold/20">
                <div className="text-2xl font-bold text-rich-orange">{t('hero.heritage')}</div>
                <div className="text-muted-foreground text-sm font-medium">{t('hero.heritageText')}</div>
              </div>
              <div className="text-center space-y-2 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-warm-gold/20">
                <div className="text-2xl font-bold text-warm-gold">{t('hero.source')}</div>
                <div className="text-muted-foreground text-sm font-medium">{t('hero.sourceText')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
