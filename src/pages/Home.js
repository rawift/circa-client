import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import axios from 'axios'
import WorkerDetails from '../components/WorkerDetails'
import ProfileCard from './ProfileCard'

const Home = () => {
  const [workers, setWorkers] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:5000/worker/allworker');
        console.log(response.data); // Handle response data as needed
        setWorkers(response.data.users)
        console.log("worker",workers)
      } catch (error) {
        console.error('Error:', error);
      }
    })();
  },[])
  return (
<div class="container px-4 py-5" id="featured-3">
<Navbar />
       {/* <h1 class="pb-2 border-bottom"></h1>*/}
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {workers.map((worker) => (
               <WorkerDetails worker={worker} />
          ))}
        </div>
      </div>
  )
}

export default Home