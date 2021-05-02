import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
//============================================================//
import Home from "./components/Home/Home.js";
import NavBar from "./components/NavBar/NavBar"
import MovieDetail from './components/MovieDetail/MovieDetail';
//============================================================//

import './Sass/Main.scss';

//============================================================//

 export default function App() {
  return (
    <BrowserRouter>
      <Route path ="/" component = {NavBar}/>
      <Route path="/" exact component={Home}/>
      <Route path="/movies/:id" component = {MovieDetail} />

    </BrowserRouter>
  );
}

