
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-background to-background/80">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <div className="container relative">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-in">
              Driving Digital Innovation for Growing Businesses
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              We are a team of skilled professionals committed to delivering innovative digital solutions that drive success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button asChild size="lg">
                <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver end-to-end digital solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Web & Mobile Development</CardTitle>
                <CardDescription>Custom applications designed to fit your business workflows.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Responsive business websites</li>
                  <li>E-commerce platforms</li>
                  <li>Custom web and mobile applications</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Data & AI Solutions</CardTitle>
                <CardDescription>Turning your data into actionable insights and intelligent systems.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Data analytics dashboards</li>
                  <li>AI & Machine Learning applications</li>
                  <li>Custom AI chatbots</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>DevOps & Infrastructure</CardTitle>
                <CardDescription>Reliable, scalable infrastructure solutions for your business.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>CI/CD pipelines</li>
                  <li>Cloud infrastructure management</li>
                  <li>E-commerce system management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Ready to transform your digital presence?</h2>
              <p>Schedule a consultation with our team to discuss how we can help your business thrive in the digital landscape.</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
