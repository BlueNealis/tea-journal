import React, {Component} from 'react'
import ButtonTab from './ButtonTab'
import './NavBar.css'

export default class NavBar extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render(){
    return(<header>
        <ButtonTab title='My Teasperiences'/>
        <ButtonTab title='My Favorite Teas'/>
        <ButtonTab title='How To - A Guide to Brewing Tea'/>
        <ButtonTab title='Where to buy tea near me'/>
      </header> )
  }
}
