import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Container } from 'reactstrap'
import { setSelectedUser } from '../../store/slice/UserSlice';
import Header from '../header/Header'

const Sidebar = () => {
  const params = useParams();
const dispatch = useDispatch();

 
  return (
    <div>
      <div className="sidebar-banner">
        <ul className="sidebar-links">
          <Link className='link' to={"/profile/:id"}>
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