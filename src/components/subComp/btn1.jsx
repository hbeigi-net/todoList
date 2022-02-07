import styled from "styled-components"


export const BtnOne =styled.button`
    
    position : relative ; 
    overflow : hidden ; 
    padding : 5px 15px ; 
    background-color : transparent ; 
    border : 1px solid ${props=> props.theme.mode==="dark"? props.theme.palette.text:"#6d6d6d36"};
    border-radius : 2px ; 
    color : ${props=> props.theme.palette.text};
    transition : all 300ms ease-in-out ; 
    box-shadow : 0 0 1px black; 
    cursor: pointer;
    &:hover{
        background-color : ${props=> props.theme.palette.bg};
        color : ${props=> props.theme.palette.text};
    }
`