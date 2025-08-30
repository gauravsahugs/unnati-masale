import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import garamMasalaRoastedNutsImage from '@/assets/Masala-Roasted-Nuts-Recipe-6.webp'; // Using placeholder image
import garamMasalaImage from '@/assets/garam-masala-spice.png';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+masale+garam+masala';

const RecipeGaramMasalaRoastedNuts = () => {
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
    { name: 'Mixed Nuts', amount: '2 cups', note: 'Almonds, cashews, walnuts, pistachios' },
    { name: 'Unnati Garam Masala', amount: '1 tbsp', note: 'Our aromatic spice blend' },
    { name: 'Ghee or Oil', amount: '2 tbsp', note: 'For roasting' },
    { name: 'Salt', amount: '1/2 tsp', note: 'To taste' },
    { name: 'Black Pepper', amount: '1/4 tsp', note: 'Freshly ground' },
    { name: 'Turmeric Powder', amount: '1/4 tsp', note: 'For color and health' },
    { name: 'Red Chilli Powder', amount: '1/4 tsp', note: 'For mild heat' },
    { name: 'Lemon Juice', amount: '1 tbsp', note: 'Freshly squeezed' },
    { name: 'Fresh Curry Leaves', amount: '10-12', note: 'For aroma (optional)' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Prepare Nuts',
      description: 'Mix all nuts in a bowl. You can use any combination of almonds, cashews, walnuts, and pistachios.',
      time: '5 mins'
    },
    {
      step: 2,
      title: 'Heat Oil',
      description: 'Heat ghee or oil in a large pan over medium heat. Add curry leaves if using and let them crackle.',
      time: '2 mins'
    },
    {
      step: 3,
      title: 'Add Spices',
      description: 'Add Unnati Garam Masala, turmeric powder, red chilli powder, salt, and black pepper. Stir for 30 seconds.',
      time: '1 min'
    },
    {
      step: 4,
      title: 'Roast Nuts',
      description: 'Add mixed nuts and roast on medium heat, stirring constantly until golden brown and fragrant.',
      time: '8 mins'
    },
    {
      step: 5,
      title: 'Finish and Cool',
      description: 'Drizzle lemon juice, mix well, and transfer to a plate. Let cool completely before storing.',
      time: '5 mins'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Heart Health',
      description: 'Nuts are rich in healthy fats and antioxidants that support cardiovascular health.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Digestive Aid',
      description: 'Garam masala spices aid digestion and help reduce bloating and gas.'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: 'Energy Boost',
      description: 'Nuts provide sustained energy and essential nutrients for daily activities.'
    }
  ];

  const tips = [
    'Use fresh, high-quality nuts for the best taste and texture',
    'Don\'t overcrowd the pan while roasting to ensure even cooking',
    'Stir constantly to prevent burning and ensure even roasting',
    'Let nuts cool completely before storing to maintain crispiness',
    'Adjust spice levels according to your taste preference'
  ];

  const servingSuggestions = [
    {
      name: 'Party Snack',
      description: 'Perfect appetizer for gatherings and parties',
      pairing: 'Mocktails, Fresh Juices, Tea'
    },
    {
      name: 'Movie Night',
      description: 'Great healthy alternative to popcorn',
      pairing: 'Hot Chocolate, Coffee, Soft Drinks'
    },
    {
      name: 'Office Snack',
      description: 'Nutritious mid-day energy boost',
      pairing: 'Green Tea, Herbal Tea, Water'
    }
  ];

  const variations = [
    {
      name: 'Sweet Spicy Nuts',
      description: 'Add honey or jaggery for a sweet and spicy version',
      ingredients: 'Honey/Jaggery, Extra Garam Masala'
    },
    {
      name: 'Herb Roasted Nuts',
      description: 'Add fresh herbs like rosemary or thyme',
      ingredients: 'Fresh Herbs, Garlic Powder'
    },
    {
      name: 'Citrus Nuts',
      description: 'Add orange or lime zest for citrus flavor',
      ingredients: 'Citrus Zest, Extra Lemon Juice'
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
            Garam Masala <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Roasted Nuts</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A flavorful and healthy snack made with mixed nuts and our aromatic Unnati Garam Masala. 
              Perfect for parties, movie nights, or as a nutritious energy boost throughout the day.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 21 mins</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-4 h-4" />
                <span>Serves: 8 people</span>
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
                src={garamMasalaRoastedNutsImage} 
                alt="Garam Masala Roasted Nuts Recipe" 
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
            {/* Unnati Garam Masala Highlight */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Made with Unnati Garam Masala
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <img 
                  src={garamMasalaImage} 
                  alt="Unnati Garam Masala" 
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Our premium garam masala is a carefully crafted blend of aromatic spices, roasted and ground to perfection for authentic Indian flavor.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                  onClick={handleBuyNow}
                >
                  Buy Garam Masala
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
                    <h4 className="font-semibold text-foreground text-sm">Airtight Container</h4>
                    <p className="text-xs text-muted-foreground">Store in airtight container for up to 2 weeks</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Refrigerator</h4>
                    <p className="text-xs text-muted-foreground">Can be stored for up to 1 month</p>
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
                Add Aromatic Flavor to Your Snacks!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Garam Masala and create flavorful, healthy snacks that everyone will love.
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

export default RecipeGaramMasalaRoastedNuts;
