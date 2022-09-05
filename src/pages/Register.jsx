import React from 'react'
import Add from "../img/My project-1.png"

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Register</span>
        <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input style={{display:"none"}} type="file" id="file"/>
            <label htmlFor="file">
                <img style={{cursor: "pointer"}} src={Add} alt="Add Avatar" />
                <span>Add an Avatar</span>
            </label>
                <button>Sign Up</button>
        </form>
        <p>Have an account? Log in.</p>
        </div>
    </div>
  )
}

export default Register