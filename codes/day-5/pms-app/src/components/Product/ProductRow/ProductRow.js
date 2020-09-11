import React from 'react'
import PropTypes from 'prop-types'
import './ProductRow.css'
import { Link } from 'react-router-dom'

function ProductRow({ product, deleteProduct }) {
    return (
        <tr>
            <td>
                <Link to={{
                    pathname: '/products/' + product.productId
                }}>
                    <div className='img-responsive'>
                        <img

                            src={product.imageUrl}
                            alt='NA'
                            className='ImageStyle'
                            title={product.productName}
                        />
                    </div>
                </Link>
            </td>
            <td>{product.productName}</td>
            <td>{product.productCode}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button className='btn btn-danger'
                    onClick={() => deleteProduct(product.productId)}>Delete</button></td>
        </tr >
    )
}
ProductRow.propTypes = {
    product: PropTypes.object.isRequired,
    deleteProduct: PropTypes.func.isRequired
}
export default ProductRow
