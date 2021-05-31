import React, { useState }  from 'react';
import Display from '../components/Display';
import Button from '../components/Button';
import './Calculator.css'



const Calculator = () => {

    

    const [display, setDisplay] = useState(
        {
            displayValue: '0',
            operation: null,
            clearDisplay: false,           
            values: [0,0],
            current: 0            
        }
    )

    const handleButtonClick = (digit) => {
        if (digit === '.' && display.displayValue.includes('.')) {
            return
        }        
        
        const clearDisplay = display.displayValue === '0' || display.clearDisplay      
        const currentValue = clearDisplay ? '' : display.displayValue
        const displayValue = currentValue + digit

        setDisplay({...display, displayValue, clearDisplay: false})

        if(digit !== '.') {
            const i = display.current
            const newValue = parseFloat(displayValue)           
            const Objvalues = {...display.values}
            const values = Object.values(Objvalues)
            values [i] = newValue            
            setDisplay({...display, values})
            console.log(display)
            console.log(values)           
        }
    }

 
    const handleClearDisplay = () => {       
        setDisplay({
            displayValue: '0',
            current: 0,            
            values: [0,0],
            clear: true
        })  
    }   
                

    return (
        <>
           <div>
              <Display display={display}/>
            </div>
           <div className="container-keys">            
                <Button label="7" click={handleButtonClick}/>
                <Button label="8" click={handleButtonClick}/>
                <Button label="9" click={handleButtonClick}/>
                <Button label="DEL" del="delete"/>
                <Button label="4" click={handleButtonClick}/>
                <Button label="5" click={handleButtonClick}/>
                <Button label="6" click={handleButtonClick}/>
                <Button label="+"/>
                <Button label="1" click={handleButtonClick}/>
                <Button label="2" click={handleButtonClick}/>
                <Button label="3" click={handleButtonClick}/>
                <Button label="-"/>
                <Button label="." click={handleButtonClick}/>
                <Button label="0" click={handleButtonClick}/>
                <Button label="/"/>
                <Button label="x"/>            
                <Button label="RESET" click={handleClearDisplay} reset="reset" />
                <Button label="=" equal="equal" />            
            </div>        
        </>
    )
}

export default Calculator



