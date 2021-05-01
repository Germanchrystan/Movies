import React, {useEffect } from "react";
import { getMovies } from "../../actions/"
import {connect} from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Spinner from "../Spinner/Spinner";

function Home(props){

    // useEffect(() => {
    //     async function fetchData() {
    //       await props.emptyRecipes();
    //       await props.getRecipes(props.page, props.title, props.diet, props.orderBy, props.orderWay);
          
    //     }
    //     fetchData()
        
    //   }, [props.page, props.title, props.diet]);
    


    return (

        <div>
          <SearchBar />
          <br/>
          <hr />
            <ul>
              {Array.isArray(props.movies)?
                props.movies.map((m)=><li>{m.Title}</li>)
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