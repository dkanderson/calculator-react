import React from 'react';

function Screen(props){
    return(
        <section className="screen">
        <span id="display-text" className="display-text" data-result>0</span>
        <div className="display gradient"></div>
        </section>
    )
}

export default Screen;