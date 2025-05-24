
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeSection() {
  return (
    <section id="home" className="w-full min-h-screen py-24 md:py-32 lg:py-48 flex items-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      <div className="container relative">
        <div className="max-w-3xl space-y-8 opacity-0 animate-on-scroll">
          <h1 className="text-5xl md:text-6xl lg:text-7xl py-3 font-bold tracking-tighter bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
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
  );
}
