import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Heart, Star, Users } from "lucide-react";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  unlocked: boolean;
}

const badges: Badge[] = [
  {
    id: "1",
    name: "First Match",
    description: "Got your first match!",
    icon: <Heart className="h-6 w-6 text-pink-500" />,
    unlocked: true,
  },
  {
    id: "2",
    name: "Popular Profile",
    description: "Received 10+ likes",
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    unlocked: true,
  },
  {
    id: "3",
    name: "Social Butterfly",
    description: "Connected with 5+ people",
    icon: <Users className="h-6 w-6 text-blue-500" />,
    unlocked: false,
  },
];

const metrics = [
  { label: "Profile Views", value: 156 },
  { label: "Matches", value: 12 },
  { label: "Messages Sent", value: 48 },
];

export const GamificationDashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Your Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className={`${!badge.unlocked && 'opacity-50'}`}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    {badge.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {badge.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Your Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="text-center p-4">
                    <h4 className="text-2xl font-bold text-primary">
                      {metric.value}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};