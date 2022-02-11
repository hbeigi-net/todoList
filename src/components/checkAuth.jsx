import React from 'react'
import {useAuth} from "../contexts/AuthContext"
import { Navigate , useLocation , useNavigate} from "react-router-dom"
export default function CheckAuth({children}) {

    const {auth} =useAuth();
    // const navigate = useNavigate();
    console.log(auth);
    const location = useLocation();


    if(!auth)
    {
        return <Navigate to="/auth" state={{path : location.pathname}}/>
    }
  return children 
}
