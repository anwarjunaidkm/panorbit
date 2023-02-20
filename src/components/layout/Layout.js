import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allUsersApi } from '../../store/slice/UserSlice';
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

function Layout({children}) {

  const dispatch =useDispatch()
  const { userList, } = useSelector((state) => state.user);
  const users = userList?.users
  const [selectedUser,setSelectedUser]=useState()
  useEffect(() => {
    dispatch(allUsersApi());
    setSelectedUser(users?.find((user) => user && user.id === +localStorage.getItem("id")))
  }, []);



  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <Sidebar />
        </div>
        <div style={{ width: "100%" }}>
          <Header users={users} selectedUser={selectedUser} />
          {children}
        
        </div>
       
      </div>
      
      
      

      
    </div>
  );
}

export default Layout