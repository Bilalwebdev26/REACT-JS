import React from 'react'
import AddTodos from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'

const App = () => {
  return (
    <>
      <h1>Redux toolkit</h1>
      <AddTodos/>
      <Todos/>
    </>
  )
}

export default App
