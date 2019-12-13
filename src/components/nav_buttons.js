import React from 'react';

function NavButtons(props){
        
    return(
            <header className="nav-buttons">
                <nav id="nav-buttons" className="control-btns flip-out">
                    <button className="close" data-close></button>
                    <button className="minimize" data-minimize></button>
                    <button id="flipper" className="flip" data-flip onClick={props.toggle}></button>
                </nav>
            </header> 

        )
    
}

export default NavButtons;
