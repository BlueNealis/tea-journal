import React, { useState, useEffect} from 'react'
import './TeaCards.css'

function TeaCard({name, notes, how, type}) {
  return(
    <div className='tea-card'>
      <h1>{name}</h1>
      <p>This tea is described as {notes[0]}, and {notes[1]}</p>
      <p>Prepartion: {how} </p>
      <button className='entry-button'>New Entry</button> 
    </div>
  )
}

export default TeaCard
