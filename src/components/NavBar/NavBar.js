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
        <ButtonTab linkto='/new-entry' title='Add A Tea Experience Entry'/>
      </header> )
  }
}
