import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, Users, Star, ArrowLeft, Search, Filter, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
//pouches image
import acharMasalaImage from '@/assets/achar-masala.png';
import garamMasalaImage from '@/assets/garam-masala-spice.png';
import turmericPowderImage from '@/assets/turmeric-powder.png';
import corianderPowderImage from '@/assets/coriander-powder.png';
import redChilliPowderImage from '@/assets/red-chilli-powder.png';
import blackSaltImage from '@/assets/black-salt.avif';
import pinkSaltImage from '@/assets/pink-salt.jpg';

//dish images
import mangoPickleImage from '@/assets/recipe-mango-pickle.jpg';
import turmericMilkImage from '@/assets/recipe-turmeric-milk.jpg';
import corianderChutneyImage from '@/assets/recipe-coriander-chutney.jpg';
import masalaTea from '@/assets/garam masala tea.jpeg';
import pinkSaltLemonade from '@/assets/Pink-Salt-lemonade.webp';
import pinkSaltTruffles from '@/assets/chocolate truffles.webp';
import redChilliPickle from '@/assets/red chilli pickle.jpeg';
import turmericPowderRice from '@/assets/Healthy-Turmeric-Rice.jpg';
import corianderRaita from '@/assets/Raita-Recipe.jpg';
import redchillipotatowedges from '@/assets/Chilli-Wedges.jpg';
import roastedPeanuts from '@/assets/Masala-Roasted-Nuts-Recipe-6.webp';
import fruitChaat from '@/assets/fruit-chaat-recipe.jpg';

const AllRecipes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const allRecipes = [
    {
      id: 1,
      title: 'Authentic Mango Pickle',
      description: 'Traditional mango pickle using our premium Achar Masala blend',
      image: mangoPickleImage,
      category: 'Pickles & Preserves',
      difficulty: 'Easy',
      prepTime: '30 mins',
      serves: '8-10 people',
      spice: 'Achar Masala',
      spiceImage: acharMasalaImage,
      route: '/recipe/mango-pickle'
    },
    {
      id: 2,
      title: 'Golden Turmeric Milk',
      description: 'Healing turmeric milk with immunity-boosting properties',
      image: turmericMilkImage,
      category: 'Health & Wellness',
      difficulty: 'Beginner',
      prepTime: '15 mins',
      serves: '2 people',
      spice: 'Turmeric Powder',
      spiceImage: turmericPowderImage,
      route: '/recipe/turmeric-milk'
    },
    {
      id: 3,
      title: 'Fresh Coriander Chutney',
      description: 'Vibrant chutney perfect for any meal accompaniment',
      image: corianderChutneyImage,
      category: 'Chutneys & Dips',
      difficulty: 'Easy',
      prepTime: '25 mins',
      serves: '6 people',
      spice: 'Coriander Powder',
      spiceImage: corianderPowderImage,
      route: '/recipe/coriander-chutney'
    },
    {
      id: 4,
      title: 'Spicy Red Chilli Pickle',
      description: 'Fiery red chilli pickle with authentic Indian flavors',
      image: redChilliPickle,
      category: 'Pickles & Preserves',
      difficulty: 'Medium',
      prepTime: '45 mins',
      serves: '6-8 people',
      spice: 'Red Chilli Powder',
      spiceImage: redChilliPowderImage,
      route: '/recipe/red-chilli-pickle'
    },
    {
      id: 5,
      title: 'Aromatic Garam Masala Tea',
      description: 'Warming tea with our signature Garam Masala blend',
      image: masalaTea,
      category: 'Beverages',
      difficulty: 'Beginner',
      prepTime: '10 mins',
      serves: '2 people',
      spice: 'Garam Masala',
      spiceImage: garamMasalaImage,
      route: '/recipe/garam-masala-tea'
    },
    {
      id: 6,
      title: 'Pink Salt Lemonade',
      description: 'Refreshing lemonade with mineral-rich pink salt',
      image: pinkSaltLemonade,
      category: 'Beverages',
      difficulty: 'Beginner',
      prepTime: '5 mins',
      serves: '4 people',
      spice: 'Pink Salt',
      spiceImage: pinkSaltImage,
      route: '/recipe/pink-salt-lemonade'
    },
    {
      id: 7,
      title: 'Black Salt Fruit Chaat',
      description: 'Tangy fruit chaat seasoned with black salt',
      image: fruitChaat,
      category: 'Snacks & Appetizers',
      difficulty: 'Easy',
      prepTime: '20 mins',
      serves: '4 people',
      spice: 'Black Salt',
      spiceImage: blackSaltImage,
      route: '/recipe/black-salt-fruit-chaat'
    },
    {
      id: 8,
      title: 'Turmeric Rice Pilaf',
      description: 'Fragrant rice pilaf with golden turmeric and spices',
      image: turmericPowderRice,
      category: 'Main Dishes',
      difficulty: 'Medium',
      prepTime: '35 mins',
      serves: '6 people',
      spice: 'Turmeric Powder',
      spiceImage: turmericPowderImage,
      route: '/recipe/turmeric-rice-pilaf'
    },
    {
      id: 9,
      title: 'Coriander Mint Raita',
      description: 'Cooling yogurt raita with fresh herbs and spices',
      image: corianderRaita,
      category: 'Side Dishes',
      difficulty: 'Easy',
      prepTime: '15 mins',
      serves: '4 people',
      spice: 'Coriander Powder',
      spiceImage: corianderPowderImage,
      route: '/recipe/coriander-mint-raita'
    },
    {
      id: 10,
      title: 'Garam Masala Roasted Nuts',
      description: 'Spiced roasted nuts with aromatic garam masala',
      image: roastedPeanuts,
      category: 'Snacks & Appetizers',
      difficulty: 'Easy',
      prepTime: '25 mins',
      serves: '8 people',
      spice: 'Garam Masala',
      spiceImage: garamMasalaImage,
      route: '/recipe/garam-masala-roasted-nuts'
    },
    {
      id: 11,
      title: 'Red Chilli Potato Wedges',
      description: 'Crispy potato wedges with spicy red chilli seasoning',
      image: redchillipotatowedges,
      category: 'Snacks & Appetizers',
      difficulty: 'Easy',
      prepTime: '30 mins',
      serves: '4 people',
      spice: 'Red Chilli Powder',
      spiceImage: redChilliPowderImage,
      route: '/recipe/red-chilli-potato-wedges'
    },
    {
      id: 12,
      title: 'Pink Salt Chocolate Truffles',
      description: 'Gourmet chocolate truffles with pink salt garnish',
      image: pinkSaltTruffles,
      category: 'Desserts',
      difficulty: 'Medium',
      prepTime: '40 mins',
      serves: '12 pieces',
      spice: 'Pink Salt',
      spiceImage: pinkSaltImage,
      route: '/recipe/pink-salt-chocolate-truffles'
    }
  ];

  const categories = ['all', 'Pickles & Preserves', 'Health & Wellness', 'Chutneys & Dips', 'Beverages', 'Snacks & Appetizers', 'Main Dishes', 'Side Dishes', 'Desserts'];
  const difficulties = ['all', 'Beginner', 'Easy', 'Medium', 'Hard'];

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           recipe.spice.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const handleRecipeClick = (route: string) => {
    navigate(route);
  };

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

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="text-accent text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Complete Recipe Collection
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">All Recipes</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Discover our complete collection of authentic recipes featuring premium Unnati Masale spices. 
              From traditional pickles to modern wellness drinks, find the perfect recipe for every occasion.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <BookOpen className="w-4 h-4" />
                <span>{allRecipes.length}+ Recipes</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Star className="w-4 h-4" />
                <span>Premium Spices</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Clock className="w-4 h-4" />
                <span>Easy to Follow</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 animate-fade-in">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search recipes, spices, or ingredients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background/50 text-foreground"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background/50 text-foreground"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === 'all' ? 'All Levels' : difficulty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredRecipes.map((recipe, index) => (
            <div 
              key={recipe.id}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleRecipeClick(recipe.route)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card className="relative bg-card/80 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-glow overflow-hidden h-full">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge 
                      className="absolute top-4 right-4 bg-gradient-to-r from-accent to-primary text-white shadow-elegant"
                    >
                      {recipe.category}
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <img 
                      src={recipe.spiceImage} 
                      alt={recipe.spice}
                      className="w-12 h-12 object-contain rounded-lg bg-muted/30 p-1"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm mb-1">{recipe.spice}</h3>
                      <p className="text-xs text-muted-foreground">Featured Spice</p>
                    </div>
                  </div>

                  <CardTitle className="text-lg font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {recipe.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {recipe.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.serves}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs bg-secondary/30 border-border/30">
                      {recipe.difficulty}
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300"
                    >
                      View Recipe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-foreground mb-2">No Recipes Found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or filters to find more recipes.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-accent/5 to-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Cooking?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get all the premium Unnati Masale spices you need to create these amazing recipes at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                  onClick={() => window.open('https://www.flipkart.com/search?q=unnati+masala', '_blank', 'noopener,noreferrer')}
                >
                  Shop Unnati Spices
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/#recipes')}>
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
