
import { Link } from "react-router-dom";
import { ArrowRight, Globe, ShoppingCart, Database, Ai, Robot, MessageSquare, Brain, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-gray-900 to-purple-900/50">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <div className="container relative">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-in bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Digital Solutions for Growing Businesses
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Innovative digital solutions that drive success in today's ever-changing landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-600">
                <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-purple-700/50 hover:bg-purple-900/20 hover:text-purple-300">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-16 md:py-24 bg-gray-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver end-to-end digital solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-800/40 hover:shadow-lg transition-shadow border-purple-800/30">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="h-5 w-5 text-purple-400" />
                  <CardTitle>Web & Mobile Development</CardTitle>
                </div>
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
            
            <Card className="bg-gray-800/40 hover:shadow-lg transition-shadow border-purple-800/30">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Database className="h-5 w-5 text-purple-400" />
                  <CardTitle>Data Solutions</CardTitle>
                </div>
                <CardDescription>Turning your data into actionable insights.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Data annotation services</li>
                  <li>Image and text annotation</li>
                  <li>Entity recognition and tagging</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/40 hover:shadow-lg transition-shadow border-purple-800/30">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Ai className="h-5 w-5 text-purple-400" />
                  <CardTitle>AI Solutions</CardTitle>
                </div>
                <CardDescription>Intelligent systems for your business.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>AI & Machine Learning</li>
                  <li>Automation solutions</li>
                  <li>Custom AI chatbots</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-purple-700/50 hover:bg-purple-900/20 hover:text-purple-300">
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-purple-900/30">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Ready to transform your digital presence?</h2>
              <p>Connect with our team to discuss how we can help your business succeed.</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-600">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
