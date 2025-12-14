import { useLanguage } from "@/contexts/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "10,000+", labelKey: "stats.customers" },
    { value: "5,000+", labelKey: "stats.technicians" },
    { value: "25,000+", labelKey: "stats.jobs" },
    { value: "50+", labelKey: "stats.categories" },
  ];

  return (
    <section className="py-16 md:py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.labelKey}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/80 text-lg">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
