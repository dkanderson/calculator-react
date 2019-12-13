var Memory = {

    mplus: function(){

        this.setState({
            mem: parseFloat(this.state.mem) + parseFloat(this.state.resultDisplay),
            cache: []
        })

    },

    mminus: function(){

        this.setState({
            mem: parseFloat(this.state.mem) - parseFloat(this.state.resultDisplay),
            cache: []
        })

    },

    mrecall: function() {

        this.setState({
            resultDisplay: this.state.mem
        })

    },

    mcancel: function(){

        this.setState({
            mem: 0
        })

    }
}

export default Memory;