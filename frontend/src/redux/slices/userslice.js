import { createSlice, current } from "@reduxjs/toolkit"
import { loginAction, registerAction } from "../actions/useraction"


const initialState={
    currentUser:null,
    isfetching:false,
    error:null,
}
const userSlice=createSlice ({
name:"user",
initialState,
reducers:{},
extraReducers:(builder)=>
{
builder
// start login reducers
.addCase(loginAction.pending,(state)=>
{
state.isFetching=true
state.error=null
})
.addCase(loginAction.fulfilled,(state,{payload})=>
{
state.isFetching=false
state.error=null
state.currentUser=payload
})
.addCase(loginAction.rejected,(state,{payload})=>
{
state.isFetching=false
state.error=payload
})
//start register reducer

.addCase(registerAction.pending,(state)=>
{
state.isFetching=true
state.error=null
})
.addCase(registerAction.fulfilled,(state,{payload})=>{
state.isFetching=false
state.error=null
state.currentUser=payload  
})
.addCase(registerAction.rejected,(state,{payload})=>{
state.isFetching=false
state.error=payload  
})
}
//end register reducer

})
export default userSlice.reducer