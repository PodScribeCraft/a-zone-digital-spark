
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              We deliver end-to-end digital solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Web & Mobile Development</CardTitle>
                <CardDescription>Custom web and mobile solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Website & E-Commerce Development</li>
                  <li>Modern, responsive business websites</li>
                  <li>Scalable and secure e-commerce platforms</li>
                  <li>Custom web and mobile applications</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Data & AI Solutions</CardTitle>
                <CardDescription>Data-driven insights and AI innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Data Analytics & Insights</li>
                  <li>End-to-End Dashboards</li>
                  <li>AI & Machine Learning</li>
                  <li>Computer Vision Applications</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Data Annotation Services</CardTitle>
                <CardDescription>High-quality data preparation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Image Annotation</li>
                  <li>Object detection and segmentation</li>
                  <li>Text Annotation</li>
                  <li>Entity recognition and sentiment tagging</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Automation & AI Chatbots</CardTitle>
                <CardDescription>Smart automation solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Custom AI Chatbots</li>
                  <li>Smart assistants for customer service</li>
                  <li>Automation Solutions</li>
                  <li>Streamlined operations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">DevOps & Infrastructure</CardTitle>
                <CardDescription>Reliable, scalable solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>CI/CD Pipelines</li>
                  <li>Automated testing and deployment</li>
                  <li>Infrastructure Management</li>
                  <li>Cloud infrastructure solutions</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Business Systems & Operations</CardTitle>
                <CardDescription>Streamlined business processes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Odoo Implementation</li>
                  <li>ERP customization for your business</li>
                  <li>E-Commerce System Management</li>
                  <li>Store management and integration</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Need a custom solution?</h2>
              <p>Contact our team to discuss your specific requirements and how we can help your business succeed.</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
