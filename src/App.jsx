import React, {Component} from 'react';

class Name extends Component {
    render() {
        return (
            <span>Rect</span>
        );
    }
}

class App extends Component {
    render() {
        return (
            <h1>Hello <Name /></h1>
        );
    }
}

export default App;
