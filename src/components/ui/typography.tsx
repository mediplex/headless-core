// https://www.realtimecolors.com/?colors=00151c-f9fdff-00bbff-248aa3-ff6e00&fonts=Inter-Inter
// https://typescale.com

// section headlines

import { cn } from "@/utils/cn";

type HeadlineProps = React.HTMLAttributes<HTMLHeadingElement> & {};
const Headline: React.FC<HeadlineProps> = ({ className, ...props }) => {
  return (
    <>
      <h1
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
          "text-primary-20",
          className,
        )}
        {...props}
      />
    </>
  );
};

type SubHeadlineProps = React.HTMLAttributes<HTMLParagraphElement> & {};
const SubHeadline: React.FC<SubHeadlineProps> = ({ className, ...props }) => {
  return (
    <p
      className={cn(
        "text-lg sm:text-xl md:text-2xl lg:text-3xl",
        "text-primary-30",
        className,
      )}
      {...props}
    />
  );
};

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {};
const Paragraph: React.FC<ParagraphProps> = ({ className, ...props }) => {
  return (
    <p
      className={cn(
        "text-base",
        "text-primary-5",
        "leading-relaxed tracking-wide",
        className,
      )}
      {...props}
    />
  );
};

type HeadlineGroupProps = React.HTMLAttributes<HTMLDivElement> & {};
const HeadlineGroup: React.FC<HeadlineGroupProps> = ({
  className,
  ...props
}) => {
  return (
    <>
      <hgroup className={cn("flex flex-col gap-2", className)} {...props} />
    </>
  );
};

type SectionHeadlineProps = React.HTMLAttributes<HTMLHeadingElement> & {};
const SectionHeadline: React.FC<SectionHeadlineProps> = ({
  className,
  ...props
}) => {
  return (
    <>
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
          "text-primary-20",
          className,
        )}
        {...props}
      />
    </>
  );
};

type SectionSubHeadlineProps = React.HTMLAttributes<HTMLParagraphElement> & {};
const SectionSubHeadline: React.FC<SectionSubHeadlineProps> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        "text-md sm:text-lg md:text-xl lg:text-2xl",
        "text-primary-30",
        className,
      )}
      {...props}
    />
  );
};



export {
  Headline,
  SubHeadline,
  HeadlineGroup,
  Paragraph,
  SectionHeadline,
  SectionSubHeadline,
};
