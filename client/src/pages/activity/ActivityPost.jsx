import React from 'react'

export default function ActivityPost(props) {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
             <button>result</button>
             <button>vote</button>
        </div>
    )
}
