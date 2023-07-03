import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project';


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const RemoveTours = (id) => {
    const NewTours = tours.filter((tour) => tour.id !== id);
    setTours(NewTours);
  }
  const fetchTours = async () => {
    setLoading(true);
    try {
      const respone = await fetch(url);
      const tours = await respone.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTours();
  },[])
  if (loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return(
      <div className='NoTours'>
        <h2>No Tour Left!!.</h2>
        <button className='refresh' onClick={fetchTours}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} RemoveTours={RemoveTours} />
    </div>
  );
}

export default App;
