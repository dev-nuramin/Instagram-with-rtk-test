//create timeline slice

import { createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, fetchPost } from "./timelineAPI";

export const timelineSlice = createSlice({
  name: "timeline",
  initialState: {
    posts: [],
    status: "idle" /*loading | successed | failed */,
    error: null,
    message: null,
  },
  reducers: {
    makeLove : {
        reducer : (state, {type, payload}) => {
            state.posts[state.posts.findIndex(data => data.id === payload)].reactions.like += 1;
        },
        prepare: (id) => {
            return {
             payload:id
            }
        }
      
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state, { type, payload }) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, { type, payload }) => {
        state.status = "successed";
        state.posts = payload;
        state.message = "data get successfully";
      })
      .addCase(fetchPost.rejected, (state, { type, payload }) => {
        state.status = "failed";
        state.error = "data load failed";
      })
      .addCase(createPost.pending, (state, { type, payload }) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, { type, payload }) => {
        
        state.status = "successed";
        state.posts.push(payload);
        state.message = "data post successfully";
      })
      .addCase(createPost.rejected, (state, { type, payload }) => {
        state.status = "failed";
        state.message = "data created failed";
      })
      .addCase(deletePost.fulfilled, (state, { type, payload }) => {
        state.status = "successed";
        state.posts = state.posts.filter((data) => data.id !== payload);
        state.message = "data delete successful";
      });
  },
});

export const getAllPost = (state) => state.timeline.posts;
//export
export const {makeLove} = timelineSlice.actions;
export default timelineSlice.reducer;
