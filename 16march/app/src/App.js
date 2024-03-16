import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AppTemplate from './component/AppTemplate';
import Landing from './screen/Landing';
import Cart from './screen/Cart';
import Product from './screen/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppTemplate/>}>
          <Route path='' element={<Landing/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='product' element={<Product/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
