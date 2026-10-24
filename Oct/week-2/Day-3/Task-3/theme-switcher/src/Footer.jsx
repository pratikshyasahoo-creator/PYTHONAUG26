
import { useTheme } from "./ThemeContext";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="footer">
      <p>
        © 2026 Theme App | Current Theme: {theme}
      </p>
    </footer>
  );
}

export default Footer;
