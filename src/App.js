import React, { useState } from 'react';
import People from './components/People'
import Planets from './components/Planets'
import Navbar from './components/Navbar'
const App = () => {
  const [page, setPage] = useState('planets')
  return (
    <div className="App">
      <h1>Stars wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
