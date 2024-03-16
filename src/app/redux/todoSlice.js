import { nanoid, createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

const slice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(data)
        }
    }
})

export const { addTodos } = slice.actions
export default slice.reducer
