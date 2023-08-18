
//create timeline slice

import { createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "./timelineAPI";

export const timelineSlice = createSlice({
    name : "timeline",
    initialState : {
        posts : [],
        status : "idle" /*loading | successed | failed */,
        error : null,
        message : null
    },
    reducers : () => {},
    extraReducers : (builder) => {
        builder.addCase(fetchPost.pending, (state, {type, payload}) => {
         state.status = "loading"
        })
        .addCase(fetchPost.fulfilled, (state, {type, payload}) => {
          state.status = "successed";
          state.posts = payload;
          state.message = "data get successfully";
        })
        .addCase(fetchPost.rejected, (state, {type, payload}) => {
            state.status = "failed";
            state.error = "data load failed"
        })
        
    }
});

//export
export const {} = timelineSlice.actions;
export default timelineSlice.reducer;