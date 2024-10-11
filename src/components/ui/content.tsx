import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const contentVariants = cva("prose", {
  variants: {
    size: {
      sm: "prose-sm",
      md: "prose-base",
      lg: "prose-lg",
      xl: "prose-xl",
      xxl: "prose-2xl",
    },
  },
  compoundVariants: [{ size: "md" }],
  defaultVariants: {
    size: "md",
  },
});

type ContentProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof contentVariants>;
const Content: React.FC<ContentProps> = ({ className, size, ...props }) => {
  return (
    <div className={cn("",contentVariants({ size }), className)} {...props} />
  );
};

export { Content };
