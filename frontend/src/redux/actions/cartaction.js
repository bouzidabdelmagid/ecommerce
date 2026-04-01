import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const addTocartaction  = createAsyncThunk(
    "cart/addTocart",
    async ({product,quantity},{rejectWithValue})=>{
        try {
            const accessToken=localStorage.getItem("accessToken")
            const response= await axios.post("http://localhost:3001/cart/addcart",{product,quantity},
                {headers:{Authorization:`Bearer ${accessToken}`}})
                console.log("the response from API",response.data.data)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }

)
export const getcartaction=createAsyncThunk(
    "cart/getcart",
    async (_,{rejectWithValue})=>{
        try {
            const accessToken=localStorage.getItem("accessToken")
            const response= await axios.get("http://localhost:3001/cart/getcart",
                {headers:{Authorization:`Bearer ${accessToken}`}})
                console.log("the response from API",response.data.data)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }   
    }

)
export const removefromcartaction=createAsyncThunk(
    "cart/remove",
    async (id,{rejectWithValue})=> {
        try {
            const token=localStorage.getItem("accessToken")
      const response=await axios.delete(`http://localhost:3001/cart/productdelete/${id}`,{headers:{Authorization: `Bearer ${token}`}})
      console.log("Product removed from cart")
            
        } catch (error) {
           return rejectWithValue(error.response.data.message) 
        }
    }
)
