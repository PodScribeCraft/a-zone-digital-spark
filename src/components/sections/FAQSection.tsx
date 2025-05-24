
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  // FAQ data
  const faqItems: FAQItem[] = [
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
      question: "Can you help with SEO and digital marketing?",
      answer: "Yes, we provide SEO optimization services to improve your website's visibility in search engines. We can also assist with broader digital marketing strategies including content marketing, social media, and paid advertising campaigns."
    },
    {
      question: "I'm a photographer, technician, crochet artist... can you help me?",
      answer: "Whether you're a photographer, technician, crochet artist, or offer any other type of service—we recommend reaching out to us with your specific goals. We'll help you establish an online presence, build your brand, and grow your business."
    }
  ];

  return (
    <section id="faq" className="w-full py-24 md:py-32 bg-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 opacity-0 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto opacity-0 animate-on-scroll">
          <Accordion type="multiple" className="w-full">
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
  );
}
