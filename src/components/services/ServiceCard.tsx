
import { useState } from "react";
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
  icon?: LucideIcon;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  subServices: SubService[];
  hideContactButton?: boolean;
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  subServices, 
  hideContactButton = false 
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="bg-black hover:shadow-purple-800/20 hover:shadow-lg transition-shadow duration-300 border-purple-800/30 h-full flex flex-col">
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
        className="w-full flex-1 flex flex-col"
      >
        <CollapsibleTrigger asChild>
          <div className="flex justify-center mt-3 mb-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-purple-900/10 hover:text-purple-400 h-8 w-8 border border-purple-800/30"
            >
              {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-0 flex-1">
          <CardContent className="pt-4 border-t border-purple-800/20">
            <ul className="space-y-4 text-muted-foreground">
              {subServices.map((subService, index) => {
                const SubIcon = subService.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    {SubIcon && <SubIcon className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />}
                    <div>
                      <span className="font-medium text-purple-300 block">{subService.name}</span>
                      <span className="text-sm">{subService.description}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
      {!hideContactButton && (
        <div className="p-6 pt-4 mt-auto">
          <Button asChild variant="outline" className="w-full hover:bg-purple-900/20 hover:text-purple-300 border-purple-800/30">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      )}
    </Card>
  );
}
