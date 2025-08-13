import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import redChilliPowder from '@/assets/red-chilli-powder.png';
import turmericPowder from '@/assets/turmeric-powder.png';
import corianderPowder from '@/assets/coriander-powder.png';
import acharMasala from '@/assets/achar-masala.png';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductShowcase = () => {
  const { t } = useLanguage();
  const products = [
    {
      id: 1,
      key: 'redChilli',
      name: 'Red Chilli Powder',
      category: 'Ground Spices',
      description: 'Premium quality red chilli powder from Guntur. Perfect heat and vibrant color for all your dishes.',
      image: redChilliPowder,
      price: '₹120/kg',
      rating: 4.8,
      badge: 'Best Seller'
    },
    {
      id: 2,
      key: 'turmeric',
      name: 'Turmeric Powder',
      category: 'Ground Spices', 
      description: 'Golden turmeric powder from Erode. Rich in curcumin with natural healing properties.',
      image: turmericPowder,
      price: '₹180/kg',
      rating: 4.9,
      badge: 'Premium'
    },
    {
      id: 3,
      key: 'coriander',
      name: 'Coriander Powder',
      category: 'Ground Spices',
      description: 'Fresh ground coriander powder with authentic aroma. Essential for Indian cooking.',
      image: corianderPowder,
      price: '₹140/kg',
      rating: 4.7,
      badge: null
    },
    {
      id: 4,
      key: 'achar',
      name: 'Achar Masala',
      category: 'Blended Spices',
      description: 'Special blend for pickles. Perfect mix of spices for mango, lemon, and mixed vegetable pickles.',
      image: acharMasala,
      price: '₹200/500g',
      rating: 4.8,
      badge: 'Signature'
    }
  ];

  return (
    <section id="products" className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        {/* Modern Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Our Products
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Spice Collection</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Handpicked from the finest farms across India, each spice tells a story of purity and tradition
            </p>
          </div>
        </div>

        {/* Modern Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-in">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-card/80 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-glow overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden bg-gradient-to-br from-background/30 to-secondary/20 p-6">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge 
                      className="absolute top-4 right-4 bg-gradient-to-r from-accent to-primary text-white shadow-elegant"
                    >
                      Premium
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs bg-secondary/30 text-secondary-foreground border border-border/30">
                      {t(`product.${product.key}.category`, product.category)}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {t(`product.${product.key}.name`, product.name)}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {t(`product.${product.key}.description`, product.description)}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium text-foreground">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Modern Categories Section */}
        <div className="text-center animate-fade-in">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
            <div className="relative bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-elegant max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-8 font-merriweather">
                Explore by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Categories</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { key: 'categories.groundSpices', label: 'Grounded Spices' },
                  { key: 'categories.blendedSpices', label: 'Blended Spices' },
                  { key: 'categories.wholeSpices', label: 'Whole Spices' },
                  { key: 'categories.saltsSeasonings', label: 'Salts & Seasonings' },
                ].map(({ key, label }, index) => (
                  <Button 
                    key={key}
                    variant="outline" 
                    className="group relative bg-background/50 border-border/30 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md"
                    onClick={() => window.location.href = '/coming-soon'}
                  >
                    <span className="relative z-10 group-hover:text-accent transition-colors duration-300">
                      {t(key, label)}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;