import React, {Component} from 'react';
import Screen from './screen';
import Button from './button';

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            tbd: false
        }
    }

    render(){
        return(

  
            <main id="calculator" className="front">
        
               <Screen />

                <section className="buttons" id="keyPad">
                    <div id="compact" className="compact">
                        <div className="row">
                            <button className="special-function top-row btn-col" id="ac" data-ac>AC</button>
                            <button className="special-function top-row btn-col" data-pm="plusmn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="plusminus" x="0px" y="0px" width="15px" height="40px" viewBox="0 0 120 120" /*style={enable-background: new 0 0 15 20;}*/ xmlSpace="preserve" data-pm="plusmn">
                                <g>
                                <g>
                                    <path d="M77.955,109.975c-4.037,0-7.309,3.271-7.309,7.308c0,4.037,3.272,7.31,7.309,7.31h56.029c4.037,0,7.309-3.271,7.309-7.31    c0-4.036-3.271-7.308-7.309-7.308H77.955z"></path>
                                    <path d="M0,44.2c0,4.037,3.272,7.308,7.309,7.308h19.489v19.49c0,4.036,3.271,7.309,7.308,7.309c4.037,0,7.309-3.271,7.309-7.309    v-19.49H63.34c4.037,0,7.308-3.271,7.308-7.308c0-4.037-3.271-7.309-7.308-7.309H41.414V12.53c0-4.037-3.272-7.308-7.309-7.308    c-4.037,0-7.308,3.271-7.308,7.308v24.361H7.308C3.272,36.892,0,40.164,0,44.2z"></path>
                                <path d="M131.428,17.261c-2.854-2.855-7.481-2.855-10.336,0L14.763,123.594c-2.853,2.854-2.853,7.481,0,10.334    c1.425,1.429,3.298,2.143,5.167,2.143c1.868,0,3.742-0.714,5.169-2.143L131.428,27.599    C134.283,24.746,134.283,20.114,131.428,17.261z"></path>
                                </g>
                                </g>
                            </svg>
                            </button>
                            <button className="special-function top-row btn-col" data-percentage>&#37;</button>
                            <button className="operator top-row btn-col right" data-operator="divide">&divide;</button>
                        </div>
                        <div className="row">
                            <button className="number col" data-number="1">1</button>
                            <button className="number col" data-number="2">2</button>
                            <button className="number col" data-number="3">3</button>
                            <button className="operator col right" data-operator="multiply">&times;</button>
                        </div>
                        <div className="row">
                            <button className="number col" data-number="4">4</button>
                            <button className="number col" data-number="5">5</button>
                            <button className="number col" data-number="6">6</button>
                            <button className="operator col right" data-operator="minus">&minus;</button>
                        </div>
                        <div className="row">
                            <button className="number col" data-number="7">7</button>
                            <button className="number col" data-number="8">8</button>
                            <button className="number col" data-number="9">9</button>
                            <button className="operator col right" data-operator="plus">&#43;</button>
                        </div>
                        <div className="row">
                            <button className="number col colspan-two" data-number="0">0</button>
                            <button className="number dot col" data-dot>.</button>
                            <button className="operator col right btm-right-radius" data-operator="equals">&#61;</button>
                        </div>
                    </div>
                    <div id="extended" className="extended">
                        <div className="row">
                            <button className="special-function top-row btn-col" id="left_b" data-lb>&#40;</button>
                            <button className="special-function top-row btn-col" id="right_b" data-rb>&#41;</button>
                            <button className="special-function top-row btn-col" data-percentage>mc</button>
                            <button className="special-function top-row btn-col right" data-operator="divide">m&#43;</button>
                            <button className="special-function top-row btn-col" data-percentage>m&minus;</button>
                            <button className="special-function top-row btn-col right" data-operator="divide">mr</button>
                        </div>
                        <div className="row">
                            <button className="special-function col" data-number="1">2<sup>nd</sup></button>
                            <button className="special-function col" data-number="2">x<sup>2</sup></button>
                            <button className="special-function col" data-number="3">x<sup>3</sup></button>
                            <button className="special-function col right" data-operator="multiply">x<sup>y</sup></button>
                            <button className="special-function top-row btn-col" data-percentage>e<sup>x</sup></button>
                            <button className="special-function top-row btn-col right" data-operator="divide">10<sup>x</sup></button>
                        </div>
                        <div className="row">
                            <button className="special-function col" data-number="4">4</button>
                            <button className="special-function col" data-number="5">5</button>
                            <button className="special-function col" data-number="6">6</button>
                            <button className="special-function col right" data-operator="minus">&minus;</button>
                            <button className="special-function top-row btn-col" data-percentage>ln</button>
                            <button className="special-function top-row btn-col right" data-operator="divide">log<sub>10</sub></button>
                        </div>
                        <div className="row">
                            <button className="special-function col" data-number="7">x!</button>
                            <button className="special-function col" data-number="8">sin</button>
                            <button className="special-function col" data-number="9">cos</button>
                            <button className="special-function col right" data-operator="plus">tan</button>
                            <button className="special-function top-row btn-col" data-percentage>e</button>
                            <button className="special-function top-row btn-col right" data-operator="divide">EE</button>
                        </div>
                        <div className="row">
                            <button className="special-function col btm-left-radius" data-number="0">Rad</button>
                            <button className="special-function dot col" data-dot>sinh</button>
                            <button className="special-function col right" data-operator="equals">cosh</button>
                            <button className="special-function top-row btn-col" data-percentage>tanh</button>
                            <button className="special-function top-row btn-col right" data-operator="divide">&pi;</button>
                            <button className="special-function top-row btn-col" data-percentage>Rand</button>
                        </div>
                    </div>
                </section>
                 

            </main>
            
        )
    }
}

export default Calculator;