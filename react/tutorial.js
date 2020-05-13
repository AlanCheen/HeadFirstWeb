//react 教程
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    render() {
        return (
            <div>Hello World!</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

//Uncaught SyntaxError: Cannot use import statement outside a module