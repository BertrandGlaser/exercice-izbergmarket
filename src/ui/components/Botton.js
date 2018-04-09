import React from 'react'

const Botton = ({onClick,type,text})=>(

    <input style={{
        width:'15%',
        height:'30%',
        display:'flex',
        alignItems:'stretch',
        justifyContents:'center',
        border: '1px solid #ccc',
        borderRadius: 4,
        boxSizing: "border-box",
        backgroundColor:'#F00',
        color:'#FFF',
        fontSize:'15px'
    }} text={text} onClick={onClick} type={type}
    >
    </input>
  )

export default Botton
