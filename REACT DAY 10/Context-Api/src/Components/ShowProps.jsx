import React, { useContext } from 'react'
import UserContext from '../context/UserContext.js'

const ShowProps = () => {
    const {user} =useContext(UserContext)
    if(user){
        return (
          <div>
              <h2>Hello {user.username}</h2>
              <h3>How are you {user.username}</h3>
          </div>
        )
    }
}

export default ShowProps
