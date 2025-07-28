import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import redChilliPowder from '@/assets/red-chilli-powder.png';
import turmericPowder from '@/assets/turmeric-powder.png';
import corianderPowder from '@/assets/coriander-powder.png';
import acharMasala from '@/assets/achar-masala.png';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
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
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-merriweather">
            Our Premium Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked from the finest farms across India, each spice tells a story of purity and tradition
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background/50 to-secondary/30">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge 
                      className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md animate-pulse-glow"
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md">
                    <Star className="w-3 h-3 text-accent fill-current" />
                    <span className="text-xs font-medium text-foreground">{product.rating}</span>
                  </div>
                  
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs bg-secondary/50 text-secondary-foreground">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </CardDescription>
                <div className="text-xl font-bold text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {product.price}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="w-full text-center">
                  <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Premium Quality</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Browse by Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Ground Spices', 'Blended Spices', 'Whole Spices', 'Specialty Masalas'].map((category) => (
              <Button 
                key={category}
                variant="outline" 
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;