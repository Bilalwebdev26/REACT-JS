import React from 'react'

const Card = ({username,email="@gmail.com"}) => {
  return (
    <div>
      <h1>Username is : {username}</h1>
      <h2>Email is : {email}</h2>
    </div>
  )
}

export default Card
