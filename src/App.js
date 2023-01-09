import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import background from '../src/background.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Main backgroundImage={background} />
      <Footer />
    </div>
  );
}

export default App;
