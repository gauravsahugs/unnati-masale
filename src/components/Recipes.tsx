import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ArrowRight } from 'lucide-react';
import mangoPickleImage from '@/assets/recipe-mango-pickle.jpg';
import turmericMilkImage from '@/assets/recipe-turmeric-milk.jpg';
import corianderChutneyImage from '@/assets/recipe-coriander-chutney.jpg';
import { useNavigate } from 'react-router-dom';

const Recipes = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      id: 1,
      title: 'Authentic Achar (Pickle) Recipe',
      description: 'Learn the traditional method of making mango pickle using our premium Achar Masala. A time-tested recipe passed down through generations.',
      image: mangoPickleImage,
      category: 'Traditional Recipes',
      readTime: '15 min read',
      difficulty: 'Easy'
    },
    {
      id: 2,
      title: 'Perfect Turmeric Milk for Health',
      description: 'Discover the healing properties of golden milk made with our pure turmeric powder. A natural immunity booster for the whole family.',
      image: turmericMilkImage,
      category: 'Health & Wellness',
      readTime: '5 min read',
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Spicy Coriander Chutney',
      description: 'Create a vibrant and flavorful chutney using fresh coriander and our ground coriander powder. Perfect accompaniment for any meal.',
      image: corianderChutneyImage,
      category: 'Recipes',
      readTime: '10 min read',
      difficulty: 'Easy'
    }
  ];

  const quickRecipes = [
    {
      name: 'Spicy Aloo Bhaji',
      ingredients: 'Potatoes, Achar Masala, Oil',
      time: '15 mins',
      serves: '4 people'
    },
    {
      name: 'Turmeric Milk (Haldi Doodh)',
      ingredients: 'Milk, Turmeric Powder, Honey',
      time: '5 mins',
      serves: '2 people'
    },
    {
      name: 'Coriander Chutney',
      ingredients: 'Fresh Coriander, Coriander Powder',
      time: '10 mins',
      serves: '6 people'
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-merriweather">
            Blog & Recipes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover authentic recipes and traditional cooking wisdom with our premium spices
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge 
                    className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md animate-pulse-glow"
                  >
                    {post.category}
                  </Badge>
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-lg font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
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
                  <Badge variant="outline" className="text-xs bg-secondary/30">
                    {post.difficulty}
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  onClick={() => navigate('/coming-soon')}
                >
                  Read Recipe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Quick Recipes Section */}
        <div className="bg-card rounded-lg p-8 shadow-warm">
          <h3 className="text-2xl font-semibold text-card-foreground mb-6 text-center">Quick Recipe Ideas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickRecipes.map((recipe, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-lg p-4 hover:bg-secondary transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-2">{recipe.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{recipe.ingredients}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{recipe.serves}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="shadow-elegant hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/coming-soon')}
          >
            Explore More Recipes
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Recipes;