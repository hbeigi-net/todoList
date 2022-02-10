import React ,{useEffect , useState} from 'react';
import styled from "styled-components"
// import "../style/login.css"
import ThemeToggle from "./themeToggler"
import {Style} from "../style/styles"
import {useAuth} from "../contexts/AuthContext"
const Container = styled.div`
    position : fixed ; 
    top : 50% ; 
    left : 50% ; 
    transform : translate(-50% , -50%);
    border-radius : 5px ; 
    display : flex ; 
    flex-direction : column ; 
    align-items : center ; 
    justify-content : center ; 

`
export default function Login() {
    const {setAuth} = useAuth();
    const [name , setName] =useState('');
    const [email , setEmail] =useState('');
    const [pass , setPass] = useState('');
    useEffect(()=>
    {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    })

    const signupHandler=(e)=>
    {
        const signup = async ()=>
        {
            try
            {
                const response = await fetch(`${process.env.BASE_URL}${process.env.SIGN_UP_URL}`,{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name,
                        email,
                        pass
                    }),
                    credentials: 'include',
                })
            }catch(error){
                console.log(error.message);
            }
        

        }   
        signup();
    }

    const signinHandler=(e)=>
    {
        const signin = async ()=>
        {
            try
            {
                const response = await fetch(`${process.env.BASE_URL}${process.env.SIGN_IN_URL}`,{
                    method : "POST",
                    body : JSON.stringify({
                        email , 
                        pass
                    })
                })
                const user = await response.json();
                setAuth(user);
            }catch(error)
            {
                console.log(error.message);
            }
         
        }
    }
  return (
      <>
        <Style/>
      <Container id='authForm'>
        <ThemeToggle/>
      <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <input value={name} onChange ={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Password" />
                    <button onClick={(e)=>signupHandler(e)}>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                        <h1>Sign in</h1>
                        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Email" />
                        <input type="password" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)} />
                        <button>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                    <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>To keep connected with us please login with your personal info</p>
                                    <button class="ghost" id="signIn">Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                    <h1>Hello, Friend!</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                    <button class="ghost" id="signUp">Sign Up</button>
                            </div>
                    </div>
            </div>
    </div>
      </Container>
      </>
  )
}
