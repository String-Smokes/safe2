import React from 'react'

export default function ElectionPost(props) {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
            {props.candidates.map(candidate => {
                return (
                    <p>{candidate}</p>
                )
            })}
             <button>result</button>
             <button>vote</button>
        </div>
    )
}
