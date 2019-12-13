import React from 'react';

function Screen(props){
    return(
        <section className="screen">
            { (props.rad && props.ext) && 
                <span className="rad-display">Rad</span> }

            { (props.ext && props.mem) && 
                <span className="mem">M</span>
            }
            <span id="display-text" className="display-text" data-result>
            { props.exp && 
              <span>{props.numCache}e</span> }
            {props.content}</span>
            <div className="display gradient"></div>
        </section>
    )
}

export default Screen;