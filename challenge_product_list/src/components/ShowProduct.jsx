
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ShowProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          return;
        }
      } catch (err) {
        console.warn('Product not found on API, checking localStorage');
      }
      const localProducts = JSON.parse(localStorage.getItem('products')) || [];
      const localProduct = localProducts.find(p => String(p.id) === id);
      if (localProduct) {
        setProduct(localProduct);
      } else {
        navigate('/products');
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">{product.title || product.name}</h2>
      <p><strong>Name:</strong> {product.title || product.name}</p>
      <p><strong>Price:</strong> ${parseFloat(product.price).toFixed(2)}</p>
      <p><strong>Description:</strong> {product.description}</p>

      <div className="mt-4">
        <Link to="/products" className="me-3">Back</Link>
        <Link to={`/products/${product.id}/edit`}>Edit</Link>
      </div>
    </div>
  );
};

export default ShowProduct;
