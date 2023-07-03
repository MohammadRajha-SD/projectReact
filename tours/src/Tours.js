import React from 'react';
import Tour from './Tour';
const Tours = ({tours, RemoveTours}) => {
  return (
    <section >
      <div className='OurTour'>
        <h1>Ours Tours</h1>
        <div></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} RemoveTours={RemoveTours} />
        })}
      </div>
    </section>
  )
}

export default Tours
