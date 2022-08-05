import React, {Component} from 'react'
import './JournalEntry.css'

export default class JournalEntry extends Component {
  constructor(){
    super()
    this.state = {
      teas: []
    }
  }
  render(){
    return(
      <form>
        <input type='date'/>
        <label>Tea Type: </label>
        <select name='teas' id='tea-select'>
        </select>
        <input type='text' placeholder='The Experience'></input>
        <input type='text' placeholder='flavor notes'></input>
        <button>Upload Picture</button>
        <button>Submit</button>
      </form> )
  }
}
