import React from 'react';
import './css/Button.css'

const Button = ({click, reset, equal, del, label, theme}) => {
    let attribute = "button " + theme
    attribute += reset ? ' reset' : ''
    attribute += equal ? ' equal' : ''
    attribute += del ? ' delete' : ''

    


    return (                    
            <button className={attribute}  onClick={() => click(label)}>
                {label}
            </button>
        
     );
}

export default Button
 
