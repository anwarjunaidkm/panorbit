import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const allUsersApi = createAsyncThunk(
    "user/allUsersApi",
    async(data)=>{
        const res= await axios.get("https://panorbit.in/api/users.json")
        console.log("res==",res.data);
        
      
        return res.data
    }
)


//-------slice------------
const INITIAL_STATE ={
    loading:false,
    userList:[],
    selectedUser:{}
   

}
const  UserSlice = createSlice({
    name:"user",
    initialState:INITIAL_STATE,
    reducers:{
        setSelectedUser: (state, action) => {
            const user = state.userList?.users?.find((user) => user.id === localStorage.getItem("id"));
            state.selectedUser = user || null;
           
            // console.log(state.selectedUser);
        },
    },
    extraReducers:{
        [allUsersApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [allUsersApi.fulfilled]:(state,action)=>{
            state.loading=false;
            state.userList =action.payload
            console.log("success");
        },
        [allUsersApi.rejected]:(state,action)=>{
            state.loading=false;
            console.log("failed");
        },

    }
}) 

export const {setSelectedUser} = UserSlice.actions;
export default  UserSlice.reducer;