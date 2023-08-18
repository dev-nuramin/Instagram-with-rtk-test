// create async thunk

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from axios;
export const fetchPost = createAsyncThunk("timeline/fetchPost", async() => {
    const response = await axios.get('http://localhost:5020/posts')
    return response.data
})

// get('http://localhost:5020/posts')