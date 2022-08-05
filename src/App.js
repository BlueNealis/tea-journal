import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import TeaCard from './components/TeaCard/TeaCard'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage'
import Teasperiences from './components/Teasperiences/Teasperiences'
import JournalEntry from './components/Teasperiences/JournalEntry'
import {Link, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teaCards: [],
      teaData: []
    }
  }

   componentDidMount() {

    fetch('https://tea-list-api.herokuapp.com/api/v1/teas')
    .then(resource => resource.json())
    .then(data => {
      let cards = data.teas.map((tea) => {
          return <TeaCard name={tea.name} how={tea.how} type={tea.type} notes={tea.notes} />
      })
      this.setState({teaCards: cards,
                      teaData: data})

    })
  }


render(){
  return (
    <div className= 'wrapper'>
      <NavBar />
      <main>
        <JournalEntry teas={this.teaData}/>
        <Teasperiences />
        <HomePage
        title='Welcome To Tea Journal'
        sub='Lets Learn About Tea'
        content={this.state.teaCards}
        />
      </main>
    </div>
  )
}
}

export default App;
