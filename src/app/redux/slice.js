import { createAsyncThunk, createSlice, current, nanoid } from "@reduxjs/toolkit"

const initialState = {
    userAPIData: [],
    users: JSON.parse(localStorage.getItem("users")) || []
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    let result = await fetch("http://jsonplaceholder.typicode.com/users")
    return result.json()
})

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
            state.isloading = false,
            state.userAPIData = action.payload
        })
    }
})

export const { addUser, removeUser } = slice.actions
export default slice.reducer