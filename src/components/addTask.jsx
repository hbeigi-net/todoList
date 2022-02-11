import React ,{useState} from 'react';
import styled from "styled-components"
import {useTheme} from "../contexts/ThemeContext"
import DatePicker from "./subComp/timePicker"
import Button from '@mui/material/Button'
import {useAuth} from "../contexts/AuthContext"
import {useNavigate} from "react-router-dom"
// import moment from "moment"
const Container = styled.div`
    
    display : flex ; 
    flex-direction :column ; 
    align-items : center ; 
    justify-content : center ; 
    position : fixed ; 
    z-index : 101 ; 
    text-align :center ; 
    width : 50vw ; 
    min-width : 350px ; 
    height : 60vh ; 
    min-height : 350px ; 
    top : 50% ; 
    left : 50% ; 
    transform : translate(-50% , -50%);
    border : 1px solid #00000034 ;
    /* box-shadow : 1px 1px 200px -140px #000000eb;   */
    border-radius : 5px ; 
    background-color : ${({theme})=> theme.palette.bg};
    color : ${({theme})=> theme.palette.text};
    padding : 1rem ; 
    box-shadow : ${porps=>porps.theme.mode ==='dark' ? "  rgba(133, 131, 131, 0.4) 0px 2px 4px, rgba(189, 58, 194, 0.3) 0px 7px 13px -3px;" : "rgba(67, 60, 63, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"}

    `

const CustomInput = styled.input`
padding : 5px 15px ; 
width : 230px ; 
height : 55px ; 
margin-right : 20px   ; 
font-size : 1rem ; 
    &:focus
    {
        outline : none ; 
    }
`
const TTarea = styled.textarea`
        display : block ; 
        margin : auto ; 
        margin-top : 30px ; 
        width : 80% ; 
        min-height : 200px ; 
        padding : 5px 15px ; 
        margin-bottom : 20px ; 
        &:focus
       {
        outline : none ; 
        box-shadow : 0 0 10px 0 blue inset ; 
        }
`
export default function Addtask() {
    const navigate = useNavigate();
    const {theme}=useTheme();
    const {auth} = useAuth();
    const [title , setTitle] = useState('');
    const [time , setTime] = useState(null);
    const [desc , setDesc] = useState('');
    
    const onAdd = ()=>
    {
        const addTask = async ()=>
        {
            try 
            {
                const response = await fetch(`${process.env.BASE_URL}${process.env.ADD_TASK}`,{
                    method : "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        title ,
                        time ,
                        desc , 
                        auth 
                    }),
                });
            }catch(error)
            {
                console.log(error.message);
            }
        }
        addTask();
        navigate("/")
        /* console.log(title  , time , desc);
        console.log(time.getDay());
        console.log(time.getDate());
        console.log(moment(time).format("YYYY-MM-DD")) */
    }
  return (
      <>
       <Container theme={theme}>
       <div>
       <CustomInput value ={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Task Title'/>
       <DatePicker value ={time} setValue={setTime} sx={{margin : "0"}}/>
       </div>
        <TTarea placeholder='Task Description '  value={desc}  onChange={(e)=>setDesc(e.target.value)} />
        <Button variant="contained" onClick={(e)=>onAdd()} color="success">
                add task
        </Button>
        </Container>
    </>
  );
}
