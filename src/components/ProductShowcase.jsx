import React, { useState } from 'react';
import { Bot, Headphones, Workflow, BarChart3, Check, Sparkles, Send, ShieldAlert, Cpu } from 'lucide-react';
import LuxuryCard from './LuxuryCard';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'sdr',
      title: 'AI SDR Lead Gen',
      icon: Bot,
      heading: 'Qualify Inbound Leads & Book Executive Demos Automatically',
      desc: 'Veltrix AI SDR engages web visitors, analyzes company firmographics, handles pricing questions, and schedules calendar appointments with zero latency.',
      highlights: [
        'Automatic firmographic lookup (Company size, Tech stack, Funding)',
        'Objection handling backed by customer case studies',
        'Direct Integration with Google Calendar, Outlook, and Calendly'
      ],
      metrics: [
        { label: 'Qualified Rate', val: '64.2%' },
        { label: 'Booking Speed', val: '45 sec' },
        { label: 'No-Show Reduction', val: '-42%' }
      ],
      mockContent: (
        <div className="tab-mockup-inner">
          <div className="mockup-header-bar">
            <span className="pill-blue"><Bot size={12} /> Autonomous SDR Mode</span>
            <span className="text-muted-xs">Active Lead: Stripe Inc (Series D)</span>
          </div>
          <div className="chat-preview-box">
            <div className="chat-row bot-row">
              <div className="avatar-icon"><Bot size={16} /></div>
              <div className="chat-text">"Hi Mark! I noticed Stripe is expanding its APAC support team. Would you like to see how Veltrix automates 90% of localized ticket queries?"</div>
            </div>
            <div className="chat-row user-row">
              <div className="chat-text">"Interesting. Does it support Japanese and Korean multi-lingual models natively?"</div>
            </div>
            <div className="chat-row bot-row">
              <div className="avatar-icon"><Bot size={16} /></div>
              <div className="chat-text">"Yes! 95+ languages natively with sub-second translation. I can schedule a 10-min live demo with our Lead Solutions Architect for tomorrow 3 PM JST."</div>
            </div>
          </div>
          <div className="action-banner">
            <Check size={16} className="text-green" /> Calendar Invitation Sent to mark@stripe.com (Confirmed)
          </div>
        </div>
      )
    },
    {
      id: 'support',
      title: '24/7 Support Copilot',
      icon: Headphones,
      heading: 'Instant Ticket Deflection & Multi-Step Resolution',
      desc: 'Equip your support org with an AI copilot that retrieves answers from documentation, triggers refund webhooks, and updates ticket status automatically.',
      highlights: [
        'RAG Vector Memory connected to your internal documentation',
        'Automated API action triggers (Order tracking, Password reset, Refunds)',
        'Sentiment gauge with immediate human agent escalation'
      ],
      metrics: [
        { label: 'Deflection Rate', val: '91.8%' },
        { label: 'CSAT Rating', val: '4.9/5' },
        { label: 'Resolution Time', val: '1.2 min' }
      ],
      mockContent: (
        <div className="tab-mockup-inner">
          <div className="mockup-header-bar">
            <span className="pill-purple"><Headphones size={12} /> Support Copilot Live</span>
            <span className="text-muted-xs">Ticket #9042 • Priority: High</span>
          </div>
          <div className="support-ticket-view">
            <div className="ticket-info">
              <span className="issue-tag">API Authentication Error 401</span>
              <span className="sentiment-badge good">Sentiment: Calm</span>
            </div>
            <div className="ai-solution-box">
              <div className="box-title"><Sparkles size={14} /> Recommended Action Executed</div>
              <p className="box-desc">Rotated API key via Secret Manager webhook and verified webhooks endpoint latency.</p>
              <div className="code-snippet">
                <code>STATUS 200 OK — Key regenerated and verified in 180ms</code>
              </div>
            </div>
          </div>
          <div className="action-banner">
            <Check size={16} className="text-green" /> Ticket #9042 Marked Resolved & Customer CSAT Survey Sent
          </div>
        </div>
      )
    },
    {
      id: 'workflows',
      title: 'Workflow Builder',
      icon: Workflow,
      heading: 'Visual Drag-and-Drop Multi-Agent Workflows',
      desc: 'Orchestrate complex business logic by chaining special-purpose agents together. Pass context effortlessly between Sales, Tech Support, and Operations.',
      highlights: [
        'Visual node canvas with conditional logic branches',
        'Built-in Webhooks, Zapier, and Make.com connectors',
        'A/B testing prompt variations in production'
      ],
      metrics: [
        { label: 'Active Workflows', val: '24 Nodes' },
        { label: 'Trigger Speed', val: '12ms' },
        { label: 'Uptime SLA', val: '99.99%' }
      ],
      mockContent: (
        <div className="tab-mockup-inner">
          <div className="mockup-header-bar">
            <span className="pill-cyan"><Workflow size={12} /> Canvas: VIP Lead Nurture Flow</span>
            <span className="text-muted-xs">Status: Active (1.4k triggers/hr)</span>
          </div>
          <div className="workflow-nodes-preview">
            <div className="node-box">Trigger: Webhook Inbound</div>
            <div className="node-connector">→</div>
            <div className="node-box highlight-purple">AI Intent Filter</div>
            <div className="node-connector">→</div>
            <div className="node-box highlight-cyan">CRM Deal Create</div>
          </div>
          <div className="action-banner">
            <Cpu size={16} className="text-cyan" /> Multi-Agent Chain Executing 14 Parallel Sub-tasks
          </div>
        </div>
      )
    },
    {
      id: 'analytics',
      title: 'Live ROI Analytics',
      icon: BarChart3,
      heading: 'Granular Insights into Revenue Lift & Cost Deflection',
      desc: 'Track exact ROI generated by your virtual workforce. Monitor conversion velocity, cost-per-ticket metrics, and conversation analytics in real time.',
      highlights: [
        'Real-time cost savings calculator vs traditional headcount',
        'Topic clustering analysis highlighting common customer friction',
        'Exportable executive reports for C-suite alignment'
      ],
      metrics: [
        { label: 'Monthly Saved', val: '$48,200' },
        { label: 'ROI Multiple', val: '14.2x' },
        { label: 'Conversations', val: '184.5k' }
      ],
      mockContent: (
        <div className="tab-mockup-inner">
          <div className="mockup-header-bar">
            <span className="pill-green"><BarChart3 size={12} /> Executive ROI Radar</span>
            <span className="text-muted-xs">Period: Last 30 Days</span>
          </div>
          <div className="analytics-bars-group">
            <div className="chart-bar-item">
              <span className="bar-label">Inbound Sales Lift</span>
              <div className="bar-outer"><div className="bar-inner" style={{ width: '85%' }}></div></div>
              <span className="bar-val">+340%</span>
            </div>
            <div className="chart-bar-item">
              <span className="bar-label">Support Deflection</span>
              <div className="bar-outer"><div className="bar-inner bg-cyan" style={{ width: '92%' }}></div></div>
              <span className="bar-val">92%</span>
            </div>
          </div>
          <div className="action-banner">
            <Check size={16} className="text-green" /> Total Labor Cost Reduction Calculated: $578,400 / Year
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="showcase" className="showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} /> Product Deep-Dive
          </div>
          <h2 className="section-title">
            One Platform, Unlimited <span className="gradient-text">Agent Potential</span>
          </h2>
          <p className="section-subtitle">
            Switch tabs to explore how Veltrix transforms every touchpoint of your customer lifecycle.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="showcase-tabs">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab-btn ${idx === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <Icon size={18} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Display */}
        <LuxuryCard className="showcase-display" glowColor="rgba(249, 115, 22, 0.3)">
          <div className="showcase-info-col">
            <h3 className="showcase-heading">{tabs[activeTab].heading}</h3>
            <p className="showcase-desc">{tabs[activeTab].desc}</p>

            <ul className="showcase-bullets">
              {tabs[activeTab].highlights.map((item, i) => (
                <li key={i}>
                  <Check size={16} className="bullet-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Key Metrics Row */}
            <div className="metrics-row">
              {tabs[activeTab].metrics.map((m, mIdx) => (
                <div key={mIdx} className="metric-pill">
                  <span className="m-val">{m.val}</span>
                  <span className="m-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Screen Preview */}
          <div className="showcase-screen-col">
            <div className="screen-frame">
              {tabs[activeTab].mockContent}
            </div>
          </div>
        </LuxuryCard>
      </div>

      <style>{`
        .showcase-section {
          padding: 7rem 0;
          position: relative;
        }

        .showcase-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.6rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .tab-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-purple);
        }

        .tab-btn.active {
          background: var(--gradient-primary);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
        }

        .showcase-display {
          padding: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .showcase-heading {
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .showcase-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.8rem;
        }

        .showcase-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .showcase-bullets li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }

        .bullet-check {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .metrics-row {
          display: flex;
          gap: 1rem;
        }

        .metric-pill {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border-color);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-sm);
          flex: 1;
        }

        .m-val {
          display: block;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--accent-cyan);
          font-family: var(--font-heading);
        }

        .m-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .screen-frame {
          background: #090d22;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          min-height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .mockup-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 1.25rem;
        }

        .pill-blue {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.65rem;
          background: rgba(99, 102, 241, 0.2);
          color: var(--accent-purple);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .pill-purple {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.65rem;
          background: rgba(168, 85, 247, 0.2);
          color: #c084fc;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .pill-cyan {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.65rem;
          background: rgba(6, 182, 212, 0.2);
          color: var(--accent-cyan);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .pill-green {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.65rem;
          background: rgba(16, 185, 129, 0.2);
          color: var(--accent-green);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .text-muted-xs {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .chat-preview-box {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .chat-row {
          display: flex;
          gap: 0.75rem;
          font-size: 0.85rem;
        }

        .bot-row .chat-text {
          background: rgba(99, 102, 241, 0.12);
          padding: 0.75rem 1rem;
          border-radius: 12px;
          color: var(--text-primary);
        }

        .user-row {
          justify-content: flex-end;
        }

        .user-row .chat-text {
          background: rgba(6, 182, 212, 0.12);
          padding: 0.75rem 1rem;
          border-radius: 12px;
          color: var(--text-primary);
        }

        .avatar-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .action-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--accent-green);
          font-weight: 500;
        }

        .support-ticket-view {
          margin-bottom: 1.25rem;
        }

        .issue-tag {
          font-weight: 600;
          color: #f87171;
          font-size: 0.85rem;
        }

        .sentiment-badge {
          float: right;
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-green);
          border-radius: var(--radius-full);
        }

        .ai-solution-box {
          margin-top: 1rem;
          background: rgba(255,255,255,0.03);
          padding: 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        .box-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.4rem;
        }

        .box-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 0.6rem;
        }

        .code-snippet {
          background: #000;
          padding: 0.5rem;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.75rem;
          color: #34d399;
        }

        .workflow-nodes-preview {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
          justify-content: center;
        }

        .node-box {
          padding: 0.75rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .highlight-purple {
          border-color: var(--accent-purple);
          color: var(--text-primary);
          background: rgba(99, 102, 241, 0.2);
        }

        .highlight-cyan {
          border-color: var(--accent-cyan);
          color: var(--text-primary);
          background: rgba(6, 182, 212, 0.2);
        }

        .node-connector {
          color: var(--text-muted);
        }

        .analytics-bars-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .chart-bar-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.82rem;
        }

        .bar-label {
          width: 140px;
          color: var(--text-secondary);
        }

        .bar-outer {
          flex-grow: 1;
          height: 10px;
          background: rgba(255,255,255,0.06);
          border-radius: 5px;
          overflow: hidden;
        }

        .bar-inner {
          height: 100%;
          background: var(--gradient-primary);
        }

        .bar-val {
          font-weight: 700;
          color: var(--text-primary);
          width: 45px;
        }

        @media (max-width: 992px) {
          .showcase-display {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem;
            gap: 2rem;
          }
          .metrics-row {
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          .showcase-tabs {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding: 0.5rem 0.25rem 1rem 0.25rem;
            margin-bottom: 2rem;
            scrollbar-width: none;
          }
          .showcase-tabs::-webkit-scrollbar {
            display: none;
          }
          .tab-btn {
            flex-shrink: 0;
            white-space: nowrap;
            padding: 0.75rem 1.25rem;
            font-size: 0.88rem;
          }
          .showcase-display {
            padding: 1.5rem 1rem;
          }
          .screen-frame {
            padding: 1rem;
            min-height: auto;
          }
          .chat-row {
            flex-direction: column;
          }
          .workflow-nodes-preview {
            flex-direction: column;
            gap: 0.4rem;
          }
          .node-connector {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </section>
  );
}
