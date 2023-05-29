import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    posts: [],
}


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        resetCreateListStatus: (state) => {
            state.posts = []
        }
    },

})

export default postSlice.reducer
export const { resetCreateListStatus } = postSlice.actions 