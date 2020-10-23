// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {

    handlePass = () => console.log ('Entering password...')

    render () {
        return (
            <div>
                <input type="password"
                onKeyUp={this.handlePass}
                />
            </div>
        )
    }
}
export default Keypad;