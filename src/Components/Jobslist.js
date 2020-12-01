import React from 'react';
import Job from './Job1';
//import Data from '../data.json';

const Jobslist = ({ jobs }) => {
  return (
    <div>
      {
          jobs.map((job, i) => {
              return (
                  <Job
                  key={i}
                  company={jobs[i].company}
                  logo={jobs[i].logo}
                  nnew={jobs[i].nnew}
                  featured={jobs[i].featured}
                  position={jobs[i].position}
                  role={jobs[i].role}
                  level={jobs[i].level}
                  postedAt={jobs[i].postedAt}
                  contract={jobs[i].contract}
                  location={jobs[i].location}
                  languages={jobs[i].languages}
                  tools={jobs[i].tools}
                  />
                  
              );
          })
      }
    </div>
  );
}

export default Jobslist;