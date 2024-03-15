const { createSlice, nanoid } = require("@reduxjs/toolkit")

const initialState = {
    users: []
}

const slice = createSlice({
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.name           
            }
            state.users.push(data)
        }
    }
})

export const { addUser } = slice.actions
export default slice.reducer