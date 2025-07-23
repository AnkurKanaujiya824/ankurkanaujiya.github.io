import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Sparkles, Code2 } from 'lucide-react';
import profileImage from '@/assets/ankur-profile.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-gradient pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Available for exciting projects
              </div>
              
              <div>
                <span className="text-primary text-xl font-medium tracking-wide">Hello, I'm</span>
                <h1 className="text-6xl lg:text-7xl font-bold text-foreground mt-3 leading-tight">
                  Ankur
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent relative">
                    Kanaujiya
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-xl rounded-lg"></div>
                  </span>
                </h1>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in delay-150">
              <h2 className="text-2xl lg:text-4xl text-muted-foreground font-light leading-relaxed">
                <span className="inline-flex items-center gap-2">
                  <Code2 className="w-8 h-8 text-primary" />
                  Data Analytics Specialist
                </span>
                <br />
                <span className="text-primary/80">&</span> Web Developer
              </h2>
              
              <p className="text-xl text-muted-foreground/90 max-w-lg leading-relaxed font-light">
                Transforming complex data into actionable insights and crafting digital experiences that bridge 
                <span className="text-primary font-medium"> creativity with functionality</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground group shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-xl rounded-lg"></div>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/50 text-foreground group transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in delay-500">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Rotating border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full animate-spin-slow opacity-30"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl group-hover:shadow-accent-glow transition-all duration-500 transform group-hover:scale-105">
                <img 
                  src={profileImage} 
                  alt="Ankur Kanaujiya" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-primary to-primary/70 rounded-full flex items-center justify-center shadow-xl group-hover:animate-bounce">
                <span className="text-primary-foreground text-2xl">👋</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary/80 to-primary/60 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Code2 className="w-8 h-8 text-primary-foreground" />
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-1/4 -left-8 w-3 h-3 bg-primary rounded-full animate-ping delay-700"></div>
              <div className="absolute top-3/4 -right-8 w-2 h-2 bg-primary/60 rounded-full animate-ping delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;