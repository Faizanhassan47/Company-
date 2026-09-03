import React from 'react';

export const ShoestopsGraphic: React.FC = () => {
  return (
    <div className="system-graphic shoestops-graphic">
      <div className="graphic-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="window-title">Shoestops // Next.js Dynamic E-Commerce Storefront & Admin Hub</div>
        <div className="window-status">
          <span className="status-indicator"></span>
          <span className="status-text font-mono">NEXT.js SSR / MERN</span>
        </div>
      </div>

      <div className="shoestops-body">
        <div className="storefront-hero-preview">
          <div className="storefront-nav">
            <span className="storefront-logo font-display">SHOESTOPS.</span>
            <div className="storefront-links font-mono">
              <span>RUNNING</span>
              <span>LIFESTYLE</span>
              <span>BASKETBALL</span>
              <span>ADMIN PORTAL</span>
            </div>
            <span className="cart-pill font-mono">BAG (2)</span>
          </div>

          <div className="storefront-grid">
            <div className="product-card featured-product">
              <div className="product-tag font-mono">NEW ARRIVAL</div>
              <div className="product-visual">
                <div className="shoe-silhouette">
                  <span className="shoe-name font-display">VELOCITY PRO NITRO</span>
                  <span className="shoe-price font-mono">$185.00</span>
                </div>
              </div>
              <div className="variant-pills font-mono">
                <span className="size-pill active">US 9.5</span>
                <span className="size-pill">US 10</span>
                <span className="size-pill">US 10.5</span>
                <span className="size-pill">US 11</span>
              </div>
            </div>

            <div className="admin-mini-panel">
              <div className="admin-header font-mono">INVENTORY MANAGEMENT</div>
              <div className="admin-stat-row">
                <span className="stat-label font-mono">TOTAL SKUS:</span>
                <span className="stat-value font-mono">1,480</span>
              </div>
              <div className="admin-stat-row">
                <span className="stat-label font-mono">STOCK BUFFER:</span>
                <span className="stat-value text-green font-mono">99.4% OPTIMAL</span>
              </div>
              <div className="admin-stat-row">
                <span className="stat-label font-mono">AUTH PROTOCOL:</span>
                <span className="stat-value font-mono">JWT RBAC</span>
              </div>
              <div className="admin-stat-row">
                <span className="stat-label font-mono">PAGE TRANSITION:</span>
                <span className="stat-value text-orange font-mono">&lt; 40MS (SSR)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
