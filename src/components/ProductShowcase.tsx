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
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge 
                      className="absolute top-3 left-3 bg-primary text-primary-foreground"
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 flex items-center space-x-1 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-spice-turmeric fill-current" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold mb-2 text-card-foreground">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </CardDescription>
                <div className="text-xl font-bold text-primary">
                  {product.price}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Premium Quality Guaranteed
                  </p>
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
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
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