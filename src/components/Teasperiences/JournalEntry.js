import React, {Component} from 'react'
import './JournalEntry.css'
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField'


export default class JournalEntry extends Component {
  constructor(){
    super()
    this.state = {
      teaNames: null,
      experience:'',
      flavorNotes:'',
      teaType:'',
      date:'',
      disabled: true
    }
  }

  checkForm = () => {
    if(this.state.teaNames && this.state.experience && this.state.flavorNotes && this.state.teaType && this.state.date){
      this.setState({disabled: false})
    }else {
      this.setState({disabled: true})
    }
  }

  handleChange = async (event) => {
    const {name, value} = event.target
    await this.setState({[name]: value})
    this.checkForm()
  }

  setTeas = (teas) => {
    this.setState({teaNames: teas})
    console.log(teas)
  }

    async componentDidMount() {
      const names = await this.props.teas.map((tea) => {
          return <option id={tea.id} value={tea.name}>{tea.name}</option>
        })
          this.setTeas(names)
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

          <label>    Tea Type: </label>
          <select onChange={this.handleChange} value={this.state.teaType}
          name='teaType' id='tea-select'>
            <option>Pick a Tea</option>
            {this.state.teaNames}
          </select>
          <br/>

          <TextField
            className='input-experience'
           id="outlined-multiline-static"
           label="Experience"
           variant='filled'
           rows={4}
           value={this.state.experience}
           onChange={this.handleChange}
           name='experience'
           multiline
         />
          <br/>

          <TextField
          className='input-notes'
          id="filled-helperText"
          name='flavorNotes'
          label='Flavor Notes'
          value={this.state.flavorNotes}
          onChange={this.handleChange}
          placeholder='flavor notes'/>
          <br/>

          <Link to='/teasperiences'>
            <button className='submit-button' disabled={this.state.disabled} onClick={event => this.props.handleSubmit(event, this.state)}>Submit</button>
          </Link>
        </form>
      </div>)
  }
}
