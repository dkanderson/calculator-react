import React from 'react';

function Button(props){
    
    return(
        <button id={props.id} onClick={props.onClick} className={props.className} data-value={props.value} data-type={props.type}>
        {this.props.title}</button>
    );
    
}

export default Button;