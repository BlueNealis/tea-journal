import React, {Component} from 'react'
import './JournalEntry.css'
import {Link} from 'react-router-dom'

export default class JournalEntry extends Component {
  constructor(){
    super()
    this.state = {
      teaNames: null,
      experience:'',
      flavorNotes:'',
      teaType:'',
      date:'',
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  setTeas = (teas) => {
    this.setState({teaNames: teas})
  }

    componentDidUpdate() {
      const names = this.props.teas.map((tea) => {
          return <option id={tea.id} value={tea.name}>{tea.name}</option>
        })
        if(!this.state.teaNames){
          this.setTeas(names)
        }
      }

  render(){
    return(
      <div className='form-container'>
        <form>
          <h1>{this.state.teaType} Experience</h1>
          <input className='date-input' name='date'
          value={this.state.date}
          onChange={this.handleChange}
          type='date'/>
          <br/>

          <label>Tea Type: </label>
          <select onChange={this.handleChange} value={this.state.teaType}
          name='teaType' id='tea-select'>
            <option>Pick a Tea</option>
            {this.state.teaNames}
          </select>
          <br/>

          <input name='experience'
          value={this.state.experience}
          onChange={this.handleChange}
          type='text' placeholder='The Experience'></input>
          <br/>

          <input name='flavorNotes'
          value={this.state.flavorNotes}
          onChange={this.handleChange}
          type='text' placeholder='flavor notes'></input>
          <br/>
          
          <Link to='/teasperiences'>
            <button onClick={event => this.props.handleSubmit(event, this.state)}>Submit</button>
          </Link>
        </form>
      </div>)
  }
}
