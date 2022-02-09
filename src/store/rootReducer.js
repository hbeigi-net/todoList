import { combineReducers } from "redux";
import uiReducer from "./slices/Ui"
import entReducer from "./slices/ent"
import userReducer from "./slices/user"

export const rootReducer = combineReducers({
        UI : uiReducer,
        ENT : entReducer, 
        USER : userReducer
})

