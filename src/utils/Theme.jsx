import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Theme = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={themeHandler}
      className="flex place-items-center py-4 px-4 gap-5 hover:bg-black/60 dark:hover:bg-white/40 transform hover:-translate-y-2"
    >
      {theme === "light" ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
      <span className="text-xl font-medium">Light Mode</span>
    </button>
  );
};

export default Theme;
