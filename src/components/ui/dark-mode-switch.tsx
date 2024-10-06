"use client";

import dynamic from "next/dynamic";
// import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { LoaderCircle, Moon, Sun } from "lucide-react";

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

  // console.log("theme", theme);
  // console.log("!!resolvedTheme", !!resolvedTheme);
  // console.log("resolvedTheme", resolvedTheme);
  return (
    <Switch
      checked={
        theme === "dark" ||
        (theme === "system" &&
          typeof resolvedTheme !== "undefined" &&
          resolvedTheme === "dark")
      }
      onChange={handleChange}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-neutral-950 transition data-[checked]:bg-neutral-50"
    >
      <div className="relative size-4 translate-x-1 rounded-full border-neutral-50 text-neutral-50 shadow  shadow-neutral-50 dark:shadow-neutral-950/50 transition group-data-[checked]:translate-x-6 dark:border-neutral-950 dark:text-neutral-950">
        <Sun
          className="absolute left-1/2 top-1/2 z-10 size-2 -translate-x-1/2 -translate-y-1/2 opacity-100 group-data-[checked]:opacity-0"
          fill="currentColor"
        />
        <Moon
          className="absolute left-1/2 top-1/2 z-10 size-2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-data-[checked]:opacity-100"
          fill="currentColor"
        />
      </div>
    </Switch>
  );
};

export { DarkModeSwitch };
