import React from 'react'
import Topbar from '../../components/topbar/Topbar'

export default function CreateActivity() {
    return (
        <>
        <Topbar/>
        <h1>Create An Activity</h1>

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
            <button> ADD</button>
          </div>
          
           
            <button className="loginRegisterButton">POST</button>
          </form>
        </div>

        </>
    )
}