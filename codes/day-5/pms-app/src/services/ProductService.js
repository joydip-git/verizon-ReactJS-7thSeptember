import Axios from 'axios'
const url = 'http://127.0.0.1:8081/productservice';
const getProducts = () => {
    return Axios.get(url);
}
const getProduct = (pid) => {
    return Axios.get(`${url}/${pid}`);
}
const addProduct = (product) => {
    return Axios.post(url, product);
}
const removeProduct = (pid) => {
    return Axios.delete(`${url}/${pid}`);
}
const updateProduct = (product) => {
    return Axios.put(url, product);
}
export { getProducts, getProduct, addProduct, removeProduct, updateProduct };
