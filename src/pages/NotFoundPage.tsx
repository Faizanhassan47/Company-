import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Terminal } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './NotFoundPage.css';

export const NotFoundPage: React.FC = () => {
  return (
    <main id="main-content" className="not-found-page">
      <div className="container">
        <motion.div 
          className="not-found-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Glitch / Terminal Element */}
          <motion.div className="not-found-terminal font-mono" variants={fadeInUp}>
            <Terminal size={14} className="text-orange" />
            <span>ERR_CONNECTION_REFUSED :: 404</span>
          </motion.div>

          <motion.h1 className="not-found-headline font-display" variants={fadeInUp}>
            SYSTEM<br />
            <span className="italic-accent">NOT FOUND.</span>
          </motion.h1>
          
          <motion.p className="not-found-desc" variants={fadeInUp}>
            The endpoint you are looking for has been deprecated, moved, or never existed in our architecture.
          </motion.p>

          <motion.div className="not-found-actions" variants={fadeInUp}>
            <Link to="/" className="btn btn-orange font-mono">
              RETURN TO BASE ↗
            </Link>
            
            <button 
              className="btn btn-secondary font-mono"
              onClick={() => {
                const searchBtn = document.querySelector('.header-search-btn') as HTMLButtonElement;
                if (searchBtn) searchBtn.click();
              }}
            >
              <Search size={14} style={{ marginRight: '6px' }}/>
              SEARCH ARCHIVE
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background */}
      <div className="not-found-bg" aria-hidden="true">
        <div className="giant-404 font-display">404</div>
      </div>
    </main>
  );
};
