"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Ensures SSR doesn't mismatch

  const isDark = resolvedTheme === "dark";

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
      <div className="hidden md:flex items-center gap-2 bg-slate-200 dark:bg-slate-800 w-fit px-3 py-2 rounded-full">
        <Sun className="h-4 w-4 text-yellow-500" />
        <Switch checked={isDark} onCheckedChange={handleToggle} />
        <Moon className="h-4 w-4 text-blue-500" />
      </div>
  );
}