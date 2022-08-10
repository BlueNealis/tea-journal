import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './EntryCard.css'

export default function EntryCard ({teaType, date, description, notes}) {
    return(
      <div className='entry-card'>
        <div className='entry-header'>
          <h1 style={{marginRight: '4vw'}}>{teaType}</h1>
          <h2 style={{marginLeft: '6vw'}}>{date}</h2>
          <button style={{marginLeft:'10vw', border:'none'}}>Edit</button>
          <button style={{marginLeft:'1vw', border:'none'}}>X</button>
        </div>
        <article>
          <p>{description}</p>
          <p>{notes}</p>
        </article>
      </div>)
}

EntryCard.propTypes = {
  teaType: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  notes: PropTypes.string
}
