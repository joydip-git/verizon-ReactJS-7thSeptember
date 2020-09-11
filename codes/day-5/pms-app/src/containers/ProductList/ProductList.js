import React, { Component } from 'react'
import { getProducts, removeProduct } from '../../services/ProductService'
import ProductTable from '../../components/Product/ProductTable/ProductTable'

export default class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: null,
            loaded: false
        }
    }
    deleteProductHandler = (pid) => {
        removeProduct(pid)
            .then(response => {
                console.log(response.data.message);
                this.setState({
                    products: response.data.data
                })
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        getProducts()
            .then(
                (response) => {
                    this.setState({
                        products: response.data,
                        loaded: true
                    })
                })
            .catch((error) => console.log(error))
    }
    render() {
        let design = <span>loading....</span>;
        if (this.state.loaded) {
            design = (
                <div className='panel panel-primary'
                    style={{ border: '2px solid aqua', borderRadius: '5px', margin: '5px' }}>
                    <div className='panel panel-heading'>
                        <h4>{this.state.products.length} Record(s) found...</h4>
                    </div>
                    <div className='panel panel-body'>
                        <ProductTable
                            products={this.state.products}
                            deleteProductHandler={this.deleteProductHandler}
                        />
                    </div>
                </div>

            )
        }
        return design;
    }
}
