import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ArrowRight, BookOpen } from 'lucide-react';
import mangoPickleImage from '@/assets/recipe-mango-pickle.jpg';
import turmericMilkImage from '@/assets/recipe-turmeric-milk.jpg';
import corianderChutneyImage from '@/assets/recipe-coriander-chutney.jpg';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const metaTitle = "Recipes & Blog | Unnati Masale - Authentic Indian Spice Recipes";
const metaDescription =
  "Explore traditional Indian recipes and cooking tips using Unnati Masale's premium spices. Discover authentic achar, turmeric milk, chutneys, and more for your kitchen. Find easy, healthy, and flavorful recipes for every occasion.";

const Recipes = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const blogPosts = [
    {
      id: 1,
      title: 'Authentic Achar (Pickle) Recipe',
      description: 'Learn the traditional method of making mango pickle using our premium Achar Masala. A time-tested recipe passed down through generations.',
      image: mangoPickleImage,
      category: 'Traditional Recipes',
      readTime: '15 min read',
      difficulty: 'Easy',
      route: '/recipe/mango-pickle'
    },
    {
      id: 2,
      title: 'Perfect Turmeric Milk for Health',
      description: 'Discover the healing properties of golden milk made with our pure turmeric powder. A natural immunity booster for the whole family.',
      image: turmericMilkImage,
      category: 'Health & Wellness',
      readTime: '5 min read',
      difficulty: 'Beginner',
      route: '/recipe/turmeric-milk'
    },
    {
      id: 3,
      title: 'Spicy Coriander Chutney',
      description: 'Create a vibrant and flavorful chutney using fresh coriander and our ground coriander powder. Perfect accompaniment for any meal.',
      image: corianderChutneyImage,
      category: 'Recipes',
      readTime: '10 min read',
      difficulty: 'Easy',
      route: '/recipe/coriander-chutney'
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
        <meta property="og:url" content="https://unnatimasale.com/recipes" />
        <meta property="og:image" content="https://unnatimasale.com/og-image.jpg" />
        <link rel="canonical" href="https://unnatimasale.com/recipes" />
        {/* For sitemap discoverability */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section id="recipes" className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-background via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          {/* Modern Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
              <span className="text-accent text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                Recipes & Blog
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
              Traditional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Recipes</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover authentic recipes and traditional cooking wisdom with our premium spices
              </p>
            </div>
          </div>

          {/* Modern Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className="group relative cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => navigate(post.route)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Card className="relative bg-card/80 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-glow overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge 
                        className="absolute top-4 right-4 bg-gradient-to-r from-accent to-primary text-white shadow-elegant"
                      >
                        {post.category}
                      </Badge>
                      <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <CardTitle className="text-lg font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <Badge variant="outline" className="text-xs bg-secondary/30 border-border/30">
                        {post.difficulty}
                      </Badge>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 hover:transform hover:scale-105"
                    >
                      {t('recipes.readRecipe', 'Read Recipe')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          {/* Modern Quick Recipes Section */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>
            
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 shadow-elegant font-semibold px-8 py-4 hover:transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => navigate('/all-recipes')}
            >
              {t('recipes.exploreMore', 'Explore More Recipes')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipes;