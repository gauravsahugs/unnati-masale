import { Card } from '@/components/ui/card';
import { Leaf, Award, Shield, Heart, Users, Sparkles } from 'lucide-react';

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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <h3 className="text-2xl font-semibold text-unnati-coral mb-6">
            Purity is the Essence of Our Brand
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Unnati Masale is a leading manufacturer of premium spices and food products. With over 2 years of experience, 
            we specialize in a diverse range of offerings including Red Chilli Powder, Turmeric Powder, Coriander Powder, 
            Garam Masala, Achar Masala, and a variety of traditional spice blends.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-soft">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our commitment to purity, quality, and authenticity is unwavering. All products are crafted using the 
                finest natural ingredients, free from synthetic colors and artificial flavoring agents. Backed by a 
                state-of-the-art manufacturing facility in Guna, we ensure the highest standards of hygiene and consistency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Having established a strong presence across nearby districts, Unnati Masale is now expanding into key 
                markets covering whole Madhya Pradesh, supported by a robust and growing distribution network.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-soft">
              <blockquote className="text-lg italic text-card-foreground mb-4 border-l-4 border-unnati-coral pl-4">
                "With a clear focus on quality and tradition, Unnati Masale is dedicated to delivering the authentic 
                taste of Indian cuisine to kitchens across the nation."
              </blockquote>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-elegant transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Unleash the Spices Section */}
        <div className="bg-card p-8 rounded-lg shadow-soft mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">Unleash the Spices</h3>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-4xl mx-auto">
            At Unnati Masale, our goal is to deliver a world-class range of spices, spice blends, and related products 
            to a diverse range of sectors, including Industrial, Retail, and Food Delivery Services. Our vision is clear 
            to provide exceptional service and unparalleled quality to our customers, across all markets.
          </p>
          
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Quality Sourcing from Premium Regions</h4>
            <p className="text-muted-foreground mb-4">
              The cornerstone of our quality and purity lies in the carefully sourced raw materials. We ensure that 
              only the finest ingredients are selected, directly from the best agricultural production hubs across India:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-unnati-coral rounded-full"></div>
                  <span className="text-muted-foreground">Red Chili from <strong>Guntur (Andhra Pradesh)</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-unnati-coral rounded-full"></div>
                  <span className="text-muted-foreground">Turmeric from <strong>Erode (Tamil Nadu), Salem (Tamil Nadu), Nizamabad (Telangana), and Sangli (Maharashtra)</strong></span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-unnati-coral rounded-full"></div>
                  <span className="text-muted-foreground">Coriander from <strong>Guna and Kumbhraj (Madhya Pradesh)</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-unnati-coral rounded-full"></div>
                  <span className="text-muted-foreground">Garam Spices from <strong>Kerala, Uttarakhand, and the North-East states</strong></span>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground italic mt-6">
              These foundational ingredients are the pillars of our commitment to delivering authentic and premium 
              quality products that our customers trust.
            </p>
          </div>
        </div>

        {/* Meet the Founder Section */}
        <div className="bg-card p-8 rounded-lg shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">👤 Meet the Founder – Gaurav Kumar Sahu</h3>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Gaurav Kumar Sahu, the visionary behind Unnati Masale, brings a rare blend of corporate experience, 
              academic excellence, and grassroots passion to the Indian spice industry. A former software engineer 
              at Infosys and a postgraduate in Real Estate Valuation, Gaurav holds a Bachelor's degree in Civil 
              Engineering and proudly carries the honor of being a Rashtrapati Scout Awardee – a testament to his 
              leadership, dedication, and service.
            </p>
            
            <p>
              Born and raised in Madhya Pradesh, he chose to leave a stable tech career to pursue his dream of 
              building a brand that revives the authenticity of Indian flavors. With a deep connection to rural 
              India and a mission to uplift local farmers, Gaurav established Unnati Masale to offer 100% natural, 
              ethically sourced spices to households across India.
            </p>
            
            <p className="font-medium text-foreground">
              His vision goes beyond commerce — he aims to empower communities, preserve traditional spice-making 
              wisdom, and scale Unnati into a globally recognized brand. Under his guidance, Unnati Masale is not 
              just a company — it's a movement for purity, quality, and progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;