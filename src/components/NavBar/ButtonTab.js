import React, {Component} from 'react'

export default class ButtonTab extends Component {
  constructor() {
    super()

  }
  render(){
    return(<button>{this.props.title}</button>)
  }

}
