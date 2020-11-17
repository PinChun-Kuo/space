import React, { useState } from 'react';
import Computer from './computer';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openComputer = () => setIsOpen(true);

  return (
    <div>
      <button
        className='btn btn-primary'
        onClick={openComputer}
      >
        Turn on the Computer
      </button>
      {
        isOpen && <Computer />
      }
    </div>
  )
};

export default App;