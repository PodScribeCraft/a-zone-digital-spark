import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  ArrowRight, 
  Globe, 
  ShoppingCart, 
  Database, 
  Brain, 
  Bot, 
  MessageSquare,
  Check,
  Mail,
  MapPin,
  Phone,
  Code,
  Circle,
  Users,
  Shield,
  Image,
  Search,
  Settings,
  FileCode,
  Link,
  CircleIcon,
  CircleDollarSign,
  Star,
  CreditCard,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/services/ServiceCard";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function SinglePage() {
  const location = useLocation();
  
  // Scroll to section based on hash in URL
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  
  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );
    
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Services data
  const services = [
    {
      title: "Web & Mobile Development",
      description: "Custom web and mobile solutions",
      icon: Globe,
      subServices: [
        {
          name: "Website Development",
          description: "Modern, responsive business websites",
          icon: Code
        },
        {
          name: "Mobile Applications",
          description: "Native and cross-platform mobile apps",
          icon: Circle
        },
        {
          name: "Custom Web Applications",
          description: "Tailored web solutions for your business",
          icon: FileCode
        }
      ]
    },
    {
      title: "E-commerce Website Management",
      description: "End-to-end e-commerce solutions",
      icon: ShoppingCart,
      subServices: [
        {
          name: "Store Management",
          description: "Complete e-commerce store setup and management",
          icon: Settings
        },
        {
          name: "Payment Integration",
          description: "Secure payment gateways and checkout optimization",
          icon: CreditCard
        },
        {
          name: "Inventory Systems",
          description: "Efficient inventory and order management",
          icon: Database
        }
      ]
    },
    {
      title: "Data Solutions",
      description: "Data annotation and management",
      icon: Database,
      subServices: [
        {
          name: "Image Annotation",
          description: "Object detection and segmentation",
          icon: Image
        },
        {
          name: "Text Annotation",
          description: "Entity recognition and sentiment tagging",
          icon: MessageSquare
        },
        {
          name: "Data Management",
          description: "Organization and structuring of data assets",
          icon: Search
        }
      ]
    },
    {
      title: "AI Solutions",
      description: "Intelligent systems for your business",
      icon: Brain,
      subServices: [
        {
          name: "AI & Machine Learning",
          description: "Custom ML models and AI systems",
          icon: Brain
        },
        {
          name: "Computer Vision Applications",
          description: "Image recognition and visual data processing",
          icon: Eye
        },
        {
          name: "Natural Language Processing",
          description: "Text analysis and language understanding",
          icon: MessageSquare
        }
      ]
    },
    {
      title: "Automation Solutions",
      description: "Streamline your business operations",
      icon: Bot,
      subServices: [
        {
          name: "Workflow Automation",
          description: "Automate repetitive business processes",
          icon: Settings
        },
        {
          name: "Process Optimization",
          description: "Improve efficiency in your operations",
          icon: CircleIcon
        },
        {
          name: "Integration Services",
          description: "Connect your systems and applications",
          icon: Link
        }
      ]
    },
    {
      title: "AI Chatbots",
      description: "Intelligent conversation systems",
      icon: MessageSquare,
      subServices: [
        {
          name: "Customer Service Bots",
          description: "24/7 automated customer support",
          icon: Users
        },
        {
          name: "Internal Assistants",
          description: "Productivity tools for your team",
          icon: Shield
        },
        {
          name: "Conversational AI",
          description: "Natural language understanding and generation",
          icon: MessageSquare
        }
      ]
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "How much does a website cost?",
      answer: "It can range anywhere from $500 to $50,000—it really depends on the complexity, features, and your specific needs. But no worries—just reach out to us with your requirements, and we'll guide you through the best option for your budget."
    },
    {
      question: "How long does it take to build a website?",
      answer: "A simple website can be completed in 2-4 weeks, while more complex projects with custom functionality may take 8-12 weeks or longer. We'll provide you with a detailed timeline based on your specific requirements."
    },
    {
      question: "Do you provide website maintenance services?",
      answer: "Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. Our maintenance services include regular updates, security monitoring, and technical support."
    },
    {
      question: "What technologies do you use?",
      answer: "We work with a range of modern technologies including React, Angular, Laravel, Flask for frontend development; Node.js, Python, R, Java, and PHP for backend; and various cloud platforms like AWS, Google Cloud, and Azure. We select the best technology stack based on your specific project requirements."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Yes, we provide SEO optimization services to improve your website's visibility in search engines. We can also assist with broader digital marketing strategies including content marketing, social media, and paid advertising campaigns."
    },
    {
      question: "I'm a photographer, technician, crochet artist... can you help me?",
      answer: "Whether you're a photographer, technician, crochet artist, or offer any other type of service—we recommend reaching out to us with your specific goals. We'll help you establish an online presence, build your brand, and grow your business."
    }
  ];

  // Frontend, Backend, and Cloud technology data
  const frontendTechnologies = ["React", "Angular", "Vue.js", "Laravel", "Flask", "Next.js", "Tailwind CSS"];
  const backendTechnologies = ["Node.js", "Python", "R", "Java", "PHP", "Express", "Django", "Spring Boot"];
  const cloudPlatforms = ["AWS", "Google Cloud", "Azure", "Heroku", "Netlify", "Vercel", "Digital Ocean"];

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <>
      {/* Home Section */}
      <section id="home" className="w-full min-h-screen py-24 md:py-32 lg:py-48 flex items-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <div className="container relative">
          <div className="max-w-3xl space-y-8 opacity-0 animate-on-scroll">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Digital Solutions for Growing Businesses
            </h1>
            <p className="text-xl text-muted-foreground">
              Innovative digital solutions that drive success in today's ever-changing landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-600">
                <a href="#contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-purple-700/50 hover:bg-purple-900/20 hover:text-purple-300">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 md:py-32 bg-black">
        <div className="container">
          <div className="text-center mb-16 opacity-0 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver end-to-end digital solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="opacity-0 animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  subServices={service.subServices}
                  hideContactButton={true}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 opacity-0 animate-on-scroll">
            <Button asChild size="lg" variant="outline" className="border-purple-700/50 hover:bg-purple-900/20 hover:text-purple-300">
              <a href="#contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 md:py-32 bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 opacity-0 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Why Choose A-Zone Agency?</h2>
            <p className="text-xl text-muted-foreground">
              We're a team of skilled professionals dedicated to delivering innovative digital solutions.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 opacity-0 animate-on-scroll">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Who We Are</h3>
              <p className="text-muted-foreground">
                Welcome to A-Zone Agency! We are a team of skilled professionals based in Toronto, Canada, 
                committed to delivering innovative digital solutions that drive success. Specializing in web 
                and app development, data analytics, AI solutions, and DevOps, we bring expertise and creativity 
                to every project.
              </p>
              <p className="text-muted-foreground">
                Our team is a mix of diverse talent, each with hands-on experience working with startups, 
                growing businesses, and established enterprises. Whether it's building modern websites, 
                crafting scalable e-commerce platforms, developing AI models, or optimizing infrastructure, 
                we're here to help your business succeed in the digital world.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Our Approach</h3>
              <p className="text-muted-foreground">
                At A-Zone Agency, we believe in building strong, collaborative relationships with our clients 
                to ensure we fully understand their needs and goals. We're dedicated to delivering tailored 
                solutions that are not only innovative but also practical, scalable, and impactful.
              </p>
              <p className="text-muted-foreground">
                Our mission is simple: to create high-quality technology solutions that help businesses thrive, 
                while staying ahead of the curve in today's ever-changing digital landscape. Whether you're 
                looking to launch a new product, improve your digital operations, or explore the power of AI, 
                our team has the expertise to make it happen.
              </p>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-24">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 opacity-0 animate-on-scroll">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Our Technology Stack</h2>
              <p className="text-muted-foreground">
                Our professional team is knowledgeable in a wide range of programming languages, frameworks, tools, and techniques. 
                We select the best technology stack based on your specific project requirements.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-black/80 p-6 rounded-lg border border-purple-800/30 hover:shadow-lg transition-all opacity-0 animate-on-scroll">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {frontendTechnologies.map((tech, index) => (
                    <span key={index} className="bg-purple-900/30 text-purple-300 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-black/80 p-6 rounded-lg border border-purple-800/30 hover:shadow-lg transition-all opacity-0 animate-on-scroll" style={{ animationDelay: "100ms" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Backend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {backendTechnologies.map((tech, index) => (
                    <span key={index} className="bg-purple-900/30 text-purple-300 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-black/80 p-6 rounded-lg border border-purple-800/30 hover:shadow-lg transition-all opacity-0 animate-on-scroll" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Cloud Infrastructure</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cloudPlatforms.map((tech, index) => (
                    <span key={index} className="bg-purple-900/30 text-purple-300 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-24">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 opacity-0 animate-on-scroll">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Our Core Values</h2>
              <p className="text-muted-foreground">
                Principles that guide our work and relationships with clients
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-black/80 p-6 rounded-lg shadow-sm border border-purple-800/30 hover:shadow-lg transition-all opacity-0 animate-on-scroll">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly explore new technologies and methodologies to provide cutting-edge solutions.
                </p>
              </div>
              <div className="bg-black/80 p-6 rounded-lg shadow-sm border border-purple-800/30 hover:shadow-lg transition-all opacity-0 animate-on-scroll" style={{ animationDelay: "100ms" }}>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients, ensuring their vision and goals are at the center of everything we do.
                </p>
              </div>
              <div className="bg-black/80 p-6 rounded-lg shadow-sm border border-purple-800/30 hover:shadow-lg transition-all opacity-0 animate-on-scroll" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Quality</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in our work, delivering solutions that are reliable, efficient, and effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-24 md:py-32 bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 opacity-0 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto opacity-0 animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-purple-800/30">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-purple-400">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 text-center">
              <p className="mb-4 text-muted-foreground">Still have questions?</p>
              <Button asChild className="bg-purple-700 hover:bg-purple-600">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 md:py-32 bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 opacity-0 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Contact Us</h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Get in touch with our team.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-black/80 border-purple-800/30 opacity-0 animate-on-scroll">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required 
                      className="border-purple-800/30 bg-black/50 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email"
                      value={formData.email}
                      onChange={handleChange} 
                      placeholder="your.email@example.com" 
                      required
                      className="border-purple-800/30 bg-black/50 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="border-purple-800/30 bg-black/50 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange} 
                      placeholder="Tell us about your project..." 
                      rows={5}
                      required
                      className="border-purple-800/30 bg-black/50 focus:border-purple-500"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-600" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8 opacity-0 animate-on-scroll" style={{ animationDelay: "100ms" }}>
              <div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Our team is ready to assist you with any questions or inquiries you might have.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-purple-400 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@a-zone.agency</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-purple-400 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (416) 555-0123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-purple-400 mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Office Hours</h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>Closed</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
