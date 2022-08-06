import React, {Component} from 'react'
import './ButtonTab.css'
import {Link} from 'react-router-dom'
export default class ButtonTab extends Component {
  constructor() {
    super()

  }
  render(){
    return(<Link to={this.props.linkto}>
      <button className='nav-button'>{this.props.title}</button>
    </Link>)
  }

}
