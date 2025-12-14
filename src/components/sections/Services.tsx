import { 
  Zap, 
  Droplets, 
  Hammer, 
  Cpu, 
  Cog, 
  Tv, 
  Sun, 
  Wind, 
  Building,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Zap,
    name: "Electrical",
    description: "Wiring, repairs, installations & maintenance",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Droplets,
    name: "Plumbing",
    description: "Pipe fitting, repairs & water systems",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Hammer,
    name: "Carpentry",
    description: "Furniture, doors, roofing & woodwork",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Cpu,
    name: "ICT & Networking",
    description: "Computer repair, CCTV, networking & software",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Cog,
    name: "Mechanical",
    description: "Vehicle repair, machinery & equipment",
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    icon: Tv,
    name: "Electronics",
    description: "TV, appliances & gadget repairs",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Sun,
    name: "Solar Installation",
    description: "Panels, inverters & solar systems",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: Wind,
    name: "HVAC",
    description: "AC installation, repair & maintenance",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Building,
    name: "Construction",
    description: "Masonry, tiling, painting & finishing",
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            All Technical Services, One Platform
          </h2>
          <p className="text-lg text-muted-foreground">
            From electrical work to ICT support, find verified professionals for every technical need
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Find Technicians
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
