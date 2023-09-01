import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Register from '../Register/Register';
import './Layout.css';
import Coupons from '../Coupons/Coupons';

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
      
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default Layout;
