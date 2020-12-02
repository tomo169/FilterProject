import React from'react';

const Filterbar = ({ filters, setFilters }) => {

    const handleFilterClick = (passedfil) => {
        setFilters(filters.filter((f) => f !== passedfil));
    }

    const clear = () => {
        setFilters([]);
    }

    return (
       <div>
           {filters.length > 0 && (
        <div className='flex flex-wrap relative nt6 ma3 mh4 mb5 pa2 items-center shadow-5 bg-white br3  mh6-l'>
            {filters.map((filter) => (
            <div className='flex ma2 pa2 b mr0 f7' key={filter}>
                    <div className='flex ma2 pa2 b mr0 f7'
                         style={{color:'#5BA4A4', backgroundColor: '#EFFAFA'}}>
                        {filter}
                    </div>
                <p
                onClick={() => handleFilterClick(filter)} 
                style={{backgroundColor:'#5BA4A4'}}
                className='ma2 pa2 b f7 ml0 white br2 br--right pointer hov3'>✖</p></div>
            ))}
         <p className='ml-auto ma2 silver b f7 pointer hov1' onClick={clear}>Clear</p>
        </div>
        )}
        </div> 
    );
}

export default Filterbar;