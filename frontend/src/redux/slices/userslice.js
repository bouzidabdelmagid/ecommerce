import { createSlice } from "@reduxjs/toolkit"
import { deleteUser, editUser, getallusers, loginAction, logoutAction, registerAction } from "../actions/useraction"




const initialState={
    currentUser:null,
    users:[],
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
//start logout
.addCase(logoutAction.pending,(state)=>{
    state.isfetching=true
    state.error=null
})
.addCase(logoutAction.fulfilled,(state,{payload})=>{
state.isFetching=false
state.error=null
state.currentUser=null  
})
.addCase(logoutAction.rejected,(state,{payload})=>{
state.isFetching=false
state.error=payload  
})
.addCase(getallusers.pending,(state)=>{
    state.isfetching=true
    state.error=null
})
.addCase(getallusers.fulfilled,(state,{payload})=>{
state.isFetching=false
state.error=null
state.users=payload 
})
.addCase(getallusers.rejected,(state,{payload})=>{
state.isFetching=false
state.error=payload  
})
.addCase(deleteUser.pending,(state)=>{
    state.isfetching=true
    state.error=null
})
.addCase(deleteUser.fulfilled,(state,{payload})=>{
state.isFetching=false
state.error=null
state.users=state.users.filter(user=>user._id!==payload) 
})
.addCase(deleteUser.rejected,(state,{payload})=>{
state.isFetching=false
state.error=payload
})
.addCase(editUser.pending,(state)=>{
    state.isfetching=true
    state.error=null
})
.addCase(editUser.fulfilled,(state,{payload})=>{
state.isFetching=false
state.error=null
state.users=state.users.map(user=>user._id===payload._id?payload:user)
})
.addCase(editUser.rejected,(state,{payload})=>{
state.isFetching=false
state.error=payload
})
}
//end register reducer
})

export default userSlice.reducer