import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const FilterDialog = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Filters</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {["Sports", "Music", "Art", "Tech", "Travel"].map((interest) => (
              <Button
                key={interest}
                variant="outline"
                className="rounded-full"
                size="sm"
              >
                {interest}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2">Year</h4>
          <div className="flex flex-wrap gap-2">
            {["Freshman", "Sophomore", "Junior", "Senior"].map((year) => (
              <Button
                key={year}
                variant="outline"
                className="rounded-full"
                size="sm"
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2">Major</h4>
          <div className="flex flex-wrap gap-2">
            {["Computer Science", "Business", "Engineering", "Arts"].map((major) => (
              <Button
                key={major}
                variant="outline"
                className="rounded-full"
                size="sm"
              >
                {major}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline">Reset</Button>
          <Button>Apply Filters</Button>
        </div>
      </div>
    </DialogContent>
  );
};