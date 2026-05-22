import { createSlice } from "@reduxjs/toolkit"
import { addProduct, deleteProduct, getallproductsaction, updateProduct } from "../actions/productaction"

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
.addCase(addProduct.pending,(state)=>
{
state.isFetching=true
state.error=null
})
.addCase(addProduct.fulfilled,(state,{payload})=>
{
state.isFetching=false
state.error=null
state.listproducts.push(payload)
})
.addCase( addProduct.rejected,(state,{payload})=>
{
state.isFetching=false
state.error=payload

}
)
.addCase(deleteProduct.pending,(state)=>
{
state.isFetching=true
state.error=null
}
)
.addCase(deleteProduct.fulfilled,(state,{payload})=>
{
state.isFetching=false
state.error=null

})
.addCase( deleteProduct.rejected,(state,{payload})=>
{
state.isFetching=false
state.error=payload
}
)
.addCase(updateProduct.pending,(state)=>
{
state.isFetching=true
state.error=null
}
)
.addCase(updateProduct.fulfilled,(state,{payload})=>
{
state.isFetching=false
state.error=null
state.listproducts=state.listproducts.map(product=>product._id===payload._id ? payload : product)
})
.addCase( updateProduct.rejected,(state,{payload})=>
{
state.isFetching=false
state.error=payload
}
)
}
}
)
export default productSlice.reducer