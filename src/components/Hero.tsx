import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ShieldCheck, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-spices.jpg';
import turmericSpice from '@/assets/turmeric-spice.png';
import corianderSpice from '@/assets/coriander-spice.png';
import redChiliSpice from '@/assets/red-chili-spice.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background - premium gradient, texture and orbs */}
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

        {/* Floating particles for gentle motion */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-vibrant-red/40 animate-fade-in" />
          <div className="absolute top-1/3 right-[15%] w-2.5 h-2.5 rounded-full bg-warm-gold/40 animate-fade-in" />
          <div className="absolute bottom-1/3 left-[25%] w-3 h-3 rounded-full bg-rich-orange/30 animate-fade-in" />
          <div className="absolute bottom-24 right-[20%] w-2 h-2 rounded-full bg-vibrant-red/35 animate-fade-in" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid min-h-screen items-center py-20 lg:py-24 lg:grid-cols-12 gap-10">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-warm-gold/30 bg-card/80 px-3 py-1.5 text-sm text-foreground shadow-soft backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-warm-gold" aria-hidden="true" />
              <span>Since 1996 • 100% Pure • FSSAI Compliant</span>
            </div>

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

            {/* Trust signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-card/60 backdrop-blur-sm rounded-2xl border border-warm-gold/20">
                <Award className="w-6 h-6 text-vibrant-red" aria-hidden="true" />
                <div>
                  <div className="text-sm text-muted-foreground">Quality Assured</div>
                  <div className="text-base font-semibold text-foreground">Farm Fresh & Authentic</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card/60 backdrop-blur-sm rounded-2xl border border-warm-gold/20">
                <Star className="w-6 h-6 text-rich-orange" aria-hidden="true" />
                <div>
                  <div className="text-sm text-muted-foreground">Customer Love</div>
                  <div className="text-base font-semibold text-foreground">4.9/5 Average Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card/60 backdrop-blur-sm rounded-2xl border border-warm-gold/20">
                <ShieldCheck className="w-6 h-6 text-warm-gold" aria-hidden="true" />
                <div>
                  <div className="text-sm text-muted-foreground">Safety First</div>
                  <div className="text-base font-semibold text-foreground">Hygienic Processing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto h-[420px] w-[420px] max-w-full">
              {/* Glass card */}
              <div className="absolute inset-0 rounded-full bg-card/40 backdrop-blur-md border border-warm-gold/20 shadow-premium" />

              {/* Orbiting spice images */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <img src={turmericSpice} alt="Raw turmeric whole spice" className="h-28 w-28 object-contain drop-shadow" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-6">
                <img src={corianderSpice} alt="Raw coriander seeds whole spice" className="h-28 w-28 object-contain drop-shadow" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <img src={redChiliSpice} alt="Raw red chili whole spice" className="h-28 w-28 object-contain drop-shadow" />
              </div>

              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full ring-1 ring-warm-gold/30" />
              <div className="absolute inset-8 rounded-full ring-1 ring-rich-orange/20" />
              <div className="absolute inset-16 rounded-full ring-1 ring-vibrant-red/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
