import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router';

import HomePage from './components/HomePage';
import Users from './components/Users';
import AboutUsers from './components/AboutUsers';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/members"
            element={
              <ProtectedRoute>
                <Users onLogout={() => setLoggedInUser(null)} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <AboutUsers
                  user={loggedInUser}
                  onLogout={() => setLoggedInUser(null)}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;