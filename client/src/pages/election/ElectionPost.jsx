import React from 'react'
import { Link } from 'react-router-dom'
import './Election.css'

export default function ElectionPost(props) {
    return (
        <div className="card">
            <p className="card-title">{props.title}</p>
            <hr/>
            <p className="card-desc">{props.description}</p>
             <button className="card-btn1">result</button>
            <Link to={`/election/vote/${props.id}`} ><button className="card-btn2">vote</button></Link> 
        </div>
    )
}
