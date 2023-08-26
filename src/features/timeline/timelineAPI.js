// create async thunk

import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


export const fetchPost = createAsyncThunk("timeline/fetchPost", async() => {
    const response = await axios.get('http://localhost:5020/posts')
    return response.data
})

export const createPost = createAsyncThunk("timeline/createPost", async(data) => {
    const response = await axios.post('http://localhost:5020/posts', data)
    return response.data
})

export const deletePost = createAsyncThunk("timeline/deletePost", async(id) => {
    await axios.delete(`http://localhost:5020/posts/`+ id)
    return id
   
})

