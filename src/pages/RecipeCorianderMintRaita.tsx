import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import corianderMintRaitaImage from '@/assets/Raita-Recipe.jpg'; // Using placeholder image
import corianderPowderImage from '@/assets/coriander-powder.png';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+coriander+powder';

const RecipeCorianderMintRaita = () => {
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
    { name: 'Fresh Yogurt', amount: '2 cups', note: 'Thick, chilled yogurt' },
    { name: 'Unnati Coriander Powder', amount: '1 tsp', note: 'Our ground coriander spice' },
    { name: 'Fresh Mint Leaves', amount: '1/2 cup', note: 'Finely chopped' },
    { name: 'Fresh Coriander Leaves', amount: '1/4 cup', note: 'Finely chopped' },
    { name: 'Cucumber', amount: '1 small', note: 'Grated and squeezed' },
    { name: 'Onion', amount: '1 small', note: 'Finely chopped' },
    { name: 'Green Chillies', amount: '2', note: 'Finely chopped (optional)' },
    { name: 'Roasted Cumin Powder', amount: '1/2 tsp', note: 'For aroma' },
    { name: 'Salt', amount: 'To taste', note: 'Adjust as needed' },
    { name: 'Black Salt', amount: '1/4 tsp', note: 'For authentic taste' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Prepare Yogurt',
      description: 'Whisk the yogurt until smooth and creamy. Ensure it\'s well-chilled for the best taste.',
      time: '5 mins'
    },
    {
      step: 2,
      title: 'Prepare Vegetables',
      description: 'Grate cucumber and squeeze out excess water. Finely chop mint, coriander, onion, and green chillies.',
      time: '10 mins'
    },
    {
      step: 3,
      title: 'Mix Ingredients',
      description: 'Add all chopped vegetables to the yogurt. Mix gently to combine without making it watery.',
      time: '3 mins'
    },
    {
      step: 4,
      title: 'Add Spices',
      description: 'Add Unnati Coriander Powder, roasted cumin powder, salt, and black salt. Mix well.',
      time: '2 mins'
    },
    {
      step: 5,
      title: 'Chill and Serve',
      description: 'Refrigerate for 30 minutes to enhance flavors. Garnish with fresh mint leaves before serving.',
      time: '30 mins'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Digestive Health',
      description: 'Yogurt and coriander powder promote healthy digestion and gut health.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Cooling Effect',
      description: 'Mint and cucumber provide natural cooling properties, perfect for hot weather.'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: 'Probiotic Benefits',
      description: 'Yogurt contains beneficial bacteria that support immune system and gut health.'
    }
  ];

  const tips = [
    'Use thick, fresh yogurt for the best consistency',
    'Squeeze cucumber well to prevent watery raita',
    'Adjust green chillies according to your spice tolerance',
    'Serve chilled for the most refreshing taste',
    'Can be prepared a few hours ahead and refrigerated'
  ];

  const servingSuggestions = [
    {
      name: 'With Biryani',
      description: 'Perfect cooling accompaniment for spicy biryanis',
      pairing: 'Chicken Biryani, Vegetable Biryani, Pulao'
    },
    {
      name: 'With Parathas',
      description: 'Great side dish for stuffed parathas',
      pairing: 'Aloo Paratha, Paneer Paratha, Mixed Paratha'
    },
    {
      name: 'With Rice Dishes',
      description: 'Excellent with any rice-based main course',
      pairing: 'Jeera Rice, Lemon Rice, Coconut Rice'
    }
  ];

  const variations = [
    {
      name: 'Boondi Raita',
      description: 'Add crispy boondi for extra texture and crunch',
      ingredients: 'Boondi, Extra Mint Leaves'
    },
    {
      name: 'Fruit Raita',
      description: 'Add seasonal fruits for a sweet and tangy version',
      ingredients: 'Pomegranate, Grapes, Apple'
    },
    {
      name: 'Spicy Raita',
      description: 'Add extra spices and green chillies for heat',
      ingredients: 'Extra Green Chillies, Red Chilli Powder'
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
              Cooling Side Dish
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Coriander Mint <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Raita</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A refreshing and cooling raita made with fresh mint, coriander, and our premium Unnati Coriander Powder. 
              Perfect accompaniment for spicy dishes, this raita provides a perfect balance of flavors.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 50 mins</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-4 h-4" />
                <span>Serves: 6 people</span>
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
                src={corianderMintRaitaImage} 
                alt="Coriander Mint Raita Recipe" 
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
            {/* Unnati Coriander Powder Highlight */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Made with Unnati Coriander Powder
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <img 
                  src={corianderPowderImage} 
                  alt="Unnati Coriander Powder" 
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Our ground coriander powder is made from premium quality coriander seeds, carefully roasted and ground to preserve authentic flavor and aroma.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                  onClick={handleBuyNow}
                >
                  Buy Coriander Powder
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
                Add Freshness to Your Meals!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Coriander Powder and create refreshing, flavorful raitas that complement any meal.
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

export default RecipeCorianderMintRaita;
