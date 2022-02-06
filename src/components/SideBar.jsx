
import React, { useState } from 'react';
import styled from 'styled-components';
import {useTheme} from "../contexts/ThemeContext"


const Drawer = styled.div`
    position : fixed ; 
    padding : 5px ; 
    text-align : center ; 
    top:0 ; 
    bottom : 0 ; 
    width : 330px ;
    transition : all 500ms ease-in-out;
    left : ${props=> props.open ? "0" : "-330px"} ; 
    background-color : ${props=> props.theme.palette.primary} ;
    box-shadow : 1px 0px 1px 0px ${props=> props.theme.palette.primary} ;
    display : flex ; 
    justify-content : space-between ; 
    align-items : center ; 
    flex-direction : column
`

const CenteredDiv = styled.div`
    border : 1px solid #6d6d6d36;
    position : relative ; 
    height : 80vh ; 
    width : 90% ; 
    border-radius : 3px; 
    background-color : #c3e0e549;
`
export default function SideBar() {
    const [open, setOpen] = useState(true);
    const {theme} = useTheme();
  return <>
        <button style={{position : "fixed" , right : "300px"}} onClick={()=>setOpen(open=>!open)}>
            toggle
        </button>
        <Drawer open ={open} theme={theme}>
            <h1>
                Todo List 
            </h1>
           <CenteredDiv>
           </CenteredDiv>
           <button>
                hello world
           </button>
        </Drawer>
  </>;
}
