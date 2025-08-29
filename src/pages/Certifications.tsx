import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield } from 'lucide-react';

import fssaiLogo from '@/assets/fssai.png';
import msmeLogo from '@/assets/msme.jpg';
import spiceBoardLogo from '@/assets/SPICES_BOARD.jpg';

const Certifications = () => {
  const certifications = [
    {
      title: 'FSSAI License',
      image: fssaiLogo
    },
    {
      title: 'MSME (Udyam) Registration',
      image: msmeLogo
    },
    {
      title: 'Spice Board License',
      image: spiceBoardLogo
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Quality Assurance
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Certifications</span> & Licenses
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Unnati Masale, quality and trust are our top priorities. We comply with all government food safety regulations and ensure our products meet the highest standards. Below are our official certifications and licenses.
            </p>
          </div>
        </div>

                 {/* Certifications Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
           {certifications.map((cert, index) => (
             <Card
               key={index}
               className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
             >
               {/* Background gradient */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               
               <CardHeader className="relative pb-2 flex flex-col items-center text-center w-full">
                 <div className="flex items-center justify-center mb-2 w-full">
                   <img 
                     src={cert.image} 
                     alt={`${cert.title} Logo`}
                     className="w-62 h-36 object-contain mx-auto"
                   />
                 </div>
                 <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center w-full">
                   {cert.title}
                 </CardTitle>
               </CardHeader>
             </Card>
           ))}
         </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border border-border/30 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground font-merriweather flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Quality Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Regular Audits
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We undergo regular quality audits and inspections to maintain our high standards.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Traceability
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Complete traceability from farm to packaging ensures product authenticity.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Testing Protocols
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Rigorous testing protocols for purity, quality, and safety compliance.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Documentation
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Complete documentation and records maintained for all quality processes.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Note:</strong> For detailed copies of any certification or lab test reports, please contact us directly. We're committed to transparency and will provide any requested documentation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
