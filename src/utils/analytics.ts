declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = env.googleAnalyticsId;
export const GTM_CONTAINER_ID = env.googleTagManagerId;
const ANALYTICS_ID = GTM_CONTAINER_ID ?? GA_MEASUREMENT_ID;
let initializing = false;
let initialized = false;
let lastPagePath: string | undefined;

const hasGrantedConsent = () => localStorage.getItem('tekmora_cookie_consent') === 'granted';

const pushToDataLayer = (event: Record<string, unknown>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
};

export const initAnalytics = () => {
  if (typeof window === 'undefined') return;

  if (!ANALYTICS_ID) {
    console.warn('Analytics: VITE_GTM_CONTAINER_ID or VITE_GA_MEASUREMENT_ID is missing. Tracking disabled.');
    return;
  }

  // GDPR Consent Check
  const consent = localStorage.getItem('tekmora_cookie_consent');
  if (consent !== 'granted') {
    return;
  }

  if (initializing || initialized || document.querySelector(`script[data-tekmora-analytics="${ANALYTICS_ID}"]`)) return;
  initializing = true;

  window.dataLayer = window.dataLayer || [];

  // Google Tag Manager accepts event objects. The GA fallback maintains support
  // for deployments that have a measurement ID but no GTM container.
  if (GTM_CONTAINER_ID) {
    pushToDataLayer({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  } else {
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
  }

  const script = document.createElement('script');
  script.src = GTM_CONTAINER_ID
    ? `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_CONTAINER_ID)}`
    : `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID!)}`;
  script.async = true;
  script.dataset.tekmoraAnalytics = ANALYTICS_ID;
  document.head.appendChild(script);

  const completeInitialization = () => {
    initializing = false;
    initialized = true;
    trackPageView(window.location.pathname);
  };
  // Events are queued in dataLayer while the GTM script is loading.
  completeInitialization();

  script.onerror = () => {
    initializing = false;
    initialized = false;
    script.remove();
  };
};

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && initialized && ANALYTICS_ID && hasGrantedConsent() && lastPagePath !== path) {
    lastPagePath = path;
    if (GTM_CONTAINER_ID) {
      pushToDataLayer({
        event: 'page_view',
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
      });
      return;
    }
    window.gtag?.('event', 'page_view', {
      page_path: path,
    });
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && ANALYTICS_ID && hasGrantedConsent()) {
    const event = {
      event_category: category,
      event_label: label,
      value: value,
    };
    if (GTM_CONTAINER_ID) {
      pushToDataLayer({ event: action, ...event });
      return;
    }
    window.gtag?.('event', action, event);
  }
};
import { env } from '@/config/env';

