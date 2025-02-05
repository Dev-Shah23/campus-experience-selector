import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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

interface TinderCardProps {
  user: User;
  isActive: boolean;
  onSwipe: (direction: 'left' | 'right') => void;
}

export const TinderCard = ({ user, isActive, onSwipe }: TinderCardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  const handleDragEnd = () => {
    const xVal = x.get();
    if (Math.abs(xVal) > 100) {
      onSwipe(xVal > 0 ? 'right' : 'left');
    }
  };

  if (!isActive) return null;

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="absolute w-full cursor-grab active:cursor-grabbing"
    >
      <Card className="overflow-hidden">
        <div className="relative h-[500px]">
          <img
            src={user.image}
            alt={user.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
            <h3 className="text-2xl font-bold">{user.name}, {user.age}</h3>
            <p className="text-lg">{user.major} • {user.year}</p>
            <p className="mt-2">{user.bio}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {user.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};