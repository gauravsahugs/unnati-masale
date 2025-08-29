import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowLeft, Utensils, Heart, Leaf } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import mangoPickleImage from '@/assets/recipe-mango-pickle.jpg';
import acharMasalaImage from '@/assets/achar-masala.png';

const FLIPKART_URL = 'https://www.flipkart.com/search?q=unnati+masala';

const RecipeMangoPickle = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    window.open(FLIPKART_URL, '_blank', 'noopener,noreferrer');
  };

  const handleMoreRecipes = () => {
    navigate('/all-recipes');
  };

  const ingredients = [
    { name: 'Raw Mangoes', amount: '1 kg', note: 'Firm and sour variety' },
    { name: 'Unnati Achar Masala', amount: '200g', note: 'Our signature blend' },
    { name: 'Mustard Oil', amount: '1 cup', note: 'For authentic taste' },
    { name: 'Salt', amount: '3 tbsp', note: 'To taste' },
    { name: 'Red Chilli Powder', amount: '2 tbsp', note: 'For heat' },
    { name: 'Turmeric Powder', amount: '1 tbsp', note: 'For color & health' },
    { name: 'Fenugreek Seeds', amount: '1 tbsp', note: 'For bitterness' },
    { name: 'Asafoetida', amount: '1/2 tsp', note: 'For digestion' }
  ];

  const instructions = [
    {
      step: 1,
      title: 'Prepare Mangoes',
      description: 'Wash and dry raw mangoes thoroughly. Cut them into small pieces, removing the seed. Ensure pieces are uniform for even pickling.',
      time: '10 mins'
    },
    {
      step: 2,
      title: 'Mix Spices',
      description: 'In a large bowl, combine Unnati Achar Masala with red chilli powder, turmeric powder, salt, fenugreek seeds, and asafoetida.',
      time: '5 mins'
    },
    {
      step: 3,
      title: 'Combine Ingredients',
      description: 'Add mango pieces to the spice mixture and mix well. Ensure all pieces are coated evenly with the spice blend.',
      time: '5 mins'
    },
    {
      step: 4,
      title: 'Add Oil',
      description: 'Heat mustard oil until it starts smoking, then let it cool. Pour over the mango-spice mixture and mix thoroughly.',
      time: '10 mins'
    },
    {
      step: 5,
      title: 'Store & Mature',
      description: 'Transfer to a clean, dry glass jar. Keep in sunlight for 2-3 days, then store in a cool, dry place. Ready to eat after 1 week.',
      time: '1 week'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      title: 'Digestive Health',
      description: 'Fenugreek and asafoetida in our Achar Masala promote healthy digestion and reduce bloating.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-green-500" />,
      title: 'Rich in Vitamins',
      description: 'Raw mangoes are packed with Vitamin C and antioxidants, boosting immunity naturally.'
    },
    {
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      title: 'Traditional Wisdom',
      description: 'This recipe follows centuries-old methods, preserving authentic flavors and health benefits.'
    }
  ];

  const tips = [
    'Use only firm, sour raw mangoes for the best taste and texture',
    'Ensure all utensils and jars are completely dry to prevent spoilage',
    'Store in a cool, dry place away from direct sunlight after initial sun exposure',
    'The pickle tastes best after 2-3 weeks of maturation',
    'Use clean, dry spoons when serving to maintain freshness'
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
              Traditional Recipe
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Authentic <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Mango Pickle</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Learn the traditional method of making mango pickle using our premium Unnati Achar Masala. 
              A time-tested recipe passed down through generations, perfect for preserving the tangy taste of summer.
            </p>
            
            {/* Recipe Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span>Prep Time: 30 mins</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-4 h-4" />
                <span>Serves: 8-10 people</span>
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
                src={mangoPickleImage} 
                alt="Mango Pickle Recipe" 
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Unnati Achar Masala Highlight */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Made with Unnati Achar Masala
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <img 
                  src={acharMasalaImage} 
                  alt="Unnati Achar Masala" 
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Our signature blend of 15+ authentic spices, carefully sourced and ground to perfection for authentic taste.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                  onClick={handleBuyNow}
                >
                  Buy Achar Masala
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
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-accent/5 to-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Make Your Own Pickle?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get our premium Unnati Achar Masala and start your pickling journey today!
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

export default RecipeMangoPickle;
