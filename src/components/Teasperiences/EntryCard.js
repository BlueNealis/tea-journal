import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './EntryCard.css'

export default function EntryCard ({teaType, date, description, notes}) {
    return(
      <div className='entry-card'>
        <h1>{teaType}</h1>
        <h2>{date}</h2>
        <article>
          <p>{description}</p>
        </article>
        <p>{notes}</p>
      </div>)
}

EntryCard.propTypes = {
  teaType: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  notes: PropTypes.string
}
