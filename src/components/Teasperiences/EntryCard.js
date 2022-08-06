import React, {Component} from 'react'
import './EntryCard.css'

export default EntryCard = ({teaType, date, description, notes}) => {
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
