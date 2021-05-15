import React from 'react'
import './Activity.css';
export default function ActivityPost(props) {
    return (
        <div className="card1">
            <p className="card-title1">{props.title}</p>
            <hr></hr>
            <p className="card-desc1">{props.description}</p>
             {/* <button className="card-btn3">result</button>
             <button className="card-btn4">vote</button> */}
        </div>
    )
}
