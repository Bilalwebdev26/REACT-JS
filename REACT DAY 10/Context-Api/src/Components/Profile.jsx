import React,{useContext} from 'react'
import UserContext from '../context/UserContext.js'

const Profile = () => {
    const {user} = useContext(UserContext)
       if(!user){
        return(
            <h1>Login First</h1>
        )
       }else{
        return(
        <div><h1>Welcome {user.username}</h1></div>
        )
       }
}

export default Profile
