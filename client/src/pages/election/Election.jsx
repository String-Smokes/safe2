import { Link } from 'react-router-dom'
import React from 'react'
import Topbar from '../../components/topbar/Topbar'

export default function Election() {
    return (
        <>
        <Topbar/>
        <Link to="/election/create">
        <button>Create an Election </button>
        </Link>
          <h1>Election</h1>
          <h1>On Going Election</h1>

        </>
    )
}
