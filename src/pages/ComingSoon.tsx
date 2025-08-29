import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Clock, Bell } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 flex items-center justify-center p-4">
      <div className="absolute inset-0">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-primary/20 animate-float" />
        <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-accent/25 animate-float delay-1000" />
        <div className="absolute bottom-40 left-20 w-10 h-10 rounded-full bg-primary/15 animate-float delay-2000" />
        <div className="absolute bottom-20 right-40 w-7 h-7 rounded-full bg-accent/30 animate-float delay-500" />
      </div>

      <Card className="relative z-10 w-full max-w-2xl bg-card/95 backdrop-blur-sm border-border/50 shadow-elegant">
        <div className="p-12 text-center">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="absolute top-6 left-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Coming Soon Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <Clock className="w-12 h-12 text-primary" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold font-merriweather text-foreground mb-4">
            Coming Soon
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're working on something amazing! This feature will be available soon.
          </p>

          {/* Description */}
          <div className="bg-secondary/30 rounded-2xl p-6 mb-8">
            <p className="text-muted-foreground">
              Stay tuned for exciting updates and new features that will enhance your Unnati masale experience. 
              Subscribe to our newsletter to be the first to know when we launch!
            </p>
          </div>

          {/* Newsletter Subscription */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-border/50 focus:border-primary"
                required
              />
              <Button type="submit" className="shrink-0">
                <Bell className="w-4 h-4 mr-2" />
                Notify Me
              </Button>
            </div>
          </form>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-background/50 rounded-xl p-4">
              <div className="text-primary font-semibold mb-1">New Recipes</div>
              <div className="text-muted-foreground">Authentic traditional recipes</div>
            </div>
            <div className="bg-background/50 rounded-xl p-4">
              <div className="text-accent font-semibold mb-1">Online Store</div>
              <div className="text-muted-foreground">Direct spice ordering</div>
            </div>
            <div className="bg-background/50 rounded-xl p-4">
              <div className="text-primary font-semibold mb-1">Community</div>
              <div className="text-muted-foreground">Connect with spice lovers</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ComingSoon;