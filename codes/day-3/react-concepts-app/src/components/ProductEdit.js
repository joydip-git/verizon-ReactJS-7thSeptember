import React from 'react'

/**
 * [name,age]
 * {
 *   name:'', 
 *   age:20,
 * }
 */
// const changeHandler = (value, product, property, callback) => {
//     console.log('within child')
//     product[property] = value;
//     callback(product);
// }
//w.r.t props a component should act like a PURE Function
function ProductEdit(props) {
    console.log('pe rendered')
    const { product, changeProduct } = props;
    return (
        <div>
            <div>
                <span>Name:</span>
                <input type='text' value={product.productName}
                    onChange={
                        (e) => changeProduct(e.target.value, 'productName')
                    } />
            </div>
            <div>
                <span>Price:</span>
                <input
                    type='text'
                    value={product.price}
                    onChange={
                        (e) => changeProduct(parseFloat(e.target.value), 'price')
                    } />
            </div>
        </div>
    );
}

export default ProductEdit

/**
 * x:{
 * product:{},
 * data:'joydip'
 * }
 *
 * {
 *  type:div,
 *  key:null,
 *  ref: null,
 *  props:{
 *   product:{},
 *   data:'joydip',
 *   children:[hello guys]
 *  }
 * }
 */
