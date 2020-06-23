import React, { Component } from 'react'



class Child extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div > 爸爸传来的消息：{this.props.msg}</div>
                <button onClick={this.props.callback}>这是儿子组件，点我告诉爸爸</button>
            </>
        );
    };

}

export default class Parent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msgFromChild: '暂无消息'
        }
    }

    onChildSendMsg = () => {
        this.setState({
            msgFromChild: '儿子来消息了',
        });
    }

    render() {
        return (
            <>
                <div>点击儿子，会有变化：{this.state.msgFromChild}</div>
                <Child msg='诶哟儿子！' callback={this.onChildSendMsg} />
            </>
        );
    };
}