import React ,{useState , useEffect} from 'react';
import styled from "styled-components"
import ThemeToggler from "./themeToggler"
import {useTheme} from "../contexts/ThemeContext"
import moment from "moment"
const Container =styled.nav`
    position : fixed ; 
    top : 0 ; 
    transition : all 500ms ease  ; 
    width : 100vw ; 
    padding : 10px 20px ; 
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    display : flex ; 
    align-items : center ; 
    background-color : ${props=>props.theme.palette.primary};
    justify-content : space-between;

`
export default function Nav() {
    const {theme} =useTheme();
    const [date, setDate] = useState(moment().format("dd : yyyy-MM-DD"));
    const [time , setTime] = useState(moment().format("HH : mm : ss"));
    useEffect(() => {
        const timerLocation = document.getElementById("navTimer")
        const timer = setInterval(() => {
            const newTime = moment().format("HH : mm : ss");
            timerLocation.innerHTML = newTime ; 
        }, 1000);
    
      return () => {
        clearInterval(timer);
      };
    }, []);
    
  return(
      <>
            <Container theme={theme}>
              

                <div style={{display:"flex" , flexDirection : "column" , justifyContent:"center" , alignItems : "cent"}}>
                    <h4>
                    {
                    date 
                    }
                    </h4>
                    <h6 id ="navTimer">
                    00 : 00 : 00
                    </h6>
                </div>
            
                <ThemeToggler />
                
            </Container>
      </>
  );
}
