import React from 'react';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="home">
        <Sidebar />
        <Posts />
        <Contact />
      </section>
    </main>
  );
}
