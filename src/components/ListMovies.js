import React from 'react';
import MovieCard from './MovieCard.js';

const ListMovies = ({movies, nameSearch, ratingSearch}) => {
    return(
        <div className="listMovies">
            {movies.map(el =><MovieCard key={el.id} movies={el} />)}
        </div>
    )
}
export default ListMovies;