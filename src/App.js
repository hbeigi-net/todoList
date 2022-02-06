import SideBar from "./components/SideBar";
import { GlobalStyle } from "./style/globalStyle";
import { useTheme } from "./contexts/ThemeContext";
import ThemeToggle from "./components/themeToggler"
function App() {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeToggle/>
      <SideBar />
      <h1>
        hello world 
      </h1>
    </>
  );
}

export default App;
 