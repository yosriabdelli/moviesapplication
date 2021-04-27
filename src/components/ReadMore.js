import React from 'react';
import { Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Rate from './Rating';
import { Link } from "react-router-dom";
const ReadMore = (props) => {
    const movieFounded = props.movies.find((movie) => movie.id === props.match.params.idmovie);

    return (
        <div>
            <div className="container">
                <Card  key={uuidv4()}>
                    <Card.Img variant="top" src={movieFounded&& movieFounded.image} alt="image film"/>
                    <Card.Body>
                        <Card.Title>Film : {movieFounded&& movieFounded.name}</Card.Title>
                        <Card.Text>Release Date : {movieFounded&& movieFounded.year}</Card.Text>
                        <Rate rating={movieFounded&& movieFounded.rating}/>
                        <Card.Text>{movieFounded&& movieFounded.description}</Card.Text>
                        <Card.Text><Link to={`/`}>Go Back</Link></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default ReadMore;