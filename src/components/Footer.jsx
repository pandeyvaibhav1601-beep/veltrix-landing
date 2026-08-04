import React, { useState } from 'react';
import { Bot, Send, CheckCircle, Twitter, Linkedin, Github, Disc as Discord, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info & Newsletter */}
          <div className="footer-brand-col">
            <a href="#" className="footer-brand">
              <div className="brand-icon">
                <Bot size={24} />
              </div>
              <span className="brand-name">Veltrix<span className="brand-dot">.ai</span></span>
            </a>

            <p className="footer-brand-desc">
              Next-generation autonomous AI agents for sales qualification, ticket resolution, and omnichannel customer engagement.
            </p>

            {/* Newsletter Subscription Form */}
            <div className="newsletter-box">
              <h5 className="newsletter-title">Subscribe to AI Revenue Insights</h5>
              {subscribed ? (
                <div className="subscribe-success">
                  <CheckCircle size={16} className="text-green" /> You are subscribed! Check your inbox weekly.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="btn btn-primary btn-newsletter">
                    <span>Subscribe</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-links-col">
            <h5 className="column-title">Product</h5>
            <ul className="footer-links">
              <li><a href="#features">Autonomous Sales SDR</a></li>
              <li><a href="#features">Support Copilot</a></li>
              <li><a href="#showcase">Workflow Builder</a></li>
              <li><a href="#showcase">RAG Knowledge Engine</a></li>
              <li><a href="#pricing">Pricing & Tiers</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h5 className="column-title">Solutions</h5>
            <ul className="footer-links">
              <li><a href="#">For B2B SaaS</a></li>
              <li><a href="#">For E-Commerce</a></li>
              <li><a href="#">For Financial Tech</a></li>
              <li><a href="#">For Enterprise Agencies</a></li>
              <li><a href="#">SOC2 Compliance</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h5 className="column-title">Resources</h5>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Agent Prompt Templates</a></li>
              <li><a href="#">Community Forum</a></li>
              <li><a href="#">System Status (99.99%)</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h5 className="column-title">Company & Legal</h5>
            <ul className="footer-links">
              <li><a href="#">About Veltrix</a></li>
              <li><a href="#">Careers (We're Hiring)</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Security Trust Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Veltrix AI Inc. All rights reserved. Built for high-velocity revenue teams.
          </p>

          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Twitter / X"><Twitter size={18} /></a>
            <a href="#" className="social-icon" aria-label="GitHub"><Github size={18} /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" className="social-icon" aria-label="Discord"><Discord size={18} /></a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #04060f;
          border-top: 1px solid var(--border-color);
          padding: 5rem 0 2.5rem 0;
          color: var(--text-secondary);
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .footer-brand-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1.8rem;
          max-width: 340px;
        }

        .newsletter-box {
          background: var(--bg-card);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          max-width: 360px;
        }

        .newsletter-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.8rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-input {
          flex-grow: 1;
          padding: 0.65rem 0.9rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.85rem;
          outline: none;
        }

        .newsletter-input:focus {
          border-color: var(--accent-cyan);
        }

        .btn-newsletter {
          padding: 0.65rem 1rem;
          font-size: 0.85rem;
          border-radius: var(--radius-sm);
        }

        .subscribe-success {
          font-size: 0.82rem;
          color: var(--accent-green);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .column-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          font-size: 0.88rem;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--accent-cyan);
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          font-size: 0.85rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .social-icon:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
