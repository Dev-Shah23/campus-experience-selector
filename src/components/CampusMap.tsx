import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const CampusMap = () => {
  return (
    <Card className="p-6">
      <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
        <div className="text-center space-y-4">
          <MapPin className="w-12 h-12 text-primary mx-auto" />
          <p className="text-muted-foreground">
            Interactive map will be implemented with Mapbox integration
          </p>
        </div>
      </div>
    </Card>
  );
};