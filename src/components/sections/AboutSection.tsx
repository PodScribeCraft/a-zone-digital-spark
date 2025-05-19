
import { Code, Database, Globe } from "lucide-react";

export function AboutSection() {
  // Frontend, Backend, and Cloud technology data
  const frontendTechnologies = ["React", "Angular", "Vue.js", "Laravel", "Flask", "Next.js", "Tailwind CSS"];
  const backendTechnologies = ["Node.js", "Python", "R", "Java", "PHP", "Express", "Django", "Spring Boot"];
  const cloudPlatforms = ["AWS", "Google Cloud", "Azure", "Heroku", "Netlify", "Vercel", "Digital Ocean"];

  return (
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
  );
}
