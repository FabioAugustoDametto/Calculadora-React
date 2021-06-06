import React from 'react';
import './css/Header.css'




const Header = ({changeTheme, theme}) => {        
    
    
   return (
       <div className={`Header ${theme.currentClass}`}>
           <div>
               <h1>calc</h1>
           </div>

           <div className="Header-Theme">                 
               <div></div>
               <div className="Header-Numbers">
                 <label>1 2 3</label>                 
               </div>
               <div>
                 <label>THEME</label>
               </div>
               
               <div className={`slider ${theme.currentClass}`}>
                   <div>                                                                 
                       <input id="0" name="slider1" className={`switch ${theme.currentClass} ${theme.active[0]}`} type="checkbox" defaultChecked={true}
                         onClick={ e => changeTheme(e.target.id)}/>
                   </div>
                   <div>                       
                       <input id="1" name="slider2"className={`switch ${theme.currentClass} ${theme.active[1]}`} type="checkbox" defaultChecked={false} 
                       onClick={ e => changeTheme(e.target.id)}/>
                   </div>
                   <div>                      
                       <input id="2" name="slider3" className={`switch ${theme.currentClass} ${theme.active[2]}`} type="checkbox" defaultChecked={false} 
                       onClick={ e => changeTheme(e.target.id)}/>
                   </div>
                
               </div> 

           </div>
       </div>
   )

}

export default Header


