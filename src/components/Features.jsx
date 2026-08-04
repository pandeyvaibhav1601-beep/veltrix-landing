import React from 'react';
import { Bot, Zap, MessageSquare, Target, UserCheck, ShieldCheck, ArrowUpRight } from 'lucide-react';
import LuxuryCard from './LuxuryCard';

export default function Features() {
  const featureList = [
    {
      icon: Bot,
      tag: 'Autonomous Sales',
      title: 'Autonomous AI Sales SDRs',
      desc: 'Deploy virtual SDRs that research prospects, send hyper-personalized outreach, handle objections, and book qualified meetings 24/7.',
      metric: '3.8x Meeting Rate',
      color: 'purple'
    },
    {
      icon: Zap,
      tag: 'Instant Support',
      title: 'Sub-Second Ticket Resolution',
      desc: 'Resolve 90%+ of routine support requests instantly with self-healing RAG knowledge retrieval and multi-step action execution.',
      metric: '< 300ms Response Time',
      color: 'cyan'
    },
    {
      icon: MessageSquare,
      tag: 'Omnichannel',
      title: 'Unified Channel Presence',
      desc: 'Engage customers seamlessly across Web Chat, WhatsApp, Email, Slack, SMS, and In-App widgets without losing conversational context.',
      metric: '6+ Unified Channels',
      color: 'pink'
    },
    {
      icon: Target,
      tag: 'Smart Intelligence',
      title: 'Predictive Lead Intent Scoring',
      desc: 'Real-time sentiment and buying intent analysis automatically updates CRM deal stage, prioritizing hot leads for executive closing.',
      metric: '99.4% Intent Accuracy',
      color: 'indigo'
    },
    {
      icon: UserCheck,
      tag: 'Human Handoff',
      title: 'Seamless Agent Co-pilot Handoff',
      desc: 'When high-stakes situations arise, AI agents generate 1-second summary dossiers and transfer conversations smoothly to human reps.',
      metric: 'Zero Context Loss',
      color: 'green'
    },
    {
      icon: ShieldCheck,
      tag: 'Enterprise Trust',
      title: 'Custom AI Guardrails & SOC2',
      desc: 'Strict hallucination prevention, SOC2 Type II compliance, zero data-retention training options, and custom brand policy guardrails.',
      metric: 'SOC2 Type II Certified',
      color: 'cyan'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Zap size={14} /> Core Capabilities
          </div>
          <h2 className="section-title">
            Engineered for High-Velocity <span className="gradient-text">Revenue & Operations</span>
          </h2>
          <p className="section-subtitle">
            Veltrix combines multi-agent orchestration, live vector memory, and enterprise guardrails into a single intelligent platform.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="features-grid">
          {featureList.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <LuxuryCard 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Top Badge & Metric */}
                <div className="card-top-row">
                  <span className={`feat-tag tag-${feat.color}`}>{feat.tag}</span>
                  <span className="feat-metric">{feat.metric}</span>
                </div>

                {/* Animated Icon Container */}
                <div className={`feat-icon-box box-${feat.color}`}>
                  <Icon size={26} className="feat-icon-svg" />
                </div>

                {/* Content */}
                <h3 className="feat-title">{feat.title}</h3>
                <p className="feat-desc">{feat.desc}</p>

                {/* Bottom Action Link */}
                <div className="feat-footer">
                  <span className="feat-link-text">Explore feature capabilities</span>
                  <ArrowUpRight size={16} className="feat-arrow" />
                </div>
              </LuxuryCard>
            );
          })}
        </div>
      </div>

      <style>{`
        .features-section {
          padding: 7rem 0;
          position: relative;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--gradient-primary);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .feat-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .tag-purple { background: rgba(208, 91, 55, 0.18); color: var(--accent-fire-light); }
        .tag-cyan { background: rgba(249, 115, 22, 0.18); color: #f97316; }
        .tag-pink { background: rgba(236, 72, 153, 0.15); color: var(--accent-pink); }
        .tag-indigo { background: rgba(208, 91, 55, 0.22); color: #ffd3c6; }
        .tag-green { background: rgba(16, 185, 129, 0.15); color: var(--accent-green); }

        .feat-metric {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .feat-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .box-purple { background: rgba(208, 91, 55, 0.18); color: var(--accent-fire-light); }
        .box-cyan { background: rgba(249, 115, 22, 0.18); color: #f97316; }
        .box-pink { background: rgba(236, 72, 153, 0.15); color: var(--accent-pink); }
        .box-indigo { background: rgba(208, 91, 55, 0.22); color: #ffd3c6; }
        .box-green { background: rgba(16, 185, 129, 0.15); color: var(--accent-green); }

        .feature-card:hover .feat-icon-box {
          transform: scale(1.12) rotate(6deg);
        }

        .feat-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.85rem;
          color: var(--text-primary);
        }

        .feat-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.8rem;
          flex-grow: 1;
        }

        .feat-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-cyan);
          transition: gap 0.2s ease;
        }

        .feature-card:hover .feat-footer {
          gap: 0.75rem;
        }

        .feat-arrow {
          transition: transform 0.2s ease;
        }

        .feature-card:hover .feat-arrow {
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
}
