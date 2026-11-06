import React from 'react';
import { ProjectPoster } from './ProjectPosters';

const AreaChart = () => (
  <svg viewBox="0 0 640 220" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ff4d1c" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#ff4d1c" stopOpacity="0" />
      </linearGradient>
    </defs>
    {[40, 90, 140, 190].map(y => (
      <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="rgba(255,255,255,0.06)" />
    ))}
    <path d="M0 170 C 70 160, 90 120, 150 112 S 230 70, 290 86 380 150, 450 96 560 40, 640 28 L 640 220 L 0 220 Z" fill="url(#areaFill)" />
    <path d="M0 170 C 70 160, 90 120, 150 112 S 230 70, 290 86 380 150, 450 96 560 40, 640 28" fill="none" stroke="#ff4d1c" strokeWidth="3" />
    <path d="M0 150 C 80 146, 140 130, 210 128 S 320 118, 400 124 520 100, 640 92" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
  </svg>
);

export const AnalyticsScreen: React.FC = () => (
  <div className="dash">
    <aside className="dash-side">
      <span className="dash-logo" />
      <span className="dash-ico on" />
      <span className="dash-ico" />
      <span className="dash-ico" />
      <span className="dash-ico" />
      <span className="dash-ico" />
    </aside>
    <div className="dash-body">
      <div className="dash-top">
        <strong>Overview</strong>
        <span>Last 30 days</span>
      </div>
      <div className="dash-kpis">
        <div><span>Revenue</span><strong>$48.2k</strong><em>+12.4%</em></div>
        <div><span>Orders</span><strong>1,284</strong><em>+8.1%</em></div>
        <div><span>Active</span><strong>326</strong><em>Live</em></div>
      </div>
      <div className="dash-chart"><AreaChart /></div>
    </div>
  </div>
);

export const LogisticsScreen: React.FC = () => (
  <div className="dash">
    <aside className="dash-side">
      <span className="dash-logo" />
      <span className="dash-ico on" />
      <span className="dash-ico" />
      <span className="dash-ico" />
      <span className="dash-ico" />
    </aside>
    <div className="dash-body">
      <div className="dash-top">
        <strong>DOME · Live routes</strong>
        <span>12 active</span>
      </div>
      <div className="route-layout">
        <div className="route-map" aria-hidden="true">
          <svg viewBox="0 0 360 200" preserveAspectRatio="none">
            <path d="M20 150 C 80 140, 90 80, 150 70 S 220 120, 250 60 320 40, 340 30" fill="none" stroke="#ff4d1c" strokeWidth="3" />
            <circle cx="40" cy="146" r="5" fill="#fff" />
            <circle cx="150" cy="70" r="5" fill="#ff4d1c" />
            <circle cx="250" cy="60" r="5" fill="#fff" />
            <circle cx="336" cy="32" r="6" fill="#ff4d1c" />
          </svg>
        </div>
        <ul className="route-list">
          <li><b>Route 14</b><span>On time</span></li>
          <li><b>Route 07</b><span>Loading</span></li>
          <li><b>Route 22</b><span>Delivered</span></li>
        </ul>
      </div>
    </div>
  </div>
);

export const PhonePair: React.FC = () => (
  <div className="phone-stage" aria-hidden="true">
    <div className="handset">
      <div className="handset-bar" />
      <div className="app-head">Today</div>
      <div className="job"><b>Job 1842</b><span>Compressor · 2.4 km</span></div>
      <div className="job"><b>Job 1848</b><span>Inspection · queued</span></div>
      <div className="job on"><b>Start visit</b><span>Offline ready</span></div>
    </div>
    <div className="handset front">
      <div className="handset-bar" />
      <div className="app-head">Matrix</div>
      <div className="job"><b>4 jobs</b><span>Assigned to you</span></div>
      <div className="sign-pad">Signature captured</div>
      <div className="job on"><b>Sync</b><span>3 pending</span></div>
    </div>
  </div>
);

const Shoe = ({ color }: { color: string }) => (
  <svg viewBox="0 0 120 70" aria-hidden="true">
    <path d="M8 46 C 18 28, 40 22, 62 26 C 78 18, 96 20, 112 32 L 112 50 C 90 58, 40 60, 10 52 Z" fill={color} />
    <path d="M18 46 H104" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
  </svg>
);

export const StoreScreen: React.FC = () => (
  <div className="storefront">
    <div className="store-top">
      <strong>Shoestops</strong>
      <span>New arrivals</span>
    </div>
    <div className="store-products">
      {[
        ['#f3efe8', '#1c1c1c', 'Court runner', '$128'],
        ['#f7f1ea', '#c4552d', 'Field low', '$156'],
        ['#ece7e1', '#d9d4cc', 'Studio white', '$142'],
        ['#e7e3dc', '#243044', 'Night trail', '$168']
      ].map(([bg, shoe, name, price]) => (
        <article key={name} style={{ background: bg }}>
          <Shoe color={shoe} />
          <b>{name}</b>
          <span>{price}</span>
        </article>
      ))}
    </div>
  </div>
);

export const LaptopFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="laptop">
    <div className="laptop-lid">
      <div className="laptop-cam" />
      <div className="laptop-screen">{children}</div>
    </div>
    <div className="laptop-base" />
  </div>
);

export const STUDIO_PHOTOS = {
  hero: '/studio/hero-laptop.jpg',
  dome: '/studio/dome-dashboard.jpg',
  phones: '/studio/matrix-phones.jpg',
  store: '/studio/shoestops-store.jpg',
  office: '/studio/studio-office.jpg',
  engineers: '/studio/engineers.jpg'
};

export const ProjectVisual: React.FC<{ slug: string }> = ({ slug }) => (
  <ProjectPoster slug={slug} />
);

export const ScenePhoto: React.FC<{ src: string; alt: string; className?: string; children?: React.ReactNode }> = ({
  src, alt, className = '', children
}) => (
  <div className={`scene-photo ${className}`}>
    <img src={src} alt={alt} />
    {children}
  </div>
);

const Logo = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <span className="tech-logo" title={label}>
    {children}
    <span>{label}</span>
  </span>
);

export const TechLogos: React.FC = () => (
  <div className="tech-logos" aria-label="Trusted technologies">
    <Logo label="React"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" fill="currentColor" /><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg></Logo>
    <Logo label="Next.js"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M8 16 V8 l8 8 M16 8 v5" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg></Logo>
    <Logo label="Node.js"><svg viewBox="0 0 24 24"><path d="M12 3 20 7.5 V16.5 L12 21 4 16.5 V7.5 Z" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M9 12.5 12 14.2 15 12.5 V9.8 L12 8.1 9 9.8 Z" fill="currentColor" /></svg></Logo>
    <Logo label="Python"><svg viewBox="0 0 24 24"><path d="M12 3c-3 0-3.2 1.4-3.2 3.2V8h6.3v1.2H7.2C5 9.2 4 10.6 4 13s1.2 3.6 3.4 3.6H9v-1.8c0-1.6 1.4-3 3.2-3h4.4c1.6 0 2.4-1.2 2.4-2.8C19 5.2 16.6 3 12 3Z" fill="currentColor" /><circle cx="10" cy="6.2" r="0.7" fill="#090909" /></svg></Logo>
    <Logo label="Flutter"><svg viewBox="0 0 24 24"><path d="M4 14.5 13.5 5 H20 L8 17 l2.2 2.2 L4 14.5Z" fill="currentColor" /><path d="M13.2 19.2 15.6 16.8 20 16.8 15.4 21.4 13.2 19.2Z" fill="currentColor" opacity="0.7" /></svg></Logo>
    <Logo label="PostgreSQL"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="6" ry="2.4" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M6 6 v8 c0 2 2.7 3.6 6 3.6 s6-1.6 6-3.6 V6" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M12 17.6 V21" stroke="currentColor" strokeWidth="1.4" /></svg></Logo>
    <Logo label="AWS"><svg viewBox="0 0 24 24"><path d="M6 15 c2 2.2 10 2.2 12 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M15.5 13.2 18 15 l-2.2 1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></Logo>
  </div>
);
