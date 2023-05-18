import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Shared/NavBar/NavBar';
import Footer from './Components/Shared/Footer/Footer';
import CarouselForHome from './Components/CarouselForHome/CarouselForHome';

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
      <Footer />
    </>
  )
}

export default App;
