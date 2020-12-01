import React from'react';

const Filterbar = () => {

    return (
        <div className='flex flex-wrap ma3 mh4 mb5 pa2 items-center shadow-5 bg-white br3'> 
            <div className='flex ma2 pa2 b mr0 f7'  
                style={{color:'#5BA4A4', backgroundColor: '#EFFAFA'}}>CSS</div>
                <div className='ma2 pa2 b f7 ml0 white br2 br--right pointer hov3' 
                    style={{backgroundColor:'#5BA4A4'}}>✖</div>
            <p className='ml-auto ma2 silver b f7 pointer hov1' style={{}}>Clear</p>
        </div>
    );
}

export default Filterbar;