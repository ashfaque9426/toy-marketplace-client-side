import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Shared/NavBar/NavBar';
import Footer from './Components/Shared/Footer/Footer';
import CarouselForHome from './Components/CarouselForHome/CarouselForHome';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();

  return (
    <>
      <header>
        <NavBar />
        {
          location.pathname === "/" ? <CarouselForHome /> : ""
        }
      </header>
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App;
