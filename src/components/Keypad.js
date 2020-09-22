// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  HandleonKeyUp = () => {
    console.log("Entering password...");
  };

  render() {
    return  <input type="password" onKeyUp={this.HandleonKeyUp} />;
  }
}

export default Keypad;
