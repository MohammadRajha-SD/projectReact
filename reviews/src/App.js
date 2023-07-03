import React from 'react';
import Reviews from './Reviews';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h1>Our Reviews</h1>
          <div className='underline'></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

export default App;
