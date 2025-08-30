import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import blackSaltFruitChaatImage from '@/assets/fruit-chaat-recipe.jpg'; // Using placeholder image
import blackSaltImage from '@/assets/black-salt.avif';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+masale+black+salt';

const RecipeBlackSaltFruitChaat = () => {
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
    { name: 'Mixed Seasonal Fruits', amount: '2 cups', note: 'Apple, banana, pomegranate, grapes' },
    { name: 'Unnati Black Salt', amount: '1/2 tsp', note: 'Our authentic black salt' },
    { name: 'Chaat Masala', amount: '1/2 tsp', note: 'For tangy flavor' },
    { name: 'Red Chilli Powder', amount: '1/4 tsp', note: 'For mild heat' },
    { name: 'Lemon Juice', amount: '1 tbsp', note: 'Freshly squeezed' },
    { name: 'Roasted Cumin Powder', amount: '1/4 tsp', note: 'For aroma' },
    { name: 'Fresh Mint Leaves', amount: 'For garnish', note: 'Chopped finely' },
    { name: 'Sev or Nuts', amount: 'For crunch', note: 'Optional topping' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Prepare Fruits',
      description: 'Wash and cut all fruits into bite-sized pieces. Remove seeds and peels as needed.',
      time: '10 mins'
    },
    {
      step: 2,
      title: 'Mix Spices',
      description: 'In a small bowl, combine Unnati Black Salt, chaat masala, red chilli powder, and roasted cumin powder.',
      time: '2 mins'
    },
    {
      step: 3,
      title: 'Season Fruits',
      description: 'Sprinkle the spice mixture over the fruits and drizzle with lemon juice. Toss gently to coat evenly.',
      time: '3 mins'
    },
    {
      step: 4,
      title: 'Garnish and Serve',
      description: 'Garnish with fresh mint leaves and sev/nuts. Serve immediately for the best taste and texture.',
      time: '2 mins'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Digestive Health',
      description: 'Black salt aids digestion and reduces bloating, while fruits provide fiber.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Rich in Nutrients',
      description: 'Mixed fruits provide essential vitamins, minerals, and antioxidants.'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: 'Electrolyte Balance',
      description: 'Black salt provides essential minerals for proper hydration and muscle function.'
    }
  ];

  const tips = [
    'Use fresh, ripe fruits for the best flavor and texture',
    'Adjust spice levels according to your taste preference',
    'Serve immediately to maintain fruit freshness and crunch',
    'Can be customized with any seasonal fruits available',
    'Add a pinch of sugar if fruits are too tart'
  ];

  const servingSuggestions = [
    {
      name: 'Healthy Snack',
      description: 'Perfect mid-day snack for energy boost',
      pairing: 'Green Tea, Herbal Tea, Water'
    },
    {
      name: 'Party Appetizer',
      description: 'Great starter for gatherings and parties',
      pairing: 'Mocktails, Fresh Juices, Light Drinks'
    },
    {
      name: 'Post-Meal Dessert',
      description: 'Light and refreshing dessert option',
      pairing: 'Main Course, Rice Dishes, Breads'
    }
  ];

  const variations = [
    {
      name: 'Spicy Fruit Chaat',
      description: 'Add extra red chilli powder and green chillies for heat',
      ingredients: 'Green Chillies, Extra Red Chilli Powder'
    },
    {
      name: 'Sweet Fruit Chaat',
      description: 'Add honey or jaggery for a sweeter version',
      ingredients: 'Honey/Jaggery, Cardamom Powder'
    },
    {
      name: 'Creamy Fruit Chaat',
      description: 'Add yogurt for a creamy texture',
      ingredients: 'Fresh Yogurt, Saffron Strands'
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
              Healthy Snack
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Black Salt <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Fruit Chaat</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A healthy and flavorful fruit chaat seasoned with our authentic Unnati Black Salt. 
              This refreshing snack combines the sweetness of fruits with the tangy taste of chaat masala.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 17 mins</span>
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
                src={blackSaltFruitChaatImage} 
                alt="Black Salt Fruit Chaat Recipe" 
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
            {/* Unnati Black Salt Highlight */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Made with Unnati Black Salt
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <img 
                  src={blackSaltImage} 
                  alt="Unnati Black Salt" 
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Our authentic black salt is rich in minerals and has a unique sulfurous taste that enhances the flavor of fruits and chaat dishes.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                  onClick={handleBuyNow}
                >
                  Buy Black Salt
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
                    <p className="text-xs text-muted-foreground">Best consumed fresh within 1 hour</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Refrigerator</h4>
                    <p className="text-xs text-muted-foreground">Can be stored for up to 4 hours</p>
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
                Add Authentic Taste to Your Fruits!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Black Salt and create healthy, flavorful fruit chaat that delights your taste buds.
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

export default RecipeBlackSaltFruitChaat;
