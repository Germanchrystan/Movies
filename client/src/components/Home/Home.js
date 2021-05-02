import React  from "react";
import { getMovies } from "../../actions";
import Card from "../Card/Card";
import {connect} from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Spinner from "../Spinner/Spinner";

function Home(props){
    return (

        <div>
          <SearchBar />
          <br/>
          <hr />
            <ul className="ResultList">
              {Array.isArray(props.movies.Search)?
                props.movies.Search.map((m)=><li key={m.imdbID}>
                  <Card id={m.imdbID} title={m.Title} poster={m.Poster} year={m.Year}/>
                  </li>)
                :<Spinner />
              }
            </ul>
        </div>
    )
}

function mapStateToProps(state){
  return {
   ...state
  }
}


function mapDispatchToProps(dispatch) {
  return {
    getMovies: (title) => dispatch(getMovies(title)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)