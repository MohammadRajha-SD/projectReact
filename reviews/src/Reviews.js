import React , {useState} from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './Data';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const SurpriseMe = () => {
    const random = Math.floor(Math.random() * people.length);
    setIndex(random);
  }
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0){
      return people.length - 1;
    }
    return number;
  }
  const prevBtn = (index) => {
    index = index - 1;
    setIndex(checkNumber(index));
  }
  const nextBtn = (index) => {
    index = index + 1;
    setIndex(checkNumber(index));
  }
  return (
    <article className='review'>

      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button className='prev-btn' onClick={() => prevBtn(index)}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => nextBtn(index)}>
          <FaChevronRight />
        </button>
      </div>

      <button className='random-btn' onClick={() => SurpriseMe()}>
          Suprise Me!..
      </button>
    </article> 
  )
}

export default Reviews
