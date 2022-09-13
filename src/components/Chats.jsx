import React from 'react'
import Avatar from '../img/My project-1.png'

const Chats = () => {
  return (
    <div className='chats'>
         <div className="userChat">
        <img className="userImage" src={Avatar} alt= 'user' style={{height: "50px"}}></img>
        <div className="userChatInfo">
            <span>Brian</span>
            <p>Hello</p>
        </div>
        </div>
    </div>
    
  )
}

export default Chats