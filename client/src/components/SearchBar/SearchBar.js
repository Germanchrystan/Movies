import React, { useState } from "react";
import {setTitle, getMovies} from "../../actions"
import {connect} from "react-redux";
//import "./SearchBar.css";


function SearchBar(props){

    const [titleInput, setTitleInput] = useState("");

//==========================HANDLERS================================//

    const handleTextChange=(e)=>{
        setTitleInput(e.target.value);
    }
    //------------------------------------------------------//

    // const handleSelectChange=(e)=>{
    //     setSelectInput({
    //         ...selectInput,
    //         [e.target.name]: e.target.value
    //     })
    // }

    //------------------------------------------------------//

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        props.setTitle(titleInput);
        
        props.getMovies(props.title)
        
    }

//==============================RETURN==============================//

    return(
        <div className="Form__Container">
            <form className="Home-Search"
            onSubmit={(e)=>handleSubmit(e)}
            >
            <input
            className="TextInput"
            type="text"
            onChange={(e)=>handleTextChange(e)}
            />
            <input
            className="Form__Submit--Search" 
            type="submit"
            text="Search"
            value="Search"
            />
        </form>
      </div>
    )
}

//=======================TO PROPS==============================//

function mapStateToProps(state){
    return {
     ...state
    }
}
  
  
function mapDispatchToProps(dispatch) {
    return {
        setTitle: (title) => dispatch(setTitle(title)),
        getMovies: (title) => dispatch(getMovies(title)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

