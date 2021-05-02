import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getMovieDetail } from '../../actions/index';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Spinner from "../Spinner/Spinner"

// import "./MovieDetail.css"

function MovieDetail(props){
     const {id} = useParams();
    

    useEffect(() => {
        async function fetchData() {
          //await props.emptyMovieDetail();
          await props.getMovieDetail(id);


        }
        fetchData();
        console.log(props.movieDetail)

      }, [id]);


      

    return (
        <div>{props.movieDetail && console.log(props.movieDetail)}

        {   
            (props.movieDetail ) ?
            
           <div className="movieDetail-Container">
            {/* <Link to="/home"> <FontAwesomeIcon icon={faChevronLeft}/></Link> */}
                <div className="movieDetail">
                    <div className="movieDetail__Header">
                        <h1>{props.movieDetail.Title}</h1>
                    </div>
                    <hr/>
                    <div className="movieDetail__Image">
                        <img src={props.movieDetail.Poster} alt="Poster" />
                    </div>

                    <hr/>

                    <div className="movieDetail__Epigraph">
                        <div>Country: {props.movieDetail.Country}</div> <div>Released: {props.movieDetail.Released}</div> <div>Rated: {props.movieDetail.Rated}</div>
                    </div>

                    <div className="movieDetail__Epigraph">
                        <div>Directed By {props.movieDetail.Director}</div> <div>Starring: {props.movieDetail.Actors}</div> 
                    </div>

                    <div className="movieDetail__Epigraph">
                        Produced by: {props.movieDetail.Production}
                    </div>

                    <hr/>

                    <div className="movieDetail__info">
                        <p>{props.movieDetail.Plot}</p>
                    </div>

                </div>

            </div>
            :<Spinner/>
        }
        
        </div>
    )
}

function mapStateToProps(state){
    return {
       ...state
    }
}


function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: (id)=>dispatch(getMovieDetail(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail);