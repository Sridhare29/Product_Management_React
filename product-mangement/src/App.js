import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ProductAdd from './components/ProductAdd';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/product/:productId'exact element={<ProductDetails />} />
        <Route path='/create'exact element={<ProductAdd />} />
        <Route>404 NOT FOUND!</Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
