import React from 'react';
import Rate from './Rating.js';


const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="name movie"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;