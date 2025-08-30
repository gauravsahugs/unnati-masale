import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import redChilliPotatoWedgesImage from '@/assets/Chilli-Wedges.jpg'; // Using placeholder image
import redChilliPowderImage from '@/assets/red-chilli-powder.png';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+masale+red+chilli+powder';

const RecipeRedChilliPotatoWedges = () => {
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
    { name: 'Potatoes', amount: '4 large', note: 'Russet or Yukon Gold, cut into wedges' },
    { name: 'Unnati Red Chilli Powder', amount: '2 tbsp', note: 'Our ground red chilli spice' },
    { name: 'All-Purpose Flour', amount: '1/2 cup', note: 'For coating' },
    { name: 'Cornstarch', amount: '2 tbsp', note: 'For crispiness' },
    { name: 'Garlic Powder', amount: '1 tsp', note: 'For flavor' },
    { name: 'Onion Powder', amount: '1 tsp', note: 'For aroma' },
    { name: 'Salt', amount: '1 tsp', note: 'To taste' },
    { name: 'Black Pepper', amount: '1/2 tsp', note: 'Freshly ground' },
    { name: 'Oil', amount: 'For frying', note: 'Vegetable or canola oil' },
    { name: 'Fresh Coriander', amount: 'For garnish', note: 'Chopped finely' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Prepare Potatoes',
      description: 'Wash and cut potatoes into wedges. Soak in cold water for 30 minutes to remove excess starch.',
      time: '30 mins'
    },
    {
      step: 2,
      title: 'Make Spice Mix',
      description: 'In a bowl, combine Unnati Red Chilli Powder, flour, cornstarch, garlic powder, onion powder, salt, and black pepper.',
      time: '5 mins'
    },
    {
      step: 3,
      title: 'Coat Wedges',
      description: 'Drain potatoes and pat dry. Toss wedges in the spice mixture until evenly coated.',
      time: '10 mins'
    },
    {
      step: 4,
      title: 'Heat Oil',
      description: 'Heat oil in a deep pan to 350°F (175°C). Ensure oil is hot enough for crispy frying.',
      time: '5 mins'
    },
    {
      step: 5,
      title: 'Fry Wedges',
      description: 'Fry potato wedges in batches until golden brown and crispy. Drain on paper towels.',
      time: '15 mins'
    },
    {
      step: 6,
      title: 'Serve Hot',
      description: 'Garnish with fresh coriander and serve immediately with your favorite dipping sauce.',
      time: '2 mins'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Metabolism Boost',
      description: 'Red chilli powder contains capsaicin which boosts metabolism and aids weight management.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Vitamin C',
      description: 'Red chillies are rich in vitamin C which supports immune system and skin health.'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: 'Pain Relief',
      description: 'Capsaicin in red chillies has natural pain-relieving properties.'
    }
  ];

  const tips = [
    'Use starchy potatoes like Russet for the best crispy texture',
    'Soak potatoes in cold water to remove excess starch',
    'Don\'t overcrowd the pan while frying to maintain oil temperature',
    'Fry in batches for even cooking and crispiness',
    'Serve immediately for the best taste and texture'
  ];

  const servingSuggestions = [
    {
      name: 'With Dips',
      description: 'Perfect with various dipping sauces',
      pairing: 'Ranch, Sour Cream, Ketchup, Chutney'
    },
    {
      name: 'Party Appetizer',
      description: 'Great starter for gatherings',
      pairing: 'Beer, Soft Drinks, Mocktails'
    },
    {
      name: 'Movie Night',
      description: 'Delicious snack for entertainment',
      pairing: 'Hot Chocolate, Coffee, Tea'
    }
  ];

  const variations = [
    {
      name: 'Baked Wedges',
      description: 'Bake instead of fry for a healthier version',
      ingredients: 'Olive Oil, Baking Sheet'
    },
    {
      name: 'Extra Spicy',
      description: 'Add extra red chilli powder and green chillies',
      ingredients: 'Extra Red Chilli Powder, Green Chillies'
    },
    {
      name: 'Cheese Wedges',
      description: 'Add grated cheese for cheesy flavor',
      ingredients: 'Grated Cheese, Extra Spices'
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
              Spicy Snack
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Red Chilli <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Potato Wedges</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Crispy and spicy potato wedges seasoned with our premium Unnati Red Chilli Powder. 
              Perfect as a snack, appetizer, or side dish that packs a flavorful punch.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 67 mins</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-4 h-4" />
                <span>Serves: 6 people</span>
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
                src={redChilliPotatoWedgesImage} 
                alt="Red Chilli Potato Wedges Recipe" 
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
            {/* Unnati Red Chilli Powder Highlight */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Made with Unnati Red Chilli Powder
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <img 
                  src={redChilliPowderImage} 
                  alt="Unnati Red Chilli Powder" 
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Our premium red chilli powder is made from carefully selected red chillies, dried and ground to preserve their natural heat and flavor.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                  onClick={handleBuyNow}
                >
                  Buy Red Chilli Powder
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
                    <h4 className="font-semibold text-foreground text-sm">Immediate Serving</h4>
                    <p className="text-xs text-muted-foreground">Best consumed fresh and hot</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Reheat</h4>
                    <p className="text-xs text-muted-foreground">Can be reheated in oven for 5-10 mins</p>
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
                Add Spicy Heat to Your Snacks!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Red Chilli Powder and create spicy, flavorful potato wedges that everyone will love.
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

export default RecipeRedChilliPotatoWedges;
