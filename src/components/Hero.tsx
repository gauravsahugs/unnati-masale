import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle, Sprout, Flame, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-spices.jpg';
import logo from '@/assets/unnati-logo.png';
import turmericSpice from '@/assets/turmeric-spice.png';
import corianderSpice from '@/assets/coriander-spice.png';
import redChiliSpice from '@/assets/red-chili-spice.png';

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
        {/* Soft left beige gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/80 via-cream/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="min-h-[90vh] md:min-h-screen grid md:grid-cols-2 items-center gap-8 py-16 md:py-24">
          {/* Left side */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Logo */}
            <img
              src={logo}
              alt="Unnati Masale logo"
              className="h-10 md:h-12 w-auto"
              loading="eager"
            />

            {/* Headline */}
            <h1 className="font-merriweather text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-vibrant-red">
              {t('hero.title') || 'Pure & Fresh, Premium Quality Spices & Blends'}
            </h1>

            {/* Supporting copy */}
            <p className="text-base md:text-xl text-muted-foreground max-w-xl">
              {t('hero.subtitle') ||
                'Premium Indian spices, freshly milled and sourced from the finest farms across India.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
                {t('hero.story') || 'Know Our Story'}
              </Button>
            </div>

            {/* Feature highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <li className="flex items-center gap-2 text-sm md:text-base text-foreground">
                <Sprout className="w-5 h-5 text-accent" aria-hidden />
                <span>{t('hero.feature1') || 'Farm Fresh Sourcing'}</span>
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-foreground">
                <Flame className="w-5 h-5 text-accent" aria-hidden />
                <span>{t('hero.feature2') || 'Authentic Flavors'}</span>
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-foreground">
                <ShieldCheck className="w-5 h-5 text-accent" aria-hidden />
                <span>{t('hero.feature3') || 'Premium Quality'}</span>
              </li>
            </ul>

            {/* Play Video */}
            <a
              href="/coming-soon"
              className="inline-flex items-center gap-2 text-accent story-link"
              aria-label="Play brand video"
            >
              <PlayCircle className="w-5 h-5" />
              <span>{t('hero.play') || 'Play Video'}</span>
            </a>
          </div>

          {/* Right side imagery */}
          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px]">
            <div className="absolute right-4 top-4 w-40 sm:w-48 md:w-56 lg:w-64 rotate-2 animate-fade-in">
              <img
                src={redChiliSpice}
                alt="Premium red chili spice"
                loading="lazy"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            <div className="absolute right-20 bottom-4 w-36 sm:w-44 md:w-52 lg:w-60 -rotate-3 animate-fade-in">
              <img
                src={turmericSpice}
                alt="Premium turmeric spice"
                loading="lazy"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            <div className="absolute right-1/2 translate-x-1/2 md:right-auto md:left-6 md:translate-x-0 top-1/2 -translate-y-1/2 w-28 sm:w-36 md:w-40 lg:w-48 rotate-6 animate-fade-in">
              <img
                src={corianderSpice}
                alt="Premium coriander spice"
                loading="lazy"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>

            {/* Ambient highlight */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute right-8 top-8 w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-warm-gold/20 to-transparent rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
