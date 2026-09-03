declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initAnalytics = () => {
  if (typeof window === 'undefined') return;

  if (!GA_MEASUREMENT_ID) {
    console.warn('Analytics: VITE_GA_MEASUREMENT_ID is missing. Tracking disabled in development.');
    return;
  }

  // GDPR Consent Check
  const consent = localStorage.getItem('tekmora_cookie_consent');
  if (consent !== 'granted') {
    return;
  }

  // Load Google Analytics Script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(..._args: any[]) {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
    
    // Make gtag globally available
    window.gtag = gtag;
  };
};

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

