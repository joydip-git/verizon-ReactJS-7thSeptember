import React from 'react'

//w.r.t props a component should act like a PURE Function
function ProductEdit(props) {
    console.log('pe rendered')
    const { product, changeName } = props;
    return (
        <div>
            <div>
                <span>Name:</span>
                <input type='text' value={product.productName}
                    onChange={changeName} />
            </div>
            <div>
                <span>Price:</span>
                <input type='text' value={product.price} />
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
