import {createSlice} from "@reduxjs/toolkit"




const init = 
{
    user : null ,

}


const userSlice = createSlice({
    name : "User_slice",
    initialState : init , 
    reducers : {
        login : (state , action )=>
        {
            state.user = action.payload.user ;  
        },
    }
})

export const {login} = userSlice.actions;
export default userSlice.reducer ; 