import SideBar from "./components/SideBar";
import { GlobalStyle } from "./style/globalStyle";
import { useTheme } from "./contexts/ThemeContext";
import {Routes , Route} from "react-router-dom"
import ThemeToggle from "./components/themeToggler"
import TaskDetail from "./components/taskDetail"
import AddTask from "./components/addTask"
import Login from "./components/login"
import Nav from "./components/nav"
import AuthCheck from "./components/checkAuth"
function App() {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyle theme={theme}/>
 
      <Routes>
          <Route path = "/" element ={<AuthCheck><Nav/></AuthCheck>}>
            <Route path=":taskid" element={<AuthCheck><TaskDetail/></AuthCheck>} />
            <Route path="addtask" element ={<AuthCheck><AddTask/></AuthCheck>}/>
          </Route>
          <Route path="auth" element={<Login/>} />
          
      </Routes>
    </>
  );
}

export default App;
 