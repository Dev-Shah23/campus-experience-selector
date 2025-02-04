import { ForumList } from "@/components/ForumList";

const Forums = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Forums</h1>
        <ForumList />
      </div>
    </div>
  );
};

export default Forums;