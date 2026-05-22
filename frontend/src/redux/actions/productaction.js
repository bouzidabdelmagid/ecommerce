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
export const  addProduct = createAsyncThunk(
    "category/addProduct",
    async (formdata,{rejectWithValue})=> {
        try {
            const token=localStorage.getItem("accessToken")
         const response= await axios.post("http://localhost:3001/product/addproduct",formdata,{headers:{Authorization:`bearer ${token}`,
            "Content-Type":"multipart/form-data"}})//pour envoyer une image on doit mettre le content type multipart/form-data
         console.log("The response from API",response.data.data) 
         return response.data.data  
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async (id,{rejectWithValue})=> {
        try {
            const token=localStorage.getItem("accessToken")
            const response= await axios.delete(`http://localhost:3001/product/deleteproduct/${id}`,{
                headers:{Authorization:`bearer ${token}`}
            })
            return response.data.data  
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({id,formdata},{rejectWithValue})=> {
        try {
            const token=localStorage.getItem("accessToken")
            const response= await axios.put(`http://localhost:3001/product/updatedproduct/${id}`,formdata,{
                headers:{Authorization:`bearer ${token}`}
            })
            return response.data.data  
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

