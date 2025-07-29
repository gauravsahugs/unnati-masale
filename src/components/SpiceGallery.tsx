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

const SpiceGallery = () => {
  const spiceImages = [
    {
      id: 1,
      name: 'Turmeric',
      image: turmericSpice,
      description: 'Golden turmeric from the fields of India'
    },
    {
      id: 2,
      name: 'Coriander',
      image: corianderSpice,
      description: 'Fresh aromatic coriander seeds'
    },
    {
      id: 3,
      name: 'Red Chili',
      image: redChiliSpice,
      description: 'Vibrant red chilies for perfect heat'
    },
    {
      id: 4,
      name: 'Garam Masala',
      image: garamMasalaSpice,
      description: 'Traditional spice blend'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-cream/20 to-warm-gold/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-merriweather">
            Our Spice Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the vibrant colors and rich aromas of authentic Indian spices
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {spiceImages.map((spice, index) => (
                <CarouselItem key={spice.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-6">
                      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-background/50 to-secondary/30 mb-4">
                        <img 
                          src={spice.image} 
                          alt={spice.name}
                          className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{spice.name}</h3>
                      <p className="text-sm text-muted-foreground">{spice.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SpiceGallery;