import React from 'react';

function NavButtons(props){
        
    return(
            <header className="nav-buttons">
                <nav id="nav-buttons" className="control-btns flip-out">
                    <button className="close-btn" data-close><i>x</i></button>
                    <button className="minimize-btn" data-minimize><i>&minus;</i></button>
                    <button id="flipper" className="flip expand-btn" data-flip onClick={props.toggle}><i>&#43;</i></button>
                </nav>
            </header> 

        )
    
}

export default NavButtons;
