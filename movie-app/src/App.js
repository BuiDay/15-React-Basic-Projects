import './App.css';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React, {useEffect, useState} from 'react';
const API_URL= 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5bab6487d88e5976c31c88431f1a4058&page=1'
const SEARCH_API='https://api.themoviedb.org/3/search/movie?api_key=5bab6487d88e5976c31c88431f1a4058&query="';
function App() {
  const [loading, setLoanding] = useState(true);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');

  console.log(value);

 
  const fetchMovie = async (url) =>{
    setLoanding(true);
    try{
    const response = await fetch(url);
    const dataMovie = await response.json();
    setMovies(dataMovie);
    setLoanding(false);
    }catch(err){
      setLoanding(false);
    }
  }

  function handleSearch(){
           
    const searchTerm = value;
    if(searchTerm && searchTerm !=='')
    {
      fetchMovie(SEARCH_API + searchTerm);
        value=''
        console.log(searchTerm)
    }
    else
    {
        window.location.reload()
        
    }
}

  useEffect(()=>{
    fetchMovie(API_URL);
  },[])

  if(loading){
    return(
      <h2>Loading...</h2>
    );
  }

  return (
    <>
    <Navbar setValue={value=>setValue(value)} handleSearch={handleSearch}/>
    <article className='container movie'>
    <MovieCard movies={movies} />
    </article>
    </>
  );
}

export default App;
