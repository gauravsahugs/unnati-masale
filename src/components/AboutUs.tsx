import { Card, CardContent } from '@/components/ui/card';
import { Award, Leaf, Heart, Shield } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-spice-green" />,
      title: 'Farm-Sourced Purity',
      description: 'Direct sourcing from farmers across India ensures the highest quality and freshness'
    },
    {
      icon: <Shield className="w-8 h-8 text-spice-red" />,
      title: 'No Artificial Colors',
      description: 'Pure and natural spices without any artificial additives or preservatives'
    },
    {
      icon: <Heart className="w-8 h-8 text-spice-orange" />,
      title: 'Traditional Taste',
      description: 'Time-tested recipes and traditional processing methods for authentic flavors'
    },
    {
      icon: <Award className="w-8 h-8 text-spice-turmeric" />,
      title: 'Hygienic Manufacturing',
      description: 'State-of-the-art facility in Guna, MP with strict quality control measures'
    }
  ];

  return (
    <section id="about" className="py-20 warm-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-merriweather">
            The Story of Unnati Masale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted name in spices, 
            our journey is rooted in passion for purity and tradition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                With over <strong className="text-primary">2+ years of expertise</strong> in the spice industry, 
                Unnati Masale has established itself as a symbol of quality and authenticity. 
                Located in the heart of Madhya Pradesh in Guna, our state-of-the-art manufacturing 
                facility processes the finest spices using traditional methods.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                We believe that <strong className="text-primary">purity is the essence of our brand</strong>. 
                Every grain of spice that reaches your kitchen is carefully selected, 
                naturally processed, and hygienically packed to preserve its authentic flavor and aroma.
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg shadow-warm">
              <blockquote className="text-xl font-medium text-foreground italic mb-4">
                "Crafted with care, rooted in tradition."
              </blockquote>
              <cite className="text-muted-foreground">- Unnati Masale Promise</cite>
            </div>

            {/* Sourcing Info */}
            <div className="bg-card p-6 rounded-lg shadow-warm">
              <h4 className="font-semibold text-lg text-foreground mb-3">Our Sourcing Network</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Turmeric</strong> from Erode, Tamil Nadu - Known for high curcumin content</li>
                <li>• <strong>Red Chilli</strong> from Guntur, Andhra Pradesh - Premium quality and heat</li>
                <li>• <strong>Coriander</strong> from local Guna farms - Fresh and aromatic</li>
                <li>• <strong>Other Spices</strong> from verified organic farms across India</li>
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-secondary rounded-full group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;