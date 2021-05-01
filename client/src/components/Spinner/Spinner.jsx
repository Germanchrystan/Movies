import React from "react";
import spinner from "./spinner.gif"


function Spinner(){
    return (
        <div className="Spinner__Container">
        <img
        className="Spinner__img"
        src={spinner}
        alt="Loading"
        />
        </div>
        
    )
}

export default Spinner;
