import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return (
        <nav className="NavBar">
            <Link to="/"><div>I Love Movies</div></Link>
            <div className="NavBar__Links">
                <ul>
                    <li>Log in</li>
                    <li>Register</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;