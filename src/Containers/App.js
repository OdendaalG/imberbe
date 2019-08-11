import React from 'react';
import './App.css';
import NavBar from '../Components/NavBar';
import MainInfo from '../Components/MainInfo';
import BottomInfo from '../Components/BottomInfo';
import FooterInfo from '../Components/FooterInfo';
import 'tachyons';

function App() {
  return (
    <div>
      <NavBar />
      <MainInfo />
      <BottomInfo />
      <FooterInfo />
    </div>
  );
}

export default App;
