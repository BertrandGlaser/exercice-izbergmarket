import {Link} from 'react-router-dom'
import React from 'react'
import Nav from '../components/Nav'

const Header = ()=>(
    <Nav>
      <Link style={{
        textDecoration: 'none',
        padding:'10px',
        width:'100%',
        alignItems:'center',
        justifyContents:'center',
        display:'flex',
        color:'#fff',
        flex:1
      }}
      to='/Profil'>
      Profil<
      /Link>


      <Link style={{
        textDecoration: 'none',
        padding:'10px',
        width:'100%',
        alignItems:'center',
        justifyContents:'center',
        color:'#fff',
        display:'flex',
        flex:1
      }}
      to='/Submit'>
      Submit
      </Link>


    </Nav>

)


export default Header
