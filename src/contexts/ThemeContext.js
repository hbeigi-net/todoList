import React from 'react';
import {createContext , useState , useEffect , useContext} from "react"

const Theme = {
    light : 
    {
        mode : "light",
        palette : 
        {

            bg : "#e3e3e3",
            text : "#0C2D48",
            primary : "#a6bcff",
            secondary : "#FFAEBC"
        }
    },
    dark : 
    {
        mode : "dark",
        palette : 
        {
            text : "#fff",
            bg : "#0C2D48",
            primary : "#3655b3",
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