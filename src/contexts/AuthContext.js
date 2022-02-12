import { createContext , useContext , useState , useEffect} from "react";


const AuthContext = createContext();




export function AuthProvider({children})
{
    const [auth, setAuth] = useState('');
    return(
        <>
            <AuthContext.Provider value={{auth , setAuth}}>
                {
                    children
                }
            </AuthContext.Provider>
        </>
    )
}

export const useAuth =()=>
{
    return useContext(AuthContext);
}