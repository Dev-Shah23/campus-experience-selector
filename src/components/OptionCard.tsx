import { cn } from "@/lib/utils";

interface OptionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const OptionCard = ({
  title,
  description,
  icon,
  onClick,
  className,
}: OptionCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "glass rounded-2xl p-6 card-hover animate-fade-in",
        className
      )}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};