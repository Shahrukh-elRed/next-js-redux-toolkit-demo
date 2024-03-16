"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../redux/slice"
import { useEffect } from "react"

const ApiUsers = () => {
    const dispatch = useDispatch()
    const apiUserData = useSelector((data) => data.usersData.userAPIData)

    const fetchUsers = () => {
        dispatch(fetchApiUsers())
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <h1>User list from API</h1>
            {
                apiUserData.map((user) => 
                    <h4 key={user.id}>{user.name}</h4>
                )
            }
        </div>
    )
}

export default ApiUsers