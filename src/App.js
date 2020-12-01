import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Jobslist from './Components/Jobslist';
import Filterbar from './Components/Filterbar';
import './App1.css';

function App() {

const [jobs, setJobs] = useState([]);

useEffect(() => {
  axios
  .get("./data.json")
  .then((res) => setJobs(res.data))
  .catch(err=>console.log(err))
},[]);

  return  (
    <div className="w-100" style={{backgroundColor: '#EFFAFA'}}> 
      <header className='mb5' style={{backgroundColor: '#5BA4A4'}}>
        <img className='w-100' src='./images/bg-header-desktop.svg' alt='' />
      </header> 
      <Filterbar /> 
      <Jobslist jobs={jobs} />
    </div>
  );
}

export default App;