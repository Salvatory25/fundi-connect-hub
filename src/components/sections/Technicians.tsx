import { Star, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const technicians = [
  {
    name: "John Masanja",
    specialty: "Master Electrician",
    location: "Arusha",
    rating: 5.0,
    reviews: 234,
    verified: true,
    avatar: "👨‍🔧",
    skills: ["Wiring", "Solar", "Industrial"],
  },
  {
    name: "Grace Mwamba",
    specialty: "ICT & Networking Expert",
    location: "Dar es Salaam",
    rating: 4.9,
    reviews: 189,
    verified: true,
    avatar: "👩‍💻",
    skills: ["CCTV", "Networks", "Software"],
  },
  {
    name: "Peter Komba",
    specialty: "Plumbing Specialist",
    location: "Mwanza",
    rating: 4.8,
    reviews: 156,
    verified: true,
    avatar: "👨‍🔧",
    skills: ["Pipe Fitting", "Water Systems", "Repairs"],
  },
  {
    name: "Sarah Kilonzo",
    specialty: "HVAC Technician",
    location: "Dodoma",
    rating: 4.9,
    reviews: 142,
    verified: true,
    avatar: "👩‍🔧",
    skills: ["AC Repair", "Installation", "Maintenance"],
  },
];

const Technicians = () => {
  return (
    <section id="technicians" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Top Rated
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured Technicians
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet some of our highest-rated professionals
            </p>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View All Technicians
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Technicians Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicians.map((tech, index) => (
            <div
              key={tech.name}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar & Badge */}
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300">
                  {tech.avatar}
                </div>
                {tech.verified && (
                  <div className="absolute bottom-0 right-1/2 translate-x-6 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {tech.specialty}
                </p>
                <div className="flex items-center justify-center gap-1 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{tech.location}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-4">
                <Star className="w-4 h-4 fill-secondary text-secondary" />
                <span className="font-semibold text-foreground">{tech.rating}</span>
                <span className="text-sm text-muted-foreground">({tech.reviews})</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {tech.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                View Profile
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technicians;
