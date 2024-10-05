"use client";

import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { setTheme, theme, themes } = useTheme();

  console.log("theme", theme);
  console.log("themes", themes);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <div className="w-full px-4">
        <div className="mx-auto w-full max-w-md">
          <input
            type="radio"
            name="theme"
            value="dark"
            onChange={handleChange}
            checked={theme === "dark"}
          />
          <input
            type="radio"
            name="theme"
            value="light"
            onChange={handleChange}
            checked={theme === "light"}
          />
          <input
            type="radio"
            name="theme"
            value="system"
            onChange={handleChange}
            checked={theme === "system"}
          />
        </div>
      </div>
    </>
  );
};

export { DarkModeSwitch };
