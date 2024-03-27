import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import { UserContext } from './UserContext/UserContext';    //import usercontext
import { useState } from 'react';

function App() {

  const [user, setUser] = useState("Hello Users")


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about/' element={<About />}></Route>
        </Routes>
      
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
