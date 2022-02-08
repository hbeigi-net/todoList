import React ,{useEffect} from 'react';
import styled from "styled-components"
// import "../style/login.css"
import ThemeToggle from "./themeToggler"
import {Style} from "../style/styles"
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
        <Style/>
      <Container id='authForm'>
        <ThemeToggle/>
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
