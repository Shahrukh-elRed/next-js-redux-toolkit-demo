import { createSlice, current, nanoid } from "@reduxjs/toolkit"

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || []
}

const slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload           
            }
            state.users.push(data)
            const userData = JSON.stringify(current(state.users))
            localStorage.setItem("users", userData)
        },
        removeUser: (state, action) => {
            const data = state.users.filter((user) => 
                user.id !== action.payload
            )
            state.users = data
            localStorage.removeItem("users")
            const userData = JSON.stringify(state.users)
            localStorage.setItem("users", userData)
        }
    }
})

export const { addUser, removeUser } = slice.actions
export default slice.reducer