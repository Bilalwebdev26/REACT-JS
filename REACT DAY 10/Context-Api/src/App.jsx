import React from 'react'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './Components/Login.jsx'
import Profile from './Components/profile.jsx'
import ShowProps from './Components/ShowProps.jsx'

const App = () => {
  return (
    <UserContextProvider>
      <h1>React with Bilal</h1>
      <Login/>
      <Profile/>
      <ShowProps/>
    </UserContextProvider>
  )
}

export default App
