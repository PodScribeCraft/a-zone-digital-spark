
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Why Choose A-Zone Agency?</h1>
            <p className="text-xl text-muted-foreground">
              We're a team of skilled professionals dedicated to delivering innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-16">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Who We Are</h2>
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
              <h2 className="text-3xl font-semibold">Our Approach</h2>
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
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-muted-foreground">
              Principles that guide our work and relationships with clients
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly explore new technologies and methodologies to provide cutting-edge solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with our clients, ensuring their vision and goals are at the center of everything we do.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in our work, delivering solutions that are reliable, efficient, and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Why Partner With Us</h2>
            <p className="text-muted-foreground">
              What sets us apart from other agencies
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4">
              <div className="bg-primary/10 p-2 rounded-full h-fit">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Expertise Across Technologies</h3>
                <p className="text-muted-foreground">
                  Our team brings diverse expertise across modern development stacks, data science, and infrastructure.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 p-2 rounded-full h-fit">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-2">End-to-End Solutions</h3>
                <p className="text-muted-foreground">
                  From initial concept to deployment and maintenance, we provide comprehensive digital solutions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 p-2 rounded-full h-fit">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Client-Focused Approach</h3>
                <p className="text-muted-foreground">
                  We prioritize understanding your business goals to deliver solutions that meet your specific needs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 p-2 rounded-full h-fit">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Continuous Innovation</h3>
                <p className="text-muted-foreground">
                  We stay ahead of technological trends to bring innovative solutions to your business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to work together?</h2>
            <p className="text-xl">
              Let's discuss how our team can help your business succeed in the digital world.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
