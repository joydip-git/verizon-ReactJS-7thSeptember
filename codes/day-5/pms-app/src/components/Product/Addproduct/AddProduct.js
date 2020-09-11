import React, { Component } from 'react'
import { addProduct } from '../../../services/ProductService';

class Product{
    constructor() {
    }
    
}
export default class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productId: undefined,
            productName: undefined,
            productCode: undefined,
            releaseDate: undefined,
            description: undefined,
            price: undefined,
            starRating: undefined,
            imageUrl: undefined
        }
        this.idRef = React.createRef();
    }

    submitProduct = (event) => {
        event.preventDefault();
        addProduct(this.state)
            .then(response => {
                console.log(response.data.message)
                this.props.history.push({ pathname: '/products' });
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitProduct}>
                    Id:&nbsp;
                    <input
                        ref={this.idRef}
                        type='number'
                        value={this.state.productId}
                        onChange={(e) => this.setState({
                            productId: parseInt(e.target.value)
                        })} />
                    <br />
                    Name:&nbsp;<input
                        type='text'
                        value={this.state.productName}
                        onChange={(e) => this.setState({
                            productName: e.target.value
                        })} />
                    <br />
                    Code:&nbsp;<input type='text'
                        value={this.state.productCode}
                        onChange={(e) => this.setState({
                            productCode: e.target.value
                        })} />
                    <br />
                    Date:&nbsp;<input type='text'
                        value={this.state.releaseDate}
                        onChange={(e) => this.setState({
                            releaseDate: e.target.value
                        })} />
                    <br />
                    Desc:&nbsp;<input type='text'
                        value={this.state.description}
                        onChange={(e) => this.setState({
                            description: e.target.value
                        })} />
                    <br />
                    Price:&nbsp;<input type='number'
                        value={this.state.price}
                        onChange={(e) => this.setState({
                            price: parseFloat(e.target.value)
                        })} />
                    <br />
                    Rating:&nbsp;<input type='number'
                        value={this.state.starRating}
                        onChange={(e) => this.setState({
                            starRating: parseFloat(e.target.value)
                        })} />
                    <br />
                    Url:&nbsp;<input type='text'
                        value={this.state.imageUrl}
                        onChange={(e) => this.setState({
                            imageUrl: e.target.value
                        })} />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
