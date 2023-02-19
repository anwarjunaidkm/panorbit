import React from 'react'
import { Card } from 'reactstrap'
import { BsChatRight } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Chathide({toggleChat}) {
  return (
    <div>
        <Card className='chat-header-card'>
            <div className="chat-icon-right">
            
            <div className='chat-group-icon'>

            <BsChatRight />
             <h5 style={{fontSize:"13px",paddingLeft:"10px" }}><Link className='link' onClick={toggleChat}>Chats</Link></h5>
            </div>
            <IoIosArrowUp />
                
            </div>

        </Card>
    </div>
  )
}

export default Chathide