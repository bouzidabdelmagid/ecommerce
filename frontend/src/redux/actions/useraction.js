import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

 export const loginAction=createAsyncThunk(
    "user/login",
    async ({email,password},{rejectWithValue})=>
    {
        try {
            const response= await axios.post("http://localhost:3001/user/login",{email,password},
                {headers:{"Content-Type":"application/json"}})
             localStorage.setItem("accessToken",response.data.accessToken)
localStorage.setItem("refreshToken",response.data.refreshToken)
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
            const response=await axios.post("http://localhost:3001/user/register",formData,
                {headers:{"Content-Type":"application/json"}})
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }

)
export const logoutAction=createAsyncThunk(
    "user/logout",
    async (_,{rejectWithValue})=> {
        try {
            const refreshToken=localStorage.getItem("refreshToken")
            const response = await axios.post("http://localhost:3001/user/logout",{refreshToken})
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("accessToken")
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }

)
export const getallusers=createAsyncThunk(
    "user/getallusers",
    async (_,{rejectWithValue})=>{
        try {
            const token=localStorage.getItem("accessToken")
            const response= await axios.get("http://localhost:3001/user/getallusers",{
                headers:{Authorization:`bearer ${token}`}
            })
            console.log("the response from API",response.data.data)
            return response.data.data
        }
            catch (error) {
                return rejectWithValue(error.response.data)
            }
    }
)
export const deleteUser=createAsyncThunk(
    "user/delete",
    async (id,{rejectWithValue})=>{
        try {
            const token=localStorage.getItem("accessToken")
            const response= await axios.delete(`http://localhost:3001/user/deleteuser/${id}`,{
                headers:{Authorization:`bearer ${token}`}
            })
            console.log("the response from API",response.data.data)
            return response.data.data
        }
            catch (error) {
                return rejectWithValue(error.response.data)
            }
    }
)
export const editUser=createAsyncThunk(
    "user/edit",
    async ({id,formData},{rejectWithValue})=>{
        try {
            const token=localStorage.getItem("accessToken")
            const response= await axios.put(`http://localhost:3001/user/updateuser/${id}`,formData,{
                headers:{Authorization:`bearer ${token}`}
            })
            console.log("the response from API",response.data.data)
            return response.data.data
        }
            catch (error) {
                return rejectWithValue(error.response.data)
            }
    }
)