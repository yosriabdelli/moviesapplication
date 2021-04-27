import React from 'react';
import { Card } from 'react-bootstrap';
import Rate from './Rating';

import { Link } from "react-router-dom";

const MovieCard = ({movies}) => {
  return (
    <Card  >
      {" "}
        <Card.Img variant="top" src={movies.image} />
        <Card.Body>
            <Card.Title>Film : {movies.name}</Card.Title>
            <Card.Text>Release Date : {movies.year}</Card.Text>
            <Rate rating={movies.rating}/>
            <Card.Text><Link to={`/ReadMore/${movies.id}`}>Read More</Link></Card.Text>
        </Card.Body>
    </Card>
  );
};
export default MovieCard;





