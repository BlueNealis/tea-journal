import React, {Component} from 'react'
import './ButtonTab.css'
export default class ButtonTab extends Component {
  constructor() {
    super()

  }
  render(){
    return(<button className='nav-button'>{this.props.title}</button>)
  }

}
