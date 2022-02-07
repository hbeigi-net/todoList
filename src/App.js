import SideBar from "./components/SideBar";
import { GlobalStyle } from "./style/globalStyle";
import { useTheme } from "./contexts/ThemeContext";
import ThemeToggle from "./components/themeToggler"
import TaskDetail from "./components/taskDetail"
function App() {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeToggle/>
      <SideBar />
      <TaskDetail/>
    </>
  );
}

export default App;
 