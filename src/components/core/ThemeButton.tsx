import { useThemeStore } from "@/store/zustandStore";
import { useEffect } from "react";

export const ThemeButton = () => {
  const { isDarkMode, setIsDarkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded h-9 w-9 mr-auto flex justify-center items-center bg-primary"
    >
      <img src={isDarkMode ? "/light.svg" : "/dark.svg"} alt="theme-toggle" />
    </button>
  );
};

