import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss'

const ErrorBoundary = lazy(()=>import("@components/common/ErrorBoundary"))
const WebLayout = lazy(()=>import("@layouts/WebLayout"))
const Home = lazy(()=>import("@pages/Home"))
const Shop = lazy(()=>import("@pages/Shop"))
const About = lazy(()=>import("@pages/About"))
const Contact = lazy(()=>import("@pages/Contact"))

function App() {
  return (
    <>
      <ErrorBoundary>
      <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' exact element={<WebLayout element={<Home />} />} />
            <Route path='/shop' element={<WebLayout element={<Shop />} />} />
            <Route path='/about' element={<WebLayout element={<About />} />} />
            <Route path='/contact' element={<WebLayout element={<Contact />} />} />
          </Routes>
      </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
