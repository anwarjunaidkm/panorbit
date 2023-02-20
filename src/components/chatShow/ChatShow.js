import React from 'react'
import { BsChatRight } from 'react-icons/bs'
import { IoIosArrowUp } from 'react-icons/io'
import { RxDotFilled } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { Card } from 'reactstrap'
import { aj } from '../image/image'

export const ChatShow = ({toggleChat,toggleChatScreen,users}) => {
    console.log("chat=====", users);
  return (
    <div>
      <Card className="chat-show-card">
        <div className="chat-show-header">
          <div className="chat-icon-right">
            <div className="chat-group-icon">
              <BsChatRight />
              <h5 style={{ fontSize: "13px", paddingLeft: "10px" }}>
                <Link className="link" onClick={toggleChat}>
                  Chats
                </Link>
              </h5>
            </div>
            <IoIosArrowUp />
          </div>
        </div>
        <div className="chat-all-list">
          <div className="chat-parent">
            <div className="chat-names">
              <img className="chat-icon-small" src={aj} alt="" />
              <h3 className="chat-name-small">
                <Link className="link" onClick={toggleChatScreen}>
                  {" "}
                  Anwarjunaid
                </Link>
              </h3>
            </div>

            <RxDotFilled color="green" />
          </div>
        { users?.map((item)=>{
            return(
                <div className="chat-parent">
            <div className="chat-names">
              <img className="chat-icon-small" src={item.profilepicture} alt="" />
              <h3 className="chat-name-small">{item?.name}</h3>
            </div>

            <RxDotFilled color="green" />
          </div>

            )
        })}
          

          
        </div>
      </Card>
    </div>
  );
}
