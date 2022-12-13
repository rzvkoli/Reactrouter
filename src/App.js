import React from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Questions from './components/Questions';
import Contact from './components/Contact';
import { BrowserRouter as Router,Routes, Route , Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
  <div className='app'>
    <Router>
      <div className='header'>
        <Link className='link' to={'/'}>
          خانه
        </Link>
        <Link className='link' to={'/dashboard'}>
          داشبورد
        </Link>
        <Link className='link' to={'/settings'}>
          تنظیمات
        </Link>
        <Link className='link' to={'/questions'}>
          سوالات
        </Link>
        <Link className='link' to={'/contact'}>
          تماس با ما
        </Link>
      </div>
      <div className='main'>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/questions' element={<Questions />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  </div>
  );
}
