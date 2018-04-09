import React from 'react'

const Body = ({children})=>(
    <div style={{

        position:'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor:'#eee',
        padding:100,
        overflowY:'scroll'
    }}>
        {children}
    </div>
)

export default Body
