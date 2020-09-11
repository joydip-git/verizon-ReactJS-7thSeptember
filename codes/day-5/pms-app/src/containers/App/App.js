import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import ProductList from '../ProductList/ProductList';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import Home from '../../components/Home/Home'
import AddProduct from '../../components/Product/Addproduct/AddProduct';
import ProductDetail from '../../components/Product/ProductDetail/ProductDetail';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderNav />
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/add' component={AddProduct} />
        <Route path='/products' exact component={ProductList} />
        <Route path='/products/:id' component={ProductDetail} />

      </div>
    </BrowserRouter>
  );
}

export default App;
