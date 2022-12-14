import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import Error from './components/Error';
import Reviews from './pages/Reviews';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import GoToTop from './components/GoToTop';
import AdminAuth from './pages/AdminAuth';

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
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/adminauth" element={<AdminAuth />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;
