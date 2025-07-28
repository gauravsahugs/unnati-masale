import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Award, Heart } from 'lucide-react';
// Using the uploaded founder image
const founderImage = '/lovable-uploads/9423ab2a-273c-4c9b-9362-a0a83a151995.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-cream via-warm-gold/20 to-rich-orange/10">
      {/* Premium animated background elements */}
      <div className="absolute inset-0">
        {/* Floating authentic spice elements */}
        <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-warm-gold/30 animate-float animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-rich-orange/25 animate-float delay-1000" />
        <div className="absolute bottom-40 left-20 w-10 h-10 rounded-full bg-vibrant-red/20 animate-float delay-2000 animate-pulse-glow" />
        <div className="absolute bottom-20 right-40 w-7 h-7 rounded-full bg-warm-gold/35 animate-float delay-500" />
        
        {/* Geometric heritage patterns */}
        <div className="absolute top-32 right-32 w-40 h-40 border-2 border-warm-gold/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-32 left-32 w-32 h-32 border border-rich-orange/15 rounded-full animate-spin-reverse" />
        
        {/* Premium glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-warm-gold/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-vibrant-red/10 rounded-full blur-2xl animate-pulse-glow delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Section */}
          <div className="space-y-8 animate-slide-up">
            {/* Heritage Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-warm-gold/20 to-rich-orange/20 backdrop-blur-md rounded-full px-6 py-3 border border-warm-gold/30 shadow-premium">
              <Award className="w-5 h-5 text-vibrant-red" />
              <span className="text-foreground font-semibold">Authentic Heritage Since 2+ Years</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-merriweather leading-tight">
                <span className="text-vibrant-red">Pure</span>{' '}
                <span className="bg-gradient-to-r from-warm-gold via-rich-orange to-vibrant-red bg-clip-text text-transparent animate-gradient">
                  Amasale
                </span>
                <br />
                <span className="text-foreground">Heritage</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              From our family's traditional recipes to your kitchen. 
              <span className="text-vibrant-red font-semibold">Authentic spices</span> that carry the soul of India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-vibrant-red to-rich-orange text-white hover:from-vibrant-red/90 hover:to-rich-orange/90 shadow-elegant group font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Spices
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white backdrop-blur-sm font-semibold px-8 py-4 text-lg transition-all duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="mr-2 h-5 w-5" />
                Our Heritage
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-vibrant-red">100%</div>
                <div className="text-muted-foreground text-sm font-medium">Natural & Pure</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-rich-orange">2+</div>
                <div className="text-muted-foreground text-sm font-medium">Years Heritage</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-warm-gold">Farm</div>
                <div className="text-muted-foreground text-sm font-medium">Direct Source</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Element */}
          <div className="relative animate-fade-in-scale">
            <div className="relative">
              {/* Premium Spice Display */}
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-gold via-rich-orange to-vibrant-red rounded-full animate-pulse-glow opacity-20"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-primary-cream/90 to-background/80 rounded-full shadow-elegant backdrop-blur-sm"></div>
                
                {/* Floating Spice Elements */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="text-8xl lg:text-9xl opacity-80 animate-pulse-glow text-vibrant-red">🌶️</div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-warm-gold/30 rounded-full animate-orbit"></div>
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-rich-orange/40 rounded-full animate-orbit-reverse"></div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-vibrant-red/35 rounded-full animate-orbit delay-1000"></div>
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-warm-gold/45 rounded-full animate-orbit-reverse delay-500"></div>
              </div>
              
              {/* Heritage Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-premium border border-warm-gold/20">
                <div className="text-center">
                  <h3 className="font-bold text-lg text-foreground">Pure Amasale</h3>
                  <p className="text-muted-foreground text-sm">Heritage Spices</p>
                  <div className="flex items-center justify-center mt-2 space-x-1">
                    <Star className="w-4 h-4 text-warm-gold fill-current" />
                    <span className="text-xs text-warm-gold font-medium">Authentic Legacy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-warm-gold/50 rounded-full flex justify-center bg-gradient-to-b from-transparent to-warm-gold/10 backdrop-blur-sm">
          <div className="w-2 h-4 bg-gradient-to-b from-warm-gold to-vibrant-red rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;