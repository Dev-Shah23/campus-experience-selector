import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Heart, X, Filter } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { TinderCard } from "@/components/TinderCard";
import { FilterDialog } from "@/components/FilterDialog";

interface User {
  id: string;
  name: string;
  age: number;
  major: string;
  year: string;
  bio: string;
  interests: string[];
  image: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    age: 20,
    major: "Computer Science",
    year: "Junior",
    bio: "Coffee addict, code enthusiast",
    interests: ["Programming", "Coffee", "Music"],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "2",
    name: "Mike Chen",
    age: 21,
    major: "Business",
    year: "Senior",
    bio: "Basketball player, future entrepreneur",
    interests: ["Sports", "Startups", "Travel"],
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
  },
  // Add more users as needed
];

const CampusDating = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      toast({
        title: "It's a Match! 🎉",
        description: `You and ${users[currentIndex].name} liked each other!`,
        duration: 3000,
      });
    }
    setCurrentIndex((prev) => Math.min(prev + 1, users.length - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-primary/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-3xl font-bold">Campus Dating</h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Filter className="h-6 w-6" />
              </Button>
            </DialogTrigger>
            <FilterDialog />
          </Dialog>
        </div>

        <div className="relative h-[600px] w-full">
          {users.map((user, index) => (
            <TinderCard
              key={user.id}
              user={user}
              isActive={index === currentIndex}
              onSwipe={handleSwipe}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-16 w-16"
            onClick={() => handleSwipe('left')}
          >
            <X className="h-8 w-8 text-red-500" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-16 w-16"
            onClick={() => handleSwipe('right')}
          >
            <Heart className="h-8 w-8 text-green-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampusDating;