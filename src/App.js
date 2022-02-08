import SideBar from "./components/SideBar";
import { GlobalStyle } from "./style/globalStyle";
import { useTheme } from "./contexts/ThemeContext";
import {Routes , Route} from "react-router-dom"
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
 
      <Routes>
          <Route path = "/" element ={<Nav/>}>
            <Route path=":taskid" element={<TaskDetail/>} />
            <Route path="addtask" element ={<AddTask/>}/>
          </Route>
          <Route path="auth" element={<Login/>} />
          
      </Routes>
    </>
  );
}

export default App;
 