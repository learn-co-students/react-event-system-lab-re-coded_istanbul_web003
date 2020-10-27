// Code EyesOnMe Component Here
import React, {Component} from 'react'

class EyesOnMe extends Component {
  constructor(props) {
    super(props)
  }

  handleFocus =() => {
    console.log('Good!');
  }

  handleBlur = () =>{
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <button onFocus={this.handleFocus}  onBlur={this.handleBlur}>Yo</button>
    )
  }
}

export default EyesOnMe 