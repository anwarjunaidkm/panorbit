import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";
import { aj } from "../image/image";

function Logout({ selectedUser }) {
  return (
    <div>
      <Card className="logout-card">
        <div className="logout-body">
          <img className="logout-icon" src={aj} alt="" />
          <h3 className="logout-name">{selectedUser?.name}</h3>
          <span className="logut-username">{selectedUser?.username}</span>
          <hr className="logut-line" style={{ width: "75%" }} />
          <div className="d-flex align-items-center">
            <img className="logout-icon-small" src={aj} alt="" />
            <h3 className="logout-name-small">Awar jubaid</h3>
          </div>
          <hr className="logut-line" style={{ width: "75%" }} />
          <div
            style={{
              marginLeft: "6px",
              paddingLeft: "6px",
              paddingRight: "6px",
            }}
            className="d-flex align-items-center "
          >
            <img className="logout-icon-small" src={aj} alt="" />
            <h3 className="logout-name-small">Awar jubaid</h3>
          </div>
          <Link to={"/"}>
            {" "}
            <Button className="logout-btn">Sign Out</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Logout;
