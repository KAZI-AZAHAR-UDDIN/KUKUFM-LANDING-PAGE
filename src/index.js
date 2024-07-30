import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css'; // Slick Carousel Theme CSS
import 'slick-carousel/slick/slick.css'; // Slick Carousel CSS
import App from './App';
import './index.css'; // Your global CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
