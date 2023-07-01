import './App.css'
import { Navbar } from "./pages/Navbart";
import { Home } from "./pages/Home";
import { Footer } from './pages/Footer';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
