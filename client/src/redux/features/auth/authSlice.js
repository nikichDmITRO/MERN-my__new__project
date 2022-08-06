import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
  username: null,
  token: null,
  isLoading: false,
  status: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (username, password) => {
    try {
      const { data } = await axios.post("auth/register", {
        username,
        password,
      });
      if(data.token){
        window.localStorage.setItem('token',data.token)
      }
      return data
    } catch (error) {
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers:{
    [registerUser.pending]:(state)=>{
      state.isLoading=true
    },
    [registerUser.fulfilled]:(state,action)=>{
      state.isLoading=false
      state.status=action.payload.message
      state.username=action.payload.username
      state.token=action.payload.token

    },
    [registerUser.rejected]:(state,action)=>{
      state.status=action.payload.message
      state.isLoading=false
    },
  }
});

export default authSlice.reducer;
