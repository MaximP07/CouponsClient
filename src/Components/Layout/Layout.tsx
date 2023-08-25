import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Register from '../Register/Register';
import './Layout.css';

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
        <Register />
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default Layout;
