import React from 'react'

export default function Button({children, className, onClick, type, style}) {
   return (
      <button 
         className={className}
         onClick={onClick}
         type={type}
         style={style}
      >
         {children}
      </button>
   )
}
