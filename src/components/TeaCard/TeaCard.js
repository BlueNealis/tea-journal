import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import './TeaCards.css'

function TeaCard({id, name, notes, how, type, img, handleChange, initialClass}) {
const [toggleClass, setToggleClass] = useState(initialClass)

  return(
    <div className='tea-card'>
    <button onClick={(event) => {
      handleChange(event, id, !toggleClass)
      setToggleClass(!toggleClass)
    }} className={`favorite-button ${toggleClass ? 'favorite-button-active':''}`}></button>
      <h1 className='tea-card-title'>{name}</h1>
      <img className='tea-img' src={img}/>
      <div className='tea-description'>
        <p style={{margin:0}}>Flavor Notes:{'\n'}
        {notes[0]}, and {notes[1]}
        {'\n'}
        Preparation: {how}</p>
      </div>
        <Link to='/new-entry'>
        <button className='entry-button'>New Entry</button>
        </Link>
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
