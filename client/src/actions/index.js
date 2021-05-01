const axios = require("axios");
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"; 
export const SET_TITLE = "SET_TITLE";


//==============================================================//
export function getMovies(title){
    return function(dispatch){
        axios.get(`http://localhost:3001/movies?title=${title}`)
        .then((result) => {dispatch({type:GET_MOVIES, payload: result.data})})
    }
}
//==============================================================//
export function getMovieDetail(id){
    return function(dispatch){
        axios.get(`http://localhost:3001/movies/${id}`)
        .then((result) => {dispatch({type:GET_MOVIE_DETAIL, payload: result.data})})
    }
}
//==============================================================//
export function setTitle(title){
    return function(dispatch){
        dispatch({type:SET_TITLE, payload: title})
    }
}