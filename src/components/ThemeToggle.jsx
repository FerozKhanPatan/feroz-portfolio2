import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // optional icons

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-xl p-2 rounded-full hover:bg-gray-700 transition"
      title="Toggle theme"
    >
      {dark ? <Sun className="text-yellow-300" /> : <Moon className="text-white" />}
    </button>
  );
};

export default ThemeToggle;