"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice"

const RemoveUser = () => {
    const userData = useSelector((data) => data.usersData.users)
    const dispatch = useDispatch()

    const handleRemove = (userId) => {
        dispatch(removeUser(userId))
    }

    return (
        <div className="display-user">
            <h1>Remove User Page</h1>
            {
                userData.map((user) => 
                    <div key={user.id} className="user-single">
                        <span>{user.name}</span>
                        <button onClick={() => handleRemove(user.id)}>Remove</button>
                    </div>
                )
            }
        </div>
    )
}

export default RemoveUser