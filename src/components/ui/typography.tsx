import { cn } from "@/utils/cn";

interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

const Headline = ({ children }: HeadlineProps) => {
  return (
    <>
      <h1
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
          "text-primary-20",
        )}
      >
        {children}
      </h1>
    </>
  );
};

const SubHeadline = ({ children }: HeadlineProps) => {
  return (
    <>
      <p
        className={cn(
          "text-lg sm:text-xl md:text-2xl lg:text-3xl",
          "text-primary-30",
        )}
      >
        {children}
      </p>
    </>
  );
};

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children?: React.ReactNode;
}
const Paragraph: React.FC<ParagraphProps> = () => {
  return (
    <>
      <p
        className={cn(
          "text-base",
          "text-primary-5",
        )}
      >
        {children}
      </p>
    </>
  );
};

const HeadlineGroup = ({ children, className }: HeadlineProps) => {
  return (
    <>
      <div className={cn("flex flex-col gap-2", className)}>{children}</div>
    </>
  );
};

export { Headline, SubHeadline, HeadlineGroup, Paragraph };
