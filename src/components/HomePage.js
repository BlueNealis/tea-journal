import React, { Component } from 'react'
import TeaCard from './TeaCard/TeaCard'
import '../App.css'

class HomePage extends Component {
  constructor(){
    super()
  }

  render(){
    return(<div className='homepage'>
          <h1 className='title'>{this.props.title}</h1>
          <h2 className='title-main, title'>{this.props.sub}</h2>
          <div className='card-container'>
            {this.props.content}
          </div>
        </div>)
  }
}

export default HomePage
