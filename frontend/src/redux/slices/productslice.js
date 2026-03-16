import { createSlice } from "@reduxjs/toolkit"
import { getallproductsaction } from "../actions/productaction"

const initialState={
    listproducts:[],
    isfetching:false,
    error:null,
}
const productSlice=createSlice ({
name:"product",
initialState,
reducers:{},
extraReducers:(builder)=>
{
builder
.addCase(getallproductsaction.pending,(state)=>
{
state.isFetching=true
state.error=null
})
.addCase(getallproductsaction.fulfilled,(state,{payload})=>
{
state.isFetching=false
state.error=null
state.listproducts=payload
})
.addCase( getallproductsaction.rejected,(state,{payload})=>
{
state.isFetching=false
state.error=payload
})

}

})
export default productSlice.reducer