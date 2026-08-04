import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Bot } from 'lucide-react';
import LuxuryCard from './LuxuryCard';

export default function CTABanner({ onOpenDemo }) {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <LuxuryCard className="cta-banner-card shimmer-border" glowColor="rgba(249, 115, 22, 0.45)">
          {/* Ambient Background Gradient Mesh */}
          <div className="cta-mesh-blob blob-left"></div>
          <div className="cta-mesh-blob blob-right"></div>

          <div className="cta-content-wrapper">
            {/* Live Counter Badge */}
            <div className="cta-counter-badge">
              <span className="pulse-cyan"></span>
              <span>12,480,920+ AI Interactions Executed This Month</span>
            </div>

            <h2 className="cta-title">
              Ready to Automate Your Sales & Support <span className="gradient-text">with AI Agents?</span>
            </h2>

            <p className="cta-subtitle">
              Join over 4,000+ scaling companies using Veltrix to boost lead conversion by 380% and deflect 90%+ of routine support tickets.
            </p>

            {/* Action Buttons */}
            <div className="cta-button-group">
              <a href="#pricing" className="btn btn-primary btn-cta-large btn-pulse">
                <span>Start Free 14-Day Trial</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenDemo} className="btn btn-secondary btn-cta-secondary">
                <Bot size={18} /> Watch Live Product Tour
              </button>
            </div>

            {/* Trust Footer Notes */}
            <div className="cta-trust-notes">
              <span><ShieldCheck size={16} className="text-green" /> No Credit Card Required</span>
              <span><Zap size={16} className="text-cyan" /> 5-Minute Instant Setup</span>
              <span><Sparkles size={16} className="text-purple" /> SOC2 Type II Certified</span>
            </div>
          </div>
        </LuxuryCard>
      </div>

      <style>{`
        .cta-banner-section {
          padding: 6rem 0;
          position: relative;
        }

        .cta-banner-card {
          position: relative;
          padding: 5rem 3rem;
          text-align: center;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-hover);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5), var(--shadow-glow);
          overflow: hidden;
        }

        .cta-mesh-blob {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.25;
          pointer-events: none;
        }

        .blob-left {
          background: var(--accent-purple);
          top: -50px;
          left: -50px;
        }

        .blob-right {
          background: var(--accent-cyan);
          bottom: -50px;
          right: -50px;
        }

        .cta-content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 820px;
          margin: 0 auto;
        }

        .cta-counter-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.1rem;
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-bottom: 1.8rem;
        }

        .pulse-cyan {
          width: 8px;
          height: 8px;
          background: var(--accent-cyan);
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        .cta-title {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .cta-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .cta-button-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .btn-cta-large {
          padding: 1.05rem 2.4rem;
          font-size: 1.1rem;
        }

        .btn-cta-secondary {
          padding: 1rem 2rem;
          font-size: 1.05rem;
        }

        .cta-trust-notes {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }

        .cta-trust-notes span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        @media (max-width: 768px) {
          .cta-banner-card {
            padding: 3rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
