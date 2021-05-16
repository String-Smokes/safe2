import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import './Activity.css';

export default function CreateActivity() {
    return (
        <>
        <Topbar/>
        <h1 class="bh2">Create An Activity</h1>
        <hr className="h3"/>
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
            <button className="add1"> ADD</button>
          </div>
          
           
            <button className="loginRegisterButton">POST</button>
          </form>
        </div>

        </>
    )
}
