import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary" />
      
      {/* Premium decorative elements */}
      <div className="absolute inset-0">
        {/* Floating spice particles */}
        <div className="absolute top-20 left-10 w-6 h-6 rounded-full bg-accent/20 animate-float" />
        <div className="absolute top-40 right-20 w-4 h-4 rounded-full bg-secondary/30 animate-float delay-1000" />
        <div className="absolute bottom-40 left-20 w-5 h-5 rounded-full bg-accent/15 animate-float delay-2000" />
        <div className="absolute bottom-20 right-40 w-8 h-8 rounded-full bg-secondary/20 animate-float delay-500" />
        
        {/* Elegant geometric patterns */}
        <div className="absolute top-32 right-32 w-32 h-32 border border-white/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-32 left-32 w-24 h-24 border border-accent/20 rounded-full animate-spin-reverse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Quality Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Star className="w-4 h-4 text-spice-turmeric fill-current" />
            <span className="text-white text-sm font-medium">Premium Quality Since 2+ Years</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 font-merriweather leading-tight">
            Purity is the{' '}
            <span className="text-accent bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-gradient">
              Essence
            </span>
            {' '}of Our Brand
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Delivering authentic Indian spices from farm to kitchen. 
            Experience the true taste of tradition with every pinch.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-warm group font-semibold"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-white backdrop-blur-sm font-semibold transition-all duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Watch Our Story
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-white/80 text-sm">Natural & Pure</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2+</div>
              <div className="text-white/80 text-sm">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Farm Fresh</div>
              <div className="text-white/80 text-sm">Direct Sourcing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;