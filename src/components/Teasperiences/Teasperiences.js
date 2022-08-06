import React, { Component } from 'react'

export default class Teasperiences extends Component {
  constructor() {
    super()
    this.state = {
      entries: []
    }
  }

  componentDidUpdate(prevProps,prevState) {
    // if(prevProps != this.state.props) {
    //   console.log('heiiiii')
    //   this.setState({entries: [...this.state.entries, this.props.newEntry]})
    // }
  }

  render(){
    return(<h1>hi</h1>)
  }
}
