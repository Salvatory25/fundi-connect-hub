import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "sw" : "en")}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-colors duration-200"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium uppercase">{language}</span>
    </button>
  );
};

export default LanguageSwitcher;
