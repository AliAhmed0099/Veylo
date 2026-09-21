"use client";

import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

export default function ThemeSelector() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    themeChange(false);

    const savedTheme = window.localStorage.getItem("theme") || "dark";
    const dark = savedTheme === "dark";
    setIsDark(dark);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  function handleThemeChange(event) {
    const nextTheme = event.target.checked ? "dark" : "light";
    setIsDark(event.target.checked);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <label className="swap swap-rotate fixed right-4 top-4 z-50 rounded-full bg-base-100 p-2 shadow-lg">
      <input
        type="checkbox"
        checked={isDark}
        onChange={handleThemeChange}
        aria-label="Toggle light and dark theme"
      />

      <svg
        className="swap-off h-6 w-6 fill-current text-warning"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17.66A9 9 0 1 0 18.36 4.93 9 9 0 0 0 5.64 17.66ZM12 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM4 11h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2Zm15 0h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2ZM6.34 6.34a1 1 0 0 1 1.42 0l.7.7a1 1 0 0 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42Zm10.6 10.6a1 1 0 0 1 1.42 0 1 1 0 0 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42ZM17.66 6.34a1 1 0 0 1 0 1.42l-.7.7a1 1 0 0 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0ZM7.76 16.24a1 1 0 0 1 0 1.42l-.7.7a1 1 0 0 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0Z" />
      </svg>

      <svg
        className="swap-on h-6 w-6 fill-current text-info"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 0 1-10.45-10.45A1 1 0 0 0 9 1.36 10 10 0 1 0 22.64 15a1 1 0 0 0-1-.36ZM12 21a8 8 0 0 1-5.64-13.66A10 10 0 0 0 16.66 17 9.9 9.9 0 0 0 20 16.39 8 8 0 0 1 12 21Z" />
      </svg>
    </label>
  );
}
