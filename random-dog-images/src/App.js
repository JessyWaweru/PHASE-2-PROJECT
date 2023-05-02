
import './App.css';
import React from 'react'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Breed from './components/Breed'
import NotFound from './components/NotFound'


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
<Footer/>

</Router>

)


}
 
export default App;
