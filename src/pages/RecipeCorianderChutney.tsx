import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import corianderChutneyImage from '@/assets/recipe-coriander-chutney.jpg';
import corianderPowderImage from '@/assets/coriander-powder.png';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+coriander+powder';

const RecipeCorianderChutney = () => {
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
    { name: 'Fresh Coriander Leaves', amount: '2 cups', note: 'Washed and roughly chopped' },
    { name: 'Unnati Coriander Powder', amount: '1 tbsp', note: 'Our ground coriander spice' },
    { name: 'Green Chillies', amount: '3-4', note: 'Adjust to taste' },
    { name: 'Ginger', amount: '1 inch', note: 'Fresh, peeled' },
    { name: 'Garlic', amount: '4-5 cloves', note: 'Fresh cloves' },
    { name: 'Lemon Juice', amount: '2 tbsp', note: 'Freshly squeezed' },
    { name: 'Salt', amount: '1 tsp', note: 'To taste' },
    { name: 'Cumin Seeds', amount: '1/2 tsp', note: 'For tempering' },
    { name: 'Mustard Oil', amount: '1 tbsp', note: 'For authentic taste' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Prepare Ingredients',
      description: 'Wash fresh coriander leaves thoroughly and pat dry. Roughly chop the leaves, stems, and roots. Peel and chop ginger and garlic.',
      time: '10 mins'
    },
    {
      step: 2,
      title: 'Blend Base',
      description: 'In a blender, combine fresh coriander leaves, green chillies, ginger, garlic, and lemon juice. Blend to a coarse paste.',
      time: '5 mins'
    },
    {
      step: 3,
      title: 'Add Spices',
      description: 'Add Unnati Coriander Powder and salt to the blended mixture. Blend again until you get a smooth, thick consistency.',
      time: '3 mins'
    },
    {
      step: 4,
      title: 'Temper with Oil',
      description: 'Heat mustard oil in a small pan. Add cumin seeds and let them crackle. Pour this tempering over the chutney and mix well.',
      time: '5 mins'
    },
    {
      step: 5,
      title: 'Adjust & Serve',
      description: 'Taste and adjust salt and lemon juice if needed. Transfer to a serving bowl and garnish with fresh coriander leaves.',
      time: '2 mins'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Digestive Aid',
      description: 'Coriander powder and fresh leaves promote healthy digestion and reduce bloating.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Rich in Antioxidants',
      description: 'Fresh coriander is packed with vitamins A, C, and K, plus powerful antioxidants.'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: 'Detoxifying',
      description: 'Natural detoxifying properties help cleanse the body and improve metabolism.'
    }
  ];

  const tips = [
    'Use fresh, vibrant green coriander leaves for the best flavor',
    'Don\'t discard the stems - they contain the most flavor',
    'Adjust green chillies according to your spice tolerance',
    'Serve immediately for the freshest taste and vibrant green color',
    'Can be stored in refrigerator for up to 2 days in an airtight container'
  ];

  const servingSuggestions = [
    {
      name: 'With Parathas',
      description: 'Perfect accompaniment for stuffed parathas and flatbreads',
      pairing: 'Aloo Paratha, Paneer Paratha'
    },
    {
      name: 'With Rice Dishes',
      description: 'Excellent with biryanis, pulao, and steamed rice',
      pairing: 'Biryani, Jeera Rice, Dal Rice'
    },
    {
      name: 'With Snacks',
      description: 'Great dipping sauce for pakoras, samosas, and other snacks',
      pairing: 'Pakoras, Samosas, Cutlets'
    }
  ];

  const variations = [
    {
      name: 'Mint Coriander Chutney',
      description: 'Add 1 cup fresh mint leaves for a refreshing twist',
      ingredients: 'Fresh Mint Leaves, Extra Lemon Juice'
    },
    {
      name: 'Coconut Coriander Chutney',
      description: 'Add 1/2 cup grated coconut for South Indian flavor',
      ingredients: 'Grated Coconut, Curry Leaves'
    },
    {
      name: 'Spicy Coriander Chutney',
      description: 'Add 1 tbsp Unnati Red Chilli Powder for extra heat',
      ingredients: 'Red Chilli Powder, Black Salt'
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
              Fresh & Flavorful
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Spicy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Coriander Chutney</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Create a vibrant and flavorful chutney using fresh coriander and our ground Unnati Coriander Powder. 
              Perfect accompaniment for any meal, this chutney brings freshness and authentic taste to your table.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 25 mins</span>
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
                src={corianderChutneyImage} 
                alt="Coriander Chutney Recipe" 
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
                Add Freshness to Every Meal!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Coriander Powder and create authentic, flavorful chutneys that elevate your dining experience.
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

export default RecipeCorianderChutney;
