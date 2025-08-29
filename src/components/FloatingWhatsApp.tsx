import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918224929592"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-7 right-24 z-50"
    >
      <div className="h-12 w-44 rounded-full bg-[hsl(var(--whatsapp))] text-[hsl(var(--whatsapp-foreground))] shadow-elegant flex items-center justify-center gap-3 hover:opacity-90 transition-all px-4">
        <FaWhatsapp className="h-7 w-7" />
        <h2 className="text-base text-white font-medium">Chat with us</h2>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
