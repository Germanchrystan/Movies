import React from 'react';
//import "./Card.css";
import {Link} from "react-router-dom";

function Card(props){
    const {id, title, poster, year} = props;

    return (
        <div className="Card">
            <div>
                <img src = {poster} alt="Poster" />
            </div>
            <h2>
                <Link to={`/movies/${id}`}>
                    {title} ({year}) 
                </Link>
            </h2>
        </div>
    )
}

export default Card;