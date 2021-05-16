import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Topbar from '../../components/topbar/Topbar'
import './Activity.css';

export default function CreateActivity() {

  const[activityPost, setActivityPost] = useState({
    title : '',
    desc: ''
  })
  const history = useHistory()

  const onChange = (e)=>{
    setActivityPost(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value
    }));
} 

    
  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      title : activityPost.title,
      desc: activityPost.desc
    }
    console.log(data)
    console.log('works')
    axios.post('/activity/create',data)
         .then(res => {
           console.log('res',res);
           history.push('/activity')
         })
         .catch(err => {
            console.log(err.data)
         })

  }



  return (
    <>
    <Topbar/>
    <h1 class="bh2">Create An Activity</h1>
    <hr className="h3"/>
    <div className="loginRight">
      <form onSubmit={onSubmit} className="loginBox" >
        <input
          placeholder="Title"
          required
          id="title"
          onChange={onChange}
        //   ref={username}
          className="loginInput"
        />
        <textarea
          placeholder="Description"
          required
          rows="4"
          id="desc"
          onChange={onChange}
        //   ref={email}
          className="loginInput"
          type="text"
        />
        <button className="loginRegisterButton">POST</button>
      </form>
    </div>

    </>
)
    }
  
  