import React, { Component } from 'react'


class ChildA extends Component {

    render() {
        const { login } = this.props;

        if (login === true) {
            return <div> 这是登录状态下能看到的信息</div>;
        } else {
            return (
                <div> 你还没登录，请先登录</div>
            );
        }
    };
}

class ChildB extends Component {

    handleClick = (login) => {
        this.props.callback(login);
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.handleClick(true) }}>login</button>
                <button onClick={() => { this.handleClick(false) }}>logout</button>
            </div>
        );
    };
}

export default class CommonParent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    hanldeCallback = (login) => {
        this.setState({ login })
    }

    render() {
        return (
            <div><ChildA login={this.state.login} /> <ChildB callback={this.hanldeCallback} /></div>
        );
    };
}