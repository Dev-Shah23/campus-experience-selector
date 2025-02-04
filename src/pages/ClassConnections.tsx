import { ClassCard } from "@/components/ClassCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ClassConnections = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-primary/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-3xl font-bold">Class Connections</h1>
        </div>
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
      </div>
    </div>
  );
};

export default ClassConnections;