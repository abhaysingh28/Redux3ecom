import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            console.log(state);
           state.splice(action.payload,1)
        }

    }
})

export const { add, remove } = userSlice.actions;
export default userSlice.reducer;