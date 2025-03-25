// Optimize by moving static data to a separate JSON file
export const ProductService = {
    getProductsMini() {
        return fetch('/data/products-mini.json')
            .then(res => res.json())
            .then(d => d.data);
    },

    getProductsSmall() {
        return fetch('/data/products-small.json')
            .then(res => res.json())
            .then(d => d.data);
    },

    getProducts() {
        return fetch('/data/products.json')
            .then(res => res.json())
            .then(d => d.data);
    }
};