import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

interface ClubCardProps {
  name: string;
  members: number;
  description: string;
  onJoin: () => void;
}

export const ClubCard = ({ name, members, description, onJoin }: ClubCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users size={16} />
            <span>{members} members</span>
          </div>
          <Button onClick={onJoin}>Join Chat</Button>
        </div>
      </div>
    </Card>
  );
};