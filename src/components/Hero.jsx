import React from 'react';
import { Play, ArrowRight, ShieldCheck, Zap, TrendingUp, CheckCircle, Activity } from 'lucide-react';
import HeroImageSequence from './HeroImageSequence';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="hero-section">
      {/* Background 3D Video Sequence Canvas */}
      <div className="hero-bg-video-wrapper">
        <HeroImageSequence isBackground={true} />
        <div className="hero-bg-overlay"></div>
      </div>

      {/* Background Ambient Glowing Orbs */}
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>

      <div className="container hero-container">
        {/* Parallax Floating Stat Card Left */}
        <div className="floating-stat-card stat-left floating">
          <div className="stat-icon-wrapper bg-green">
            <TrendingUp size={20} />
          </div>
          <div className="stat-details">
            <span className="stat-value">+380%</span>
            <span className="stat-label">Lead Qualification Velocity</span>
          </div>
        </div>

        {/* Parallax Floating Stat Card Right */}
        <div className="floating-stat-card stat-right floating" style={{ animationDelay: '1.5s' }}>
          <div className="stat-icon-wrapper bg-purple">
            <Activity size={20} />
          </div>
          <div className="stat-details">
            <span className="stat-value">94.2%</span>
            <span className="stat-label">First-Contact Resolution</span>
          </div>
        </div>

        {/* Top Announcement Badge */}
        <div className="hero-badge animate-fade-in">
          <span className="badge-icon"><Zap size={14} /></span>
          <span className="badge-text">Veltrix 2.0: Next-Gen 3D Multi-Agent Sequence Engine</span>
          <span className="badge-arrow">→</span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="hero-title animate-slide-up">
          Autonomous AI Agents That Scale Your <span className="gradient-text">Sales & Support 24/7</span>
        </h1>

        {/* Hero Subheadline */}
        <p className="hero-subtitle animate-slide-up-delay">
          Deploy intelligent virtual agents to handle lead qualification, ticket resolution, and personalized outbound campaigns with human-grade empathy and sub-second execution.
        </p>

        {/* Mobile Stat Pills (Visible on mobile/tablets where floating cards are hidden) */}
        <div className="mobile-stats-row">
          <div className="mobile-stat-pill">
            <TrendingUp size={16} className="text-green" />
            <span><strong>+380%</strong> Lead Velocity</span>
          </div>
          <div className="mobile-stat-pill">
            <Activity size={16} className="text-purple" />
            <span><strong>94.2%</strong> Resolution</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="hero-cta-group animate-slide-up-delay-2">
          <a href="#pricing" className="btn btn-primary btn-hero-primary btn-pulse">
            <span>Start Free 14-Day Trial</span>
            <ArrowRight size={18} />
          </a>

          <button onClick={onOpenDemo} className="btn btn-secondary btn-hero-secondary">
            <div className="play-icon-circle">
              <Play size={16} fill="currentColor" />
            </div>
            <span>Watch Live Demo (2 Min)</span>
          </button>
        </div>

        {/* Social Proof Trust Pills */}
        <div className="hero-trust-bar">
          <div className="trust-item"><CheckCircle size={16} className="trust-icon" /> No Credit Card Required</div>
          <div className="trust-item"><ShieldCheck size={16} className="trust-icon" /> SOC2 Type II Certified</div>
          <div className="trust-item"><Zap size={16} className="trust-icon" /> Setup in Under 5 Minutes</div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 85dvh;
          padding: 9rem 0 5rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-bg-video-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: 
            radial-gradient(circle at 50% 45%, rgba(4, 3, 13, 0.1) 0%, rgba(4, 3, 13, 0.35) 60%, rgba(4, 3, 13, 0.7) 100%),
            linear-gradient(180deg, rgba(4, 3, 13, 0.35) 0%, rgba(4, 3, 13, 0.1) 40%, rgba(4, 3, 13, 0.65) 100%);
          pointer-events: none;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          background: rgba(18, 14, 42, 0.65);
          border: 1px solid rgba(99, 102, 241, 0.4);
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 1.8rem;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .badge-icon {
          color: var(--accent-cyan);
          display: flex;
        }

        .badge-arrow {
          color: var(--accent-purple);
          font-weight: bold;
        }

        .hero-title {
          font-size: clamp(2.2rem, 5.5vw, 4.5rem);
          font-weight: 800;
          max-width: 950px;
          margin-bottom: 1.5rem;
          line-height: 1.15;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.85);
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.35rem);
          color: rgba(240, 240, 255, 0.92);
          max-width: 780px;
          margin-bottom: 2rem;
          line-height: 1.6;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 0.9);
        }

        .mobile-stats-row {
          display: none;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .mobile-stat-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.9rem;
          background: rgba(18, 14, 42, 0.8);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          color: var(--text-secondary);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
        }

        .btn-hero-primary {
          padding: 1rem 2.2rem;
          font-size: 1.1rem;
          touch-action: manipulation;
        }

        .btn-hero-secondary {
          padding: 0.95rem 2rem;
          font-size: 1.05rem;
          gap: 0.75rem;
          touch-action: manipulation;
        }

        .play-icon-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--accent-purple);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 2px;
        }

        .hero-trust-bar {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .trust-icon {
          color: var(--accent-green);
        }

        /* Floating Stat Cards Parallax Effect */
        .floating-stat-card {
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1.2rem;
          background: var(--bg-card);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          min-width: 220px;
        }

        .stat-left {
          top: 15%;
          left: -40px;
        }

        .stat-right {
          bottom: 12%;
          right: -40px;
        }

        .stat-icon-wrapper {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .bg-green { background: rgba(16, 185, 129, 0.2); color: var(--accent-green); }
        .bg-purple { background: rgba(99, 102, 241, 0.2); color: var(--accent-purple); }

        .stat-value {
          display: block;
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .floating-stat-card {
            display: none;
          }
          .mobile-stats-row {
            display: flex;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 6.5rem 0 3.5rem 0;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .btn-hero-primary, .btn-hero-secondary {
            width: 100%;
          }
          .hero-trust-bar {
            gap: 0.85rem;
            flex-direction: column;
          }
          .hero-badge {
            font-size: 0.78rem;
            padding: 0.35rem 0.8rem;
            max-width: 95%;
          }
        }
      `}</style>
    </section>
  );
}
