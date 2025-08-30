import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import turmericRicePilafImage from '@/assets/Healthy-Turmeric-Rice.jpg'; // Using placeholder image
import turmericPowderImage from '@/assets/turmeric-powder.png';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+masale+turmeric+powder';

const RecipeTurmericRicePilaf = () => {
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
    { name: 'Basmati Rice', amount: '1 cup', note: 'Washed and soaked for 30 minutes' },
    { name: 'Unnati Turmeric Powder', amount: '1 tsp', note: 'Our ground turmeric spice' },
    { name: 'Onion', amount: '1 medium', note: 'Finely chopped' },
    { name: 'Ginger-Garlic Paste', amount: '1 tbsp', note: 'Fresh paste' },
    { name: 'Whole Spices', amount: 'As needed', note: 'Cardamom, cinnamon, cloves' },
    { name: 'Ghee or Oil', amount: '2 tbsp', note: 'For cooking' },
    { name: 'Salt', amount: 'To taste', note: 'Adjust as needed' },
    { name: 'Water', amount: '2 cups', note: 'For cooking rice' },
    { name: 'Fresh Coriander', amount: 'For garnish', note: 'Chopped finely' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Prepare Rice',
      description: 'Wash basmati rice thoroughly and soak in water for 30 minutes. Drain and set aside.',
      time: '30 mins'
    },
    {
      step: 2,
      title: 'Heat Oil',
      description: 'Heat ghee or oil in a heavy-bottomed pan. Add whole spices and let them crackle.',
      time: '2 mins'
    },
    {
      step: 3,
      title: 'Sauté Aromatics',
      description: 'Add chopped onions and sauté until golden brown. Add ginger-garlic paste and cook for 2 minutes.',
      time: '5 mins'
    },
    {
      step: 4,
      title: 'Add Turmeric',
      description: 'Add Unnati Turmeric Powder and stir well. Add drained rice and mix gently.',
      time: '3 mins'
    },
    {
      step: 5,
      title: 'Cook Rice',
      description: 'Add water and salt. Bring to boil, then simmer covered until rice is cooked and fluffy.',
      time: '20 mins'
    },
    {
      step: 6,
      title: 'Garnish and Serve',
      description: 'Garnish with fresh coriander leaves and serve hot with your favorite curry.',
      time: '2 mins'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Anti-Inflammatory',
      description: 'Turmeric contains curcumin, a powerful anti-inflammatory compound that supports joint health.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Digestive Health',
      description: 'Turmeric aids digestion and helps maintain a healthy gut microbiome.'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: 'Immune Support',
      description: 'Turmeric boosts immunity and has natural antibacterial properties.'
    }
  ];

  const tips = [
    'Use aged basmati rice for better aroma and texture',
    'Don\'t stir rice too much while cooking to avoid breaking grains',
    'Let rice rest for 5 minutes after cooking before fluffing',
    'Adjust turmeric quantity based on your taste preference',
    'Add saffron strands for extra flavor and color'
  ];

  const servingSuggestions = [
    {
      name: 'With Curries',
      description: 'Perfect accompaniment for rich Indian curries',
      pairing: 'Butter Chicken, Paneer Curry, Dal Makhani'
    },
    {
      name: 'With Raita',
      description: 'Serve with cooling yogurt-based side dishes',
      pairing: 'Cucumber Raita, Boondi Raita, Mint Raita'
    },
    {
      name: 'With Pickles',
      description: 'Great with tangy pickles and chutneys',
      pairing: 'Mango Pickle, Green Chutney, Onion Salad'
    }
  ];

  const variations = [
    {
      name: 'Saffron Turmeric Rice',
      description: 'Add saffron strands for a luxurious golden color and aroma',
      ingredients: 'Saffron Strands, Warm Milk'
    },
    {
      name: 'Vegetable Turmeric Rice',
      description: 'Add mixed vegetables for a complete meal',
      ingredients: 'Carrots, Peas, Beans, Corn'
    },
    {
      name: 'Nuts Turmeric Rice',
      description: 'Add nuts and dried fruits for richness',
      ingredients: 'Cashews, Raisins, Almonds'
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
              Aromatic Rice Dish
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Turmeric <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Rice Pilaf</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A fragrant and flavorful rice dish made with our premium Unnati Turmeric Powder. 
              This aromatic pilaf is not only delicious but also packed with health benefits.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 62 mins</span>
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
                src={turmericRicePilafImage} 
                alt="Turmeric Rice Pilaf Recipe" 
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
                  Our premium turmeric powder is made from carefully selected rhizomes, ground to perfection to preserve its natural color, aroma, and health benefits.
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
                    <p className="text-xs text-muted-foreground">Store in airtight container for up to 3 days</p>
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
                Add Golden Goodness to Your Rice!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Turmeric Powder and create aromatic, healthy rice dishes that delight your family.
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

export default RecipeTurmericRicePilaf;
