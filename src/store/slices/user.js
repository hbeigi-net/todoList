import {createSlice} from "@reduxjs/toolkit"




const init = 
{
    user : null ,

}


const uiSlice = createSlice({
    name : "User_slice",
    initialState : init , 
    reducers : {
        toggleSide : (state , action )=>
        {
            state.sideOpen = !state.sideOpen 
        }
    }
})

export const {toggleSide} = uiSlice.actions;
export default uiSlice.reducer ; 