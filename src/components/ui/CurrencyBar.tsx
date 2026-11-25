import React, { useEffect, useState } from 'react';
import './CurrencyBar.css';

export type SiteCurrency = 'USD' | 'EUR' | 'GBP' | 'PKR';

const CURRENCIES: SiteCurrency[] = ['USD', 'EUR', 'GBP', 'PKR'];

export const CurrencyBar: React.FC = () => {
  const [currency, setCurrency] = useState<SiteCurrency>('USD');

  useEffect(() => {
    const saved = window.localStorage.getItem('tekmora-currency');
    if (CURRENCIES.includes(saved as SiteCurrency)) setCurrency(saved as SiteCurrency);

    const handleCurrencyChange = (event: Event) => {
      const nextCurrency = (event as CustomEvent<SiteCurrency>).detail;
      if (CURRENCIES.includes(nextCurrency)) setCurrency(nextCurrency);
    };
    window.addEventListener('tekmora-currency-change', handleCurrencyChange);
    return () => window.removeEventListener('tekmora-currency-change', handleCurrencyChange);
  }, []);

  const selectCurrency = (nextCurrency: SiteCurrency) => {
    setCurrency(nextCurrency);
    window.localStorage.setItem('tekmora-currency', nextCurrency);
    window.dispatchEvent(new CustomEvent('tekmora-currency-change', { detail: nextCurrency }));
  };

  return (
    <div className="page-currency-bar">
      <div className="container page-currency-inner">
        <div className="page-currency-label">SELECT CURRENCY</div>
        <div className="page-currency-options">
          {CURRENCIES.map((c) => (
            <button
              key={c}
              className={`page-currency-button ${c === currency ? 'is-active' : ''}`}
              onClick={() => selectCurrency(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
