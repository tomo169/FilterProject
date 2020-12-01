import React from 'react';

const Job1 = ({ company, logo, nnew, featured, position, role, level, postedAt, contract, location, languages, tools }) => {

  const lt=[role, level]
  if(languages) {
    lt.push(...languages);
  }
  if(tools) {
    lt.push(...tools);
  }
  
  return (
    <div className={`flex flex-column ma3 mh4 mb5 shadow-5 f7 
                   bg-white pa2 pl3 br3 mb1-ns flex-wrap-m flex-row-ns  
                   ${featured && 'bl bw3'}`}>

      <div className='flex-ns items-center-ns'>
        <img className='w3 h3 nt4 mt0-ns ' alt='' src={logo}/>
      </div>

      <div className='flex flex-column ml2 '>
        <h3 className='mv3 ml3-ns' style={{color:'#5BA4A4'}}>
          {company}

          {nnew && <span
          className=' f7 br-pill pa1 ml2 tc' style={{color:'white', backgroundColor: '#5BA4A4'}}
          >NEW!</span>} 

          {featured && <span
          className='f7 br-pill pa1 ml2' style={{color:'white', backgroundColor: '#2C3A3A'}}
          >FEATURED</span>} </h3>

        <p className='mb3 b f5 ml3-ns pointer hov2'>{position}</p>
        <p className='mb3 silver ml3-ns'>{postedAt} • {contract} • {location}</p>
      </div>

      <div className='flex flex-wrap items-center-ns mt2 pt2 bt b--silver ml-auto-ns b--none-ns'>
        {lt ? lt.map((i) => (
          <span
            key={i}
            className='ma2 pa2 b br3 pointer hov4'
            style={{color:'#5BA4A4', backgroundColor: '#EFFAFA'}}>
              {i}
          </span>)) :''}
      </div>

    </div>
  );
}
export default Job1;
