import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import redChilliImage from '@/assets/red-chilli-powder.png';
import redChilliPickle from '@/assets/red chilli pickle.jpeg';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+red+chilli+powder';

const RecipeRedChilliPickle = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    window.open(FLIPKART_URL, '_blank', 'noopener,noreferrer');
  };

  const handleMoreRecipes = () => {
    navigate('/all-recipes');
  };

  const ingredients = [
    { name: 'Fresh Red Chillies', amount: '500g', note: 'Long, thick variety' },
    { name: 'Unnati Red Chilli Powder', amount: '3 tbsp', note: 'Our premium ground chilli' },
    { name: 'Mustard Oil', amount: '1 cup', note: 'For authentic taste' },
    { name: 'Salt', amount: '4 tbsp', note: 'To taste' },
    { name: 'Turmeric Powder', amount: '2 tbsp', note: 'For color & preservation' },
    { name: 'Fenugreek Seeds', amount: '2 tbsp', note: 'For bitterness' },
    { name: 'Asafoetida', amount: '1 tsp', note: 'For digestion' },
    { name: 'Vinegar', amount: '1/2 cup', note: 'For tanginess' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Prepare Chillies',
      description: 'Wash and dry red chillies thoroughly. Slit them lengthwise without breaking apart. Remove seeds if you prefer milder heat.',
      time: '15 mins'
    },
    {
      step: 2,
      title: 'Mix Spices',
      description: 'In a large bowl, combine Unnati Red Chilli Powder, turmeric powder, salt, fenugreek seeds, and asafoetida.',
      time: '5 mins'
    },
    {
      step: 3,
      title: 'Stuff Chillies',
      description: 'Carefully stuff the spice mixture into the slit chillies. Ensure each chilli is well-coated with the spice blend.',
      time: '20 mins'
    },
    {
      step: 4,
      title: 'Add Oil & Vinegar',
      description: 'Heat mustard oil until smoking, then cool. Add vinegar and pour over the stuffed chillies. Mix gently.',
      time: '10 mins'
    },
    {
      step: 5,
      title: 'Store & Mature',
      description: 'Transfer to clean glass jars. Keep in sunlight for 3-4 days, then store in cool place. Ready after 1 week.',
      time: '1 week'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Metabolism Boost',
      description: 'Capsaicin in red chillies increases metabolic rate and helps in weight management.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Rich in Vitamins',
      description: 'Red chillies are packed with Vitamin C, A, and antioxidants for immune support.'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: 'Pain Relief',
      description: 'Natural pain-relieving properties help with arthritis and muscle pain.'
    }
  ];

  const tips = [
    'Use fresh, firm red chillies for the best texture and flavor',
    'Adjust the amount of chilli powder based on your heat tolerance',
    'Ensure all utensils are completely dry to prevent spoilage',
    'Store in airtight containers away from direct sunlight',
    'The pickle develops better flavor after 2-3 weeks of maturation'
  ];

  const servingSuggestions = [
    {
      name: 'With Rice',
      description: 'Perfect accompaniment for steamed rice and dal',
      pairing: 'Dal Rice, Jeera Rice, Plain Rice'
    },
    {
      name: 'With Parathas',
      description: 'Excellent with stuffed parathas and flatbreads',
      pairing: 'Aloo Paratha, Paneer Paratha, Gobi Paratha'
    },
    {
      name: 'As Condiment',
      description: 'Great addition to any meal for extra heat',
      pairing: 'Biryani, Pulao, Curries'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/all-recipes">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to All Recipes
            </Button>
          </Link>
        </div>

        {/* Recipe Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="text-accent text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Pickles & Preserves
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Spicy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Red Chilli Pickle</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Create a fiery and flavorful red chilli pickle using our premium Unnati Red Chilli Powder. 
              This traditional recipe brings authentic heat and taste to your meals while preserving the goodness of fresh chillies.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 45 mins</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-4 h-4" />
                <span>Serves: 6-8 people</span>
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
                src={redChilliPickle} 
                alt="Red Chilli Pickle Recipe" 
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
                  src={redChilliImage} 
                  alt="Unnati Red Chilli Powder" 
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Our premium red chilli powder is made from carefully selected chillies, ground to perfection for consistent heat and authentic flavor.
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

            {/* Heat Level Guide */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500/5 to-orange-500/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Heat Level Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">High Heat</h4>
                    <p className="text-xs text-muted-foreground">Perfect for spice lovers</p>
                  </div>
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Adjustable</h4>
                    <p className="text-xs text-muted-foreground">Remove seeds for milder taste</p>
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
                Add Fire to Your Meals!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Red Chilli Powder and create authentic, spicy pickles that bring heat and flavor to every bite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                  onClick={handleBuyNow}
                >
                  Shop Unnati Spices
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleMoreRecipes}
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

export default RecipeRedChilliPickle;
