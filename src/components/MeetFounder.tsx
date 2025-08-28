import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Heart, Award, Target } from 'lucide-react';

const founderImage = '/lovable-uploads/9423ab2a-273c-4c9b-9362-a0a83a151995.png';

const MeetFounder = () => {
  return (
    <section id="founder" className="relative min-h-[60vh] flex items-center py-12 bg-gradient-to-br from-background via-secondary/10 to-primary/5">
      <div className="container mx-auto px-4">
        {/* Modern Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary text-xs md:text-sm font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Leadership
            </span>
            <div className="w-10 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-merriweather leading-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Founder</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              The visionary behind Unnati Masale's authentic spice heritage
            </p>
          </div>
        </div>

        {/* Modern Founder Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Founder Image */}
          <div className="relative animate-fade-in flex justify-center">
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-2 border border-border/30 shadow-elegant">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src={founderImage} 
                      alt="Gaurav Kumar Sahu - Unnati Masale Founder"
                      className="w-48 h-48 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-md rounded-xl px-4 py-2 shadow-elegant border border-primary/20">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="font-bold text-foreground text-sm">Founder & CEO</span>
                  </div>
                  <p className="text-muted-foreground text-xs">Gaurav Kumar Sahu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Story */}
          <div className="space-y-6 animate-fade-in">
            {/* Quote Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-card/80 backdrop-blur-sm border border-border/30 shadow-elegant">
                <CardContent className="p-6 md:p-8">
                  <Quote className="w-7 h-7 text-accent mb-3" />
                  <blockquote className="text-base md:text-lg text-foreground leading-relaxed mb-4 font-medium">
                    "Every spice tells a story. At <span className="text-foreground font-bold">Unnati Masale</span>, we preserve the authentic flavors and traditions 
                    that have been passed down through generations. Our commitment is to bring you the purest, 
                    most flavorful spices directly from the heart of India to your kitchen."
                  </blockquote>
                  <div className="border-l-4 border-gradient-to-b from-accent to-primary pl-3 md:pl-4">
                    <p className="text-muted-foreground text-sm md:text-base">
                      With over two years of dedication to <span className="text-primary font-medium">quality and authenticity</span>, our founder Gaurav Kumar Sahu has built 
                      Unnati Masale on the principles of <span className="text-accent font-medium">purity, tradition, and trust</span>. Located in Guna, Madhya Pradesh,
                      each product reflects a deep understanding of Indian culinary heritage.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Modern Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: Heart, title: "Passion", desc: "For authentic flavors", color: "text-accent" },
                { icon: Award, title: "Quality", desc: "Premium standards", color: "text-primary" },
                { icon: Target, title: "Heritage", desc: "Traditional recipes", color: "text-accent" }
              ].map((value, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-center p-4 md:p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-border/30 hover:border-accent/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                    <value.icon className={`w-7 h-7 md:w-8 md:h-8 ${value.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300 text-base md:text-lg">{value.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 shadow-elegant font-semibold px-8 py-4 hover:transform hover:-translate-y-1 transition-all duration-300"
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