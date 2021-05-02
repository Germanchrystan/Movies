import { GET_MOVIES, GET_MOVIE_DETAIL, SET_TITLE } from "../actions";
//===================================INITIAL STATE========================================//
const initialState = {
    movies:[],
    movieDetail : {},
    page: 0,
    title:"",
}

//====================================REDUCER============================================//
function rootReducer(state = initialState, action){
    //================================GETTERS==================================//
    if(action.type === GET_MOVIES){
        console.log("DEL REDUCER", action.payload)
        return {
            ...state,
            movies: action.payload
        }
    }
    
    if(action.type === GET_MOVIE_DETAIL){
        return {
        ...state,
        movieDetail: action.payload
        }
    }
    //================================SETTERS==================================//
    if(action.type === SET_TITLE){
        return {
            ...state,
            title: action.payload
        }
    }

    //=============================DEFAULT CASE===============================//
    return state;
}

//======================================================================================//

export default rootReducer;