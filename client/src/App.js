import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
//============================================================//
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar"
import MovieDetail from './components/MovieDetail/MovieDetail';
//============================================================//

import './Sass/Main.scss';

//============================================================//

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/movies/:id" component={MovieDetail}/>
      <Route path ="/" component = {NavBar}/>
    </BrowserRouter>
  );
}

export default App;