import { Card } from '@/components/ui/card';
import { GraduationCap, Award, Code, Users } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "SR Institute of Management & Technology, Lucknow",
      duration: "2022-2026",
      status: "Pursuing"
    },
    {
      degree: "Intermediate & High School",
      institution: "Shri Ramlala | C, Kanpur",
      duration: "Completed",
      status: "Graduated"
    }
  ];

  const certifications = [
    {
      title: "Data Analytics Certificate",
      description: "Proficiency in analyzing data, interpreting results, and applying insights using Python and SQL",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "AI Engineer Certificate",
      description: "Foundational knowledge in AI concepts, machine learning, neural networks, and model development",
      icon: <Code className="h-6 w-6" />
    }
  ];

  const skills = [
    "Data Analytics", "Python", "SQL", "C++", "HTML/CSS", 
    "JavaScript", "Problem Solving", "Strategic Thinking", "Communication"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creativity, collaboration, and problem-solving through technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Ankur Kanaujiya, a passionate data analytics specialist and web developer 
                currently pursuing my B.Tech in Computer Science. My journey in technology is 
                driven by curiosity and a genuine love for creating solutions that matter.
              </p>
              <p>
                I believe in the power of collaboration and meaningful connections. Whether 
                it's analyzing complex datasets to uncover insights or building intuitive 
                web applications, I approach every project with creativity and attention to detail.
              </p>
              <p>
                My goal is to bridge the gap between technical complexity and user-friendly 
                solutions, always keeping the end-user experience at the center of my work.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-primary" />
                Team Player
              </div>
              <div className="flex items-center">
                <Code className="h-4 w-4 mr-1 text-primary" />
                Problem Solver
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:shadow-card-hover transition-shadow">
                  <h4 className="font-semibold text-card-foreground">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-muted-foreground">{edu.duration}</span>
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                      {edu.status}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:shadow-card-hover transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="text-primary">{cert.icon}</div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;