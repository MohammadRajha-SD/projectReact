import React, { useState } from 'react';
import Data from './Data';
import List from './List';

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <div className="App">
      <p>{people.length} Birthdays Today  </p>
      <List people={people} /><hr style={{opacity:0.5, marginTop: 10}}/>
      <button className='peoplBtn' onClick={() => setPeople([])} >Clear All</button>
    </div>
  );
}

export default App;
