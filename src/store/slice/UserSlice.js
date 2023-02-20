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

// export const singleUserDetail = createAsyncThunk(
//     "user/singleUserDetail",
//     async(data)=>{
//         const res= await axios.get("https://panorbit.in/api/users.json")
//         const user =  res.data.users.find((user) => user.id === localStorage.getItem("id"));
//         console.log("SINGLE==", user);
//         return user
//     }
// )

export const singleUserDetail = createAsyncThunk(
    "user/singleUserDetail",
    async () => {
      try {
        const response = await axios.get("https://panorbit.in/api/users.json");
        const users = response.data.users;
        const userId = localStorage.getItem("id");
        const matchingUsers = users.filter((user) => user.id === userId);
        console.log("matchingg=====",matchingUsers);
  
        if (matchingUsers.length === 0) {
          throw new Error(`User with ID ${userId} not found`);
        }
  
        return matchingUsers[0];
      } catch (error) {
        throw new Error(`Error fetching user details: ${error.message}`);
      }
    }
  );
  


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

        [singleUserDetail.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [singleUserDetail.fulfilled]:(state,action)=>{
            state.loading=false;
            state.selectedUser =action.payload
            // console.log("SU===",state.selectedUser);
            console.log("success");
        },
        [singleUserDetail.rejected]:(state,action)=>{
            state.loading=false;
            console.log("failed");
        },
    }
}) 

export const {setSelectedUser} = UserSlice.actions;
export default  UserSlice.reducer;