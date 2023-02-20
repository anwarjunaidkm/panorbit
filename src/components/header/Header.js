import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { allUsersApi } from "../../store/slice/UserSlice";
import Chathide from "../chatHide/Chathide";
import ChatScreen from "../chatscreen/ChatScreen";
import { ChatShow } from "../chatShow/ChatShow";
import { aj, pic } from "../image/image";
import Logout from "../logout/Logout";

function Header({ selectedUser, users }) {
  const Headername = window.location.pathname;
  var splitUrl = Headername.split("/");
  const title = splitUrl?.[1].charAt().toUpperCase() + splitUrl?.[1].slice(1); //titile get from url use params
  console.log(splitUrl?.[1]);

  const ref = useRef(null); //--------------------hook other click screen hide componet
  const [show, setShow] = useState(false);
  const [chatShow, setChatShow] = useState(false);
  const [chatScreenShow, setChatScreenShow] = useState(false);

  const toggleLogout = () => {
    setShow(!show);
  };

  const toggleChat = () => {
    setChatShow(!chatShow);
  };
  const toggleChatScreen = () => {
    setChatScreenShow(!chatScreenShow);
  };
  //--------------this for any other click on screen hide chat hide -----------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
        setChatScreenShow(false);
        setChatShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  // ---------------------end ---------------------------------
  return (
    <>
      {/* //-----this line used to show-hide profile-sigin out----- */}

      {show && (
        <div
          ref={ref}
          style={{
            position: "absolute",
            maxHeight: "285px",
            minWidth: "200px",
            left: "84%",
            top: "65px",
          }}
        >
          <Logout selectedUser={selectedUser} />
        </div>
      )}
      {/* //------------------end---------------------------------------//  */}

      {/* //--------------- position chatbox--------------- */}
      {chatShow ? (
        <div
          ref={ref}
          style={{
            position: "fixed",
            left: "80%",
            top: "335px",
            zIndex: 1,
          }}
        >
          <ChatShow
            users={users}
            toggleChat={toggleChat}
            toggleChatScreen={toggleChatScreen}
          />
        </div>
      ) : (
        <div
          ref={ref}
          style={{
            position: "fixed",
            left: "80%",
            top: "95%",
          }}
        >
          <Chathide toggleChat={toggleChat} />
        </div>
      )}

      {/* //-------------chat-screen--------------------- */}
      {chatScreenShow && (
        <div
          ref={ref}
          style={{
            position: "fixed",
            left: "65%",
            top: "420px",
            zIndex: 1,
          }}
        >
          <ChatScreen />
        </div>
      )}

      <div className="header-main">
        <h4 className="header-left"> {title} </h4>

        <div className="header-right-side">
          <img className="profile-image" src={aj} alt="" />
          <Link onClick={toggleLogout} style={{ textDecoration: "none" }}>
            {" "}
            <h3 className="header-user">{selectedUser?.name}</h3>
          </Link>
        </div>
      </div>
      <div>
        <hr style={{ width: "100%", margin: "0" }} />
      </div>
    </>
  );
}

export default Header;
