import Trig from './trig';

let x = 0;

const SpecialFunctions = {
    
    sf: function(inputObject){

        if(inputObject.scnd){
            this.setState({
                scnd: !this.state.scnd
            })
        }

       if(inputObject.xsquared){
            // displayed value squared
            x = Math.pow(parseFloat(this.state.resultDisplay), 2);
            updateValue(x, this);

       } else if(inputObject.xcubed){
            // displayed value cubed
            x = Math.pow(parseFloat(this.state.resultDisplay), 3);
            updateValue(x, this);
       } else if ( inputObject.xtty ) {
            // Raise the displayed value to the power of the next value entered
    
       } else if ( inputObject.ettx ) {

            if ( !this.state.scnd ) {

                // E to the power of the displayed value    
                x = Math.pow(Math.E, parseFloat(this.state.resultDisplay));
                updateValue(x, this);

            } else {

                // Raise the displayed value to the power of the next value entered
                
            }
            

       } else if ( inputObject.tenttx ) {
            
            if ( !this.state.scnd ) {

                 // 10 to the power of the displayed value
                x = Math.pow(10, parseFloat(this.state.resultDisplay));
                updateValue(x, this);

            } else {

                // 2 to the power of the displayed value
                x = Math.pow(2, parseFloat(this.state.resultDisplay));
                updateValue(x, this);
            }
           

       } else if ( inputObject.onex ) {
            // Calculate the inverse of the displayed value
            x = parseFloat(1 / this.state.resultDisplay);
            updateValue(x, this);

       } else if ( inputObject.sqroot) {
            // calculate the square root of the displayed value
            x = Math.sqrt(parseFloat(this.state.resultDisplay));
            updateValue(x, this); 

       } else if ( inputObject.cuberoot) {
            // calculate the cube root of the displayed value
            x = Math.cbrt(parseFloat(this.state.resultDisplay));
            updateValue(x, this); 

       } else if ( inputObject.nthroot) {
            //  Compute the nth root of the value displayed, where n is the next value entered

       } else if ( inputObject.ln) {

            if(!this.state.scnd){

                // Calculate the natural logarithm of the value displayed
                x = Math.log(parseFloat(this.state.resultDisplay));
                updateValue(x, this); 

            } else {

                // Calculate the logarithm of the value displayed with the base of the next value entered
                

            }
            

       } else if ( inputObject.logten) {
            
            if ( !this.state.scnd ) {

                // Calculate the base 10 logarithm of the displayed value
                x = Math.log10(parseFloat(this.state.resultDisplay));
                updateValue(x, this); 

            } else {

                // Calculate the base 2 logarithm of the displayed value
                x = Math.log2(parseFloat(this.state.resultDisplay));
                updateValue(x, this); 

            }
            

        } else if ( inputObject.factorial) {
            // calculate factorial of the displayed value
            updateValue(factorial(parseFloat(this.state.resultDisplay)), this);

       } else if ( inputObject.sin) {

            if ( !this.state.scnd ) {

                // calculate the sine of the displayed value
                x = Trig.sin(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 

            } else {

                // calculate the inverse sine of the displayed value
                x = Trig.asin(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 
            }
            

       } else if ( inputObject.cos) {

            if ( !this.state.scnd ) {

                //  Compute the cosine of the displayed value
                x = Trig.cos(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 

            } else {

                //  Compute the inverse cosine of the displayed value
                x = Trig.acos(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 

            }
            
       } else if ( inputObject.tan) {

            if (!this.state.scnd ) {

                // Calculate the tangent of the displayed value
                x = Trig.tan(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 

            } else { 

                // Calculate the tangent of the displayed value
                x = Trig.atan(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 
            }
            

       } else if ( inputObject.e) {
            // Enter e
            this.setState({
                resultDisplay: Math.E
            })

        } else if ( inputObject.ee) {
            // Exponential Notation

       } else if ( inputObject.rad) {
            // toggle between degrees and radians
            let rd = '';
            if (this.state.RadDeg === 'Deg') {
                rd = 'Rad';
            } else {
                rd = 'Deg';
            }

            this.setState({
                RadDeg: rd
            })

       } else if ( inputObject.sinh) {
            
            if ( !this.state.scnd ) {
                //  Compute the hyperbolic sine of the displayed value
                x = Trig.sinh(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 
            } else {

                //  Compute the hyperbolic sine of the displayed value
                x = Trig.asinh(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 
            }
            

       } else if ( inputObject.cosh) {

            if( !this.state.scnd ) {

                // Calculate the hyperbolic cosine of the displayed value
                x = Trig.cosh(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 

            } else {

                // Calculate the hyperbolic cosine of the displayed value
                x = Trig.acosh(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 

            }
            

       } else if ( inputObject.tanh) {

            if ( !this.state.scnd ) {

                // Calculate the hyperbolic tangent of the displayed value
                x = Trig.tanh(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 

            } else {

                // Calculate the hyperbolic tangent of the displayed value
                x = Trig.atanh(parseFloat(this.state.resultDisplay), this.state.RadDeg === 'Deg');
                updateValue(x, this); 

            }
            

        } else if ( inputObject.pi) {
            // enter pi
            this.setState({
                resultDisplay: Math.PI
            })

       } else if ( inputObject.rand) {
            // Generate a random number between 0 and 1
            this.setState({
                resultDisplay: Math.random()
            })

       }

    }

}

function updateValue(result, self){
    self.setState({
        numCache: [],
        funcCache: [],
        resultDisplay: formatResult ( result, self.state.PRECISION, self.state.MAXDIGITS)
    })
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

function factorial(x) 
{ 

  if (x === 0)
    {
        return 1;
    }
  return x * factorial(x-1);
         
}

export default SpecialFunctions;