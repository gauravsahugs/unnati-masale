import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import turmericSpice from '@/assets/turmeric-spice.png';
import corianderSpice from '@/assets/coriander-spice.png';
import redChiliSpice from '@/assets/red-chili-spice.png';
import garamMasalaSpice from '@/assets/garam-masala-spice.png';
import { useLanguage } from '@/contexts/LanguageContext';

const SpiceGallery = () => {
  const { t } = useLanguage();
  const spiceImages = [
    {
      id: 1,
      name: 'Turmeric',
      image: turmericSpice,
      description: 'Golden turmeric from the fields of India',
      origin: 'Erode, Tamil Nadu'
    },
    {
      id: 2,
      name: 'Coriander',
      image: corianderSpice,
      description: 'Fresh aromatic coriander seeds',
      origin: 'Guna, Madhya Pradesh'
    },
    {
      id: 3,
      name: 'Red Chili',
      image: redChiliSpice,
      description: 'Vibrant red chilies for perfect heat',
      origin: 'Guntur, Andhra Pradesh'
    },
    {
      id: 4,
      name: 'Garam Masala',
      image: garamMasalaSpice,
      description: 'Premium blend of aromatic spices',
      origin: 'Kerala & North-East'
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-background via-accent/5 to-primary/10">
      <div className="container mx-auto px-4">
        {/* Modern Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="text-accent text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Spice Gallery
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Our Whole <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Spice Collection</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our premium whole spices and raw ingredients for authentic flavor
            </p>
          </div>
        </div>

        {/* Modern Carousel */}
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full relative"
            >
              <CarouselContent className="gap-6">
                {spiceImages.map((spice, index) => (
                  <CarouselItem key={spice.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Card className="relative bg-card/80 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-glow overflow-hidden">
                        <CardContent className="p-6">
                          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background/30 to-secondary/20 mb-4 p-4">
                            <img 
                              src={spice.image} 
                              alt={spice.name}
                              className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                              {spice.name}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {spice.description}
                            </p>
                            <div className="flex items-center gap-2 pt-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                              <span className="text-xs font-medium text-accent">
                                Sourced from {spice.origin}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-card/80 backdrop-blur-sm border-border/30 hover:border-accent/50 hover:bg-accent/10" />
              <CarouselNext className="right-2 bg-card/80 backdrop-blur-sm border-border/30 hover:border-accent/50 hover:bg-accent/10" />
            </Carousel>
          </div>
        </div>

        {/* Quality Promise */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-merriweather">
              Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Promise</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">🌾</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Farm Fresh</h4>
                <p className="text-sm text-muted-foreground">Directly sourced from trusted farmers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">🔬</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Lab Tested</h4>
                <p className="text-sm text-muted-foreground">Rigorous quality control standards</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Fresh Packaging</h4>
                <p className="text-sm text-muted-foreground">Sealed for maximum freshness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiceGallery;