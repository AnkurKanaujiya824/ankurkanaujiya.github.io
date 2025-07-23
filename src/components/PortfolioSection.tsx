import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Library Management System",
      year: "2024",
      description: "A comprehensive library management system built to streamline book cataloging, user management, and lending operations. Features include search functionality, user authentication, and detailed reporting.",
      technologies: ["HTML", "CSS", "C++", "Python"],
      features: [
        "Book catalog management",
        "User registration & authentication", 
        "Lending & return tracking",
        "Search & filter functionality",
        "Administrative dashboard"
      ],
      status: "Completed",
      category: "Desktop Application"
    },
    {
      title: "E-commerce Website",
      year: "2025",
      description: "A modern e-commerce platform designed with user experience at its core. Includes product management, shopping cart functionality, secure payment integration, and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
      features: [
        "Product catalog & management",
        "Shopping cart & checkout",
        "User account management",
        "Order tracking system",
        "Responsive design",
        "Payment integration"
      ],
      status: "In Development",
      category: "Web Application"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing projects that demonstrate my passion for creating functional and user-friendly solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:shadow-card-hover transition-all duration-300 group">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-primary mb-3">{project.category}</p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-card-foreground mb-3 flex items-center">
                  <Code className="h-4 w-4 mr-2 text-primary" />
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-card-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1 group">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button variant="default" size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Github className="h-4 w-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;