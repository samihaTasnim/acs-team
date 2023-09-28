import React, { useState } from 'react';

const Teachers = () => {

  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);

  function handleClickTab1() {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
  }

  function handleClickTab2() {
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setTab4(false);
  }

  function handleClickTab3() {
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setTab4(false);
  }

  function handleClickTab4() {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(true);
  }


  return (
    <div>
      <br />
      <p className='text-3xl'>new about</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-16">
        <div>
          <button onClick={handleClickTab1} className='p-4 bg-blue-400 block'>Directors</button>
          <br />
          <button onClick={handleClickTab2} className='p-4 bg-blue-400 block'>Tab 2</button>
          <br />
          <button onClick={handleClickTab3} className='p-4 bg-blue-400 block'>Tab 3</button>
          <br />
          <button onClick={handleClickTab4} className='p-4 bg-blue-400 block'>Tab 4</button>
        </div>

        <div className='row-span-2'>
          {tab1 && 
            <div>
              <img src={require('../images/avi-dada.jpg')} alt="dummy" border="0" className='h-40 w-40'></img>
            <img img src={require('../images/apar-vaiya.jpg')} alt="dummy" border="0" className='h-40 w-40'></img>
            </div>
            
          }
          {tab2 && 
            <div>
              <img src="https://i.ibb.co/Mn8nBnd/dummy-image.jpg" alt="dummy" border="0" className='h-40 w-40'></img>
            <img img src="https://i.ibb.co/Mn8nBnd/dummy-image.jpg" alt="dummy" border="0" className='h-40 w-40'></img>
            </div>
            
          }
          {tab3 && 
            <div>
              <img src="https://i.ibb.co/Mn8nBnd/dummy-image.jpg" alt="dummy" border="0" className='h-40 w-40'></img>
            <img img src="https://i.ibb.co/Mn8nBnd/dummy-image.jpg" alt="dummy" border="0" className='h-40 w-40'></img>
            </div>
            
          }
          {tab4 && 
            <div>
              <img src="https://i.ibb.co/Mn8nBnd/dummy-image.jpg" alt="dummy" border="0" className='h-40 w-40'></img>
            <img img src="https://i.ibb.co/Mn8nBnd/dummy-image.jpg" alt="dummy" border="0" className='h-40 w-40'></img>
            </div>
            
          }
        </div>
      </div>
    </div>
  );
};

export default Teachers;