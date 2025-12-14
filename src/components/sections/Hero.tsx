import { Button } from "@/components/ui/button";
import { Search, MapPin, Star, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium animate-fade-in">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              Trusted by 10,000+ Tanzanians
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Find Skilled{" "}
              <span className="text-gradient">Technicians</span>{" "}
              Near You, Instantly
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Connect with verified electricians, plumbers, ICT experts, and more. 
              Get reliable technical services delivered to your doorstep across Tanzania.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 p-3 bg-card rounded-2xl shadow-elevated border border-border max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-muted rounded-xl">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-xl sm:w-44">
                <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button variant="hero" size="lg" className="shrink-0">
                Search
              </Button>
            </div>

            {/* Popular Services */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["Electrician", "Plumber", "ICT Support", "Carpenter"].map((service) => (
                <button
                  key={service}
                  className="px-3 py-1.5 text-sm bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground rounded-full transition-colors duration-200"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 p-6 bg-card rounded-2xl shadow-elevated border border-border animate-float">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl">👨‍🔧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">John Masanja</p>
                    <p className="text-sm text-muted-foreground">Master Electrician</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">5.0 (234 reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Arusha, Tanzania</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="absolute top-8 right-8 px-5 py-4 bg-card rounded-xl shadow-soft border border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <p className="text-3xl font-bold text-primary">5,000+</p>
                <p className="text-sm text-muted-foreground">Verified Technicians</p>
              </div>

              <div className="absolute bottom-12 left-4 px-5 py-4 bg-card rounded-xl shadow-soft border border-border animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <p className="text-3xl font-bold text-secondary">98%</p>
                <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
              </div>

              <div className="absolute bottom-32 right-0 px-5 py-4 bg-card rounded-xl shadow-soft border border-border animate-fade-in" style={{ animationDelay: "0.7s" }}>
                <p className="text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Available Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
