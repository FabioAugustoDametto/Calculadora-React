import React from 'react';
import './css/Display.css'

const Display = ({display}) => {
    
    return (
        <div className="container-display">
           <h1>{display.displayValue}</h1>
            
        </div>
    )
}

export default Display