import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918224929592"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="h-14 w-14 rounded-full bg-[hsl(var(--whatsapp))] text-[hsl(var(--whatsapp-foreground))] shadow-elegant flex items-center justify-center hover:opacity-90 transition-all">
        <FaWhatsapp className="h-7 w-7" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
