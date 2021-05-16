import React, { useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import ActivityPost from './ActivityPost'
import './Activity.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Activity() {

  const [posts, setPosts] = useState({})
  useEffect(() => {
    const fetchElection = () => {
      axios.get('/activity')
           .then(res => {
            setPosts(res.data)
           })
    }
    fetchElection()
  },[])


  const render =  () => {
    if(posts.post){
      return  posts.posts.map(post => {
        return (
          <ActivityPost key={post._id} title={post.title} description ={post.desc} id={post._id} candidates={post.candidates} />
        )
      }) 
    }else{
     return <h1 className="ah1">{posts.text}</h1>
    }
  }


    return (
        <>
        <Topbar/>
        {/* <Sidebar/> */}
        <Link to="/activity/create">
        <button className="btn1">Create an Activity </button>
        </Link>
          <h1 className="ah11"> On Going Activities</h1>
          
         {render()}

        </>
    )
}
