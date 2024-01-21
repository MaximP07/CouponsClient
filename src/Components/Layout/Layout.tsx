import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Register from '../Register/Register';
import './Layout.css';
import CouponsContainer from '../../CouponsContainer/CouponsContainer';
import CouponCard from '../../CouponCard/CouponCard';
import Login from '../Login/Login';
import { BrowserRouter, Routes, Route, useNavigate, Router, Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';





function Layout() {

  return (
    <section className="layout">
      <header>
        <Header />
      </header>
      
      <aside>
        <Menu />
      </aside>

      <main>
      <CouponsContainer/>
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default Layout;
