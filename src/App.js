
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About';
import Profile from './pages/Profile';
import Error from './pages/Error';

//BrowserRouter: El tutorial ubica este componente en el archivo padre {index.js} supongo que por una cuestion de limpieza en el codigo, para este caso lo voy a dejar aquí para mayor claridad en la comprension inicial del tema


function App() {
 return(
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile/:username' element={<Profile/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>

      <nav>
        Footer
      </nav>
    </Router>
      
  );
}

export default App;
