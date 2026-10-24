
import { ThemeProvider, useTheme } from "./ThemeContext";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
