
import { useTheme } from "./ThemeContext";

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="navbar">
      <h2>🌐 Theme App</h2>

      <div className="buttons">
        <button
          className={theme === "light" ? "active" : ""}
          onClick={() => setTheme("light")}
        >
          ☀️ Light Mode
        </button>

        <button
          className={theme === "dark" ? "active" : ""}
          onClick={() => setTheme("dark")}
        >
          🌙 Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
