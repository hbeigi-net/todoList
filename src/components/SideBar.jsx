import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import {useTheme} from "../contexts/ThemeContext"
import TaskItem from "./taskItem"
import Button from '@mui/material/Button'
import {useNavigate} from "react-router-dom"
import { useSelector , useDispatch } from "react-redux";
import { addTask } from "../store/slices/ent";
import {useAuth} from "../contexts/AuthContext"
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
    const navigate = useNavigate();
    const {theme} = useTheme();
    const {auth} = useAuth();
    const toAddTask =()=>
    {
        navigate("addtask")
    }
    const tasks = useSelector(state=> state.ENT.tasks); 
    const dispatch= useDispatch();
    useEffect(()=>
    {
        const getTasks = async ()=>
        {
            const response = await fetch(`${process.env.BASE_URL}${process.env.GET_TASK}`)
            const data = await response.json();

            /* dispatch(addTask(data)); */
            
            
        }
        /* getTasks() */
        dispatch(addTask({name : "hamid"}));
    },[])
    const handleSave =()=>
    {
        const saveChanges = async ()=>
        {
            const response = await fetch(`${process.env.BASE_URL}${process.env.PUSH_URL}`,{
                method:"POST",
                headers : {"content type " : 'text'},
                body : {
                    tasks , 
                    auth
                }
            })
        }
    }

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
          <Button variant="contained" onClick={(e)=>toAddTask()} color="info">
          add task
          </Button>  
          <Button variant="contained" color="success" onClick={(e)=> handleSave()}>
          save changes
          </Button>
          </div>
          </Drawer>
          </>
          ) 
        }
        