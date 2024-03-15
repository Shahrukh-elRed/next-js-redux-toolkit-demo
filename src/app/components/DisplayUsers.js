"use client"
import { useSelector } from "react-redux"

const DisplayUsers = () => {
    const userData = useSelector((data) => data.users)

    return (
        <div className="display-user">
            <h1>User List</h1>
            {
                userData.map((user) => 
                    <div key={user.id} className="user-single">{user.name}</div>
                )
            }
        </div>
    )
}

export default DisplayUsers