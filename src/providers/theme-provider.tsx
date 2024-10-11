"use client";

import { ThemeProvider as TProvider } from "next-themes";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <TProvider
      attribute="data-theme"
      // defaultTheme="system"
      storageKey="theme"
      enableSystem={true}
      enableColorScheme={true}
      disableTransitionOnChange={false}
    >
      {children}
    </TProvider>
  );
};

export { ThemeProvider };
