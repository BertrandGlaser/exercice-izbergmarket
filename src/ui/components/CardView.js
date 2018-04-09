import React from 'react'

const CardView = ({children, color='#000', backgroundColor = "#ffffff",width='100%'})=>(
    <div style={{
        padding:'10px',
        marginTop : '10px',
        "boxShadow": "3px 3px 5px grey",
        width,
        color,
        backgroundColor,
        borderRadius:'5px',
        fontFamily: "Gill Sans",
        width:'80%'
    }}>
        {children}
    </div>
)

export default CardView
