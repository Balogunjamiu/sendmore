import React from 'react'

export default function Button(props) {

    const {type, text, style, onClick} = props

    const background = type === 'primary' ? "#000": '#fff';
    const textColor = type === 'secondary' ? "#000": '#fff';
    

  return (
    
        <button style={{ 
            margin:'.31rem',
            border:'none',
            display:'flex',
            padding:".5rem",
            backgroundColor:background,
            ...style
            }}
            onClick={onClick}
            >
              <p style={{
                color: textColor,
            fontSize: '1rem',
            marginBottom:'0px',
            fontWeight:'500',
            }}>
              {text}
                </p> 
        </button>

    
  )
}
