import React from 'react';
import './css/Display.css'

const Display = ({display, theme}) => {
    
    return (
        <div className={`container-display ${theme.currentClass}`}>
           <h1>{display.displayValue}</h1>
            
        </div>
    )
}

export default Display