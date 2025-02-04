import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Events</h1>
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

export default Events;