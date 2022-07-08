
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About';
import Profile from './pages/Profile';
import Error from './pages/Error';
import Invoices from './routes/Invoices';
import Expenses from './routes/Expenses';
import Invoice from './routes/Invoice';

/**
* Otra forma de hacerlo es metiendo en el App un navbar y abajo separando con un div el <Outlet> que nos va a permitir reflejar las rutas que ya estariamos definiendo
* en index.js, ahí estariamos definiendo el browserRouter dejando una route principal haciendo que la misma contenga a todas las rutas
* 
*license LicenseHereIfApplicable
*///BrowserRouter: El tutorial ubica este componente en el archivo padre {index.js} supongo que por una cuestion de limpieza en el codigo, para este caso lo voy a dejar aquí para mayor claridad en la comprension inicial del tema


function App() {
 return(
    <Router>
      <nav className='navbar'>
        <Link to='/'>Home</Link> |{" "}
        <Link to='/about'>About</Link> |{" "}
        <Link to='/profile'>Profile</Link> |{" "}
        <Link to='/invoices'>invoices</Link> |{" "}      
        <Link to='/expenses'>Expenses</Link>
        
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile/:username' element={<Profile/>}></Route>
        <Route path='/invoices' element={<Invoices/>}>
          <Route
            index
            element={
                <div style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </div>
            }
          />
          <Route path=':invoiceId' element={<Invoice/>} />
        </Route>
        <Route path='/expenses' element={<Expenses/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
     <nav>
          <Outlet></Outlet>
      </nav>
    </Router>
      
  );
}

export default App;
