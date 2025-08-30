import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Use Formspree to send email
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/xdoqzqzq', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: 'Our Location',
      details: [
        'New Industrial Area',
        'Kushmoda, Guna, MP – 473001',
        'India'
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: 'Phone',
      details: ['+91-8224-929592']
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: 'Email',
      details: ['unnatimasaleguna@gmail.com']
    },
    {
      icon: <Globe className="w-6 h-6 text-accent" />,
      title: 'Website',
      details: ['www.unnatimasale.com']
    }
  ];

  // SEO meta tags and sitemap link
  return (
    <>
      <Helmet>
        <title>Contact Us | Unnati Masale - Premium Spices Manufacturer in India</title>
        <meta
          name="description"
          content="Contact Unnati Masale for premium quality spices, business inquiries, or product questions. Reach out via our contact form, phone, or email. We respond within 24 hours."
        />
        <meta
          name="keywords"
          content="Contact, Unnati Masale, Spices, India, Manufacturer, Wholesale, Retail, Inquiry, Email, Phone, Address"
        />
        <meta property="og:title" content="Contact Us | Unnati Masale" />
        <meta property="og:description" content="Get in touch with Unnati Masale for premium spices, business partnerships, or product queries. We're here to help!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.unnatimasale.com/contact" />
        <meta property="og:site_name" content="Unnati Masale" />
        <link rel="canonical" href="https://www.unnatimasale.com/contact" />
        <link rel="sitemap" type="application/xml" href="https://www.unnatimasale.com/sitemap.xml" />
      </Helmet>
      <section id="contact" className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          {/* Modern Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="text-primary text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                Get In Touch
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-merriweather leading-tight">
              Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">with Us</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about our products? We'd love to hear from you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-elegant">
                  <h3 className="text-2xl font-bold text-foreground mb-6 font-merriweather">Get in Touch</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Whether you're a retailer looking for premium spices, a home cook seeking authentic flavors, 
                    or a food business partner, we're here to serve you with the finest quality spices.
                  </p>

                  {/* Contact Info Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative bg-background/50 rounded-xl p-4 border border-border/30 hover:border-accent/30 transition-all duration-300">
                          <div className="flex items-start space-x-3">
                            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                              {info.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                                {info.title}
                              </h4>
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-muted-foreground text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Business Hours */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-background/50 rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-foreground">Business Hours</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monday - Friday</span>
                          <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="text-foreground font-medium">9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="text-foreground font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Contact Form */}
            <div className="animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Card className="relative bg-card/80 backdrop-blur-sm border border-border/30 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-foreground font-merriweather">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {submitted ? (
                      <div className="text-center py-8">
                        <div className="text-green-600 text-6xl mb-4">✓</div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
                        <p className="text-muted-foreground mb-4">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                        <Button 
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input 
                              id="name" 
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="Your name" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                              id="email" 
                              type="email" 
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              placeholder="your@email.com" 
                              required 
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input 
                            id="subject" 
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            placeholder="How can we help?" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea 
                            id="message" 
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            placeholder="Tell us more..." 
                            rows={4} 
                            required 
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                          disabled={loading}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </form>
                    )}
                    
                    {/* Error Message */}
                    {error && (
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="text-red-600 text-lg">⚠</div>
                          <p className="text-red-700 text-sm font-medium">{error}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;