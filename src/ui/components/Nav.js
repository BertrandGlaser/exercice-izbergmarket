import React from 'react'

const Nav = ({children}) =>(
  <div style={{
    backgroundColor:'#BBB',
    color:'#fff',
    width:'80%',
    height:'30px',
    padding:'10px',
    color:'#ffffff',
    borderRadius:'5px',
    alignItems:'center',
    justifyContents:'center',
    display:'flex'


  }}>
  {children}
  </div>
)

export default Nav
