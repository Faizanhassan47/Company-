import React, { useEffect, useState } from 'react';
import './CurrencyBar.css';

export type SiteCurrency = 'USD' | 'EUR' | 'GBP' | 'PKR';

const CURRENCIES: SiteCurrency[] = ['USD', 'EUR', 'GBP', 'PKR'];

const getInitialCurrency = (): SiteCurrency => {
  if (typeof window === 'undefined') return 'USD';
  const saved = window.localStorage.getItem('tekmora-currency');
  return CURRENCIES.includes(saved as SiteCurrency) ? saved as SiteCurrency : 'USD';
};

export const CurrencyBar: React.FC = () => {
  const [currency, setCurrency] = useState<SiteCurrency>(getInitialCurrency);

  useEffect(() => {
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
};
