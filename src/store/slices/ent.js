import { createSlice } from "@reduxjs/toolkit";
const initOne ={
    tasks : [],

}


const entSlice = createSlice({
    initialState : initOne ,
    name : "Entities",

    reducers :{
        addTask : (state , action )=>
        {
            state.tasks = action.payload.tasks ; 
        },
        checkTask :(state , action)=>
        {
            const id = action.payload.id ; 
            state.tasks.map(item=>{
                item.id == id ? item.isCompeleted = true : ''; 
            })
        },
        unCkeckTask : (state, action)=>
        {
            const id = action.payload.id ; 
            state.tasks.map(item=>{
                item.id == id ? item.isCompeleted = false : ''; 
            })
        } 
       }
})