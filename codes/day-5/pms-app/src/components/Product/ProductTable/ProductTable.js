import React from 'react'
import PropTypes from 'prop-types'
import './ProductTable.css'
import ProductRow from '../ProductRow/ProductRow'

function ProductTable({ products, deleteProductHandler }) {

    return (
        <div className='table-responsive'>
            <table className='table'>
                <thead className='TableHeaderStyle'>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Code</td>
                        <td>Price</td>
                        <td>Rating</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p, index) => {
                            return <ProductRow
                                product={p}
                                key={p.productId}
                                deleteProduct={deleteProductHandler}
                            />
                        })
                    }
                </tbody>
            </table>
            <br />
            <br />
        </div>
    )
}
ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    deleteProductHandler: PropTypes.func.isRequired
}
export default ProductTable
