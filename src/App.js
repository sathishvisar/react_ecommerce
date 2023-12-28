import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss'

const Web = lazy(()=>import("@components/layout/WebLayout"))
const Home = lazy(()=>import("@pages/Home"))
const Shop = lazy(()=>import("@pages/Shop"))
const About = lazy(()=>import("@pages/About"))
const Contact = lazy(()=>import("@pages/Contact"))

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' exact element={<Web element={<Home />} />} />
            <Route path='/shop' element={<Web element={<Shop />} />} />
            <Route path='/about' element={<Web element={<About />} />} />
            <Route path='/contact' element={<Web element={<Contact />} />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
