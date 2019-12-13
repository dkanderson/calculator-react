var calculator = {

    calculate: function () {

        var fn = Array.prototype.pop.apply(arguments);
        return fn.apply(null, arguments);

    },

    plus: function () {
        
        var i = 0,
            total = 0,
            l = arguments.length;
        for (i = 0; i < l; i += 1) {
            
            total += arguments[i];

        }

        return total;
    },

    multiply: function () {
        var i = 0,
            total = Array.prototype.shift.apply(arguments),
            l = arguments.length;

        for (i = 0; i < l; i += 1) {

            total *= arguments[i];

        }

        return total;
    },

    minus: function () {
        var i = 0,
            total = Array.prototype.shift.apply(arguments),
            l = arguments.length;

        for (i = 0; i < l; i += 1) {
            
            total -= arguments[i];

        }

        return total;
    },

    divide: function () {

        var i = 0,
            total = Array.prototype.shift.apply(arguments),
            l = arguments.length;

        for (i = 0; i < l; i += 1) {
            
            total /= arguments[i];

        }

        return total;
    },

    xtty: function() {

        var i = 0,
            base = Array.prototype.shift.apply(arguments),
            exponent = arguments[i];

        return Math.pow(base, exponent);

    },

    ettx: function() {

        var i = 0,
            exponent = Array.prototype.shift.apply(arguments),
            base = arguments[i];

        return Math.pow(base, exponent);


    },

    nthroot: function() {

        var i = 0,
            x = Array.prototype.shift.apply(arguments),
            y = arguments[i];

        return Math.pow(x, 1/y);

    },

    ln: function() {

        var i = 0,
        x = Array.prototype.shift.apply(arguments),
        base = arguments[i];

        return Math.log(x) / Math.log(base);

    },

    ee: function() {

        var i = 0,
            base = Array.prototype.shift.apply(arguments),
            exponent = arguments[i];

        return Math.pow(base, exponent);

    }



};

export default calculator;