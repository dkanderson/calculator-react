import React, { Component } from 'react';

class NavButtons extends Component{
    
    render(){
        return(
            <header className="nav-buttons">
                <nav id="nav-buttons" className="control-btns flip-out">
                    <button className="close" data-close></button>
                    <button className="minimize" data-minimize></button>
                    <button id="flipper" className="flip" data-flip></button>
                </nav>
            </header> 

        )
    }
}

export default NavButtons;
