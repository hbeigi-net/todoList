import SideBar from "./components/SideBar";
import { GlobalStyle } from "./style/globalStyle";
import { useTheme } from "./contexts/ThemeContext";
import ThemeToggle from "./components/themeToggler"
import TaskDetail from "./components/taskDetail"
import AddTask from "./components/addTask"
import Login from "./components/login"
import Nav from "./components/nav"
function App() {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyle theme={theme}/>
      <Nav/>
    </>
  );
}

export default App;
 