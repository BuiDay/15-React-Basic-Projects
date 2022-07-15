import React, {useState,useEffect} from 'react'
import './App.css';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [rsTour, setRsTour] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async ()=>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      setRsTour(tours);
    }
    catch(error){
      setLoading(false);
    }
  }

  const resetTour = ()=>{setTours(rsTour)};

  useEffect(()=>{
    fetchTours();
  },[]);

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return(
    <main>
      <Tours tours={tours} removeTour={removeTour} resetTour={resetTour}/>
    </main>
  );
}

export default App;
