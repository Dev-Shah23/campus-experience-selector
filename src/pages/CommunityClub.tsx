import { useNavigate } from "react-router-dom";
import { Grid, Users, Calendar, MapPin, MessageSquare } from "lucide-react";
import { OptionCard } from "@/components/OptionCard";

const CommunityClub = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Class Connections",
      description: "Join study groups and connect with classmates",
      icon: <Grid className="w-6 h-6 text-[#FF00FF]" />,
      path: "/community/classes"
    },
    {
      title: "Clubs & Societies",
      description: "Discover and join student organizations",
      icon: <Users className="w-6 h-6 text-[#FF00FF]" />,
      path: "/community/clubs"
    },
    {
      title: "Events",
      description: "Browse and RSVP to campus events",
      icon: <Calendar className="w-6 h-6 text-[#FF00FF]" />,
      path: "/community/events"
    },
    {
      title: "Campus Map",
      description: "Find meeting spots and important locations",
      icon: <MapPin className="w-6 h-6 text-[#FF00FF]" />,
      path: "/community/map"
    },
    {
      title: "Forums",
      description: "Engage in discussions with fellow students",
      icon: <MessageSquare className="w-6 h-6 text-[#FF00FF]" />,
      path: "/community/forums"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Community Club</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <OptionCard
              key={section.title}
              title={section.title}
              description={section.description}
              icon={section.icon}
              onClick={() => navigate(section.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityClub;