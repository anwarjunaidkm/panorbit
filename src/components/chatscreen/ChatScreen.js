import React from "react";
import { BsChatRight } from "react-icons/bs";
import { IoIosArrowUp, IoMdClose } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { Card } from "reactstrap";
import { aj } from "../image/image";

function ChatScreen() {
  return (
    <div>
      <Card className="chat-screen-card">
        <div>
          <div className="chat-screen-header">
            <div className="screen-chat-icon">
              <div className="chat-screen-icon-left">
                <img className="chat-screen-small" src={aj} alt="" />

                <h5
                  style={{
                    fontSize: "10px",
                    paddingLeft: "10px",
                    marginBottom: "0",
                    color: "#e1dada",
                  }}
                >
                  Anwarjunaid
                </h5>
              </div>
              <div className="chat-screen-icon-right">
                <IoIosArrowUp color="#e1dada" />
                <IoMdClose color="#e1dada" />
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundColor: "#e0e0e0",
                width: "80%",
                margin: "10px",
                borderRadius: "2px",
                height: "30px",
              }}
            >
              <span
                style={{
                  fontSize: "xx-small",
                  color: "gray",
                  padding: "8px",
                  width: "80%",
                }}
              >
                Lorem ipsum dolor sit amet..?{" "}
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#e0e0e0",
                width: "50%",
                margin: "10px",
                borderRadius: "2px",
                height: "30px",
              }}
            >
              <span
                style={{ fontSize: "xx-small", color: "gray", padding: "8px" }}
              >
                {" "}
                sit amet..?{" "}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span style={{ fontSize: "6px", color: "gray" }}>9:16 PM</span>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: "#e0e0e0",
                  width: "50%",
                  marginLeft: "77px",
                  borderRadius: "2px",
                  height: "30px",
                }}
              >
                <span
                  style={{
                    fontSize: "xx-small",
                    color: "gray",
                    padding: "8px",
                  }}
                >
                  {" "}
                  sit amet..?{" "}
                </span>
              </div>
            </div>
          </div>
          <hr className="line-chat-screen" />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5
              style={{
                color: "#bdbdbd",
                fontSize: "x-small",
                marginBottom: "0",
                paddingLeft: "10px",
              }}
            >
              type..!
            </h5>
            <MdArrowForwardIos color="blue" />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ChatScreen;
