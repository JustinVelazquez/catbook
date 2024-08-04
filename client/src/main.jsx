import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, Edit, Upload } from './pages/index.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="edit" element={<Edit />} />
        <Route path="upload" element={<Upload />} />
      </Route>
    </Routes>
  </Router>
);
