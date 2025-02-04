import { Users, Heart } from "lucide-react";
import { OptionCard } from "./OptionCard";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleOptionClick = (option: string) => {
    if (option === "Community Club") {
      navigate("/community");
    } else {
      toast({
        title: "Coming Soon!",
        description: `The ${option} feature will be available soon.`,
      });
    }
  };

  return (
    <div className="min-h-screen pt-16 container mx-auto px-4">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Connect with Your Campus
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join your college community and make meaningful connections
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
          <OptionCard
            title="Community Club"
            description="Join study groups, clubs, and connect with peers who share your interests"
            icon={<Users className="w-6 h-6 text-primary" />}
            onClick={() => handleOptionClick("Community Club")}
          />
          <OptionCard
            title="Campus Dating"
            description="Meet new people and find meaningful relationships within your campus"
            icon={<Heart className="w-6 h-6 text-primary" />}
            onClick={() => handleOptionClick("Campus Dating")}
          />
        </div>
      </div>
    </div>
  );
};