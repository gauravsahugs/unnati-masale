import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const FloatingContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-vibrant-red to-rich-orange text-white shadow-elegant hover:from-vibrant-red/90 hover:to-rich-orange/90 transition-all duration-300 animate-pulse-glow"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Contact Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              Connect with Unnati Masale
            </DialogTitle>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-vibrant-red mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        Plot No. 56, New Industrial Area<br />
                        Kushmoda, Guna, Madhya Pradesh - 473001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-vibrant-red" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+91-8224-929592</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-vibrant-red" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">unnatimasaleguna@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/unnati_masale?igsh=ZGtlYjI4N2NrbWdo&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-pink-600" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/14GmBTPK9P4/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/unnati-masale" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5 text-blue-700" />
                  </a>
                  <a 
                    href="https://x.com/unnatimasale?s=21" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-blue-500" />
                  </a>
                  <a 
                    href="https://wa.me/918224929592" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5 text-green-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Inquiry</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?"
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-vibrant-red to-rich-orange text-white hover:from-vibrant-red/90 hover:to-rich-orange/90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingContactButton;