import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';

export default function Vote() {

    const [electionData, setElectionData] = useState({});
    const { id } = useParams()
    useEffect(() => {
        console.log(id)
      const fetchData =  () => {
        axios.get(`/election/vote/${id}`)
             .then( res => {
                 console.log('set')
               setElectionData(res.data);
               console.log('1')
                  console.log('election data',electionData)
                  console.log('election data',electionData.candidates)
             })      
      }
      fetchData()
    }, []);


      const election = () =>{
          if(electionData.candidates){
            return  electionData.candidates.map(data => {
               return(
                   <div>
                    
                       <h2>{data}</h2>
                       <button>Vote</button>
                   </div>
               )
                 })
          }else{
              return null;
          }
       
         }
      

    // console.log('election data',electionData)
    // console.log('election data',electionData.candidates)
    
    // let array =  electionData.candidates.map(data => {
    //        return data
    //     })
    //     console.log(array)

    return (
        <div>
            <h1>Vote</h1>
             <h1>{electionData.title}</h1>
            {election()}
        </div>
    )
}
