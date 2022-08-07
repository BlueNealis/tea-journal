import React, {Component} from 'react'
import ButtonTab from './ButtonTab'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render(){
    return(<header>
      <Link to='/'>
        <h1 className='home'>HOME</h1>
      </Link>
        <ButtonTab linkto= '/teasperiences' title='My Teasperiences'/>
        <ButtonTab linkto='/favorites' title='My Favorite Teas'/>
        <ButtonTab title='How To - A Guide to Brewing Tea'/>
        <ButtonTab title='Where to buy tea near me'/>
      </header> )
  }
}
