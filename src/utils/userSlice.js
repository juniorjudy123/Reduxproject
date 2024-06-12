import { createSlice } from '@reduxjs/toolkit'

//configuring the slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
    },

    // creating reducer fucntions 
    reducers: {
        addUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },

        removeUser: (state) => {
            state.name = '';
            state.email = '';

        }
    }



})
// destructuring actioncreators from userSlice.actions
export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer

