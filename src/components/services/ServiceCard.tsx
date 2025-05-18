
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

interface SubService {
  name: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  subServices: SubService[];
}

export function ServiceCard({ title, description, icon: Icon, subServices }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="bg-card hover:shadow-lg transition-shadow border-purple-800/30">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-5 w-5 text-purple-400" />
          <CardTitle className="text-2xl">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full"
      >
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full flex justify-between border-t border-purple-800/20 mt-2 rounded-none"
          >
            <span>View details</span>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-0">
          <CardContent className="pt-4 border-t border-purple-800/20">
            <ul className="space-y-2 text-muted-foreground">
              {subServices.map((subService, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-medium text-purple-400">{subService.name}</span>
                  <span className="text-sm">{subService.description}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
      <CardFooter className="pt-4">
        <Button asChild variant="outline" className="w-full hover:bg-purple-900/20 hover:text-purple-300 border-purple-800/30">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
