import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

interface ClassCardProps {
  title: string;
  code: string;
  members: number;
  onJoin: () => void;
}

export const ClassCard = ({ title, code, members, onJoin }: ClassCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{code}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users size={16} />
            <span>{members} members</span>
          </div>
          <Button onClick={onJoin}>Join Study Group</Button>
        </div>
      </div>
    </Card>
  );
};