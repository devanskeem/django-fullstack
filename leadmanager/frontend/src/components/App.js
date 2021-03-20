import React from 'react';
import ReactDOM from 'react-dom';
import { electron } from 'webpack';

class App extends Component{
    render() {
        return <h1>React App </h1>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))