import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Card } from "@/components/ui/card";

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
  onSwipe: (direction: "left" | "right") => void;
  onClick?: () => void; // ✅ Ensure onClick is included
}

export const TinderCard = ({
  user,
  isActive,
  onSwipe,
  onClick,
}: TinderCardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);

  const handleDragEnd = () => {
    const xVal = x.get();
    if (Math.abs(xVal) > 100) {
      onSwipe(xVal > 0 ? "right" : "left");
    }
  };

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        style={{ x, rotate, opacity, scale }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        whileDrag={{ cursor: "grabbing" }}
        className="absolute w-full cursor-grab"
        onClick={onClick} // ✅ Ensure onClick is actually used
      >
        <Card className="overflow-hidden animate-fade-in">
          <div className="relative h-[500px]">
            <img
              src={user.image}
              alt={user.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold">
                {user.name}, {user.age}
              </h3>
              <p className="text-lg">
                {user.major} • {user.year}
              </p>
              <p className="mt-2">{user.bio}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {user.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};
