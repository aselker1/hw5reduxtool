// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const fetchAllPosts = createAsyncThunk('posts/fetchAll',
//     async (payload, thunkApi) => {
//         try {
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            
//             return response.data;
//         } catch (err) {
//             return thunkApi.rejectWithValue('Something has gone wrong');
//         }
//     }
// );

// export default fetchAllPosts;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchAllPosts = createAsyncThunk('posts/fetchAll',
    async (payload, thunkApi) => {
        try {
            const response = await axios.get(`http://localhost:5000/users`);
            
            return response.data;
        } catch (err) {
            return thunkApi.rejectWithValue('Something has gone wrong');
        }
    }
);

export default fetchAllPosts;