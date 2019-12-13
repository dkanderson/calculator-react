import React, { Component } from 'react';
import NavButtons from './components/nav_buttons';
import Back from './components/back';
import Calculator from './components/calculator';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      extended: false
    }
    this.toggleWidth = this.toggleWidth.bind(this);
  }

  toggleWidth(){
    this.setState({
      extended: !this.state.extended
    })
  }

  render(){

    return (
    
      <div id="wrapper" className={`flipWrap ${this.state.extended ? 'ext' : 'cmp'}`}>
        <NavButtons toggle={this.toggleWidth} />
        <div id="calculator-flipper" className="flipthis">
          <Calculator ext={this.state.extended}/>
          <Back />
        </div>
      </div>
    
    );

  }
  
}

export default App;
