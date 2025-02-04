import { Card } from "@/components/ui/card";
import { MessageSquare, ArrowRight } from "lucide-react";

export const ForumList = () => {
  const forums = [
    {
      title: "Academic Discussion",
      description: "Discuss courses, assignments, and academic topics",
      posts: 156,
    },
    {
      title: "Campus Life",
      description: "Share experiences and tips about campus living",
      posts: 89,
    },
    {
      title: "Career & Internships",
      description: "Find opportunities and career advice",
      posts: 234,
    },
  ];

  return (
    <div className="space-y-4">
      {forums.map((forum) => (
        <Card
          key={forum.title}
          className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">{forum.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{forum.description}</p>
              <p className="text-sm">{forum.posts} posts</p>
            </div>
            <ArrowRight className="text-muted-foreground" />
          </div>
        </Card>
      ))}
    </div>
  );
};