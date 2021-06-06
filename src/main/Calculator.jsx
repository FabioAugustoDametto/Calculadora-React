import React, { useState }  from 'react';
import Display from '../components/Display';
import Button from '../components/Button';
import Header from '../components/Header'
import './Calculator.css'



const Calculator = () => {

    const [theme, setTheme] = useState(
        {
        className: ['Blue','White','Purple'] , 
        active: [true, false, false],
        currentClass: 'Blue'            
        }      
)

    const changeTheme = (e) => {        
        const active = [false, false, false]
        active[e] = true
        const currentClass = active[e] ? theme.className[e] : '' 
        setTheme({...theme, active, currentClass})                
        setBackground(currentClass)         
    }

    const setBackground = (currentClass) => {        
        switch (currentClass) {
            case 'Blue': 
                document.body.style.backgroundColor = "hsl(222, 26%, 31%)"                          
                break;
            case 'White': 
                document.body.style.backgroundColor = "hsl(0, 0%, 90%)"                           
                break;
            case 'Purple': 
                document.body.style.backgroundColor = "hsl(268, 75%, 9%)"                           
                break;           
        }       
    }
        

    const [display, setDisplay] = useState(
        {
            displayValue: '0',
            operation: null,
            clearDisplay: false,           
            values: [0,0],
            current: 0            
        }
    )

    const valueControl = (digit) => {
        if(digit !== '.') {
            return ''
        } else {
            return '0'
        }
    }

    const handleButtonClick = (digit) => {
        try {
            if (digit === '.' && display.displayValue.includes('.')) {
                return
            } 
        } catch {
            
        }      

        const clearDisplay = display.displayValue === '0' || display.clearDisplay              
        const currentValue = clearDisplay ? valueControl(digit) : display.displayValue
        const displayValue = currentValue + digit  
        const i = display.current
        const NewValue = parseFloat(displayValue)
        const values = {...display.values}
        values[i] = NewValue
        setDisplay({...display, displayValue, values, clearDisplay: false})             
    }

    const handleOperation = (operation) => {

        if(display.current === 0) {
            setDisplay({...display, operation, current: 1, clearDisplay: true})
        } else {
            const equals = operation === '='
            let currentOperation = display.operation
            if(currentOperation === 'x') currentOperation = '*'
            const values = {...display.values}

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = display.values[0]                
            }       
                 
            values[1] = 0
            setDisplay({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        } 
    }


    const deleteNumber = () => {   
        let displayValue = display.displayValue.toString()
        
        if (displayValue.length > 1) {
            displayValue = displayValue.substring(0, displayValue.length - 1)
            let i = display.current
            const values = {...display.values}
            values[i] = displayValue
            setDisplay({...display, displayValue, values})            
        } else {
            return
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
               <Header changeTheme={changeTheme} theme={theme}/>
           </div>
           <div>
              <Display display={display} theme={theme}/>
            </div>
           <div className={`container-keys ${theme.currentClass}`}>            
                <Button label="7" click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="8" click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="9" click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="DEL" click={deleteNumber} del="delete" theme={theme.currentClass}/>
                <Button label="4" click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="5" click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="6" click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="+" click={handleOperation} theme={theme.currentClass}/>
                <Button label="1" click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="2" click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="3" click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="-" click={handleOperation} theme={theme.currentClass}/>
                <Button label="." click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="0" click={handleButtonClick} theme={theme.currentClass}/>
                <Button label="/" click={handleOperation} theme={theme.currentClass}/>
                <Button label="x" click={handleOperation} theme={theme.currentClass}/>            
                <Button label="RESET" click={handleClearDisplay} reset="reset"  theme={theme.currentClass}/>
                <Button label="=" equal="equal" click={handleOperation} theme={theme.currentClass}/>            
            </div>        
        </>
    )
}

export default Calculator



    