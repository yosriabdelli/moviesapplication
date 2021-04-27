import React,{useState} from 'react'
import { Route } from "react-router-dom";
import App from '../App';
import ReadMore from './ReadMore.js';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
    const [movies, setmovies] = useState([
        {
          id : uuidv4(),
          name :'Matrix 2',
          image : 'images/matrix.jpg',
          rating : 1,
          year : '2003',
          description : 'Nunc egestas quis sapien non laoreet. Phasellus scelerisque aliquam odio, a lacinia justo iaculis id. Aliquam malesuada lorem dui, sed scelerisque risus volutpat viverra. Donec quis dignissim orci. Morbi non fermentum ante. Mauris suscipit finibus turpis eget malesuada. Curabitur eu malesuada nisi. Etiam facilisis magna eu sagittis semper.'
        },
        {
          id : uuidv4(),
          name :'Harry potter',
          image : 'images/harry-potter.jpg',
          rating : 3,
          year : '2013',
          description : 'Nunc egestas quis sapien non laoreet. Phasellus scelerisque aliquam odio, a lacinia justo iaculis id. Aliquam malesuada lorem dui, sed scelerisque risus volutpat viverra. Donec quis dignissim orci. Morbi non fermentum ante. Mauris suscipit finibus turpis eget malesuada. Curabitur eu malesuada nisi. Etiam facilisis magna eu sagittis semper.'
        },
        {
          id : uuidv4(),
          name :' Undisputed',
          image : 'images/undisputed.jpg',
          rating : 5,
          year : '2010',
          description : 'Nunc egestas quis sapien non laoreet. Phasellus scelerisque aliquam odio, a lacinia justo iaculis id. Aliquam malesuada lorem dui, sed scelerisque risus volutpat viverra. Donec quis dignissim orci. Morbi non fermentum ante. Mauris suscipit finibus turpis eget malesuada. Curabitur eu malesuada nisi. Etiam facilisis magna eu sagittis semper.'
        },
        {
          id : uuidv4(),
          name :'Blade 2',
          image : 'images/blade.jpg',
          rating : 4,
          year : '2002',
          description : 'Nunc egestas quis sapien non laoreet. Phasellus scelerisque aliquam odio, a lacinia justo iaculis id. Aliquam malesuada lorem dui, sed scelerisque risus volutpat viverra. Donec quis dignissim orci. Morbi non fermentum ante. Mauris suscipit finibus turpis eget malesuada. Curabitur eu malesuada nisi. Etiam facilisis magna eu sagittis semper.'
        },
    ]);
    const add = (x) => {
        setmovies([...movies, x]);
    };
    return (
        <div>
            <Route exact
                path="/"
                render={()=> <App movies={movies} add={add}/> }
            />
            <Route
            path="/ReadMore/:idmovie"
            render={(props) => <ReadMore movies ={movies} {...props} />}
          />
        </div>
    )
}

export default Main
