import React from 'react';
import NavButtons from './components/nav_buttons';
import Back from './components/back';
import Calculator from './components/calculator';
import './App.css';

function App() {
  return (
    
    <div id="wrapper" className="flipWrap">
      <NavButtons/>
      <div id="calculator-flipper" className="flipthis">
        <Calculator />
        <Back />
      </div>
    </div>
  
  );
}

export default App;
