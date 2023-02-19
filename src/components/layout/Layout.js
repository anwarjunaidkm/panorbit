import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

function Layout({children}) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <Sidebar />
        </div>
        <div style={{ width: "100%" }}>
          <Header />
          {children}
        
        </div>
       
      </div>
      
      
      

      
    </div>
  );
}

export default Layout