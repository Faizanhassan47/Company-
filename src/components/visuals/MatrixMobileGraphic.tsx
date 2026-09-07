import React from 'react';

export const MatrixMobileGraphic: React.FC = () => {
  return (
    <div className="system-graphic matrix-mobile-graphic">
      <div style={{ display: 'flex', gap: '1rem', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="/images/projects/41202766-a841-4729-a736-42993577997d.png" 
          alt="Matrix App Screenshot 1" 
          style={{ width: '30%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} 
        />
        <img 
          src="/images/projects/77f76df9-cca6-4458-ad2b-836760cec246.png" 
          alt="Matrix App Screenshot 2" 
          style={{ width: '30%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} 
        />
        <img 
          src="/images/projects/a241ae4d-c076-4b49-aa6b-a4a2e7908f5a.png" 
          alt="Matrix App Screenshot 3" 
          style={{ width: '30%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} 
        />
      </div>
    </div>
  );
};

