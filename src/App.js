import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import Contact from './contact';
import Company from './company';
import Blog from './blog';
import Services from './services';
import Nav from './nav';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/Home" element={<LandingPage/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Company" element={<Company/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
