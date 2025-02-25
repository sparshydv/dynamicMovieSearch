import React from 'react'

const MovieCard = ({ movie: {title, vote_average, poster_path, release_date, original_language } }) => {


  return (
    <>
    <div className='movie-card ' style={{backgroundColor: '#1B263B'}}>
    <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "/no-movie.png"} alt={title}/>

    <div className='mt-4'>
      <h3>{title}</h3>
    </div>

    <div className='content'>
      <div className='rating'>
        <img src="star.svg" alt="rating"/>
        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
      </div>

      <span>•</span>
      <p className='lang'>{original_language}</p>

      <span>•</span>
      <p className='year'>
        {release_date ? release_date.substring(0, 4) : 'N/A'}
      </p>
    </div>
    
    </div>

    </>
  )
}

export default MovieCard