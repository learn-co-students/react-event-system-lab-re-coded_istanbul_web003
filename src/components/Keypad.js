import React, { Component } from 'react'

export default class Keypad extends Component {

    handleKeyUp = ()  => {
        console.log("Entering password...")
    }
    render() {
        return (
            <div>
                <input id="global" onKeyUp={this.handleKeyUp} type="password" />
            </div>
        )
    }
}


