import React, { Component } from 'react'
import EntryCard from './EntryCard'
import './Teasperiences.css';

export default function Teasperiences({entries}) {

    return(<div className='entry-container'>
    {entries}
    </div>)
}
