import React from 'react'

const List = ({people}) => {
  return (
    <main className='BoxData'>
      {people.map(person => {
        const {id, name, age, image} = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div className='NameAge'>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </main>
  )
}

export default List;
