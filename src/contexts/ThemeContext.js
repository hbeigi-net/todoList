import React from 'react';
import {createContext , useState , useEffect , useContext} from "react"

const Theme = {
    light : 
    {
        mode : "light",
        palette : 
        {

            bg : "#E7F2F8",
            text : "#0C2D48",
            primary : "#D3BBDD",
            secondary : "#FFAEBC"
        }
    },
    dark : 
    {
        mode : "dark",
        palette : 
        {
            text : "#E7F2F8",
            bg : "#0C2D48",
            primary : "#D3BBDD",
            secondary : "#FFAEBC"
        }
    }
}

const ThemeContext = createContext();


export  function ThemeProvider({children}) {

    const [theme, setTheme] = useState(Theme.light);
    const [mode, setMode] = useState("light");

    useEffect(() => {
        mode==="dark" ? setTheme(Theme.dark):setTheme(Theme.light);
        window.localStorage.setItem("theme" , mode);
    }, [mode]);
    
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme ? setMode(localTheme) : setMode("light");
    }, []);
    
  return <>
    <ThemeContext.Provider value={{theme , mode , setMode}}>
        {
            children
        }
    </ThemeContext.Provider>
  </>;
}

export const  useTheme =()=>
{
    return useContext(ThemeContext); 
}