import React from 'react'

const Input = ({value,placeholder,onChange,type})=>(

    <input style={{
        width:'80%',
        height:30,
        padding:20,
        display:'inline-block',
        border: '1px solid #ccc',
        borderRadius: 4,
        boxSizing: "border-box",
        color:'#000'
    }} placeholder={placeholder} onChange={onChange} type={type} value={value}
    >
    </input>
  )

export default Input
