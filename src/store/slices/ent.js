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
            state.tasks.unshift(action.payload.tasks) ; 
        },
        checkTask :(state , action)=>
        {
            const id = action.payload.id ; 
            state.tasks.map(item=>{
                if(item.id ===id )
                {
                    item.isCompeleted = true ; 
                }
                // item.id == id ? item.isCompeleted = true : ''; 
            })
        },
        unCkeckTask : (state, action)=>
        {
            const id = action.payload.id ; 
            state.tasks.map(item=>{
                if(item.id ===id )
                {
                    item.isCompeleted = false ; 
                }
                // item.id == id ? item.isCompeleted = false : ''; 
            })
        } 
       }
})


export const {checkTask , unCkeckTask , addTask} = entSlice.actions ; 
export default entSlice.reducer ; 