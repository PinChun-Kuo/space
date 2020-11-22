import React, { useState } from 'react';
import Computer from './computer';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenComputer = () => setIsOpen(true);
  const handleCloseComputer = () => setIsOpen(false);

  return (
    <div>
      <button className='btn btn-primary' onClick={handleOpenComputer}>
        Turn on the Computer
      </button>
      {
        isOpen && <Computer handleCloseComputer={handleCloseComputer}/>
      }
    </div>
  )
};

export default App;