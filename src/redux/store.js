import {configureStore,createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",    
    //state
    initialState:{firstName:"",lastName:""},
    reducers:{
        loginFirstname:(state,action)=>{
            state.firstName=action.payload.firstName;
        },
        loginLastname:(state,action)=>{
            state.lastName=action.payload.lastName;
        },
    }
})
export const {loginFirstname}=userSlice.actions
export const {loginLastname}=userSlice.actions
export const Store=configureStore({reducer:{
    user:userSlice.reducer
}
})