import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import profileImage from '@/assets/ankur-profile.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="text-primary text-lg font-medium">Hello, I'm</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mt-2 leading-tight">
                Ankur
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Kanaujiya
                </span>
              </h1>
            </div>
            
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6 leading-relaxed">
              Data Analytics Specialist &
              <br />
              Web Developer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              A passionate developer who specializes in data analytics and web development. 
              I love creating solutions that bridge creativity with functionality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-accent-glow">
                <img 
                  src={profileImage} 
                  alt="Ankur Kanaujiya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;