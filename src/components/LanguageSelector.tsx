import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as 'en' | 'hi' | 'te');
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="border-warm-gold/30 text-warm-gold hover:bg-warm-gold/10 hover:text-warm-gold hover:border-warm-gold/50 backdrop-blur-sm bg-card/80"
          size="sm"
        >
          <Globe className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">{currentLang?.name}</span>
          <span className="sm:hidden">{currentLang?.flag}</span>
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-card/95 backdrop-blur-md border-warm-gold/20 shadow-elegant min-w-[160px]"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`cursor-pointer hover:bg-warm-gold/10 hover:text-warm-gold transition-colors ${
              language === lang.code ? 'bg-warm-gold/20 text-warm-gold font-medium' : ''
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;