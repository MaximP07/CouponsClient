import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Coupons from './Components/Coupons/Coupons';
import Layout from './Components/Layout/Layout';


function App() {
  //const [coupons,setCopoms]
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;