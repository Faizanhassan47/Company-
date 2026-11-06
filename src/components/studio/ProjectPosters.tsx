import React from 'react';
import { PROJECTS } from '../../data/projects';
import './ProjectPosters.css';

type PosterSpec = {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  className?: string;
};

const POSTERS: Record<string, PosterSpec> = {
  'dome-enterprise': {
    src: '/projects/dome.jpg',
    alt: 'DOME digital office platform dashboard',
    kicker: 'Enterprise',
    title: 'DOME',
    className: 'poster-wide'
  },
  'citi-books-platform': {
    src: '/projects/citi-store.jpg',
    alt: 'Citi Books storefront',
    kicker: 'Commerce',
    title: 'Citi Books'
  },
  'glucotrack-cgm': {
    src: '/projects/glucotrack-phones.jpg',
    alt: 'GlucoTrack app showing a live glucose reading, sensor connection and device settings',
    kicker: 'Healthcare',
    title: 'GlucoTrack',
    className: 'poster-app'
  },
  'matrix-field-service': {
    src: '/projects/matrix.jpg',
    alt: 'Matrix field service app with jobs, live tracking and equipment scan',
    kicker: 'Field service',
    title: 'Matrix',
    className: 'poster-wide'
  },
  'quran-ayat-app': {
    src: '/projects/ayat.jpg',
    alt: 'Ayat Steem Quran companion with library, audio player and qibla',
    kicker: 'Mobile',
    title: 'Ayat',
    className: 'poster-wide'
  },
  'fitness-mobile-app': {
    src: '/projects/fitness.jpg',
    alt: 'Fitness app with workouts, weekly progress and activity',
    kicker: 'Mobile',
    title: 'Fitness',
    className: 'poster-wide'
  },
  'warehouse-grn-automation': {
    src: '/projects/warehouse.jpg',
    alt: 'Warehouse production system with scan and track and a SAP dashboard',
    kicker: 'Operations',
    title: 'WPS',
    className: 'poster-wide'
  },
  shoestops: {
    src: '/projects/shoestops.jpg',
    alt: 'Shoestops footwear ecommerce storefront',
    kicker: 'Commerce',
    title: 'Shoestops',
    className: 'poster-wide'
  },
  'comments-fusion': {
    src: '/projects/comments-fusion.jpg',
    alt: 'Comments Fusion campaign automation dashboard',
    kicker: 'Automation',
    title: 'Comments Fusion',
    className: 'poster-wide'
  },
  'transcend-healthcare': {
    src: '/projects/transcend-healthcare.jpg',
    alt: 'Transcend Healthcare multilingual medical website',
    kicker: 'Healthcare',
    title: 'Transcend',
    className: 'poster-wide'
  },
  'sap-b1-production-dashboard': {
    src: '/projects/sap-b1.jpg',
    alt: 'SAP Business One production analytics dashboard',
    kicker: 'Manufacturing',
    title: 'SAP B1',
    className: 'poster-wide'
  },
  'leoedge-dashboard': {
    src: '/projects/leoedge.jpg',
    alt: 'LeoEdge HR attendance and payroll portal',
    kicker: 'Enterprise',
    title: 'LeoEdge',
    className: 'poster-wide'
  },
  'hyperblock-studio': {
    src: '/projects/hyperblock.jpg',
    alt: 'HyperBlock Studio creative web platform',
    kicker: 'Studio',
    title: 'HyperBlock',
    className: 'poster-wide'
  },
  grabzer: {
    src: '/projects/grabzer.jpg',
    alt: 'Grabzer multilingual consumer platform',
    kicker: 'Consumer',
    title: 'Grabzer',
    className: 'poster-wide'
  },
  'grabzer-admin': {
    src: '/projects/grabzer-admin.jpg',
    alt: 'Grabzer admin operations console',
    kicker: 'Admin',
    title: 'Grabzer Admin',
    className: 'poster-wide'
  },
  'seven-koncepts': {
    src: '/projects/seven-koncepts.jpg',
    alt: 'Seven Koncepts corporate profile website',
    kicker: 'Corporate',
    title: 'Seven Koncepts',
    className: 'poster-wide'
  },
  'bombay-fifty': {
    src: '/projects/bombay-fifty.jpg',
    alt: 'Bombay Fifty restaurant menu website',
    kicker: 'Hospitality',
    title: 'Bombay Fifty',
    className: 'poster-wide'
  },
  'lb908-dashboard': {
    src: '/projects/lb908.jpg',
    alt: 'LB908 business network dashboard',
    kicker: 'Network',
    title: 'LB908',
    className: 'poster-wide'
  }
};

const ShotPoster: React.FC<PosterSpec> = ({ src, alt, kicker, title, className = '' }) => (
  <figure className={`project-poster ${className}`}>
    <img src={src} alt={alt} />
    <figcaption>
      <span>{kicker}</span>
      <strong>{title}</strong>
    </figcaption>
  </figure>
);

const TypePoster: React.FC<{ title: string; category: string; stack: string[] }> = ({ title, category, stack }) => (
  <figure className="project-poster poster-type">
    <figcaption>
      <span>Software</span>
      <strong>{title}</strong>
    </figcaption>
    <p>{category}</p>
    {stack.length > 0 && <div className="poster-stack">{stack.join('  ·  ')}</div>}
  </figure>
);

export const ProjectPoster: React.FC<{ slug: string }> = ({ slug }) => {
  const poster = POSTERS[slug];
  if (poster) return <ShotPoster {...poster} />;

  const project = PROJECTS.find(item => item.slug === slug);
  return (
    <TypePoster
      title={project?.title ?? 'Product'}
      category={project?.category ?? 'Custom software'}
      stack={(project?.technologies ?? []).slice(0, 3)}
    />
  );
};
