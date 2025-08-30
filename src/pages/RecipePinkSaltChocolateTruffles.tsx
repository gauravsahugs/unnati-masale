import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import pinkSaltChocolateTrufflesImage from '@/assets/chocolate truffles.webp'; // Using placeholder image
import pinkSaltImage from '@/assets/pink-salt.jpg';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+masale+pink+salt';

const RecipePinkSaltChocolateTruffles = () => {
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
    { name: 'Dark Chocolate', amount: '200g', note: '70% cocoa, finely chopped' },
    { name: 'Heavy Cream', amount: '1/2 cup', note: 'For ganache' },
    { name: 'Unnati Pink Salt', amount: '1/4 tsp', note: 'Our mineral-rich pink salt' },
    { name: 'Unsalted Butter', amount: '2 tbsp', note: 'Softened' },
    { name: 'Vanilla Extract', amount: '1 tsp', note: 'For flavor' },
    { name: 'Cocoa Powder', amount: 'For dusting', note: 'Unsweetened' },
    { name: 'Sea Salt Flakes', amount: 'For garnish', note: 'Optional topping' },
    { name: 'Nuts', amount: 'For garnish', note: 'Chopped almonds or pistachios' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Prepare Chocolate',
      description: 'Finely chop dark chocolate and place in a heatproof bowl. Ensure chocolate is at room temperature.',
      time: '10 mins'
    },
    {
      step: 2,
      title: 'Heat Cream',
      description: 'Heat heavy cream in a small saucepan until it just starts to simmer. Do not let it boil.',
      time: '5 mins'
    },
    {
      step: 3,
      title: 'Make Ganache',
      description: 'Pour hot cream over chopped chocolate. Let sit for 2 minutes, then stir until smooth and glossy.',
      time: '5 mins'
    },
    {
      step: 4,
      title: 'Add Flavorings',
      description: 'Add Unnati Pink Salt, softened butter, and vanilla extract. Stir until well combined.',
      time: '3 mins'
    },
    {
      step: 5,
      title: 'Chill Mixture',
      description: 'Cover and refrigerate ganache for 2-3 hours until firm enough to shape.',
      time: '3 hours'
    },
    {
      step: 6,
      title: 'Shape Truffles',
      description: 'Using a spoon, scoop small portions and roll into balls. Coat with cocoa powder or garnish as desired.',
      time: '15 mins'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Mineral Rich',
      description: 'Pink salt provides essential minerals like magnesium, calcium, and potassium.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Antioxidant Benefits',
      description: 'Dark chocolate contains powerful antioxidants that support heart health.'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: 'Mood Enhancement',
      description: 'Chocolate contains compounds that can improve mood and reduce stress.'
    }
  ];

  const tips = [
    'Use high-quality dark chocolate for the best flavor',
    'Don\'t let cream boil - it should just simmer',
    'Let ganache chill completely before shaping',
    'Work quickly when shaping to prevent melting',
    'Store in refrigerator for up to 1 week'
  ];

  const servingSuggestions = [
    {
      name: 'After Dinner',
      description: 'Perfect dessert to end a meal',
      pairing: 'Coffee, Tea, Dessert Wine'
    },
    {
      name: 'Gift Giving',
      description: 'Beautiful homemade gift option',
      pairing: 'Gift Box, Ribbon, Decorative Paper'
    },
    {
      name: 'Party Dessert',
      description: 'Elegant addition to dessert tables',
      pairing: 'Fresh Berries, Whipped Cream, Ice Cream'
    }
  ];

  const variations = [
    {
      name: 'Orange Truffles',
      description: 'Add orange zest and orange liqueur for citrus flavor',
      ingredients: 'Orange Zest, Orange Liqueur'
    },
    {
      name: 'Coffee Truffles',
      description: 'Add instant coffee powder for coffee flavor',
      ingredients: 'Instant Coffee Powder, Coffee Liqueur'
    },
    {
      name: 'Mint Truffles',
      description: 'Add mint extract and crushed mint leaves',
      ingredients: 'Mint Extract, Fresh Mint Leaves'
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
              Gourmet Dessert
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Pink Salt <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Chocolate Truffles</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Luxurious chocolate truffles enhanced with our premium Unnati Pink Salt. 
              These elegant treats combine the richness of dark chocolate with the subtle mineral notes of pink salt.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 3.5 hours</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-4 h-4" />
                <span>Serves: 12 people</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Star className="w-4 h-4" />
                <span>Difficulty: Medium</span>
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
                src={pinkSaltChocolateTrufflesImage} 
                alt="Pink Salt Chocolate Truffles Recipe" 
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

            {/* Serving Suggestions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Perfect Pairings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {servingSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">{suggestion.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{suggestion.description}</p>
                      <p className="text-xs text-accent font-medium">Try with: {suggestion.pairing}</p>
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
            {/* Unnati Pink Salt Highlight */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Made with Unnati Pink Salt
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <img 
                  src={pinkSaltImage} 
                  alt="Unnati Pink Salt" 
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Our premium pink salt is rich in essential minerals and trace elements, adding a subtle savory note that enhances the chocolate flavor.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                  onClick={handleBuyNow}
                >
                  Buy Pink Salt
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

            {/* Storage Tips */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500/5 to-blue-500/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Storage & Freshness
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Refrigerator</h4>
                    <p className="text-xs text-muted-foreground">Store in airtight container for up to 1 week</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Freezer</h4>
                    <p className="text-xs text-muted-foreground">Can be frozen for up to 1 month</p>
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
                Create Luxurious Chocolate Treats!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Pink Salt and create elegant chocolate truffles that impress everyone.
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

export default RecipePinkSaltChocolateTruffles;
