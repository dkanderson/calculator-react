import React, {Component} from 'react';
import Screen from './screen';
import CalcFunc from '../helpers/calulator';
import EventUtil from '../helpers/event_util';
import SpecialFunctions from '../helpers/specialFunctions';
import EventManager from '../helpers/event_manager';
import handleKeyPress from '../helpers/handle_keypress';
import Mem from '../helpers/mem';

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            resultDisplay: 0,
            cancelBtnDisplay: 'C',
            MAXDIGITS : 17,
            PRECISION : 10,
            displayLength : 0,
            result : 0,
            percentage : 0,
            cache: [],
            dataOperator: null,
            dataEquals: null,
            dataDot: false,
            acFlag: false,
            dataPm: null,
            negFlag: false,
            dataPercentage: null,
            funcCache: [],
            numCache: [],
            displayText: '',
            RadDeg: 'Deg',
            scnd: false,
            ee: false,
            exp: false,
            mem: 0,
            lb: false

        }

        EventManager.eventManager = EventManager.eventManager.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.cancel = this.cancel.bind(this);
        SpecialFunctions.sf = SpecialFunctions.sf.bind(this);
        Mem.mrecall = Mem.mrecall.bind(this);
        Mem.mplus = Mem.mplus.bind(this);
        Mem.mminus = Mem.mminus.bind(this);
        Mem.mcancel = Mem.mcancel.bind(this);
    }

    componentWillMount(){
        EventUtil.addEvent(document, 'keypress', handleKeyPress);
    }

    handleClick(e){

        EventManager.eventManager(e.currentTarget.dataset);

    }
  
    cancel(){
        this.setState({
            cache: [],
            resultDisplay: '0',
            acFlag: false,
            cancelBtnDisplay: 'AC',
            dataDot: false,
            negFlag: false
          }) 
    }

    calculateSomeShit ( numCache, func, equals ) {

        var result, 
            calculate = CalcFunc.calculate,
            funcCache = this.state.funcCache;

        if ( numCache[1] ) {

            result = calculate(numCache[0], numCache[1], CalcFunc[func]);
            numCache[1] = result;
            numCache.shift();
            funcCache.shift();

            this.setState({
                resultDisplay: formatResult ( result, this.state.PRECISION, this.state.MAXDIGITS),
                numCache,
                funcCache,
                result,
                exp: false
            })

            if(equals){
                this.setState({
                    numCache: [],
                    funcCache: []
                })
            }          
          
        } else {

          return;

        }

    }

    
    render(){
        return(

  
            <main id="calculator" className="front">
        
               <Screen 
                    content={this.state.resultDisplay} 
                    exp={this.state.exp} 
                    numCache={this.state.numCache} 
                    rad={this.state.RadDeg === 'Rad'} 
                    ext={this.props.ext}
                    mem={this.state.mem > 0} />

                <section className="buttons" id="keyPad">
                    
                    <div id="extended" className="extended">
                        <div className="row">
                            <button className="special-function top-row btn-col" id="left_b" onClick={this.handleClick} data-type="sf" data-lb>&#40;</button>
                            <button className="special-function top-row btn-col" id="right_b" onClick={this.handleClick} data-type="sf" data-rb>&#41;</button>
                            <button className="special-function top-row btn-col" onClick={this.handleClick} data-type="sf" data-mc>mc</button>
                            <button className="special-function top-row btn-col right" onClick={this.handleClick} data-type="sf" data-mplus>m&#43;</button>
                            <button className="special-function top-row btn-col" onClick={this.handleClick} data-type="sf" data-mminus>m&minus;</button>
                            <button className="special-function top-row btn-col right" onClick={this.handleClick} data-type="sf" data-mr>mr</button>
                        </div>
                        <div className="row">
                            <button className="special-function col" onClick={this.handleClick} data-type="sf" data-scnd>2<sup>nd</sup></button>
                            <button className="special-function col" onClick={this.handleClick} data-type="sf" data-xsquared>x<sup>2</sup></button>
                            <button className="special-function col" onClick={this.handleClick} data-type="sf" data-xcubed>x<sup>3</sup></button>
                            <button className="special-function col right" onClick={this.handleClick} data-type="sf" data-xtty>x<sup>y</sup></button>
                            <button className="special-function top-row btn-col" onClick={this.handleClick} data-type="sf" data-ettx>
                                { this.state.scnd &&  
                                    <span>y<sup>x</sup></span>      
                                }

                                { !this.state.scnd &&  
                                    <span>e<sup>x</sup></span>      
                                }
                            
                            </button>
                            <button className="special-function top-row btn-col right" onClick={this.handleClick} data-type="sf" data-tenttx>
                                { this.state.scnd &&  
                                    <span>2<sup>x</sup></span>      
                                }

                                { !this.state.scnd &&  
                                    <span>10<sup>x</sup></span>      
                                }
                            </button>
                        </div>
                        <div className="row">
                            <button className="special-function col" onClick={this.handleClick} data-type="sf" data-onex>1/x</button>
                            <button className="special-function col" onClick={this.handleClick} data-type="sf" data-sqroot>sqrt</button>
                            <button className="special-function col" onClick={this.handleClick} data-type="sf" data-cuberoot>cbrt</button>
                            <button className="special-function col right" onClick={this.handleClick} data-type="sf" data-nthroot>yxrt</button>
                            <button className="special-function top-row btn-col" onClick={this.handleClick} data-type="sf" data-ln>
                                { this.state.scnd &&  
                                    <span>log<sub>y</sub></span>      
                                }

                                { !this.state.scnd &&  
                                    <span>ln</span>      
                                }
                            </button>
                            <button className="special-function top-row btn-col right" onClick={this.handleClick} data-type="sf" data-logten>
                                { this.state.scnd &&  
                                    <span>log<sub>2</sub></span>      
                                }

                                { !this.state.scnd &&  
                                    <span>log<sub>10</sub></span>      
                                }
                                
                            </button>
                        </div>
                        <div className="row">
                            <button className="special-function col" onClick={this.handleClick} data-type="sf" data-factorial>x!</button>
                            <button className="special-function col" onClick={this.handleClick} data-type="sf" data-sin>sin{ this.state.scnd && <sup>-1</sup>}</button>
                            <button className="special-function col" onClick={this.handleClick} data-type="sf" data-cos>cos{ this.state.scnd && <sup>-1</sup>}</button>
                            <button className="special-function col right" onClick={this.handleClick} data-type="sf" data-tan>tan{ this.state.scnd && <sup>-1</sup>}</button>
                            <button className="special-function top-row btn-col" onClick={this.handleClick} data-type="sf" data-e>e</button>
                            <button className="special-function top-row btn-col right" onClick={this.handleClick} data-type="sf" data-ee="divide">EE</button>
                        </div>
                        <div className="row">
                            <button className="special-function col btm-left-radius" onClick={this.handleClick} data-type="sf" data-rad>{this.state.RadDeg === 'Deg' ? 'Rad' : 'Deg'}</button>
                            <button className="special-function dot col" onClick={this.handleClick} data-type="sf" data-sinh>sinh{ this.state.scnd && <sup>-1</sup>}</button>
                            <button className="special-function col right" onClick={this.handleClick} data-type="sf" data-cosh>cosh{ this.state.scnd && <sup>-1</sup>}</button>
                            <button className="special-function top-row btn-col" onClick={this.handleClick} data-type="sf" data-tanh>tanh{ this.state.scnd && <sup>-1</sup>}</button>
                            <button className="special-function top-row btn-col right" onClick={this.handleClick} data-type="sf" data-pi>&pi;</button>
                            <button className="special-function top-row btn-col" onClick={this.handleClick} data-type="sf" data-rand>Rand</button>
                        </div>
                    </div>
                    <div id="compact" className="compact">
                        
                        <div className="row">
                            <button className="special-function top-row btn-col" id="cancelBtn" onClick={this.handleClick} data-type="sf" data-ac>{this.state.cancelBtnDisplay}</button>
                            <button className="special-function top-row btn-col" onClick={this.handleClick} data-type="sf" data-pm="plusmn">
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
                            <button className="special-function top-row btn-col" onClick={this.handleClick} data-type="sf" data-percentage>&#37;</button>
                            <button className="operator top-row btn-col right" onClick={this.handleClick} data-type="operator" data-divide>&divide;</button>
                        </div>
                        <div className="row">
                            <button className="number col" onClick={this.handleClick} data-type="number" data-number="1">1</button>
                            <button className="number col" onClick={this.handleClick} data-type="number" data-number="2">2</button>
                            <button className="number col" onClick={this.handleClick} data-type="number" data-number="3">3</button>
                            <button className="operator col right" onClick={this.handleClick} data-type="operator" data-multiply>&times;</button>
                        </div>
                        <div className="row">
                            <button className="number col" onClick={this.handleClick} data-type="number" data-number="4">4</button>
                            <button className="number col" onClick={this.handleClick} data-type="number" data-number="5">5</button>
                            <button className="number col" onClick={this.handleClick} data-type="number" data-number="6">6</button>
                            <button className="operator col right" onClick={this.handleClick} data-type="operator" data-minus>&minus;</button>
                        </div>
                        <div className="row">
                            <button className="number col" onClick={this.handleClick} data-type="number" data-number="7">7</button>
                            <button className="number col" onClick={this.handleClick} data-type="number" data-number="8">8</button>
                            <button className="number col" onClick={this.handleClick} data-type="number" data-number="9">9</button>
                            <button className="operator col right" onClick={this.handleClick} data-type="operator" data-plus>&#43;</button>
                        </div>
                        <div className="row">
                            <button className="number col colspan-two" onClick={this.handleClick} data-type="number" data-number="0">0</button>
                            <button className="number dot col" onClick={this.handleClick} data-type="dot" data-dot>.</button>
                            <button className="operator col right btm-right-radius" onClick={this.handleClick} data-type="operator" data-equals>&#61;</button>
                        </div>
                    </div>
                    
                </section>
                 

            </main>
            
        )
    }
}

// Make sure result is not too big for display
function formatResult ( result, PRECISION, MAXDIGITS ) {

    // Number.
    if ( !isNaN ( result ) && result.toExponential().length > MAXDIGITS ) {

      return result.toPrecision( PRECISION ).replace ( /\+/g, '');

    } else {

      return result;

    }

}

export default Calculator;