import React, { Component } from 'react';
import './App.css';
import ProductEdit from '../components/ProductEdit';

//component: function
//React element: the return value of the function
//every component must creare singel react element and return the same. In case multiple react elements to be returned, a root element is must. adjacent elements if to be returned must be wrapped in a React.Fragment or <>...</>
//App.prototype.changeProductNameHandler=function(){}
//App.prototype.changeProductNameHandler.apply(this);
/**
 * function test(){
 *   this.p=function(){
 * }
 * }
 */
class App extends Component {
  constructor() {
    //Component.call(this,props);
    super();
    //state is a JS object
    //in this you can store any data using a key    
    this.state = {
      x: 20,
      product: {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 4,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      }
    }
    // this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
  }

  changeProductNameHandler = (args) => {
    let productName = args.target.value;
    // console.log(productName)
    //this.state.product.productName = productName;
    //oldProduct-->
    //this.state.product-->
    // let oldProduct = Object.create({}, this.state.product);
    let copyProduct = { ...this.state.product };

    console.log(copyProduct === this.state.product)
    copyProduct.productName = productName;
    this.setState(
      {
        product: copyProduct
      },
      () => copyProduct = null
    );
    console.log(this.state.product)
  }

  render() {
    console.log('rendered')
    return (
      <div>
        <button onClick={this.changeProductNameHandler}>Click</button>
        <ProductEdit
          product={this.state.product}
          changeName={this.changeProductNameHandler} />
      </div>
    );
  }
}

export default App;