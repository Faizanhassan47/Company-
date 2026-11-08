/** Preferred public origin. Must match the Vercel primary domain (www). */
export const SITE_URL = 'https://www.tekmorasolution.com';

export const sitePath = (path = '/') => {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
