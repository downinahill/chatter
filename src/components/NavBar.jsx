import React from 'react'
import Avatar from '../img/My project-1.png'


const NavBar = () => {
  return (
    <div className="navbar">
        <span className="logo">Chatterer</span>
        <div className="user">
            <img src={Avatar} alt="" />
            <span>Brian</span>
            <button>Log Out</button>
        </div>
    </div>
  )
}

export default NavBar