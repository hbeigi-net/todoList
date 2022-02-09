import React ,{useState , useEffect} from 'react';
import styled from "styled-components"
import ThemeToggler from "./themeToggler"
import {useTheme} from "../contexts/ThemeContext"
import Side from "./SideBar"
import Button from '@mui/material/Button'
import moment from "moment"
import { Outlet } from 'react-router-dom';
const Container =styled.nav`
    position : fixed ; 
    border-left : 2px solid  ${props=>props.theme.mode === "dark" ? 'rgba(255, 255, 255, 0.479)' :'rgba(0, 0, 0, 0.23)' } ; 
    top : 0 ; 
    transition : all 500ms ease  ; 
    width : ${props=> props.open? "75vw" : "100vw"}  ; 
    right : 0 ; 
    padding : 10px 20px ; 
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    display : flex ; 
    align-items : center ; 
    background-color : ${props=>props.theme.palette.primary};
    justify-content : space-between;

`
export default function Nav() {
    const {theme} =useTheme();
    const [open, setOpen] = useState(true);
    const [date, setDate] = useState(moment().format("dd : yyyy-MM-DD"));
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
            <Side open={open}/>
            <Container theme={theme} open ={open}>
            <Button variant="contained" color="warning" onClick={()=>setOpen(open=>!open)}>
              Tasks
             </Button>

                <div style={{display:"flex" , flexDirection : "column" , justifyContent:"center" , alignItems : "center"}}>
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
            <Outlet/>
      </>
  );
}
