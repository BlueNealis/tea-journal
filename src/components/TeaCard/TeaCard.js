import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import './TeaCards.css'

function TeaCard({id, name, notes, how, type, handleChange}) {
const [toggleClass, setToggleClass] = useState(false)

  return(
    <div className='tea-card'>
      <h1>{name}</h1>
      <p>This tea is described as {notes[0]}, and {notes[1]}</p>
      <p>Prepartion: {how} </p>
      <div className='card-actions'>
        <button onClick={(event) => {
          handleChange(event, id, !toggleClass)
          setToggleClass(!toggleClass)
        }} className={`favorite-button ${toggleClass ? 'favorite-button-active':''}`}></button>
        <Link to='/new-entry'>
        <button className='entry-button'>New Entry</button>
        </Link>
      </div>
    </div>
  )
}

export default TeaCard

TeaCard.propTypes = {
  name: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.string),
  how: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.number
}
