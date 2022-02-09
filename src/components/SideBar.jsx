import React, { useState } from 'react';
import styled from 'styled-components';
import {useTheme} from "../contexts/ThemeContext"
import TaskItem from "./taskItem"
import Button from '@mui/material/Button'
import { useDispatch , useSelector} from "react-redux"
const Drawer = styled.div`
    z-index : 100 ; 
    position : fixed ; 
    padding : 5px ; 
    text-align : center ; 
    top:0 ; 
    bottom : 0 ; 
    width : 25vw ;
    transition : all 500ms ease  ; 
    left : ${props=> props.open ? "0" : "-25vw"} ; 
    background-color : ${props=> props.theme.palette.primary} ;
    box-shadow : 1px 0px 1px 0px ${props=> props.theme.palette.primary} ;
    display : flex ; 
    justify-content : flex-start ; 
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
    margin-bottom : calc(3vh);
`
export default function SideBar({open}) {

    const {theme} = useTheme();
  return(

      <>

          <Drawer open ={open} theme={theme}>
          <h1>
          Todo List 
          </h1>
          <CenteredDiv>
          <TaskItem ></TaskItem>
          <TaskItem ></TaskItem>
          <TaskItem ></TaskItem>
          <TaskItem ></TaskItem>
          <TaskItem ></TaskItem>
          </CenteredDiv>
          <div style={{display : "flex" ,justifyContent : "space-between" , width : "90%"}}>
          <Button variant="contained" color="info">
          add task
          </Button>  
          <Button variant="contained" color="success">
          save changes
          </Button>
          </div>
          </Drawer>
          </>
          ) 
        }
        