import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => { //to fetch products from two sources
      try {
        const res = await fetch('https://fakestoreapi.com/products');//api
        const apiProducts = await res.json();//after the responce I will extract the actual product data as an array
        const localProducts = JSON.parse(localStorage.getItem('products')) || [];//i will add manually prodcuts so i need to check them here in the local storage
        setProducts([...apiProducts, ...localProducts]);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };


    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    const localProducts = JSON.parse(localStorage.getItem('products'));//I retrieve the key of products from localStorage
    const updatedLocal = localProducts.filter(myproduct => String(myproduct.id) !== String(id));//I need to loop through every productand keep it in the array if the id is not equal to the one I want to delete 
    localStorage.setItem('products', JSON.stringify(updatedLocal));//then I will set the local storage to the updated array
    setProducts(previous => previous.filter(myproduct => String(myproduct.id) !== String(id)));//I need to update the state of products so I will filter the products and set the state to the updated array
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Products</h2>

      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th style={{ width: '180px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title || product.name}</td>
                <td>{product.description}</td>
                <td>${parseFloat(product.price).toFixed(2)}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Link to={`/products/${product.id}`} className="btn btn-outline-secondary btn-sm">Show</Link>
                    <Link to={`/products/${product.id}/edit`} className="btn btn-outline-info btn-sm">Edit</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}> Delete </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3">
        <Link to="/products/new" className="btn btn-primary">
          Add product
        </Link>
      </div>
    </div>
  );
};

export default ProductTable;
