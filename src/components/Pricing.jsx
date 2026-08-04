import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight, HelpCircle, Shield } from 'lucide-react';
import LuxuryCard from './LuxuryCard';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showMatrix, setShowMatrix] = useState(false);

  const plans = [
    {
      name: 'Starter',
      subtitle: 'Ideal for early-stage startups automating initial inbound leads & support.',
      monthlyPrice: 49,
      annualPrice: 39,
      popular: false,
      ctaText: 'Start Free Trial',
      features: [
        'Up to 3 Active AI Agents',
        '2,500 Conversations / mo',
        'Web Chat & Email Integration',
        'HubSpot & Notion CRM Sync',
        'Standard RAG Vector Memory',
        'Email & Chat Support'
      ]
    },
    {
      name: 'Growth (Pro)',
      subtitle: 'For scaling teams that need multi-agent sales SDRs and omnichannel support.',
      monthlyPrice: 149,
      annualPrice: 119,
      popular: true,
      ctaText: 'Start 14-Day Free Trial',
      features: [
        'Up to 15 Active AI Agents',
        '15,000 Conversations / mo',
        'Omnichannel (Web, WhatsApp, Slack, Email)',
        'Native Salesforce, HubSpot & Zendesk',
        'Autonomous Calendar Booking',
        'Human Handoff & Dossier Summary',
        'SOC2 Type II & Custom Guardrails',
        'Dedicated Success Manager'
      ]
    },
    {
      name: 'Enterprise',
      subtitle: 'For large orgs requiring dedicated infrastructure, SLA, & custom LLM tuning.',
      monthlyPrice: 499,
      annualPrice: 399,
      popular: false,
      ctaText: 'Contact Enterprise Sales',
      features: [
        'Unlimited AI Agents & Workflows',
        'Custom Conversation Volume',
        'Fine-Tuned Proprietary LLM Model',
        'On-Premise / Private Cloud VPC Deploy',
        'Zero Data Retention Guarantee',
        '24/7 Priority SLA & Dedicated Solutions Engineer'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Zap size={14} /> Transparent Pricing
          </div>
          <h2 className="section-title">
            Simple Plans with <span className="gradient-text">Predictable ROI</span>
          </h2>
          <p className="section-subtitle">
            Scale your AI workforce risk-free with a 14-day free trial. No credit card required.
          </p>

          {/* Billing Toggle Switch */}
          <div className="toggle-wrapper">
            <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Billed Monthly</span>
            <button 
              className={`toggle-switch ${isAnnual ? 'annual' : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle Billing Interval"
            >
              <div className="toggle-thumb" />
            </button>
            <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
              Billed Yearly
              <span className="discount-badge">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <LuxuryCard 
                key={plan.name} 
                className={`pricing-card ${plan.popular ? 'popular-card shimmer-border' : ''}`}
                glowColor={plan.popular ? 'rgba(249, 115, 22, 0.4)' : 'rgba(208, 91, 55, 0.2)'}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Sparkles size={14} /> Most Popular Tier
                  </div>
                )}

                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-sub">{plan.subtitle}</p>

                {/* Price Display */}
                <div className="price-box">
                  <span className="currency">$</span>
                  <span className="amount">{price}</span>
                  <span className="period">/ month</span>
                </div>
                {isAnnual && <div className="billing-note">Billed annually (${price * 12}/yr)</div>}

                {/* CTA Button */}
                <a 
                  href="#pricing" 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-pricing-cta`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </a>

                {/* Features List */}
                <div className="plan-features">
                  <div className="features-title">Includes Everything In:</div>
                  <ul className="feature-list">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <Check size={16} className="check-icon-cyan" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </LuxuryCard>
            );
          })}
        </div>

        {/* Toggle Full Matrix Button */}
        <div className="matrix-toggle-row">
          <button 
            className="btn btn-secondary matrix-btn"
            onClick={() => setShowMatrix(!showMatrix)}
          >
            {showMatrix ? 'Hide Full Feature Comparison' : 'Compare All Features & Limits'}
          </button>
        </div>

        {/* Feature Comparison Matrix Drawer */}
        {showMatrix && (
          <div className="matrix-drawer glass-card">
            <h4 className="matrix-heading">Complete Feature Comparison Matrix</h4>
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Starter</th>
                  <th>Growth (Pro)</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Active Agents</td>
                  <td>3</td>
                  <td>15</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Monthly Conversations</td>
                  <td>2,500</td>
                  <td>15,000</td>
                  <td>Custom Unlimited</td>
                </tr>
                <tr>
                  <td>Vector KB Storage</td>
                  <td>5 GB</td>
                  <td>50 GB</td>
                  <td>1 TB+ Dedicated</td>
                </tr>
                <tr>
                  <td>Custom Guardrails</td>
                  <td>Basic</td>
                  <td>Advanced Policy Filter</td>
                  <td>Custom Rules Engine</td>
                </tr>
                <tr>
                  <td>Dedicated VPC Deployment</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✓ Supported</td>
                </tr>
                <tr>
                  <td>Support SLA</td>
                  <td>24-hour Email</td>
                  <td>4-hour Chat & Email</td>
                  <td>15-min Dedicated Engineer</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style>{`
        .pricing-section {
          padding: 7rem 0;
          position: relative;
        }

        .toggle-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          margin-top: 1.5rem;
        }

        .toggle-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .toggle-label.active {
          color: var(--text-primary);
          font-weight: 600;
        }

        .discount-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          background: rgba(16, 185, 129, 0.2);
          color: var(--accent-green);
          border-radius: var(--radius-full);
        }

        .toggle-switch {
          width: 50px;
          height: 26px;
          background: rgba(255,255,255,0.1);
          border-radius: 13px;
          padding: 3px;
          transition: background 0.3s ease;
        }

        .toggle-switch.annual {
          background: var(--accent-purple);
        }

        .toggle-thumb {
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        .toggle-switch.annual .toggle-thumb {
          transform: translateX(24px);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.2rem;
          align-items: stretch;
          margin-top: 2rem;
        }

        .pricing-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .popular-card {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 40px rgba(6, 182, 212, 0.25);
          transform: scale(1.03);
          z-index: 2;
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gradient-primary);
          color: white;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.35rem 1.1rem;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .plan-name {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .plan-sub {
          font-size: 0.88rem;
          color: var(--text-secondary);
          min-height: 42px;
          margin-bottom: 1.5rem;
        }

        .price-box {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
          margin-bottom: 0.25rem;
        }

        .currency {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .amount {
          font-size: 3.2rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--text-primary);
          line-height: 1;
        }

        .period {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .billing-note {
          font-size: 0.78rem;
          color: var(--accent-cyan);
          margin-bottom: 1.8rem;
        }

        .btn-pricing-cta {
          width: 100%;
          padding: 0.85rem;
          font-size: 0.98rem;
          margin-bottom: 2rem;
        }

        .plan-features {
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
          flex-grow: 1;
        }

        .features-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .check-icon-cyan {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .matrix-toggle-row {
          text-align: center;
          margin-top: 3.5rem;
        }

        .matrix-btn {
          font-size: 0.95rem;
          padding: 0.75rem 1.8rem;
        }

        .matrix-drawer {
          margin-top: 2rem;
          padding: 2.5rem;
          overflow-x: auto;
        }

        .matrix-heading {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .matrix-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .matrix-table th, .matrix-table td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.9rem;
        }

        .matrix-table th {
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .matrix-table td {
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .popular-card {
            transform: none;
          }
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .pricing-section {
            padding: 5rem 0;
          }
          .pricing-card {
            padding: 2rem 1.25rem;
          }
          .amount {
            font-size: 2.6rem;
          }
          .matrix-drawer {
            padding: 1.25rem 0.85rem;
            -webkit-overflow-scrolling: touch;
          }
          .matrix-table th, .matrix-table td {
            padding: 0.75rem 0.65rem;
            font-size: 0.82rem;
            white-space: nowrap;
          }
          .toggle-wrapper {
            flex-direction: column;
            gap: 0.6rem;
            border-radius: var(--radius-md);
            padding: 0.85rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
