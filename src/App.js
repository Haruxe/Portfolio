import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';


const App = () => {
  return (
    <div className='App gradient__bg'>
        <div className='subclass'>
            <Navbar />
            <Header />
            <Features />
        </div>
        <Footer />
    </div>
  );
}

export default App