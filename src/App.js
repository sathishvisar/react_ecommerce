import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppStore } from './store/index'

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
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <Provider store={AppStore}>
            <BrowserRouter basename='/'>
                <Routes>
                  <Route path='/' exact element={<WebLayout element={<Home />} />} />
                  <Route path='/shop' element={<WebLayout element={<Shop />} />} />
                  <Route path='/about' element={<WebLayout element={<About />} />} />
                  <Route path='/contact' element={<WebLayout element={<Contact />} />} />
                </Routes>
            </BrowserRouter>
          </Provider>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
