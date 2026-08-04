import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Sparkles } from 'lucide-react';
import LuxuryCard from './LuxuryCard';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const faqData = [
    {
      category: 'General',
      question: 'How quickly can I deploy Veltrix AI agents for my business?',
      answer: 'You can deploy your first agent in under 15 minutes! Simply select a pre-built agent template (Sales SDR, Support Copilot, Lead Qualifier), connect your CRM or documentation with one-click OAuth, and paste our script tag on your website.'
    },
    {
      category: 'Security',
      question: 'Does Veltrix train AI models on my proprietary customer data?',
      answer: 'No. Veltrix strictly enforces zero data-retention for model training. Your customer records, CRM data, and internal knowledge base documents remain completely isolated within your private vector storage environment with SOC2 Type II compliance.'
    },
    {
      category: 'Integrations',
      question: 'Which CRMs and help desk tools does Veltrix integrate with?',
      answer: 'Veltrix supports native bi-directional integrations with Salesforce, HubSpot, Zendesk, Intercom, Freshdesk, Slack, Notion, Calendly, and Jira. Custom integrations can be hooked up instantly using webhooks, Zapier, or our REST API.'
    },
    {
      category: 'Agents',
      question: 'What happens when an AI agent encounters a complex question it cannot answer?',
      answer: 'Veltrix features intelligent human-in-the-loop escalation. If confidence drops below your customizable threshold (e.g., 95%), the agent creates a 1-second contextual summary dossier and transfers the conversation smoothly to a human rep via Slack, email, or help desk ticket.'
    },
    {
      category: 'Pricing',
      question: 'Can I change or cancel my subscription plan at any time?',
      answer: 'Yes! You can upgrade, downgrade, or cancel your plan at any time directly from the account billing portal. If you upgrade, the price difference will be prorated automatically.'
    },
    {
      category: 'General',
      question: 'How does Veltrix compare to basic chat widgets or basic chatbots?',
      answer: 'Unlike traditional decision-tree chatbots that follow rigid if/else rules, Veltrix uses autonomous multi-agent neural models with live vector memory. Veltrix agents can reason, execute multi-step API actions (e.g. issuing refunds or booking meetings), and adapt dynamically to customer intent.'
    }
  ];

  const categories = ['All', 'General', 'Security', 'Integrations', 'Pricing'];

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} /> Got Questions?
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about Veltrix AI agents, security, pricing, and setup.
          </p>

          {/* Search Bar */}
          <div className="faq-search-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search questions (e.g. CRM, security, pricing)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="faq-search-input"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="faq-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-container">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <LuxuryCard key={idx} className={`faq-item ${isOpen ? 'open' : ''}`} tiltAmount={4}>
                  <button 
                    className="faq-question-btn"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-chevron-icon">
                      <ChevronDown size={20} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </LuxuryCard>
              );
            })
          ) : (
            <div className="faq-empty-state glass-card">
              <p>No questions matched your search criteria "{searchTerm}".</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 7rem 0;
          position: relative;
          background: rgba(0, 0, 0, 0.1);
          border-top: 1px solid var(--border-color);
        }

        .faq-search-wrapper {
          position: relative;
          max-width: 580px;
          margin: 1.5rem auto 1.5rem auto;
        }

        .search-icon {
          position: absolute;
          left: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .faq-search-input {
          width: 100%;
          padding: 0.85rem 1.25rem 0.85rem 3rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          color: var(--text-primary);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .faq-search-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
        }

        .faq-categories {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .cat-pill {
          padding: 0.4rem 1.1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .cat-pill.active, .cat-pill:hover {
          color: var(--text-primary);
          border-color: var(--accent-purple);
          background: rgba(99, 102, 241, 0.15);
        }

        .faq-accordion-container {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .faq-item {
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .faq-item.open {
          border-color: var(--accent-purple);
        }

        .faq-question-btn {
          width: 100%;
          padding: 1.5rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          color: var(--text-primary);
          font-size: 1.08rem;
          font-weight: 600;
          background: transparent;
        }

        .faq-chevron-icon {
          color: var(--accent-cyan);
          transition: transform 0.3s ease;
          flex-shrink: 0;
          margin-left: 1rem;
        }

        .faq-item.open .faq-chevron-icon {
          transform: rotate(180deg);
        }

        .faq-answer-content {
          padding: 0 1.75rem 1.5rem 1.75rem;
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.65;
          animation: slideDown 0.25s ease;
        }

        .faq-empty-state {
          padding: 3rem;
          text-align: center;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
