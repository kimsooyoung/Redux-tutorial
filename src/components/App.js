import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Counter from './Counter';

const propTypes = {

};

const defulatProps = {

}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <Counter/>
            </div>
        )
    }
}

App.propTypes = propTypes;
App.defaultProps = defulatProps;

export default App;