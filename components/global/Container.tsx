import { cn } from "@/lib/utils";

type Container = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className }: Container) => {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
