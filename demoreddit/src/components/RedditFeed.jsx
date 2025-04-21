// src/components/RedditFeed.jsx
import React, { useState, useEffect } from 'react';

const RedditFeed = () => {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('reddit-posts');
    return saved ? JSON.parse(saved) : [];
  });

  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    localStorage.setItem('reddit-posts', JSON.stringify(posts));
  }, [posts]);

  const handlePost = () => {
    if (newPost.trim()) {
      const newEntry = {
        id: Date.now(),
        content: newPost.trim(),
        upvotes: 0,
      };
      setPosts(prev => [newEntry, ...prev]);
      setNewPost('');
    }
  };

  const handleUpvote = (id) => {
    const updated = posts
      .map(post => post.id === id ? { ...post, upvotes: post.upvotes + 1 } : post)
      .sort((a, b) => b.upvotes - a.upvotes);

    setPosts(updated);
  };

  return (
    <div className="container my-5">
      <h2 className="text-primary mb-3">Reddit Feed</h2>
      <p className="text-muted">Welcome, Damin Singh</p>

      {/* Post Input Section */}
      <div className="mb-4">
        <div className="form-group">
          <textarea
            value={newPost}
            onChange={e => setNewPost(e.target.value)}
            rows="4"
            placeholder="Post on Reddit"
            className="form-control"
          />
        </div>
        <button className="btn btn-success mt-2" onClick={handlePost}>
          Post
        </button>
      </div>

      {/* Post List */}
      {posts.map(post => (
        <div className="card mb-3" key={post.id}>
          <div className="card-body">
            <p className="card-text">{post.content}</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-secondary">{post.upvotes} upvotes</span>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleUpvote(post.id)}
              >
                Upvote
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 

export default RedditFeed; 
