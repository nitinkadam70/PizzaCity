import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Menu from './pages/Menu';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="*"
          element={<h1>ERROR: 404 - Page Not Found</h1>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
