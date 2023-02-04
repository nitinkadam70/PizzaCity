import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Homepage from './pages/Homepage';
// import AboutUs from './pages/AboutUs';
// import Menu from './pages/Menu';
// import Offers from './pages/Offers';
// import Footer from './components/Footer';
import Error from './components/Error';
import Reviews from './pages/Reviews';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import GoToTop from './components/GoToTop';
const LazyHomepage = lazy(() => import('./pages/Homepage'));
const LazyAbout = lazy(() => import('./pages/AboutUs'));
const LazyMenu = lazy(() => import('./pages/Menu'));
const LazyOffers = lazy(() => import('./pages/Offers'));
const LazyFooter = lazy(() => import('./components/Footer'));

//adding google Analytics to project
const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    //Non interaction event Google Analytcics
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div
                  className="spinner-border text-light"
                  role="status"
                ></div>
              }
            >
              <LazyHomepage />
            </Suspense>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Suspense
              fallback={
                <div
                  className="spinner-border text-light"
                  role="status"
                ></div>
              }
            >
              <LazyAbout />
            </Suspense>
          }
        />
        <Route
          path="/menu"
          element={
            <Suspense
              fallback={
                <div
                  className="spinner-border text-light"
                  role="status"
                ></div>
              }
            >
              <LazyMenu />
            </Suspense>
          }
        />
        <Route
          path="/offers"
          element={
            <Suspense
              fallback={
                <div
                  className="spinner-border text-light"
                  role="status"
                ></div>
              }
            >
              <LazyOffers />
            </Suspense>
          }
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <GoToTop />
      <Suspense
        fallback={
          <div
            className="spinner-border text-light"
            role="status"
          ></div>
        }
      >
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default App;
