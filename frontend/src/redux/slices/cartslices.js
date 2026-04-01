import { createSlice } from "@reduxjs/toolkit"
import { addTocartaction, getcartaction, removefromcart, removefromcartaction } from "../actions/cartaction"


const initialState={
    cart:[],
    isfetching:false,
    error:null,
}
const cartSlice=createSlice ({
name:"cart",
initialState,
reducers:{},
extraReducers:(builder)=>
{
builder
.addCase(addTocartaction.pending,(state)=>
{
state.isFetching=true
state.error=null
})
.addCase(addTocartaction.fulfilled,(state,{payload})=>
{
state.isFetching=false
state.error=null

})
.addCase( addTocartaction.rejected,(state,{payload})=>
{
state.isFetching=false
state.error=payload
})
.addCase(getcartaction.pending,(state)=>
{
state.isFetching=true
state.error=null
}
)
.addCase(getcartaction.fulfilled,(state,{payload})=>
{
state.isFetching=false
state.error=null
state.cart=payload
})
.addCase( getcartaction.rejected,(state,{payload})=>
{
state.isFetching=false
state.error=payload


})
.addCase(removefromcartaction.pending,(state)=>
{
state.isFetching=true
state.error=null
}
)
.addCase(removefromcartaction.fulfilled,(state,action)=>
{
state.isFetching=false
state.error=null
if (state.cart && state.cart.items) {
    state.cart.items = state.cart.items.filter(item => item.product._id !== action.meta.arg)
}
})
.addCase( removefromcartaction.rejected,(state,{payload})=>
{
state.isFetching=false
state.error=payload

}
)
}
})


export default cartSlice.reducer