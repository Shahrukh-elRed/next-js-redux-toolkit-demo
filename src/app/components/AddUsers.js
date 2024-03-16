"use client"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/slice"
import Link from "next/link"

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
            <br />
            <br />
            <Link href="/removeuser">Remove User</Link>
            <br />
            <br />
            <Link href="/todolist">Go to Todo Page</Link>
            <br />
            <br />
            <Link href="/apiusers">Go to API User List Page</Link>
        </div>
    )
}

export default AddUsers