import SpecialFunctions from './specialFunctions';

const EventManager = { 

    eventManager: function( inputObject ) {
        let cache = [],
            MAXDIGITS = this.state.MAXDIGITS,
            resultDisplay = this.state.resultDisplay,
            displayLength = this.state.displayLength,
            numCache = [],
            funcCache = [],
            neg = 0;

        if( inputObject.type === 'number' ) {
        
            if(this.state.negFlag){
                this.cancel();
            }

            if ( cache.length < MAXDIGITS ) {
                
                cache = this.state.cache;
                if( cache[0] === '0' && !this.state.dataDot ){
                    cache.shift();
                }  
                cache.push ( inputObject.number );
                this.setState({
                    cache,
                    cancelBtnDisplay: 'C',
                    acFlag: true
                })

                displayLength = cache.join( '' ).length;
                resultDisplay = cache.join( '' );
                this.setState({
                    resultDisplay
                })
                
                

            // Update font size when over 10 characters
            if( displayLength > 10 ) {

                this.setState({
                    displayText: 'small-text'
                })

            }

        }


        } else if ( inputObject.type === 'operator' ) {

            if( this.state.numCache.length > 1 && this.state.funcCache.length > 0 ){
                this.calculateSomeShit( numCache, funcCache[0], true );
            }

            funcCache = this.state.funcCache;
            funcCache.push( Object.keys(inputObject)[1] );
            this.setState({
                cache: [],
                funcCache,
                dataDot: false
            })

            if ( !isNaN( resultDisplay ) ) {

                numCache = this.state.numCache;
                numCache.push( parseFloat( resultDisplay ) );
                this.setState({
                    numCache
                })

            }


            if ( inputObject.equals ){
                
                if( funcCache[0] !== 'equals' ){
                    this.calculateSomeShit( numCache, funcCache[0], true );
                }else{
                    return;
                }
                
            } else {

                this.calculateSomeShit( numCache, Object.keys(inputObject)[1] );

            }
            
            if ( funcCache.length > 1 ) {

            funcCache.shift();

            }
            

        } else if ( inputObject.dot ) {

            if ( !this.state.dataDot ){
            
                this.setState({
                    dataDot: true
                })

                cache = this.state.cache;

            if (cache.length === 0) {

                cache.push('0.');

                } else {

                cache.push('.');

                }

                this.setState({
                    cache
                })

            }


        } else if ( inputObject.ac ) {

            if ( this.state.acFlag && this.state.funcCache.length > 0 ) {

            this.cancel();

            } else {

            this.setState({
                cache: [],
                numCache:[],
                funcCache: [],
                result: 0,
                dotFlag: false,
                negFlag: false,
                acFlag: false,
                resultDisplay: '0',
                cancelBtnDisplay: 'AC',
                dataDot: false
            })//   clearAll();
            console.log('Reset Calculator');

            }
            
        } else if ( inputObject.pm ) {

            cache = this.state.cache;

            if ( cache.length > 0 ) {

                neg = (-1 * parseFloat(cache.join('')));

                this.setState({
                    resultDisplay: neg,
                    negFlag: true
                })

            }

        } else if ( inputObject.percentage ) {

            let percentage = 0;
            cache = this.state.cache;

            if ( cache.length > 0 ) {

                percentage = (parseFloat(cache.join('')) / 100 );

            } else {
                percentage = (parseFloat(this.state.resultDisplay) / 100 );
            }

            this.setState(
                {
                    cache: [],
                    resultDisplay: percentage
                }
            )

            } else if ( inputObject.type === 'sf' ) {

                SpecialFunctions.sf(inputObject);

            } else {

                return;
            }

    }
}

  export default EventManager;