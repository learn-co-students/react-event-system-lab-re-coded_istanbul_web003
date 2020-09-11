import React, { Component } from 'react'

export default class Keypad extends Component {
    callback = () => {
        console.log('Entering password...');
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.callback} type="password" />
            </div>
        )
    }
}
