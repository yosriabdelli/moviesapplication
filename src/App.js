import { useState } from "react";
import AddModal from './components/AddModal.js';
import ListMovies from './components/ListMovies.js';
import SearchMovie from './components/Search.js';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import PropTypes from 'prop-types';



function App({movies,add}) {
  

  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);


 

  const filtered=movies.filter(el => el.name.toLowerCase().includes(nameSearch)&&
  el.rating >= ratingSearch);

    return (
      <div className="App">
        <div className="container">

          <header className="App-header">
            <h1>Movies App</h1>
            <div className="grope">
            <SearchMovie
              setNameSearch={setNameSearch}
              ratingSearch={ratingSearch}
              setRatingSearch={setRatingSearch}
            />
              <div className="space">
                <AddModal addMovie={add}/>
              </div>

            </div>
          </header>

          <div className="movie">
          <ListMovies movies ={filtered} />
          
          
          </div>
        </div>
      </div>
    );
}

//PropTypes
App.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number,
  year: PropTypes.number.isRequired,
};


export default App;