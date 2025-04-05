import { create } from "zustand";

const useThemeStore = create((set) => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.classList[initialTheme === "dark" ? "add" : "remove"]("dark");

    return {
      theme: initialTheme,
      setTheme: (theme) => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
        set({ theme });
      },
    };
  }

  return { theme: "light", setTheme: () => {} };
});

export default useThemeStore;



