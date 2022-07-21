import React,{useState} from 'react';
const IMG_PATH='https://image.tmdb.org/t/p/w1280'

const MovieCard = ({ movies }) => {
    const [vote, setVote] = useState([]);
    const newMovies = movies.results;
    const check = (number) =>{
        if (number >= 8){
            return 'green'
        }else if (number < 5){
            return 'red'
        }else {
            return 'orange'
        }
    }
    return (
        newMovies.map((movie) => {
            const { poster_path, id, original_title, overview, vote_average } = movie;
           
            return (
                    <div className='movie__container' key={id}>
                        <span className={check(vote_average)}  >{vote_average}</span> 
                        <div className='movie__img'>
                        
                            <img src={IMG_PATH + poster_path} alt=""/>   
                        </div>
                        <div className='info__container'>
                            <h2 className='title'>{original_title}</h2>   
                        </div>
                         <div className='overview'>
                            <h4>OverView</h4>
                            <p>{overview}</p>
                         </div>   
                    </div>
            )
        })
    );
};

export default MovieCard;

