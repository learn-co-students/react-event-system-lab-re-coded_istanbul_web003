// Code EyesOnMe Component Here
import React from "react";

class EyesOnMe extends React.Component {
  HandleOnFocus = () => {
    console.log("Good!");
  };
  HandleOnBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return <button onFocus={this.HandleOnFocus} onBlur={this.HandleOnBlur}></button>;
  }
}

export default EyesOnMe;
