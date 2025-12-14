import { Search, UserCheck, MessageSquare, ThumbsUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      number: "01",
      titleKey: "step1.title",
      descKey: "step1.desc",
    },
    {
      icon: UserCheck,
      number: "02",
      titleKey: "step2.title",
      descKey: "step2.desc",
    },
    {
      icon: MessageSquare,
      number: "03",
      titleKey: "step3.title",
      descKey: "step3.desc",
    },
    {
      icon: ThumbsUp,
      number: "04",
      titleKey: "step4.title",
      descKey: "step4.desc",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
            {t("howItWorks.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center lg:text-left animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon Container */}
                <div className="relative z-10 mx-auto lg:mx-0 w-20 h-20 mb-6 bg-card rounded-2xl border-2 border-primary/20 flex items-center justify-center shadow-soft group hover:border-primary hover:shadow-elevated transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-hero-gradient text-primary-foreground text-sm font-bold rounded-full flex items-center justify-center">
                    {step.number.slice(-1)}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
