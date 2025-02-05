import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Settings, Lock, Eye, Bell, Ban, Edit, List, Trophy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { GamificationDashboard } from "@/components/GamificationDashboard";

const UserProfile = () => {
  const [visibility, setVisibility] = useState(true);
  const [doNotDisturb, setDoNotDisturb] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-3xl font-bold"
        >
          Profile Settings
        </motion.h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Preferences
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex flex-col items-center space-y-4 p-6 bg-card rounded-lg">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Edit className="h-4 w-4" />
                  Change Photo
                </Button>
                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" defaultValue="Sarah Johnson" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" placeholder="Tell us about yourself" defaultValue="Coffee addict, code enthusiast" />
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="preferences">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-lg p-6 space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <List className="h-5 w-5" />
                  Interests
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Major</Label>
                    <Input placeholder="Your major" defaultValue="Computer Science" />
                  </div>
                  <div className="space-y-2">
                    <Label>Year</Label>
                    <Input placeholder="Your year" defaultValue="Junior" />
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="privacy">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-lg p-6 space-y-6"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    <Label>Profile Visibility</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Make your profile visible to other users
                  </p>
                </div>
                <Switch
                  checked={visibility}
                  onCheckedChange={setVisibility}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    <Label>Do Not Disturb</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pause all notifications
                  </p>
                </div>
                <Switch
                  checked={doNotDisturb}
                  onCheckedChange={setDoNotDisturb}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Ban className="h-5 w-5" />
                  <Label>Blocked Users</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Manage your blocked users list
                </p>
                <Button variant="outline" className="w-full">
                  View Blocked Users
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="achievements">
            <GamificationDashboard />
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-end"
        >
          <Button
            onClick={handleSave}
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Save Changes
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UserProfile;