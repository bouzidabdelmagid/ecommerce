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
