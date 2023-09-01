import React, { useState } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coupons from './Components/Coupons/Coupons';



function App() {  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/coupon" element={<Coupons id={0} name={''} description={''} startDate={''} endDate={''} amount={0} price={0} />} />
            <Layout/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;