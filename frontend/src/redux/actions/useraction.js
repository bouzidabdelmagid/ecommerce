import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

 export const loginAction=createAsyncThunk(
    "user/login",
    async ({email,password},{rejectWithValue})=>
    {
        try {
            const response= await axios.post("http://localhost:3001/user/login",{email,password},{headers:{"Content-Type":"application/json"}})
             localStorage.setItem("accessToken",response.data.accessToken)

            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }

)
export const registerAction=createAsyncThunk(
    "user/register",
    async (formData,{rejectWithValue})=>
    {
        try {
            const response=await axios.post("http://localhost:3001/user/register",formData,{headers:{"Content-Type":"application/json"}})
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }

)
