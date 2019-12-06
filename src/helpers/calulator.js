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
    }

};

export default calculator;