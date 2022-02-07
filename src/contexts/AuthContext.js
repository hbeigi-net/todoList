import { createContext , useContext , useState , useEffect} from "react";


const AuthContext = createContext();




export function AuthProvider({children})
{
    const [auth, setAuth] = useState();
    const [login, setlogin] = useState(second);
    return(
        <>
            <AuthContext.Provider value={true}>
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