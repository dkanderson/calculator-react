const Trig = {
    
    sin: function(x, deg){
        
        if(deg){

            return Math.sin(x * Math.PI / 180);

        } else {

            return Math.sin(x);

        }
        
    },

    cos: function(x, deg){
        
        if(deg){

            return Math.cos(x * Math.PI / 180);

        } else {

            return Math.cos(x);

        }
        
    },

    tan: function(x, deg){
        
        if(deg){

            return Math.tan(x * Math.PI / 180);

        } else {

            return Math.tan(x);

        }
        
    },

    asin: function(x, deg){
        
        if(deg){

            return Math.asin(x * Math.PI / 180);

        } else {

            return Math.asin(x);

        }
        
    },

    acos: function(x, deg){
        
        if(deg){

            return Math.acos(x * Math.PI / 180);

        } else {

            return Math.acos(x);

        }
        
    },

    atan: function(x, deg){
        
        if(deg){

            return Math.atan(x * Math.PI / 180);

        } else {

            return Math.atan(x);

        }
        
    },

    sinh: function(x, deg){
        
        if(deg){

            return Math.sinh(x * Math.PI / 180);

        } else {

            return Math.sinh(x);

        }
        
    },

    cosh: function(x, deg){
        
        if(deg){

            return Math.cosh(x * Math.PI / 180);

        } else {

            return Math.cosh(x);

        }
        
    },

    tanh: function(x, deg){
        
        if(deg){

            return Math.tanh(x * Math.PI / 180);

        } else {

            return Math.tanh(x);

        }
        
    },

    asinh: function(x, deg){
        
        if(deg){

            return Math.asinh(x * Math.PI / 180);

        } else {

            return Math.asinh(x);

        }
        
    },

    acosh: function(x, deg){
        
        if(deg){

            return Math.acosh(x * Math.PI / 180);

        } else {

            return Math.acosh(x);

        }
        
    },

    atanh: function(x, deg){
        
        if(deg){

            return Math.atanh(x * Math.PI / 180);

        } else {

            return Math.atanh(x);

        }
        
    }


}

export default Trig;