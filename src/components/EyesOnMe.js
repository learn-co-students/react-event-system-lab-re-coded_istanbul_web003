// Code EyesOnMe Component Here
import React,{Component} from 'react'
import {Button} from 'react-bootstrap'

export default class EyesOnMe extends Component {
    handleFocus(){
        console.log("Good!")
    }

    handleBlur(){
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (<button onFocus={this.handleFocus} onBlur={this.handleBlur} type="submit">sup</button>)
    }
}