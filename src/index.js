import React from 'react';
import ReactDOM from 'react-dom';
import Users from './users/users';

class App extends React.Component {
    render() {
        return (
            <div><Users /></div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))