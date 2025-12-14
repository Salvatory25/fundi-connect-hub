import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Users } from "lucide-react";

const CTA = () => {
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
              Need a Technician?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Find verified professionals for any technical service. Browse profiles, 
              compare ratings, and book the right expert for your needs — all in one place.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Verified & trusted technicians",
                "Location-based search",
                "Direct communication",
                "Review & rating system",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg">
              Find Technicians
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* For Technicians */}
          <div className="p-8 md:p-10 bg-foreground rounded-3xl hover:shadow-elevated transition-shadow duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 mb-6 bg-secondary/20 rounded-2xl flex items-center justify-center">
              <Wrench className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-background mb-4">
              Are You a Technician?
            </h3>
            <p className="text-background/70 mb-6 leading-relaxed">
              Join Tanzania's fastest-growing platform for technical professionals. 
              Showcase your skills, connect with clients, and grow your business digitally.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Free registration",
                "Direct job requests",
                "Build your reputation",
                "Expand your reach",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-background/70">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="warm" size="lg">
              Register as Technician
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
