// Code EyesOnMe Component Here
import React, { Component } from 'react';
export default class EyesOnMe extends Component {
    constructor(props) {
        super()
    }
    blurHandler = () => {
        console.log("Hey! Eyes on me!")
    }

    focusHandler = () => {
        console.log("Good!")
    }
    render() {
        return (
            <button onFocus={this.focusHandler} onBlur={this.blurHandler}></button>
        )
    }
}