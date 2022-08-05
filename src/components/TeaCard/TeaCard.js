import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './TeaCards.css'

function TeaCard({name, notes, how, type}) {
  return(
    <div className='tea-card'>
      <h1>{name}</h1>
      <p>This tea is described as {notes[0]}, and {notes[1]}</p>
      <p>Prepartion: {how} </p>
      <Link to='/new-entry'>
        <button className='entry-button'>New Entry</button>
      </Link>
      <button> Favorite </button>
    </div>
  )
}

export default TeaCard
