import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Table } from "reactstrap";
import { pic } from "../components/image/image";
import { allUsersApi, setSelectedUser } from "../store/slice/UserSlice";

function Home() {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);
  const users = userList.users;
  console.log("LIST==:", users);

  useEffect(() => {
    dispatch(allUsersApi());
  }, []);

  return (
    <section className="banner">
      {/* <svg  className='shadow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path  fill="#fff" fillOpacity={1} d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,192C672,181,768,203,864,229.3C960,256,1056,288,1152,293.3C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>   */}
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity={1}
          d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,192C672,181,768,203,864,229.3C960,256,1056,288,1152,293.3C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="body">
        <Card className="home-card">
          <h3 className="home-card-header">Select an account</h3>
          <div className="card-item-list">
            <Table responsive>
              <tbody>
                {/* //--------------------Array-Mapping----------------------- */}

                {users?.map((item) => {
                  return (
                    <tr>
                      <td scope="row" className=" d-flex align-items-end  ">
                        <img
                          className="home-icon"
                          src={item.profilepicture}
                          alt=""
                        />
                        <Link
                          onChange={() => {
                            window.localStorage.setItem("id", item?.id);
                          }}
                          style={{ textDecoration: "none" }}
                          to={`profile/${item?.id}`}
                        >
                          {" "}
                          <h4 className="card-names-list">{item.name}</h4>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div style={{ minHeight: "15px" }}></div>
        </Card>
      </div>
    </section>
  );
}

export default Home;
