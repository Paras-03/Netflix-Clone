import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/login';
import Netflix from './pages/netflix';
import Signup from './pages/signup';
import Player from './pages/player';
import Movies from './pages/movies';  
import TvShows from './pages/TvShows';
import UserLiked from './pages/userLiked';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/player' element={<Player/>} />
        <Route exact path='/movies' element={<Movies/>} />
        <Route exact path='/tv' element={<TvShows/>} />
        <Route exact path='/mylist' element={<UserLiked/>} />
        <Route exact path='/' element={<Netflix/>} />
      </Routes>
    </BrowserRouter>
  );
}
