import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import './Election.css';

export default function CreateElection() {
    return (
        <>
        <Topbar/>
        <h1 className="bh1">Create An Election</h1>
        <hr className="h2"/>
        <div className="loginRight">
          <form className="loginBox" >
            <input
              placeholder="Title"
              required
            //   ref={username}
              className="loginInput"
            />
            <textarea
              placeholder="Description"
              required
              rows="4"
            //   ref={email}
              className="loginInput"
              type="text"
            />
          <div className="candidate">
          <input
              placeholder="Candidate"
              required
            //   ref={passwordAgain}
              className="loginInput"
              type="text"
            />
            <button className="add"> ADD</button>
          </div>
          
           
            <button className="loginRegisterButton">POST</button>
          </form>
        </div>

        </>
    )
}
