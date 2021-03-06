import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Jobslist from './Components/Jobslist';
import Filterbar from './Components/Filterbar';
import Scroll from './Components/Scroll';
import './App1.css';

function App() {

const [jobs, setJobs] = useState([]);
const [filters, setFilters] = useState([]);

useEffect(() => {
  axios
  .get("./data.json")
  .then((res) => setJobs(res.data))
  .catch(err=>console.log(err))
},[]);

  return  (
    <div className="w-100"> 
      <header className='mb5 ' style={{backgroundColor: '#5BA4A4'}}>
        <img className='w-100 h4 bgm' src='./images/bg-header-mobile.svg' alt='' />
        <img className='w-100 h4 bgd' src='./images/bg-header-desktop.svg' alt='' />
      </header> 
      <Filterbar filters={filters} setFilters={setFilters} />
      <Scroll>
      <Jobslist jobs={jobs} filters={filters} setFilters={setFilters} />
      </Scroll>
 
    </div>
  );
}

export default App;