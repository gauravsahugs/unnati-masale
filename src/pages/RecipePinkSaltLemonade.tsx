import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf, Zap, Droplets } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import pinkSaltLemonadeImage from '@/assets/Pink-Salt-lemonade.webp'; // Using placeholder image
import pinkSaltImage from '@/assets/pink-salt.jpg';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+masale+pink+salt';

const RecipePinkSaltLemonade = () => {
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
    { name: 'Fresh Lemons', amount: '4-5 medium', note: 'Room temperature for better juicing' },
    { name: 'Unnati Pink Salt', amount: '1/4 tsp', note: 'Our mineral-rich pink salt' },
    { name: 'Water', amount: '4 cups', note: 'Filtered or purified water' },
    { name: 'Honey or Sugar', amount: '2-3 tbsp', note: 'Adjust to taste preference' },
    { name: 'Mint Leaves', amount: 'For garnish', note: 'Fresh mint sprigs' },
    { name: 'Ice Cubes', amount: 'As needed', note: 'For serving chilled' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Prepare Lemons',
      description: 'Roll lemons on counter to soften them. This makes juicing easier and yields more juice.',
      time: '2 mins'
    },
    {
      step: 2,
      title: 'Extract Juice',
      description: 'Cut lemons in half and juice them thoroughly. Strain to remove seeds and pulp for smooth lemonade.',
      time: '5 mins'
    },
    {
      step: 3,
      title: 'Mix Ingredients',
      description: 'In a large pitcher, combine lemon juice, water, honey/sugar, and Unnati Pink Salt. Stir well until dissolved.',
      time: '3 mins'
    },
    {
      step: 4,
      title: 'Chill and Garnish',
      description: 'Refrigerate for 30 minutes or add ice cubes. Garnish with fresh mint leaves for added freshness.',
      time: '30 mins'
    },
    {
      step: 5,
      title: 'Serve Fresh',
      description: 'Pour into glasses with ice cubes and serve immediately for the best taste and refreshment.',
      time: '2 mins'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Electrolyte Balance',
      description: 'Pink salt provides essential minerals like sodium, potassium, and magnesium for proper hydration.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Vitamin C Boost',
      description: 'Fresh lemon juice is rich in vitamin C, supporting immune system and skin health.'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: 'Digestive Aid',
      description: 'Lemon juice stimulates digestive enzymes and pink salt helps maintain stomach acid balance.'
    }
  ];

  const tips = [
    'Use room temperature lemons for easier juicing and better yield',
    'Adjust sweetness and saltiness according to your taste preference',
    'For a spicier version, add a pinch of black pepper or ginger',
    'Store in refrigerator for up to 2 days for best taste',
    'Use fresh mint leaves for the best garnish and aroma'
  ];

  const servingSuggestions = [
    {
      name: 'Summer Refreshment',
      description: 'Perfect cooling drink for hot summer days',
      pairing: 'BBQ, Grilled Meats, Summer Salads'
    },
    {
      name: 'Post-Workout Recovery',
      description: 'Excellent electrolyte replacement after exercise',
      pairing: 'Protein Shakes, Energy Bars, Light Snacks'
    },
    {
      name: 'Party Beverage',
      description: 'Great addition to any party or gathering',
      pairing: 'Appetizers, Finger Foods, Desserts'
    }
  ];

  const variations = [
    {
      name: 'Ginger Lemonade',
      description: 'Add fresh ginger juice for extra zing and digestive benefits',
      ingredients: 'Fresh Ginger Juice, Extra Honey'
    },
    {
      name: 'Cucumber Lemonade',
      description: 'Blend cucumber for a cooling and hydrating effect',
      ingredients: 'Fresh Cucumber, Extra Water'
    },
    {
      name: 'Berry Lemonade',
      description: 'Add strawberries or raspberries for fruity flavor',
      ingredients: 'Fresh Berries, Berry Syrup'
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
              Refreshing Beverage
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Pink Salt <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Lemonade</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A refreshing and hydrating lemonade enhanced with mineral-rich pink salt. 
              Perfect for hot summer days and post-workout recovery, this drink provides essential electrolytes and vitamin C.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 42 mins</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-4 h-4" />
                <span>Serves: 4 people</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Star className="w-4 h-4" />
                <span>Difficulty: Easy</span>
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
                src={pinkSaltLemonadeImage} 
                alt="Pink Salt Lemonade Recipe" 
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
                  Our premium pink salt is rich in essential minerals and trace elements, providing authentic taste and health benefits to your beverages.
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
                    <p className="text-xs text-muted-foreground">Store in airtight container for up to 2 days</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Fresh Serving</h4>
                    <p className="text-xs text-muted-foreground">Best consumed within 24 hours</p>
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
                Refresh Your Day with Pink Salt!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Pink Salt and create refreshing, healthy beverages that keep you hydrated and energized.
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

export default RecipePinkSaltLemonade;
