import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ClassCard } from "@/components/ClassCard";
import { ClubCard } from "@/components/ClubCard";
import { ForumList } from "@/components/ForumList";
import { CampusMap } from "@/components/CampusMap";
import { useNavigate } from "react-router-dom";

const CommunityClub = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Community Club</h1>
        
        <Tabs defaultValue="classes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="classes">Class Connections</TabsTrigger>
            <TabsTrigger value="clubs">Clubs & Societies</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="map">Campus Map</TabsTrigger>
            <TabsTrigger value="forums">Forums</TabsTrigger>
          </TabsList>

          <TabsContent value="classes" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ClassCard
                title="Introduction to Computer Science"
                code="CS101"
                members={24}
                onJoin={() => console.log("Joined CS101")}
              />
              <ClassCard
                title="Business Analytics"
                code="BA200"
                members={18}
                onJoin={() => console.log("Joined BA200")}
              />
              <ClassCard
                title="Psychology 101"
                code="PSY101"
                members={32}
                onJoin={() => console.log("Joined PSY101")}
              />
            </div>
          </TabsContent>

          <TabsContent value="clubs" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ClubCard
                name="Chess Club"
                members={45}
                description="Weekly meetings and tournaments"
                onJoin={() => console.log("Joined Chess Club")}
              />
              <ClubCard
                name="Debate Society"
                members={60}
                description="Improve your public speaking"
                onJoin={() => console.log("Joined Debate Society")}
              />
              <ClubCard
                name="Photography Club"
                members={28}
                description="Weekly photo walks and workshops"
                onJoin={() => console.log("Joined Photography Club")}
              />
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md"
                />
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <EventItem
                    title="Campus Music Festival"
                    date="2024-04-15"
                    attendees={120}
                  />
                  <EventItem
                    title="Career Fair"
                    date="2024-04-20"
                    attendees={250}
                  />
                  <EventItem
                    title="Tech Meetup"
                    date="2024-04-25"
                    attendees={75}
                  />
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="map">
            <CampusMap />
          </TabsContent>

          <TabsContent value="forums">
            <ForumList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const EventItem = ({ title, date, attendees }: { title: string; date: string; attendees: number }) => (
  <div className="flex items-center justify-between p-4 rounded-lg bg-card hover:bg-secondary/50 transition-colors">
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-muted-foreground">{date}</p>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-sm text-muted-foreground">{attendees} attending</span>
      <Button size="sm">RSVP</Button>
    </div>
  </div>
);

export default CommunityClub;