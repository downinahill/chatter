import React from 'react'
import Avatar from '../img/My project-1.png'

const handleSubmit = (e) => {
    e.preventDefault();

}

const Search = () => {
  return (
    <div className="search-bar">
        <div className="search">
            
        <input 
        type="text"
        placeholder="Find a User"
        onSubmit={handleSubmit}
        />
        
        <button>Go</button>
        </div>
        <div className="userChat">
        <img src={Avatar} alt= ''></img>
        <div className="userChatInfo">
            <span>Brian</span>
        
        </div>
        </div>
    </div>
  )
}

export default Search