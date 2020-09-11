import React, { Component } from 'react'
import { getProduct } from '../../../services/ProductService'

class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null
        }
    }
    componentDidMount() {       
        getProduct(parseInt(this.props.match.params.id))
            .then(response => {
                this.setState({
                    product: response.data
                })
            })
            .catch(error => console.log(error))
    }
    componentWillMount() {
        console.log('destroyed')
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.product !== null ? this.state.product.productName : 'loading....'}
            </div>
        )
    }
}
export default ProductDetail
