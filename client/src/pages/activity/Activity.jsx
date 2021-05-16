import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import ActivityPost from './ActivityPost'
import './Activity.css';
import { Link } from 'react-router-dom'

export default function Activity() {
    return (
        <>
        <Topbar/>
        {/* <Sidebar/> */}
        <Link to="/activity/create">
        <button className="btn1">Create an Activity </button>
        </Link>
          <h1 className="ah11"> On Going Activities</h1>
          
          <ActivityPost title="title" description ="description" />

        </>
    )
}
