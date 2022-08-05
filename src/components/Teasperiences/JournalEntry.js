import React, {Component} from 'react'
import './JournalEntry.css'

export default class JournalEntry extends Component {
  constructor(){
    super()
    this.state = {
      teaNames: [],
    }
  }
  setTeas = (teas) => {
    this.setState({teaNames: teas})
  }

    async getTeas() {
      const names = await this.props.teas.map((tea) => {
        console.log('hi', tea)
          return `<option id=${tea.id} value=${tea.name}>${tea.name}</option>`
        })
        if(!names) {
          this.setTeas(names)
        }
      }



  render(){
    return(
      <form>
        <input type='date'/>
        <label>Tea Type: </label>
        <select name='teas' id='tea-select'>
          {this.state.teaNames}
        </select>
        <input type='text' placeholder='The Experience'></input>
        <input type='text' placeholder='flavor notes'></input>
        <button>Upload Picture</button>
        <button>Submit</button>
      </form> )
  }
}
