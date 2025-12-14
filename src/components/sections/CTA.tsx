import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();

  const clientFeatures = [
    t("cta.client.feature1"),
    t("cta.client.feature2"),
    t("cta.client.feature3"),
    t("cta.client.feature4"),
  ];

  const technicianFeatures = [
    t("cta.technician.feature1"),
    t("cta.technician.feature2"),
    t("cta.technician.feature3"),
    t("cta.technician.feature4"),
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Clients */}
          <div className="p-8 md:p-10 bg-card rounded-3xl border border-border hover:shadow-elevated transition-shadow duration-300 animate-fade-in">
            <div className="w-14 h-14 mb-6 bg-accent rounded-2xl flex items-center justify-center">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("cta.client.title")}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("cta.client.desc")}
            </p>
            <ul className="space-y-3 mb-8">
              {clientFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg">
              {t("cta.client.button")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* For Technicians */}
          <div className="p-8 md:p-10 bg-foreground rounded-3xl hover:shadow-elevated transition-shadow duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 mb-6 bg-secondary/20 rounded-2xl flex items-center justify-center">
              <Wrench className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-background mb-4">
              {t("cta.technician.title")}
            </h3>
            <p className="text-background/70 mb-6 leading-relaxed">
              {t("cta.technician.desc")}
            </p>
            <ul className="space-y-3 mb-8">
              {technicianFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-background/70">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="warm" size="lg">
              {t("cta.technician.button")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
