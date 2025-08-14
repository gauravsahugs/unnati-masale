import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Award, CheckCircle } from 'lucide-react';

const Quality = () => {
  const qualityPoints = [
    {
      icon: Shield,
      title: "Premium Sourcing",
      description: "We source our spices directly from the finest farms across India, ensuring authenticity and quality."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every batch undergoes rigorous quality checks to maintain our high standards."
    },
    {
      icon: CheckCircle,
      title: "Fresh Processing",
      description: "Our spices are freshly milled and processed to preserve their natural flavors and nutrients."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link to="/#home">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold text-foreground mb-4 font-merriweather">Quality Policy</h1>
            <p className="text-muted-foreground">Our commitment to excellence in every spice</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-elegant">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Quality Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Unnati Masale, quality is not just a promise—it's our foundation. We are committed to delivering 
                premium spices that meet the highest standards of purity, freshness, and authenticity. Our quality 
                policy ensures that every product bearing the Unnati Masale name represents excellence.
              </p>
            </div>

            {/* Quality Points */}
            <div className="grid md:grid-cols-3 gap-6">
              {qualityPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-elegant">
                    <div className="mb-4">
                      <div className="bg-primary/10 rounded-full p-3 w-fit">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-muted-foreground text-sm">{point.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Standards */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-elegant">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Standards</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>100% natural and pure spices with no artificial additives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hygienic processing and packaging in certified facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Regular quality testing and compliance with food safety standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Proper storage and transportation to maintain freshness</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-elegant">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Quality Concerns</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any concerns about the quality of our products, please don't hesitate to reach out. 
                We take all feedback seriously and are committed to continuous improvement.
              </p>
              <p className="text-muted-foreground mt-4">
                Contact us at{' '}
                <a href="mailto:unnatimasaleguna@gmail.com" className="text-primary hover:text-primary/80">
                  unnatimasaleguna@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;