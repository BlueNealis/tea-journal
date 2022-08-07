import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './TeaCards.css'

function TeaCard({name, notes, how, type}) {
  return(
    <div className='tea-card'>
      <h1>{name}</h1>
      <p>This tea is described as {notes[0]}, and {notes[1]}</p>
      <p>Prepartion: {how} </p>
      <div className='card-actions'>
        <button className='favorite-button'></button>
        <Link to='/new-entry'>
        <button className='entry-button'>New Entry</button>
        </Link>
      </div>
    </div>
  )
}

export default TeaCard
