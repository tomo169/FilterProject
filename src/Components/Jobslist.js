import React from 'react';
import Job from './Job1';



const Jobslist = ({ jobs, filters, setFilters }) => {
  
  const filterFun= ({ role, level, tools, languages }) => {
    
    if (filters.length === 0) {
      return true;
    }

  const lt=[role, level]
  if(languages) {
    lt.push(...languages);
  }
  if(tools) {
    lt.push(...tools);
  }
  return filters.every(filter => lt.includes(filter));
}
  const clickedFilter = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }
  
  const filterdJobs = jobs.filter(filterFun)

  return (
    <div>
      {
          filterdJobs.map((job) => {
              return (
                  <Job job={job} key={job.id} 
                  clickedFilter={clickedFilter} />  
              );
          })
      }
    </div>
  );
}

export default Jobslist;