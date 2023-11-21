import React, { useState } from 'react';
import PuppyList from './components/PuppyList';
import PuppyDetails from './components/PuppyDetails';
import './App.css';


const App = () => {
  const [page, setPage] = useState('list');
  const [selectedPuppy, setSelectedPuppy] = useState(null);

  const handlePuppyClick = (singlePuppy) => {
    setSelectedPuppy(singlePuppy);
    setPage('details');
  };

  const goToList = () => {
    setPage('list');
  };

  return (
    <div id="page">
      {page === 'list' && (
        <>
          <h1>Puppy Players</h1>
          <PuppyList handlePuppyClick={handlePuppyClick} />
        </>
      )}

      {page === 'details' && (
        <>
          <h1>Player</h1>
          <PuppyDetails selectedPuppy={selectedPuppy} goToList={goToList} />
        </>
      )}
    </div>
  );
};

export default App;