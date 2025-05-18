
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, Database, Image, MessageSquare, Bot, Brain, Eye } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web & Mobile Development",
      description: "Custom web and mobile solutions",
      icon: Globe,
      subServices: [
        {
          name: "Website Development",
          description: "Modern, responsive business websites"
        },
        {
          name: "Mobile Applications",
          description: "Native and cross-platform mobile apps"
        },
        {
          name: "Custom Web Applications",
          description: "Tailored web solutions for your business"
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
          description: "Complete e-commerce store setup and management"
        },
        {
          name: "Payment Integration",
          description: "Secure payment gateways and checkout optimization"
        },
        {
          name: "Inventory Systems",
          description: "Efficient inventory and order management"
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
          description: "Object detection and segmentation"
        },
        {
          name: "Text Annotation",
          description: "Entity recognition and sentiment tagging"
        },
        {
          name: "Data Management",
          description: "Organization and structuring of data assets"
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
          description: "Custom ML models and AI systems"
        },
        {
          name: "Computer Vision Applications",
          description: "Image recognition and visual data processing"
        },
        {
          name: "Natural Language Processing",
          description: "Text analysis and language understanding"
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
          description: "Automate repetitive business processes"
        },
        {
          name: "Process Optimization",
          description: "Improve efficiency in your operations"
        },
        {
          name: "Integration Services",
          description: "Connect your systems and applications"
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
          description: "24/7 automated customer support"
        },
        {
          name: "Internal Assistants",
          description: "Productivity tools for your team"
        },
        {
          name: "Conversational AI",
          description: "Natural language understanding and generation"
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-900 to-purple-900/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              End-to-end digital solutions for your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-16 bg-gray-900/50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                subServices={service.subServices}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-16 bg-purple-900/30">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Need a custom solution?</h2>
              <p>Get in touch to discuss your specific requirements.</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-600">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
