import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap'
import Chathide from '../chatHide/Chathide';
import ChatScreen from '../chatscreen/ChatScreen';
import { ChatShow } from '../chatShow/ChatShow';
import { aj, pic } from '../image/image'
import Logout from '../logout/Logout';

function Header() {

  const ref = useRef(null);
  const [show,setShow] =useState(false)
  const[chatShow,setChatShow]= useState(false)
  const[chatScreenShow,setChatScreenShow]= useState(false)

  const toggleLogout = () => {
    setShow(!show);
  }

  const toggleChat = () => {
    setChatShow(!chatShow);
  }
  const toggleChatScreen = () => {
    setChatScreenShow(!chatScreenShow);
  }
//--------------this for any other click on screen hide chat hide -----------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
        setChatScreenShow(false)
        setChatShow(false)
      
       
       
      }
      
      
      
      
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [ref]);
  // ---------------------end ---------------------------------
  return (
    <>
      {/* //-----this line used to show-hide profile-sigin out----- */}

      {show && (
        <div  ref={ref}
          style={{
            position: "absolute",
            maxHeight: "285px",
            minWidth: "200px",
            left: "84%",
            top: "65px",
          }}
        >
        <Logout />
        </div>
      )}
      {/* //------------------end---------------------------------------//  */}

      {/* //--------------- position chatbox--------------- */}
{
  chatShow?
  <div  ref={ref} 
  style={{
    position: "absolute",
    left: "80%",
    top: "335px",
  }}
>
  <ChatShow toggleChat={toggleChat} toggleChatScreen={toggleChatScreen}/>
</div>
      
      :
      <div   ref={ref}
        style={{
          position: "absolute",
          left: "80%",
          top: "600px",
        }}
      >
     <Chathide toggleChat={toggleChat} />   
      </div>
      
}

{/* //-------------chat-screen--------------------- */}
{
  chatScreenShow && (
    <div  ref={ref} style={{
      position: "absolute",
      left: "65%",
      top: "435px",


  }}>
    <ChatScreen />

  </div>


  )
}
  
      

      

      <div className="header-main">
        <h4 className="header-left"> Profile </h4>

        <div className="header-right-side">
          <img className="profile-image" src={aj} alt="" />
          <Link onClick={toggleLogout} style={{ textDecoration: "none" }}>
            {" "}
            <h3 className="header-user">Anwarjuhnaid</h3>
          </Link>
        </div>
      </div>
      <div>
        <hr style={{ width: "100%", margin: "0" }} />
      </div>
    </>
  );
}

export default Header