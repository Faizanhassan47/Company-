import { StrictMode } from 'react'
window.addEventListener('error', e => {
  document.body.innerHTML = '<div style="color:red;padding:20px;font-family:monospace;white-space:pre-wrap">' + (e.error?.stack || e.message) + '</div>';
});

import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
