"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos } from "../redux/todoSlice"

const Todolist = () => {
    const dispatch = useDispatch()
    const todoData = useSelector((data) => data.todosData.todos)
    const [todo, setTodo] = useState("")

    const addTodo = () => {
        dispatch(addTodos(todo))
        setTodo("")
    }

    return (
        <div>
            <h1>Add todo</h1>
            <input type="text" 
            placeholder="add new task" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add todo</button>
            <h3>Todo List</h3>
            {
                todoData.length ? todoData.map((todo) => 
                    <h4 key={todo.id}>{todo.name}</h4>
                ) :
                <h4>No todos added yet</h4>
            }
        </div>
    )
}

export default Todolist