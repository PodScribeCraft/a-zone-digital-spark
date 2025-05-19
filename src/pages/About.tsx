
import { Link } from "react-router-dom";
import { ArrowRight, Check, Code, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const frontendTechnologies = ["React", "Angular", "Vue.js", "Laravel", "Flask", "Next.js", "Tailwind CSS"];
  const backendTechnologies = ["Node.js", "Python", "R", "Java", "PHP", "Express", "Django", "Spring Boot"];
  const cloudPlatforms = ["AWS", "Google Cloud", "Azure", "Heroku", "Netlify", "Vercel", "Digital Ocean"];
  
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Why Choose A-Zone Agency?</h1>
            <p className="text-xl text-muted-foreground">
              We're a team of skilled professionals dedicated to delivering innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-16 bg-black">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Who We Are</h2>
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
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Our Approach</h2>
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

      {/* Technology Stack */}
      <section className="w-full py-12 md:py-16 bg-black/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Our Technology Stack</h2>
            <p className="text-muted-foreground">
              Our professional team is knowledgeable in a wide range of programming languages, frameworks, tools, and techniques. 
              We select the best technology stack based on your specific project requirements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-900/80 p-6 rounded-lg border border-purple-800/30 hover:shadow-lg transition-all animate-fade-in">
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
            
            <div className="bg-gray-900/80 p-6 rounded-lg border border-purple-800/30 hover:shadow-lg transition-all animate-fade-in">
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
            
            <div className="bg-gray-900/80 p-6 rounded-lg border border-purple-800/30 hover:shadow-lg transition-all animate-fade-in">
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
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-16 bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Our Core Values</h2>
            <p className="text-muted-foreground">
              Principles that guide our work and relationships with clients
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gray-900/80 p-6 rounded-lg shadow-sm border border-purple-800/30 hover:shadow-lg transition-all animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly explore new technologies and methodologies to provide cutting-edge solutions.
              </p>
            </div>
            <div className="bg-gray-900/80 p-6 rounded-lg shadow-sm border border-purple-800/30 hover:shadow-lg transition-all animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with our clients, ensuring their vision and goals are at the center of everything we do.
              </p>
            </div>
            <div className="bg-gray-900/80 p-6 rounded-lg shadow-sm border border-purple-800/30 hover:shadow-lg transition-all animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Quality</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in our work, delivering solutions that are reliable, efficient, and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-16 bg-black/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Why Partner With Us</h2>
            <p className="text-muted-foreground">
              What sets us apart from other agencies
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4">
              <div className="bg-purple-800/30 p-2 rounded-full h-fit">
                <Check className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium mb-2 text-purple-300">Expertise Across Technologies</h3>
                <p className="text-muted-foreground">
                  Our team brings diverse expertise across modern development stacks, data science, and infrastructure.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-purple-800/30 p-2 rounded-full h-fit">
                <Check className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium mb-2 text-purple-300">End-to-End Solutions</h3>
                <p className="text-muted-foreground">
                  From initial concept to deployment and maintenance, we provide comprehensive digital solutions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-purple-800/30 p-2 rounded-full h-fit">
                <Check className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium mb-2 text-purple-300">Client-Focused Approach</h3>
                <p className="text-muted-foreground">
                  We prioritize understanding your business goals to deliver solutions that meet your specific needs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-purple-800/30 p-2 rounded-full h-fit">
                <Check className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium mb-2 text-purple-300">Continuous Innovation</h3>
                <p className="text-muted-foreground">
                  We stay ahead of technological trends to bring innovative solutions to your business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-purple-900/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Ready to work together?</h2>
            <p className="text-xl text-purple-200">
              Let's discuss how our team can help your business succeed in the digital world.
            </p>
            <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-600">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
