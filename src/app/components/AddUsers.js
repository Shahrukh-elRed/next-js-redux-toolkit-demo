"use client"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/slice"

const AddUsers = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const userDispatch = () => {
        dispatch(addUser(name))
        setName("")
    }

    return (
        <div className="add-user">
            <h1>Add User</h1>
            <input type="text" 
                placeholder="Add New User" 
                className="add-user-input" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={userDispatch} className="add-user-btn">Add User</button>  
        </div>
    )
}

export default AddUsers