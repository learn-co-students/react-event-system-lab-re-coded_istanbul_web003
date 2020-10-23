// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    good = () => {
        console.log('Good!')
    }

    blur = () => {
        console.log('Hey! Eyes on me!')
    }


    render() {
        return (
            <div>
                <button onFocus={this.good} onBlur={this.blur}/>
            </div>
        )
    }
}
