import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ShoppingCart } from 'lucide-react';
import heroSpices from '@/assets/hero-spices.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Premium Background with Image */}
      <div className="absolute inset-0">
        <img src={heroSpices} alt="Unnati Masale premium spice collection background" className="w-full h-full object-cover" />
        {/* Animated Elements */}
        <div className="absolute inset-0">
          {/* Floating spice particles */}
          <div className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-vibrant-red/40 animate-float" />
          <div className="absolute top-32 right-[15%] w-2 h-2 rounded-full bg-warm-gold/50 animate-float delay-1000" />
          <div className="absolute bottom-40 left-[20%] w-4 h-4 rounded-full bg-rich-orange/30 animate-float delay-2000" />
          <div className="absolute bottom-28 right-[25%] w-3 h-3 rounded-full bg-vibrant-red/35 animate-float delay-500" />
          
          {/* Geometric patterns */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-warm-gold/20 rounded-full animate-spin-slow opacity-30" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-rich-orange/15 rounded-full animate-spin-reverse opacity-25" />
          
          {/* Gradient orbs */}
          <div className="absolute top-1/3 left-1/5 w-48 h-48 bg-gradient-to-r from-warm-gold/10 to-rich-orange/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-gradient-to-r from-vibrant-red/10 to-warm-gold/10 rounded-full blur-3xl animate-pulse-glow delay-1500" />
        </div>
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/60 to-background/30"></div>
        <div className="absolute inset-0 bg-foreground/10 md:bg-foreground/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16 items-center min-h-screen py-20">
          {/* Enhanced Content Section */}
          <div className="space-y-10 animate-slide-up">

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-merriweather leading-tight">
                <span className="text-foreground">{t('hero.title').split(',')[0]},</span>
                <br />
                <span className="bg-gradient-to-r from-warm-gold via-rich-orange to-vibrant-red bg-clip-text text-transparent animate-gradient">
                  {t('hero.title').split(',')[1]?.trim()}
                </span>
              </h1>
            </div>

            {/* Brand Statement */}
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-vibrant-red font-bold leading-relaxed">
                {t('hero.brand')}
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            {/* Heritage Badge moved below content */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-card/90 to-card/80 backdrop-blur-md rounded-full px-6 py-3 border border-warm-gold/30 shadow-elegant">
              <Award className="w-5 h-5 text-vibrant-red" />
              <span className="text-foreground font-semibold text-sm sm:text-base">Farm Fresh • Authentic • Pure</span>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant font-bold px-10 py-6 text-lg transition-all duration-300 group"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-warm-gold/20">
                <div className="text-4xl font-bold text-vibrant-red">{t('hero.natural')}</div>
                <div className="text-muted-foreground text-sm font-semibold">{t('hero.naturalText')}</div>
              </div>
              <div className="text-center space-y-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-warm-gold/20">
                <div className="text-4xl font-bold text-rich-orange">{t('hero.heritage')}</div>
                <div className="text-muted-foreground text-sm font-semibold">{t('hero.heritageText')}</div>
              </div>
              <div className="text-center space-y-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-warm-gold/20">
                <div className="text-4xl font-bold text-warm-gold">{t('hero.source')}</div>
                <div className="text-muted-foreground text-sm font-semibold">{t('hero.sourceText')}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-16 border-2 border-warm-gold/60 rounded-full flex justify-center bg-gradient-to-b from-transparent to-warm-gold/20 backdrop-blur-sm shadow-elegant">
          <div className="w-3 h-6 bg-gradient-to-b from-warm-gold to-vibrant-red rounded-full mt-3 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;