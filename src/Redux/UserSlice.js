import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    id: 1,
    name: "Rishabh"
}, {
    id: 2,
    name: "Virat"
}];


export const userSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)

        },
        deleteUser: (state, action) => {
            state.pop(action.payload)
        }
    }
})
export const { addUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;