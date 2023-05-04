
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Breed from './components/Breed';
import NotFound from './components/NotFound';
import SocialMedia from './components/SocialMedia';
import BreedList from './components/BreedList';

function App() {
return(
<Router>
  <h1 className='h1-1'> MARTHA'S PET STORE</h1>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/breed/:breed' element={<Breed/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>
</Router>

);
}
 
export default App;
