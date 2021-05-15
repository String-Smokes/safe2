import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Topbar from '../../components/topbar/Topbar'
import './Election.css';

export default function CreateElection() {
  const[electionPost, setElectionPost] = useState({
    title : '',
    desc: '',
    candidates : [],
  })
  const history = useHistory()

  const [name, setName] = useState('')

  
  const onChange = (e)=>{
    setElectionPost(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value
    }));
} 

const onChangeCandidate = (e) => {
  console.log('1',name)
    setName(e.target.value)
    console.log('2',name)
    
}

  const Add = (e) => {
    console.log('name',name)
       e.preventDefault()
    setElectionPost(prevState => ({
      ...prevState, candidates : [...prevState.candidates,name]

    }))
    setName('')
    console.log(electionPost)
  } 



  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      title : electionPost.title,
      desc: electionPost.desc,
      candidate: electionPost.candidate,

    }
    console.log('works')
    axios.post('/election/create',data)
         .then(res => {
           console.log('res',res);
           history.push('/election')
         })
         .catch(err => {
            console.log(err.data)
         })

  }

    return (
        <>
        <Topbar/>
        <h1 className="bh1">Create An Election</h1>
        <hr className="h2"/>
        <div className="loginRight">
          <form  onSubmit={onSubmit} className="loginBox" >
            <input
              onChange={onChange}
              placeholder="Title"
              required
              id="title"
            //   ref={username}
              className="loginInput"
            />
            <textarea
              placeholder="Description"
              required
              id="desc"
              rows="4"
              onChange={onChange}
            //   ref={email}
              className="loginInput"
              type="text"
            />
          <div className="candidate">
          <input
              placeholder="Candidate"
              required
              id="candidate"
              value ={name}
              onChange={onChangeCandidate}
            //   ref={passwordAgain}
              className="loginInput"
              type="text"
            />
            <button className="add" onClick={Add}> ADD</button>
          </div>
          
           
            <button  type="submit" onSubmit={onSubmit} className="loginRegisterButton">POST</button>
          </form>
        </div>

        </>
    )
}
