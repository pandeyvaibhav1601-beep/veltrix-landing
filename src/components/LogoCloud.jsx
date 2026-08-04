import React from 'react';
import { Cpu, Globe, Layers, Zap, Database, Shield, Radio, Activity } from 'lucide-react';

export default function LogoCloud() {
  const companies = [
    { name: 'Nexus AI', icon: Cpu },
    { name: 'Omniflow', icon: Layers },
    { name: 'HyperScale', icon: Zap },
    { name: 'CloudPulse', icon: Globe },
    { name: 'DataSphere', icon: Database },
    { name: 'Synthetix', icon: Shield },
    { name: 'Velocity', icon: Radio },
    { name: 'Apex Global', icon: Activity },
  ];

  return (
    <section className="logo-cloud-section">
      <div className="container">
        <p className="logo-cloud-heading">
          TRUSTED BY OVER <span className="highlight-count">4,000+</span> LEADING REVENUE & SUPPORT TEAMS WORLDWIDE
        </p>
      </div>

      {/* Marquee Slider Wrapper */}
      <div className="marquee-container">
        <div className="marquee-fade-left"></div>
        <div className="marquee-track">
          {/* Double list for seamless 100% infinite scroll */}
          {[...companies, ...companies].map((company, index) => {
            const Icon = company.icon;
            return (
              <div key={index} className="logo-item glass-card">
                <Icon size={22} className="logo-icon" />
                <span className="logo-text">{company.name}</span>
              </div>
            );
          })}
        </div>
        <div className="marquee-fade-right"></div>
      </div>

      <style>{`
        .logo-cloud-section {
          padding: 4rem 0;
          position: relative;
          background: rgba(0, 0, 0, 0.15);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          overflow: hidden;
        }

        .logo-cloud-heading {
          text-align: center;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }

        .highlight-count {
          color: var(--accent-cyan);
        }

        .marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 0.5rem 0;
        }

        .marquee-fade-left,
        .marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-fade-left {
          left: 0;
          background: linear-gradient(90deg, var(--bg-primary) 0%, transparent 100%);
        }

        .marquee-fade-right {
          right: 0;
          background: linear-gradient(270deg, var(--bg-primary) 0%, transparent 100%);
        }

        .logo-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.75rem;
          margin: 0 0.8rem;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 600;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .logo-item:hover {
          color: var(--text-primary);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .logo-icon {
          color: var(--accent-purple);
        }
      `}</style>
    </section>
  );
}
