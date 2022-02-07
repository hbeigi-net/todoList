import SideBar from "./components/SideBar";
import { GlobalStyle } from "./style/globalStyle";
import { useTheme } from "./contexts/ThemeContext";
import ThemeToggle from "./components/themeToggler"
import TaskDetail from "./components/taskDetail"
import AddTask from "./components/addTask"
function App() {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeToggle/>
      {/* <ThemeToggle/>
      <SideBar />
      <TaskDetail/> */}
      <AddTask/>
    </>
  );
}

export default App;
 