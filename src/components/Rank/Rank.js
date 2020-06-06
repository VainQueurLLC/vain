import React from 'react';

const Rank = ({ name, entries,showSearch }) => {
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current points are...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
      <div className='form center pa4 br3 shadow-5'>
        <button
            className='w-30 grow f3 link ph3 pv2 dib white bg-near-black'
            onClick={()=>showSearch()}
          >Transfer Points</button>
      </div>
    </div>
  );
}

export default Rank;