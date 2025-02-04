import { ClubCard } from "@/components/ClubCard";

const ClubsAndSocieties = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Clubs & Societies</h1>
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
      </div>
    </div>
  );
};

export default ClubsAndSocieties;