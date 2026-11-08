/**
 * Company facts used across About, Contact, and trust surfaces.
 * Set founder.publish to true only after name, role, photo, and bio are verified.
 */
export interface FounderProfile {
  publish: boolean;
  name: string;
  role: string;
  photoUrl: string;
  shortBio: string;
  responsibilities: string[];
  linkedInUrl?: string;
}

export const FOUNDER: FounderProfile = {
  publish: false,
  name: '',
  role: 'Founder',
  photoUrl: '',
  shortBio: '',
  responsibilities: [],
  linkedInUrl: 'https://www.linkedin.com/company/tekmora-solution'
};

/** Technologies Tekmora actually uses on shipped work — keep this list honest. */
export const TECH_EXPERTISE = [
  {
    name: 'React & TypeScript',
    detail: 'Web applications, admin dashboards, and product interfaces.'
  },
  {
    name: 'Node.js & Express',
    detail: 'API layers, integrations, and application backends.'
  },
  {
    name: 'React Native & Expo',
    detail: 'Cross-platform mobile apps for field and customer workflows.'
  },
  {
    name: '.NET MAUI & ASP.NET',
    detail: 'Mobile and API work where the .NET stack fits the project.'
  },
  {
    name: 'SQL Server & PostgreSQL',
    detail: 'Relational data models for operations, reporting, and product data.'
  },
  {
    name: 'REST APIs & system integrations',
    detail: 'Connecting applications, ERPs, and third-party services.'
  }
] as const;

export const ENGAGEMENT_MODELS = [
  {
    title: 'Project-based delivery',
    text: 'Scoped development for a defined product, feature set, or internal system.'
  },
  {
    title: 'Agency subcontracting',
    text: 'Engineering capacity behind your client relationship — you own the account, we help build.'
  },
  {
    title: 'Existing-system improvements',
    text: 'Targeted work on applications already in production: features, fixes, and integrations.'
  }
] as const;
