import React from 'react';
import Header from './Header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import Vault from '../pages/Vault';
import Supporter from '../pages/Supporter';
import FAQ from '../pages/FAQ';
import Profile from '../pages/Profile';

const Container: React.FC = () => {
  return (
    <HashRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="vault" element={<Vault />} />
          <Route path="supporter" element={<Supporter />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default Container;
