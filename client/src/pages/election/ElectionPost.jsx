import React from 'react'

export default function ElectionPost(props) {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
             <button>result</button>
             <button>vote</button>
        </div>
    )
}
