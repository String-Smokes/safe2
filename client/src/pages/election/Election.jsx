import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import ElectionPost from './ElectionPost'
// import Sidebar from '../../components/sidebar/Sidebar'

import axios from 'axios'


export default function Election() {
  const [posts, setPosts] = useState({})
  useEffect(() => {
    const fetchElection = () => {
      axios.get('/election')
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
          <ElectionPost key={post._id} title={post.title} description ={post.desc} id={post._id} candidates={post.candidates} />
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

        <Link to="/election/create">
        <button className="btn">Create an Election </button>
        </Link>

          <h1 className="ah1" > On Going Election</h1>

        
          
           {/* {posts.posts.map(post => {
            return (
              <ElectionPost title={post.title} description ={post.desc} candidates={post.candidates} />
            )
          })} :  */}

          {render()}
        
          

        </>
    )
}
