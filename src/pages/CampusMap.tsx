import { CampusMap as CampusMapComponent } from "@/components/CampusMap";

const CampusMap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Campus Map</h1>
        <CampusMapComponent />
      </div>
    </div>
  );
};

export default CampusMap;