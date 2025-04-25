import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (response.ok) {
          const data = await response.json();
          setForm({
            title: data.title,
            price: data.price,
            description: data.description
          });
          return;
        }
      } catch (err) {
        console.warn('Product not found');
      }

      const local = JSON.parse(localStorage.getItem('products')) || [];
      const match = local.find(product => String(product.id) === id);
      if (match) {
        setForm({
          title: match.name || match.title,
          price: match.price,
          description: match.description
        });
      } else {
        navigate('/products');
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem('products')) || [];

    const updated = products.map((product) =>
      String(product.id) === id
        ? {
            ...product,
            title: form.title,
            price: parseFloat(form.price),
            description: form.description,
          }
        : product
    );

    localStorage.setItem('products', JSON.stringify(updated));
    navigate('/products');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Edit {form.title}</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="title"
            type="text"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            name="price"
            type="number"
            step="0.01"
            className="form-control"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="3"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">Update</button>
        <Link to="/products" className="btn btn-outline-secondary">Home</Link>
      </form>
    </div>
  );
};

export default EditProduct