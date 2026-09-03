import React, { useEffect } from 'react';

export const LiveChat: React.FC = () => {
  useEffect(() => {
    const CRISP_WEBSITE_ID = import.meta.env.VITE_CRISP_WEBSITE_ID;

    if (!CRISP_WEBSITE_ID) {
      console.warn('LiveChat: VITE_CRISP_WEBSITE_ID is missing. Chat disabled.');
      return;
    }

    // Initialize Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Crisp handles its own cleanup, but we can remove the script if needed
      const existingScript = document.querySelector('script[src="https://client.crisp.chat/l.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render any visible UI itself
};

declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}
