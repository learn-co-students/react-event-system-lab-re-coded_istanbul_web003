import React from 'react';
// import ReactDOM from 'react-dom';
// import EyesOnMe from './EyesOnMe'

class Keypad extends React.Component {
    handleKeyUp = () => console.log('Entering password...')

    render() {
        return (
            <div>
            <input type="password" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
export default Keypad