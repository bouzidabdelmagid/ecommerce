import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getallproductsaction=createAsyncThunk (
    "products/getallproductsaction",
    async (_,{rejectwithvalue})=> {
        try {
             const response= await  axios.get("http://localhost:3001/product/getallproduct")
             return response.data.data 
        } catch (error) {
            return rejectwithvalue(error.response.data.message)
        }
    }
)
