import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import turmericMilkImage from '@/assets/recipe-turmeric-milk.jpg';
import turmericPowderImage from '@/assets/turmeric-powder.png';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+turmeric+powder';

const RecipeTurmericMilk = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    window.open(FLIPKART_URL, '_blank', 'noopener,noreferrer');
  };

  const handleShopUnnatiSpices = () => {
    window.open(FLIPKART_URL, '_blank', 'noopener,noreferrer');
  };

  const handleViewMoreRecipes = () => {
    navigate('/all-recipes');
  };

  const ingredients = [
    { name: 'Milk', amount: '2 cups', note: 'Full-fat milk for best results' },
    { name: 'Unnati Turmeric Powder', amount: '1 tsp', note: 'Our pure, organic turmeric' },
    { name: 'Honey', amount: '2 tbsp', note: 'Natural sweetener' },
    { name: 'Black Pepper', amount: '1/4 tsp', note: 'Enhances turmeric absorption' },
    { name: 'Ginger', amount: '1/2 inch', note: 'Fresh, grated' },
    { name: 'Cinnamon', amount: '1/4 tsp', note: 'For warmth and flavor' },
    { name: 'Cardamom', amount: '2 pods', note: 'Crushed for aroma' },
    { name: 'Ghee', amount: '1 tsp', note: 'Optional, for richness' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Heat Milk',
      description: 'Pour milk into a heavy-bottomed pan and heat over medium flame until it starts to simmer. Stir occasionally to prevent sticking.',
      time: '5 mins'
    },
    {
      step: 2,
      title: 'Add Spices',
      description: 'Add Unnati Turmeric Powder, black pepper, grated ginger, cinnamon, and crushed cardamom pods to the simmering milk.',
      time: '2 mins'
    },
    {
      step: 3,
      title: 'Simmer & Stir',
      description: 'Reduce heat to low and simmer for 5-7 minutes, stirring continuously. This allows spices to infuse and milk to thicken slightly.',
      time: '7 mins'
    },
    {
      step: 4,
      title: 'Add Sweetener',
      description: 'Remove from heat and add honey. Stir well until honey dissolves completely. Add ghee if desired for extra richness.',
      time: '2 mins'
    },
    {
      step: 5,
      title: 'Strain & Serve',
      description: 'Strain the mixture through a fine sieve to remove ginger and cardamom pieces. Serve hot in a warm cup.',
      time: '1 min'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Immunity Booster',
      description: 'Curcumin in our turmeric powder is a powerful antioxidant that strengthens the immune system.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Anti-Inflammatory',
      description: 'Natural anti-inflammatory properties help reduce inflammation and promote healing.'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: 'Digestive Health',
      description: 'Ginger and cardamom aid digestion while turmeric soothes the stomach.'
    }
  ];

  const tips = [
    'Use full-fat milk for better absorption of turmeric compounds',
    'Add black pepper to enhance curcumin absorption by up to 2000%',
    'Drink on an empty stomach in the morning for maximum benefits',
    'Avoid boiling milk too vigorously to preserve nutrients',
    'Store leftover turmeric milk in refrigerator for up to 2 days'
  ];

  const variations = [
    {
      name: 'Golden Latte',
      description: 'Add 1/4 tsp of Unnati Garam Masala for a warming winter drink',
      ingredients: 'Garam Masala, Vanilla extract'
    },
    {
      name: 'Bedtime Blend',
      description: 'Add 1/4 tsp of nutmeg and 1/2 tsp of ashwagandha powder for better sleep',
      ingredients: 'Nutmeg, Ashwagandha'
    },
    {
      name: 'Energy Boost',
      description: 'Add 1/4 tsp of Unnati Red Chilli Powder for an energizing kick',
      ingredients: 'Red Chilli Powder, Lemon juice'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/#recipes">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Recipes
            </Button>
          </Link>
        </div>

        {/* Recipe Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="text-accent text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Health & Wellness
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Turmeric Milk</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Discover the healing properties of golden milk made with our pure Unnati Turmeric Powder. 
              A natural immunity booster and wellness drink that has been cherished in Ayurveda for centuries.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 15 mins</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-4 h-4" />
                <span>Serves: 2 people</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Star className="w-4 h-4" />
                <span>Difficulty: Beginner</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Recipe Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recipe Image */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <img 
                src={turmericMilkImage} 
                alt="Turmeric Milk Recipe" 
                className="w-full h-64 md:h-80 object-cover"
              />
            </Card>

            {/* Ingredients */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Utensils className="w-6 h-6 text-accent" />
                  Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-semibold text-foreground">{ingredient.name}</p>
                        <p className="text-sm text-muted-foreground">{ingredient.note}</p>
                      </div>
                      <Badge variant="secondary" className="font-mono">
                        {ingredient.amount}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Step-by-Step Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {instructions.map((instruction) => (
                    <div key={instruction.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {instruction.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{instruction.title}</h4>
                        <p className="text-muted-foreground mb-2">{instruction.description}</p>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {instruction.time}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recipe Variations */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Recipe Variations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {variations.map((variation, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">{variation.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{variation.description}</p>
                      <p className="text-xs text-accent font-medium">Extra: {variation.ingredients}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Unnati Turmeric Powder Highlight */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Made with Unnati Turmeric Powder
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <img 
                  src={turmericPowderImage} 
                  alt="Unnati Turmeric Powder" 
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Our pure, organic turmeric powder is sourced from the finest farms and contains high curcumin content for maximum health benefits.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                  onClick={handleBuyNow}
                >
                  Buy Turmeric Powder
                </Button>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Health Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {benefit.icon}
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{benefit.title}</h4>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Best Time to Drink */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-500/5 to-orange-500/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Best Time to Drink
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-500/10 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Morning</h4>
                    <p className="text-xs text-muted-foreground">On empty stomach for immunity boost</p>
                  </div>
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Evening</h4>
                    <p className="text-xs text-muted-foreground">2-3 hours before bedtime for better sleep</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-accent/5 to-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Start Your Wellness Journey Today!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Turmeric Powder and experience the power of natural healing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                  onClick={handleShopUnnatiSpices}
                >
                  Shop Unnati Spices
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleViewMoreRecipes}
                >
                  View More Recipes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecipeTurmericMilk;
