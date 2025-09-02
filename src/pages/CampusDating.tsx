import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Heart, X, Filter, User, RotateCcw } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast"; // ✅ Ensure correct import
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

const usersData: User[] = [
  {
    id: "1",
    name: "Tashvi Mehta",
    age: 20,
    major: "Computer Science",
    year: "First",
    bio: "Coffee addict, code enthusiast",
    interests: ["Programming", "Coffee", "Music"],
    image: "0-MehtaTashvi-e1729893642445-1114x1200.jpg"
  },
  {
    id: "2",
    name: "Yash",
    age: 21,
    major: "Electronics",
    year: "3rd year",
    bio: "Basketball player, future entrepreneur",
    interests: ["Sports", "Startups", "Travel"],
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
  },
  {
    id: "3",
    name: "Tanisha Jain",
    age: 21,
    major: "Artificial Intelligence",
    year: "2nd year",
    bio: "Basketball player, future entrepreneur",
    interests: ["Sports", "Startups", "Travel"],
    image: "WhatsApp Image 2025-02-07 at 22.00.14.jpeg"
  },
];

const CampusDating = () => {
  const navigate = useNavigate();
  const { toast } = useToast(); // ✅ Ensure toast is correctly used
  const [users, setUsers] = useState(usersData);
  const [swipedUsers, setSwipedUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState<User | null>(null);

  const handleSwipe = (direction: "left" | "right") => {
    if (users.length === 0) return;
    const swipedUser = users[0];
    setSwipedUsers([swipedUser, ...swipedUsers]);
    setUsers(users.slice(1));

    if (direction === "right") {
      toast({
        title: "It's a Match! 🎉",
        description: `You and ${swipedUser.name} liked each other!`,
        duration: 3000,
      });
    }
  };

  const rewindLastSwipe = () => {
    if (swipedUsers.length === 0) return;
    setUsers([swipedUsers[0], ...users]);
    setSwipedUsers(swipedUsers.slice(1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="hover:bg-primary/10">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-3xl font-bold">Campus Dating</h1>
          </div>
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Filter className="h-6 w-6" />
                </Button>
              </DialogTrigger>
              <FilterDialog />
            </Dialog>
            <Button variant="ghost" size="icon" onClick={() => navigate("/profile")} className="hover:bg-primary/10">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Tinder Cards */}
        <div className="relative h-[600px] w-full">
          {users.length > 0 ? (
            users.map((user, index) => (
              <TinderCard
                key={user.id}
                user={user}
                isActive={index === 0}
                onSwipe={handleSwipe}
                onClick={() => setShowModal(user)}
              />
            ))
          ) : (
            <div className="flex items-center justify-center h-full text-xl font-semibold text-gray-500">
              No More Profiles 😢
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button size="lg" variant="outline" className="rounded-full h-16 w-16" onClick={() => handleSwipe("left")}>
            <X className="h-8 w-8 text-red-500" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-16 w-16" onClick={rewindLastSwipe}>
            <RotateCcw className="h-8 w-8 text-yellow-500" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-16 w-16" onClick={() => handleSwipe("right")}>
            <Heart className="h-8 w-8 text-green-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampusDating;