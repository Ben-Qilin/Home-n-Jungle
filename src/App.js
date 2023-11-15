import React from 'react';
import './reset.css';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainHome from './MainHome/MainHome';

function App() {
  return (
    <div className="App">
      <Header />
      <MainHome/>
      <Footer/>
    </div>
  );
}

export default App;
