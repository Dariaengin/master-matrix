import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AddProduct = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem('products')) || [];

    const newProduct = {
      id: Date.now(),
      ...form,
      price: parseFloat(form.price)
    };

    localStorage.setItem('products', JSON.stringify([...saved, newProduct]));
    navigate('/products');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">New Product</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
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
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="3"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">Create</button>
        <Link to="/products" className="btn btn-outline-secondary">Go back</Link>
      </form>
    </div>
  );
};

export default AddProduct;
