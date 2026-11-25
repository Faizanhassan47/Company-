import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'
import { ErrorBoundary } from './components/layout/ErrorBoundary'

const root = document.getElementById('root')!
const fontStylesheet = document.getElementById('site-font-stylesheet') as HTMLLinkElement | null
if (fontStylesheet) {
  const activateFonts = () => { fontStylesheet.media = 'all' }
  if (fontStylesheet.sheet) requestAnimationFrame(activateFonts)
  else fontStylesheet.addEventListener('load', activateFonts, { once: true })
}
const app = (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)

if (root.dataset.prerendered === 'true' && root.hasChildNodes()) {
  hydrateRoot(root, app, {
    onRecoverableError(error, errorInfo) {
      console.error('Hydration recovery:', error, errorInfo.componentStack)
    },
  })
} else {
  createRoot(root).render(app)
}

// Register Service Worker for PWA offline capabilities in production
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

