
import { ArrowRight } from "lucide-react";
import { 
  Globe, 
  ShoppingCart, 
  Database, 
  Brain, 
  Bot, 
  MessageSquare,
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
  CreditCard,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { LucideIcon } from "lucide-react";

interface SubService {
  name: string;
  description: string;
  icon?: LucideIcon;
}

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  subServices: SubService[];
}

export function ServicesSection() {
  // Services data
  const services: Service[] = [
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

  return (
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
  );
}
