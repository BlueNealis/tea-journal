import React, {Component} from 'react'
import './JournalEntry.css'

export default class JournalEntry extends Component {
  constructor(){
    super()
    this.state = {
      teaNames: null,
    }
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
      <form>
        <input type='date'/>
        <label>Tea Type: </label>
        <select name='teas' id='tea-select'>
          <option>Pick a Tea</option>
          {this.state.teaNames}
        </select>
        <input type='text' placeholder='The Experience'></input>
        <input type='text' placeholder='flavor notes'></input>
        <button>Upload Picture</button>
        <button>Submit</button>
      </form> )
  }
}
