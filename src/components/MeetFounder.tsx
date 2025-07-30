import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Heart, Award } from 'lucide-react';

const founderImage = '/lovable-uploads/9423ab2a-273c-4c9b-9362-a0a83a151995.png';

const MeetFounder = () => {
  return (
    <section id="founder" className="py-20 bg-gradient-to-br from-primary-cream/30 to-warm-gold/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-merriweather">
            Meet the Founder
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The visionary behind Unnati Masale's authentic spice heritage
          </p>
        </div>

        {/* Founder Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Founder Image */}
          <div className="relative animate-fade-in-scale">
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                <div className="relative overflow-hidden rounded-3xl shadow-elegant bg-gradient-to-br from-warm-gold/20 to-rich-orange/20 p-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={founderImage} 
                      alt="Gaurav Kumar Sahu - Unnati Masale Founder"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-premium border border-warm-gold/20">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Award className="w-5 h-5 text-vibrant-red" />
                      <span className="font-bold text-foreground">Founder & CEO</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Unnati Masale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Story */}
          <div className="space-y-8 animate-slide-up">
            {/* Quote Card */}
            <Card className="bg-gradient-to-br from-card/80 to-secondary/20 backdrop-blur-sm border-warm-gold/20 shadow-elegant">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-vibrant-red mb-4" />
                <blockquote className="text-lg text-foreground leading-relaxed mb-6 font-medium">
                  "Every spice tells a story. At Unnati Masale, we preserve the authentic flavors and traditions 
                  that have been passed down through generations. Our commitment is to bring you the purest, 
                  most flavorful spices directly from the heart of India to your kitchen."
                </blockquote>
                <div className="border-l-4 border-vibrant-red pl-4">
                  <p className="text-muted-foreground">
                    With over two years of dedication to quality and authenticity, our founder Gaurav Kumar Sahu has built 
                    Unnati Masale on the principles of purity, tradition, and trust. Located in Guna, Madhya Pradesh, 
                    each product reflects a deep understanding of Indian culinary heritage and commitment to farm-fresh quality.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-warm-gold/20 hover:shadow-md transition-all duration-300">
                <Heart className="w-8 h-8 text-vibrant-red mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Passion</h3>
                <p className="text-muted-foreground text-sm">For authentic flavors</p>
              </div>
              <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-warm-gold/20 hover:shadow-md transition-all duration-300">
                <Award className="w-8 h-8 text-warm-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-muted-foreground text-sm">Premium standards</p>
              </div>
              <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-warm-gold/20 hover:shadow-md transition-all duration-300">
                <Quote className="w-8 h-8 text-rich-orange mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Heritage</h3>
                <p className="text-muted-foreground text-sm">Traditional recipes</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-vibrant-red to-rich-orange text-white hover:from-vibrant-red/90 hover:to-rich-orange/90 shadow-elegant font-semibold px-8 py-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Connect With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetFounder;