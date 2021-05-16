import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';

export default function Vote() {

    const [electionData, setElectionData] = useState({});
    const { id } = useParams()
  
    useEffect(() => {
        console.log(id)
      const fetchData = async () => {
        const res = await axios.get(`/election/vote/${id}`);
        setElectionData(res.data);
        console.log(electionData)
      };
      fetchData();

    }, [id]);

    return (
        <div>
            {/* {electionData.candidates.maps(data => {
                return <p>data</p>
            })} */}
            <h1>Vote</h1>
        </div>
    )
}
