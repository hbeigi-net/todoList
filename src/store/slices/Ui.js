import {createSlice} from "@reduxjs/toolkit"




const init = 
{
    sideOpen : true ,

}


const uiSlice = createSlice({
    name : "UI_slice",
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