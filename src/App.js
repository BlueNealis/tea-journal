import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import TeaCard from './components/TeaCard/TeaCard'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage'
import Teasperiences from './components/Teasperiences/Teasperiences'
import JournalEntry from './components/Teasperiences/JournalEntry'
import EntryCard from './components/Teasperiences/EntryCard'
import {Link, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teaCards: [],
      teaData: [],
      entries: []
    }
  }

  componentDidMount() {

    fetch('https://tea-list-api.herokuapp.com/api/v1/teas')
    .then(resource => resource.json())
    .then(data => {
      let cards = data.teas.map((tea) => {
          return <TeaCard name={tea.name} how={tea.how} type={tea.type} notes={tea.notes} />
      })
      this.setState({teaCards: cards, teaData: data.teas})
    })
  }

  handleSubmit = (event, info) => {
    this.setState({entries: [...this.state.entries, <EntryCard
      teaType={info.teaType}
      date={info.date}
      description={info.experience}
      notes={info.flavorNotes}/>]})
  }


render(){
  return (
    <div className= 'wrapper'>
      <NavBar />
      <main>
      <Route exact path='/new-entry'>
        <JournalEntry handleSubmit={this.handleSubmit} teas={this.state.teaData}/>
      </Route>
      <Route exact path='/teasperiences'>
        <Teasperiences entries={this.state.entries}/>
      </Route>
      <Route exact path = '/'>
        <HomePage
        title='Welcome To Tea Journal'
        sub='Lets Learn About Tea'
        content={this.state.teaCards}
        />
      </Route>
      </main>
    </div>
  )
}
}

export default App;
