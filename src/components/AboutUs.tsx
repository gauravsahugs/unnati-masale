import { Card } from '@/components/ui/card';
import { Leaf, Award, Shield, Heart } from 'lucide-react';
import turmericSpice from '@/assets/turmeric-spice.png';
import redChiliSpice from '@/assets/red-chili-spice.png';
import corianderSpice from '@/assets/coriander-spice.png';
import garamMasalaSpice from '@/assets/garam-masala-spice.png';
import founderAmasale from '@/assets/founder-amasale.png';

const features = [
  {
    icon: Leaf,
    title: "Farm-Sourced Purity",
    description: "Direct sourcing from the best agricultural hubs across India"
  },
  {
    icon: Award,
    title: "No Artificial Colors",
    description: "100% natural ingredients, free from synthetic additives"
  },
  {
    icon: Shield,
    title: "Traditional Taste",
    description: "Authentic flavors preserved through time-tested methods"
  },
  {
    icon: Heart,
    title: "Hygienic Manufacturing",
    description: "State-of-the-art facility ensuring highest standards"
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase border border-primary/20 px-4 py-2 rounded-full">
              Our Story
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-merriweather leading-tight">
            About Unnati Masale
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-light text-primary mb-4 font-merriweather italic">
              "Purity is the Essence of Our Brand"
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A legacy of authentic Indian flavors, crafted with passion and delivered with pride
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
                  <h3 className="text-3xl font-bold text-foreground font-merriweather mb-6 text-center lg:text-left">
                    Our Heritage
                  </h3>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      Unnati Masale is a leading manufacturer of premium spices and food products. With over 2 years of dedicated experience, 
                      we specialize in a diverse range of offerings including Red Chilli Powder, Turmeric Powder, Coriander Powder, 
                      Garam Masala, Achar Masala, and a variety of traditional spice blends.
                    </p>
                    <p>
                      Our commitment to purity, quality, and authenticity is unwavering. All products are crafted using the finest 
                      natural ingredients, free from synthetic colors and artificial flavoring agents. Backed by a state-of-the-art 
                      manufacturing facility in Guna, we ensure the highest standards of hygiene and consistency.
                    </p>
                    <p>
                      Having established a strong presence across nearby districts, Unnati Masale is now expanding into key markets 
                      covering whole Madhya Pradesh, supported by a robust and growing distribution network.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Unleash the Spices - Premium Vision Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4 font-merriweather">
              Unleash the Spices
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence drives every aspect of our spice sourcing and production
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-8 shadow-soft border border-border/50">
              <h4 className="text-2xl font-semibold text-foreground mb-6 font-merriweather">Our Vision</h4>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At Unnati Masale, our goal is to deliver a world-class range of spices, spice blends, and related products 
                  to a diverse range of sectors, including Industrial, Retail, and Food Delivery Services.
                </p>
                <p>
                  Our vision is clear: to provide exceptional service and unparalleled quality to our customers, across all markets.
                </p>
                <p>
                  The cornerstone of our quality and purity lies in the carefully sourced raw materials. We ensure that only 
                  the finest ingredients are selected, directly from the best agricultural production hubs across India.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card to-accent/5 rounded-3xl p-8 shadow-soft border border-border/50">
              <h4 className="text-2xl font-semibold text-foreground mb-6 font-merriweather">Premium Sourcing</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-xl hover:bg-background/70 transition-all duration-300">
                  <img src={redChiliSpice} alt="Red Chili" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Red Chili</span>
                    <p className="text-sm text-muted-foreground">from Guntur (Andhra Pradesh)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-xl hover:bg-background/70 transition-all duration-300">
                  <img src={turmericSpice} alt="Turmeric" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Turmeric</span>
                    <p className="text-sm text-muted-foreground">from Erode, Salem, Nizamabad & Sangli</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-xl hover:bg-background/70 transition-all duration-300">
                  <img src={corianderSpice} alt="Coriander" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Coriander</span>
                    <p className="text-sm text-muted-foreground">from Guna and Kumbhraj (Madhya Pradesh)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-xl hover:bg-background/70 transition-all duration-300">
                  <img src={garamMasalaSpice} alt="Garam Spices" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Garam Spices</span>
                    <p className="text-sm text-muted-foreground">from Kerala, Uttarakhand & North-East states</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic text-center p-4 bg-background/30 rounded-xl">
                These foundational ingredients are the pillars of our commitment to delivering authentic and premium quality products that our customers trust.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;