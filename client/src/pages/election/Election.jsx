import { Link } from 'react-router-dom'
import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import ElectionPost from './ElectionPost'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Election() {
    return (
        <>
        <Topbar/>
        {/* <Sidebar/> */}
        <Link to="/election/create">
        <button>Create an Election </button>
        </Link>
          <h1> On Going Election</h1>
          
          <ElectionPost title="title" description ="description" />

        </>
    )
}
