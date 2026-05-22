import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getallcategoryaction=createAsyncThunk(
    "category/getallcategory",
    async (_,{rejectWithValue})=>{
        try {
            const response= await axios.get("http://localhost:3001/category/getallcategory")
            console.log("the response from API",response.data.data)
            return response.data.data
        }
            catch (error) {
                return rejectWithValue(error.response.data)
            }
    }
)
export const  addcategory = createAsyncThunk(
    "category/addcategory",
    async ({name},{rejectWithValue})=> {
        try {
            const token=localStorage.getItem("accessToken")
         const response= await axios.post("http://localhost:3001/category/addcategory",{name},{headers:{Authorization:`bearer ${token}`}})
         console.log("The response from API",response.data.data) 
         return response.data.data  
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const  updatecategory = createAsyncThunk(
    "category/updatecategory",
    async ({name,id},{rejectWithValue})=> {
        try {
            const token=localStorage.getItem("accessToken")
         const response= await axios.put(`http://localhost:3001/category/updatedcategory/${id}`,{name},{headers:{Authorization:`bearer ${token}`}})
         console.log("The response from API",response.data.data) 
         return response.data.data  
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const  deletecategory = createAsyncThunk(
    "category/deletecategory",
    async (id,{rejectWithValue})=> {
        try {
            const token=localStorage.getItem("accessToken")
         const response= await axios.delete(`http://localhost:3001/category/deletecategory/${id}`,{headers:{Authorization:`bearer ${token}`}})
         console.log("The response from API",response.data.data) 
         return response.data.data  
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)