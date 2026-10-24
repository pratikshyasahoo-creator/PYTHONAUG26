
import { useTheme } from "./ThemeContext";

function Home() {
  const { theme } = useTheme();

  return (
    <main className="home">
      <h1>
        {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </h1>

      <h2>Welcome to My React Application!</h2>

      <p>
        This application uses useContext to share the theme
        across components and useState to update the theme.
      </p>

      <p>
        Select Light Mode or Dark Mode from the navbar to
        change the entire application theme.
      </p>
    </main>
  );
}

export default Home;
