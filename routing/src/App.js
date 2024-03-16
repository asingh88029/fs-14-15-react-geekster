import logo from './logo.svg';
import './App.css';
import { MemoryRouter, BrowserRouter,Routes, Route } from "react-router-dom";

import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Home from './screen/Home';

function App() {
  return (
    <>
      <MemoryRouter initialEntries={["/"]}>
      {/* <BrowserRouter> */}
          <div>
            <p>I am Navbar</p>
          </div>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='blog'>
            <Route path='blog1' element={<p>I am blog1</p>}/>
            <Route path='blog2' element={<p>I am blog2</p>}/>
          </Route>
          <Route path='/screen2' element={<Screen2/>}/>
        </Routes>
        {/* </BrowserRouter> */}
      </MemoryRouter>
    </>
  );
}

export default App;
