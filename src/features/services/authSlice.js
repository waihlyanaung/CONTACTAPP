import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        addUser: (state, action) => {
            // console.log(action.payload);
            
            state.user = action.payload.user;
            state.token = action.payload.token;

        },
    },
})

export const { addUser } = authSlice.actions;
export default authSlice.reducer;