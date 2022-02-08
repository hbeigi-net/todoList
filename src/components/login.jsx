import React ,{useEffect} from 'react';
import styled from "styled-components"
import "../style/login.css"
import { useTheme } from '../contexts/ThemeContext';
const Container = styled.div`
    position : fixed ; 
    top : 50% ; 
    left : 50% ; 
    transform : translate(-50% , -50%);
    box-shadow: ${(props)=>props.theme.mode ==="dark" ? "rgba(248, 211, 0, 0.349) 0px 1px 3px, rgba(230, 255, 1, 0.336) 0px 1px 2px;" :"rgba(0, 0, 0, 0.349) 0px 1px 3px, rgba(0, 0, 0, 0.336) 0px 1px 2px;"} ;
    border-radius : 5px ; 
    display : flex ; 
    flex-direction : column ; 
    align-items : center ; 
    justify-content : center ; 

`
export default function Login() {
    const {theme} = useTheme();
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
  return (
      <>
      <Container>

    <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                        <h1>Sign in</h1>

                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
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
