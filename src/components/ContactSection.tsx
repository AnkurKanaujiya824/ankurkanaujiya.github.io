import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Instagram, Linkedin, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "kanaujiya824@gmail.com",
      href: "mailto:kanaujiya824@gmail.com",
      primary: true
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone", 
      value: "+91 8303397151",
      href: "tel:+918303397151",
      primary: true
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      value: "@the_only_ankur",
      href: "https://www.instagram.com/the_only_ankur?ighs=NHZwOX4eXFscmVu",
      primary: false
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "Ankur Kanaujiya",
      href: "https://in.linkedin.com/in/ankur-kanaujiya-34356b350",
      primary: false
    }
  ];

  const quickInfo = [
    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Lucknow, India" },
    { icon: <Mail className="h-5 w-5" />, label: "Response Time", value: "Within 24 hours" },
    { icon: <Phone className="h-5 w-5" />, label: "Availability", value: "Mon-Sat, 9AM-6PM" }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to connect with like-minded professionals and discuss new opportunities. 
              Whether you have a project, a collaboration idea, or just want to say hello, feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-4 bg-card border-border hover:shadow-card-hover transition-all duration-300 group">
                  <a 
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 text-card-foreground group-hover:text-primary transition-colors"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-medium">{method.label}</p>
                      <p className="text-sm text-muted-foreground">{method.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-semibold text-card-foreground mb-4">Quick Info</h4>
              <div className="space-y-3">
                {quickInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <div className="text-primary">{info.icon}</div>
                    <span className="text-muted-foreground">{info.label}:</span>
                    <span className="text-card-foreground font-medium">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <Card className="p-8 bg-card-gradient border-border h-full flex flex-col justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-accent-glow">
                  <Send className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  Ready to Start a Project?
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm currently available for new projects and collaborations. 
                  Let's discuss your ideas and turn them into reality together.
                </p>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    onClick={() => window.open('mailto:kanaujiya824@gmail.com', '_blank')}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send me an Email
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-border hover:bg-secondary"
                    onClick={() => window.open('tel:+918303397151', '_blank')}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Give me a Call
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Follow me on social media</p>
                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => window.open('https://in.linkedin.com/in/ankur-kanaujiya-34356b350', '_blank')}
                      className="hover:text-primary hover:scale-110 transition-all"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => window.open('https://www.instagram.com/the_only_ankur?ighs=NHZwOX4eXFscmVu', '_blank')}
                      className="hover:text-primary hover:scale-110 transition-all"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Card className="inline-block p-6 bg-card border-border">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">Pro tip:</span> 
              For the fastest response, send me an email with your project details. 
              I typically respond within 24 hours!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;