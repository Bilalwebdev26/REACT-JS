import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { updateTodo,removeTodo } from '../feature/Todo/TodoSlice'


const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
      <div className="">
        <h1>Todos</h1>
        {
            todos.map((todo)=>{
              return <li key={todo.id}>
                {todo.text}
                <button onClick={()=>{dispatch(removeTodo(todo.id))}}>Delete</button>    
              </li>
              
            })
        }
      </div>
    </>
  )
}

export default Todos
