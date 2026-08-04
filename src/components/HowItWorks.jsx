import React, { useState } from 'react';
import { Database, Sliders, Rocket, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import LuxuryCard from './LuxuryCard';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNum: '01',
      icon: Database,
      title: 'Connect Your CRM & Data Sources',
      shortTitle: '1-Click Integration',
      desc: 'Connect HubSpot, Salesforce, Zendesk, Notion, or custom REST APIs in under 60 seconds with zero coding required.',
      details: [
        'Bi-directional synchronization for real-time contact updates',
        'Automatic indexing of product documentation & KB articles',
        'Bank-grade AES-256 encryption for data privacy'
      ],
      previewImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80'
    },
    {
      stepNum: '02',
      icon: Sliders,
      title: 'Configure AI Personas & Guardrails',
      shortTitle: 'Visual Agent Builder',
      desc: 'Use our no-code prompt builder to define agent tone, brand voice, escalation thresholds, and custom tool permissions.',
      details: [
        'Pre-trained sales SDR & support agent templates',
        'Strict hallucination guardrails & policy filters',
        'Human-in-the-loop approval triggers for enterprise deals'
      ],
      previewImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80'
    },
    {
      stepNum: '03',
      icon: Rocket,
      title: 'Deploy Agents & Scale Revenue 24/7',
      shortTitle: 'Autonomous Execution',
      desc: 'Activate agents across Web, Email, and WhatsApp. Watch leads qualify, support tickets resolve, and conversions soar.',
      details: [
        'Real-time SLA radar and agent response speed monitoring',
        'Automated post-conversation summary reports sent to Slack',
        'Continuous self-learning from top-performing human interactions'
      ],
      previewImg: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} /> Simple Setup
          </div>
          <h2 className="section-title">
            Deployed in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="section-subtitle">
            From zero to fully autonomous AI agents handling customer conversations in less than 15 minutes.
          </p>
        </div>

        {/* Steps Navigation Line & Selector */}
        <div className="steps-nav-bar">
          <div className="connecting-line">
            <div className="connecting-line-progress" style={{ width: `${(activeStep / 2) * 100}%` }}></div>
          </div>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <button
                key={idx}
                className={`step-nav-btn ${idx === activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="step-badge-num">{step.stepNum}</div>
                <span className="step-nav-title">{step.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Step Active Detail View */}
        <LuxuryCard className="step-active-card" glowColor="rgba(208, 91, 55, 0.3)">
          <div className="step-content-col">
            <div className="step-header">
              <span className="step-big-tag">STEP {steps[activeStep].stepNum}</span>
              <h3 className="step-main-title">{steps[activeStep].title}</h3>
              <p className="step-main-desc">{steps[activeStep].desc}</p>
            </div>

            <ul className="step-checklist">
              {steps[activeStep].details.map((detail, dIdx) => (
                <li key={dIdx}>
                  <CheckCircle size={18} className="check-icon" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="step-action-row">
              <a href="#pricing" className="btn btn-primary">
                <span>Try Step {activeStep + 1} Free</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="step-preview-col">
            <div className="step-image-frame">
              <img 
                src={steps[activeStep].previewImg} 
                alt={steps[activeStep].title} 
                className="step-img"
              />
              <div className="img-overlay-glow"></div>
              <div className="step-floating-badge">
                <span className="pulse-green"></span> System Ready & Configured
              </div>
            </div>
          </div>
        </LuxuryCard>
      </div>

      <style>{`
        .how-it-works-section {
          padding: 7rem 0;
          background: rgba(0, 0, 0, 0.1);
          border-top: 1px solid var(--border-color);
          position: relative;
        }

        .steps-nav-bar {
          position: relative;
          display: flex;
          justify-content: space-between;
          max-width: 850px;
          margin: 0 auto 3.5rem auto;
        }

        .connecting-line {
          position: absolute;
          top: 24px;
          left: 10%;
          right: 10%;
          height: 3px;
          background: var(--border-color);
          z-index: 1;
        }

        .connecting-line-progress {
          height: 100%;
          background: var(--gradient-primary);
          transition: width 0.4s ease;
        }

        .step-nav-btn {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .step-badge-num {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .step-nav-btn.active .step-badge-num {
          background: var(--gradient-primary);
          border-color: transparent;
          color: white;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
          transform: scale(1.1);
        }

        .step-nav-title {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .step-nav-btn.active .step-nav-title {
          color: var(--text-primary);
        }

        .step-active-card {
          padding: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .step-big-tag {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--accent-cyan);
          margin-bottom: 0.5rem;
          display: block;
        }

        .step-main-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .step-main-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.8rem;
        }

        .step-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .step-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .check-icon {
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .step-preview-col {
          position: relative;
        }

        .step-image-frame {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .step-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .step-image-frame:hover .step-img {
          transform: scale(1.05);
        }

        .img-overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(7, 9, 19, 0.8) 100%);
        }

        .step-floating-badge {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          background: rgba(18, 24, 52, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .pulse-green {
          width: 8px;
          height: 8px;
          background: var(--accent-green);
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @media (max-width: 992px) {
          .step-active-card {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .how-it-works-section {
            padding: 5rem 0;
          }
          .steps-nav-bar {
            margin-bottom: 2rem;
            padding: 0 0.5rem;
          }
          .step-badge-num {
            width: 40px;
            height: 40px;
            font-size: 0.95rem;
          }
          .connecting-line {
            top: 20px;
          }
          .step-nav-title {
            font-size: 0.75rem;
            text-align: center;
          }
          .step-active-card {
            padding: 1.5rem 1rem;
          }
          .step-main-title {
            font-size: 1.4rem;
          }
          .step-img {
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
}
