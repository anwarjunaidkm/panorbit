import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { allUsersApi, singleUserDetail } from "../../store/slice/UserSlice";
import { aj } from "../image/image";
import Layout from "../layout/Layout";
import Logout from "../logout/Logout";
import UserMap from "../map/UserMap";

function Profile() {
  const params = useParams();
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);
  const users = userList?.users;
  const [selectedUser, setSelectedUser] = useState();

  var id = "";
  if (params.id) {
    id = params.id;
    localStorage.setItem("id", id); //-------------- id store local storage
  } else {
    id = localStorage.getItem("id"); //-------------get ifd from local
  }
  console.log("fullusers ", users);
  console.log("selected ", selectedUser);

  useEffect(() => {
    dispatch(allUsersApi());
    setSelectedUser(users?.find((user) => user && user.id === +id));
  }, []);

  return (
    <>
      <Layout>
        <div className="profile-main">
          <Row>
            <Col className="profile-left-side" md={5}>
              <Row>
                <div>
                  <Col>
                    <img src={selectedUser?.profilepicture} alt="" />
                    <h3 className="profile-text">{selectedUser?.name}</h3>
                  </Col>
                </div>
              </Row>
              <Row>
                <Col>
                  <table style={{ width: "280px", height: "100px" }}>
                    <tr>
                      <td>
                        <label className="profile-labels">Username </label>{" "}
                      </td>
                      <td>
                        {" "}
                        <span className="label-key">
                          {" "}
                          : {selectedUser?.username}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <label className="profile-labels">Email </label>
                      </td>
                      <td>
                        {" "}
                        <span className="label-key">
                          {" "}
                          : {selectedUser?.email}
                        </span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="profile-labels">Phone </label>
                      </td>
                      <td>
                        <span className="label-key">
                          : {selectedUser?.phone}
                        </span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <label className="profile-labels">Website </label>{" "}
                      </td>
                      <td>
                        <spam className="label-key">
                          {" "}
                          : {selectedUser?.website}
                        </spam>{" "}
                      </td>
                    </tr>
                  </table>
                  <hr style={{ width: "100%", margin: "10px" }} />
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <div className="profile-labels">Company</div>
                  <table style={{ width: "280px", height: "100px" }}>
                    <tr>
                      <td>
                        <label className="profile-labels">Name </label>{" "}
                      </td>
                      <td>
                        {" "}
                        <span className="label-key">
                          {" "}
                          : {selectedUser?.company.name}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <label className="profile-labels">catchphrase </label>
                      </td>
                      <td>
                        {" "}
                        <span className="label-key">
                          {" "}
                          :{selectedUser?.company.catchPhrase}
                        </span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <label className="profile-labels">bs </label>
                      </td>
                      <td>
                        {" "}
                        <span className="label-key">
                          {" "}
                          : {selectedUser?.company.bs}
                        </span>{" "}
                      </td>
                    </tr>
                  </table>
                </Col>
              </Row>
            </Col>
            <Col className="profile-right-side" md={7}>
              <Row>
                <Col>
                  <div style={{ color: "gry" }}>Address</div>
                  <table
                    style={{
                      width: "280px",
                      height: "100px",
                      marginLeft: "15px",
                    }}
                  >
                    <tr>
                      <td>
                        <label className="profile-labels">Street </label>{" "}
                      </td>
                      <td>
                        {" "}
                        <span className="label-key">
                          {" "}
                          : {selectedUser?.address.street}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <label className="profile-labels">Suite </label>
                      </td>
                      <td>
                        {" "}
                        <span className="label-key">
                          {" "}
                          :{selectedUser?.address.suite}
                        </span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <label className="profile-labels">City </label>
                      </td>
                      <td>
                        {" "}
                        <span className="label-key">
                          {" "}
                          : {selectedUser?.address.city}
                        </span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <label className="profile-labels">Zipcode </label>
                      </td>
                      <td>
                        {" "}
                        <span className="label-key">
                          {" "}
                          : {selectedUser?.address.zipcode}
                        </span>{" "}
                      </td>
                    </tr>
                  </table>
                </Col>
              </Row>

              <Row>
                <Col>
                  <UserMap selectedUser={selectedUser} />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
}

export default Profile;
