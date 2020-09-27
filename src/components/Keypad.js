// Code Keypad Component Here
import React, { Component } from 'react';
class Keypad extends Component {
    handleClick() {
        console.log('Entering password...');
    }
    
  render() {
    return <input type="password" name="password" onKeyUp={() => this.handleClick()}/>
    }
}

export default Keypad;