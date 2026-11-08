const optional = (value: string | undefined) => value?.trim() || undefined;

export const env = Object.freeze({
  formspreeEndpointId: optional(import.meta.env.VITE_FORMSPREE_ENDPOINT_ID) ?? 'mbgjkvrb',
  googleAnalyticsId: optional(import.meta.env.VITE_GA_MEASUREMENT_ID),
  /** Cal.com / Calendly / similar discovery-call URL. When set, Contact shows Schedule a Discovery Call. */
  calendarUrl: optional(import.meta.env.VITE_CALENDAR_URL),
  sanityProjectId: optional(import.meta.env.VITE_SANITY_PROJECT_ID),
  sanityDataset: optional(import.meta.env.VITE_SANITY_DATASET) ?? 'production',
  sentryDsn: optional(import.meta.env.VITE_SENTRY_DSN)
});

export const missingOptionalIntegrations = [
  !env.googleAnalyticsId && 'VITE_GA_MEASUREMENT_ID',
  !env.calendarUrl && 'VITE_CALENDAR_URL',
  !env.sanityProjectId && 'VITE_SANITY_PROJECT_ID',
  !env.sentryDsn && 'VITE_SENTRY_DSN'
].filter(Boolean) as string[];
