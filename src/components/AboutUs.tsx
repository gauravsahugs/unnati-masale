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
    <section id="about" className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-background via-secondary/10 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Modern Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="text-accent text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Our Story
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            About Unnati Masale
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl font-light text-accent mb-6 font-merriweather italic">
              "Purity is the Essence of Our Brand"
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A legacy of authentic Indian flavors, crafted with passion and delivered with pride
            </p>
          </div>
        </div>

        {/* Modern Heritage Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Heritage Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                    <h3 className="text-2xl font-bold text-foreground font-merriweather">
                      Our Heritage
                    </h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-base">
                      <span className="text-foreground font-bold">Unnati Masale</span> is a leading manufacturer of premium spices and food products. With over 2 years of dedicated experience, 
                      we specialize in a diverse range of offerings including Red Chilli Powder, Turmeric Powder, Coriander Powder, 
                      Garam Masala, Achar Masala, and a variety of traditional spice blends.
                    </p>
                    <p>
                      Our commitment to <span className="text-primary font-medium">purity, quality, and authenticity</span> is unwavering. All products are crafted using the finest 
                      natural ingredients, free from synthetic colors and artificial flavoring agents.
                    </p>
                    <p>
                      Having established a strong presence across nearby districts, we're now expanding into key markets 
                      covering <span className="text-accent font-medium">whole Madhya Pradesh</span>, supported by a robust distribution network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Features Grid */}
            <div className="grid grid-cols-1 gap-6 animate-fade-in">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-accent/30 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-7 w-7 text-accent group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modern Sourcing Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground font-merriweather">
                Unleash the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Spices</span>
              </h3>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Excellence in every grain, sourced from India's finest regions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
            {/* Vision Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  <h4 className="text-2xl font-bold text-foreground font-merriweather">Our Vision</h4>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At <span className="text-foreground font-bold">Unnati Masale</span>, our goal is to deliver a world-class range of spices, spice blends, and related products 
                    to diverse sectors including <span className="text-primary font-medium">Industrial, Retail, and Food Delivery Services</span>.
                  </p>
                  <p>
                    Our vision is clear: to provide <span className="text-accent font-medium">exceptional service</span> and <span className="text-primary font-medium">unparalleled quality</span> to our customers across all markets.
                  </p>
                  <p>
                    The cornerstone of our quality lies in carefully sourced raw materials from India's best agricultural hubs.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Sourcing Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                  <h4 className="text-2xl font-bold text-foreground font-merriweather">Premium Sourcing</h4>
                </div>
                <div className="space-y-3">
                  <div className="group/item flex items-center gap-4 p-4 bg-background/30 rounded-xl hover:bg-background/50 transition-all duration-300 hover:transform hover:translate-x-2">
                    <div className="relative">
                      <img src={redChiliSpice} alt="Red Chili" className="w-14 h-14 rounded-xl object-cover border-2 border-border/30 group-hover/item:border-accent/50 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <span className="font-bold text-foreground group-hover/item:text-accent transition-colors duration-300">Red Chili</span>
                      <p className="text-sm text-muted-foreground">Guntur, Andhra Pradesh</p>
                    </div>
                  </div>
                  <div className="group/item flex items-center gap-4 p-4 bg-background/30 rounded-xl hover:bg-background/50 transition-all duration-300 hover:transform hover:translate-x-2">
                    <div className="relative">
                      <img src={turmericSpice} alt="Turmeric" className="w-14 h-14 rounded-xl object-cover border-2 border-border/30 group-hover/item:border-primary/50 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <span className="font-bold text-foreground group-hover/item:text-primary transition-colors duration-300">Turmeric</span>
                      <p className="text-sm text-muted-foreground">Erode, Salem, Nizamabad & Sangli</p>
                    </div>
                  </div>
                  <div className="group/item flex items-center gap-4 p-4 bg-background/30 rounded-xl hover:bg-background/50 transition-all duration-300 hover:transform hover:translate-x-2">
                    <div className="relative">
                      <img src={corianderSpice} alt="Coriander" className="w-14 h-14 rounded-xl object-cover border-2 border-border/30 group-hover/item:border-accent/50 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <span className="font-bold text-foreground group-hover/item:text-accent transition-colors duration-300">Coriander</span>
                      <p className="text-sm text-muted-foreground">Guna & Kumbhraj, Madhya Pradesh</p>
                    </div>
                  </div>
                  <div className="group/item flex items-center gap-4 p-4 bg-background/30 rounded-xl hover:bg-background/50 transition-all duration-300 hover:transform hover:translate-x-2">
                    <div className="relative">
                      <img src={garamMasalaSpice} alt="Garam Spices" className="w-14 h-14 rounded-xl object-cover border-2 border-border/30 group-hover/item:border-primary/50 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <span className="font-bold text-foreground group-hover/item:text-primary transition-colors duration-300">Garam Spices</span>
                      <p className="text-sm text-muted-foreground">Kerala, Uttarakhand & North-East</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-accent/20">
                  <p className="text-sm text-muted-foreground text-center italic">
                    Premium ingredients sourced directly from India's finest agricultural regions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;