import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// get all users
export const fetchUsers = createAsyncThunk('users/fetchUsers',async()=>{
    const res = await axios.get('/users');
    const data = await res.data;
    return data;
})

// post user
export const postUser = createAsyncThunk('users/postUser',async(data)=>{
    const config ={
        Headers:{
            'Content-Type': 'application/json'
        }
    }
    await axios.post('/users',data,config);
})

// get single user
export const singleUser = createAsyncThunk('users/singleUser',async(id)=>{
    const res = await axios.get(`/users/${id}`);
    const data = await res.data;
    return data;
})

// update user
export const updateUser = createAsyncThunk('users/updateUser',async(data)=>{
    const config ={
        Headers:{
            'Content-Type': 'application/json'
        }
    }
     await axios.put(`/users/${data.id}`,data, config);
})

// delete user

export const deleteSingleUser = createAsyncThunk('users/deleteSingleUser',async(id)=>{
    await axios.delete(`users/${id}`);
})
const userSlice = createSlice({
    name:'users',
    initialState:{
        isLoading: true,
        users:[],
        user:{},
        error:{},

    },
    extraReducers:{
        [fetchUsers.pending]: state =>{
            state.isLoading = true;
        },
        [fetchUsers.fulfilled]: (state,{payload}) =>{
            state.isLoading = false;
            state.users = payload;
        },
        [fetchUsers.rejected]: (state,{payload}) =>{
            state.isLoading = false;
            state.error = payload;
        },
        [singleUser.pending]: state =>{
            state.isLoading = true;
        },
        [singleUser.fulfilled]: (state,{payload}) =>{
            state.isLoading = false;
            state.user = payload;
        },
        [singleUser.rejected]: (state,{payload}) =>{
            state.isLoading = false;
            state.error = payload;
        },
        [updateUser.pending]: state =>{
            state.isLoading = true;
        },
        [updateUser.fulfilled]: (state,{payload}) =>{
            state.isLoading = false;
            state.user = payload;
        },
        [updateUser.rejected]: (state,{payload}) =>{
            state.isLoading = false;
            state.error = payload;
        },
    }
});

export default userSlice.reducer;