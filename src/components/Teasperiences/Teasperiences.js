import React, { Component } from 'react'

export default class Teasperiences extends Component {
  constructor() {
    super()
    this.state = {
      entries: []
    }
  }

  componentDidUpdate(prevProps,prevState) {
  }

  render(){
    return(<div className='entry-container'></div>)
  }
}
