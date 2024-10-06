"use client";

import dynamic from "next/dynamic";
// import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { LoaderCircle, Moon, Sun } from "lucide-react";
import { cn } from "@/utils/cn";

const Switch = dynamic(
  () => import("@headlessui/react").then((mod) => mod.Switch),
  {
    ssr: false,
    loading: () => (
      <div className="inline-flex h-6 w-11 items-center justify-center rounded-full bg-neutral-500">
        <LoaderCircle className="size-4 animate-spin rounded-full text-neutral-200" />
      </div>
    ),
  },
);

const DarkModeSwitch = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();

  const handleChange = (isChecked: boolean) => {
    console.log("hadleChane: isChecked", isChecked);
    setTheme(isChecked ? "dark" : "light");
  };

  return (
    <Switch
      checked={
        theme === "dark" ||
        (theme === "system" &&
          typeof resolvedTheme !== "undefined" &&
          resolvedTheme === "dark")
      }
      onChange={handleChange}
      className={cn(
        "group inline-flex h-6 w-11 items-center rounded-full border transition",
        "border-neutral-600 bg-neutral-200 text-neutral-300",
        "dark:border-neutral-300 dark:bg-neutral-600 dark:text-neutral-600",
      )}
    >
      <div
        className={cn(
          "relative size-4 translate-x-1 rounded-full shadow-lg transition duration-500 ease-out dark:translate-x-6",
          "bg-neutral-600",
          "dark:bg-neutral-300",
        )}
      >
        <Sun
          className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 opacity-100 dark:opacity-0"
          fill="currentColor"
        />
        <Moon
          className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 opacity-0 dark:opacity-100"
          fill="currentColor"
        />
      </div>
    </Switch>
  );
};

export { DarkModeSwitch };
