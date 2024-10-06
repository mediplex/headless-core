import { cn } from "@/utils/cn";
import Link from "next/link";

const LearnMore = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4 sm:max-w-lg">
        <Link
          href="/"
          className={cn(
            "mt-8 flex h-20 w-full items-center justify-center rounded-full text-lg font-bold",
            "bg-neutral-950 text-neutral-50",
            "dark:bg-neutral-50 dark:text-neutral-950",
            "shadow-lg transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl",
          )}
        >
          Back
        </Link>
    </div>
  );
};

export default LearnMore;
