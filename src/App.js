import React from 'react';
import Menubar from './Components/Menubar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import './App.css';
import Main from './Components/Main';

function App() {
  return ( 
    <>
    <Menubar />
    <Hero/>
    <Main/>
    <h2>App</h2>
    <Footer/>
    </>
  );
}

export default App;
