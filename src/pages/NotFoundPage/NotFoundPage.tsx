import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import './NotFoundPage.css';

export const NotFoundPage: React.FC = () => {
  return (
    <main id="main-content" className="not-found-page">
      <SEOHead
        title="Page Not Found | Tekmora"
        description="The requested page does not exist."
      />
      <div className="container not-found-container">
        <span className="not-found-code font-mono">404</span>
        <h1 className="not-found-title">This page doesn't exist.</h1>
        <p className="not-found-desc">
          The page you are looking for may have been moved, renamed, or is no longer available.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="btn btn-orange font-mono">
            <ArrowLeft size={15} />
            <span>Back to Home</span>
          </Link>

          <Link to="/work" className="btn btn-secondary font-mono">
            <span>View Our Work</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
};
