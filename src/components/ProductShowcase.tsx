import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import redChilliPowder from '@/assets/red-chilli-powder.png';
import turmericPowder from '@/assets/turmeric-powder.png';
import corianderPowder from '@/assets/coriander-powder.png';
import acharMasala from '@/assets/achar-masala.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const metaTitle = "Premium Indian Spices | Unnati Masale Product Showcase";
const metaDescription =
  "Discover Unnati Masale's premium spice collection: red chilli powder, turmeric, coriander, achar masala and more. Handpicked, pure, and authentic Indian spices for your kitchen. Explore categories and shop the best spices online.";
const metaUrl = "https://unnatimasale.com/products";
const metaImage = "https://unnatimasale.com/og-image.jpg";

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
      price: '₹180/500g',
      rating: 4.8,
      badge: 'Premium'
    },
    {
      id: 2,
      key: 'turmeric',
      name: 'Turmeric Powder',
      category: 'Ground Spices', 
      description: 'Golden turmeric powder from Erode. Rich in curcumin with natural healing properties.',
      image: turmericPowder,
      price: '₹180/500g',
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
      price: '₹120/500g',
      rating: 4.7,
      badge: 'Premium'
    },
    {
      id: 4,
      key: 'achar',
      name: 'Achar Masala',
      category: 'Blended Spices',
      description: 'Special blend for pickles. Perfect mix of spices for mango, lemon, and mixed vegetable pickles.',
      image: acharMasala,
      price: '₹160/500g',
      rating: 4.8,
      badge: 'Premium'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <link rel="canonical" href={metaUrl} />
        {/* For sitemap discoverability */}
        <meta name="robots" content="index, follow" />
      </Helmet>
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
                <Card className="relative bg-gradient-to-br from-[#f8f5f0] via-[#f3e9d2] to-[#e9d5b4] border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 hover:scale-[1.025] rounded-3xl overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative flex items-center justify-center h-56 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fff8f0] via-[#f3e9d2] to-[#e9d5b4]">
                      <div className="absolute inset-0 pointer-events-none z-0">
                        <svg width="100%" height="100%" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <ellipse cx="200" cy="110" rx="180" ry="80" fill="#f3e9d2" fillOpacity="0.7"/>
                          <ellipse cx="200" cy="120" rx="120" ry="40" fill="#e9d5b4" fillOpacity="0.5"/>
                          <ellipse cx="200" cy="100" rx="90" ry="30" fill="#fff8f0" fillOpacity="0.7"/>
                        </svg>
                      </div>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="relative z-10 w-40 h-40 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <Badge 
                          className="absolute top-4 right-4 bg-gradient-to-r from-accent to-primary text-white shadow-elegant z-20"
                        >
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 space-y-4">
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xm bg-secondary/90 text-secondary-foreground border border-border/30">
                        {t(`product.${product.key}.category`, product.category)}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 font-merriweather">
                      {t(`product.${product.key}.name`, product.name)}
                    </CardTitle>
                    <CardDescription className="text-sm text-foreground leading-relaxed">
                      {t(`product.${product.key}.description`, product.description)}
                    </CardDescription>
                    <div className="flex items-center justify-end pt-2">
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
    </>
  );
};

export default ProductShowcase;