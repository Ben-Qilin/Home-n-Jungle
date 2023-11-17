import React, { useState } from 'react';
import './reset.css';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainHome from './MainHome/MainHome';
import AuthModal from './AuthModal/AuthModal';

function App() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev);
    console.log(openModal)
  };
  return (
    <div style={{position: 'relative', overflow: 'hidden'}} className="App">
      <Header openModal={openModal}/>
      <MainHome/>
      <Footer/>
      <AuthModal showModal={showModal} setShowModal={setShowModal}/>
    </div>
  );
}

export default App;
