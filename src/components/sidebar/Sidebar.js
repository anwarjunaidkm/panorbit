import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Container } from 'reactstrap'
import { allUsersApi, setSelectedUser } from '../../store/slice/UserSlice';
import Header from '../header/Header'

const Sidebar = () => {
  const params = useParams();
const dispatch = useDispatch();
const { userList, } = useSelector((state) => state.user);
const users = userList?.users
const [selectedUser,setSelectedUser]=useState()

console.log("fullusers ",users);
console.log("selected ",selectedUser);

  useEffect(() => {
      dispatch(allUsersApi());
      setSelectedUser(users?.find((user) => user && user.id === +localStorage.getItem("id")))
    }, []);

 
  return (
    <div>
      <div className="sidebar-banner">
        <ul className="sidebar-links">
          <Link className='link' to={`/profile/${selectedUser?.id}`}>
            {" "}
            <li>Profile</li>
          </Link>
          <hr style={{ width: "100%" }} />

          <Link className='link'  to={"/posts"}>
            {" "}
            <li>Posts</li>
          </Link>
          <hr style={{ width: "100%" }} />
          <Link className='link' to={"/gallery"}>
            {" "}
            <li>Gallery</li>{" "}
          </Link>
          <hr style={{ width: "100%" }} />
          <Link className='link' to={"/todo"}>
            {" "}
            <li>ToDo </li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar