import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import TeaCard from './components/TeaCard/TeaCard'
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teaCards: []
    }
  }

   componentDidMount() {

    fetch('https://tea-list-api.herokuapp.com/api/v1/teas')
    .then(resource => resource.json())
    .then(data => {
      let cards = data.teas.map((tea) => {
          return <TeaCard name={tea.name} how={tea.how} type={tea.type} notes={tea.notes} />
      })
      this.setState({teaCards: cards})
    })
  }


render(){
  return (
    <div className= 'wrapper'>
      <NavBar />
      <main>
        <h1 className='title'>Welcome To Tea Journal</h1>
        <h2 className= 'title'>Let's Learn About Tea</h2>
        <div className='card-container'>
          {!this.state.teaCards && <h1>..Loading</h1>}
          {this.state.teaCards}
        </div>
      </main>
    </div>
  )

}
}

export default App;
