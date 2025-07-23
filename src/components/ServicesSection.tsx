import { Card } from '@/components/ui/card';
import { BarChart3, Database, Code, Brain, TrendingUp, FileText } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights using advanced analytical techniques and statistical methods.",
      features: [
        "Data cleaning & preprocessing",
        "Statistical analysis & modeling",
        "Data visualization & reporting",
        "Trend analysis & forecasting"
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description: "Design and optimize database systems for efficient data storage, retrieval, and management.",
      features: [
        "Database design & optimization",
        "SQL query development",
        "Data modeling & architecture",
        "Performance tuning"
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Create responsive and user-friendly web applications with modern technologies and best practices.",
      features: [
        "Frontend development",
        "Responsive design",
        "User experience optimization",
        "Cross-browser compatibility"
      ]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Implement AI solutions and machine learning models to solve complex business problems.",
      features: [
        "Machine learning model development",
        "Neural network implementation",
        "AI algorithm optimization",
        "Predictive analytics"
      ]
    }
  ];

  const strengths = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Strategic Thinking",
      description: "Approach problems with a strategic mindset to deliver long-term value"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Clear Communication", 
      description: "Present complex technical concepts in an understandable way"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Attention to Detail",
      description: "Ensure accuracy and precision in every aspect of data analysis"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in data analytics and web development with a focus on delivering 
            strategic insights and user-centered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:shadow-card-hover transition-all duration-300 group">
              <div className="mb-6">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-card-foreground mb-3">What I Offer:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-card-gradient rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Why Work With Me?</h3>
            <p className="text-muted-foreground">
              I bring a unique combination of technical expertise and strategic thinking to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <div key={index} className="text-center group">
                <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {strength.icon}
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">{strength.title}</h4>
                <p className="text-sm text-muted-foreground">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-secondary rounded-lg p-6">
            <h4 className="text-lg font-semibold text-foreground mb-2">Tools & Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {["Python", "SQL", "C++", "HTML/CSS", "JavaScript", "Data Modeling", "Statistical Analysis"].map((tool, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;