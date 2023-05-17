import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Shared/NavBar/NavBar';
import Footer from './Components/Shared/Footer/Footer';

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
