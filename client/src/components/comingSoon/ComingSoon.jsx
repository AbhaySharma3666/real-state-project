import React from 'react';
import { Link } from 'react-router-dom';
import './comingSoon.scss';

const ComingSoon = ({ title, description }) => {
  return (
    <div className="coming-soon">
      <div className="content">
        <div className="animated-text">
          <h1>{title}</h1>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="features">
          <div className="feature">
            <div className="icon-wrapper">
              <span className="icon">🚀</span>
            </div>
            <span>Innovative Solutions</span>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <span className="icon">💡</span>
            </div>
            <span>Enhanced Experience</span>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <span className="icon">✨</span>
            </div>
            <span>New Features</span>
          </div>
        </div>
        <div className="cta-section">
          <Link to="/" className="back-button">
            Return to Home
          </Link>
          <div className="social-links">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 