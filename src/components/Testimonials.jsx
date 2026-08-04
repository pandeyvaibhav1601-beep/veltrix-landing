import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import LuxuryCard from './LuxuryCard';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      quote: "Veltrix reduced our support response times from 4 hours to 18 seconds. Our customer CSAT score jumped to an all-time high of 98.4%, while deflecting over 14,000 repetitive tickets per month.",
      author: "Elena Rostova",
      role: "VP of Global Customer Support",
      company: "CloudPulse Technologies",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      impact: "14k Tickets Deflected / mo"
    },
    {
      quote: "Our SDR team was drowning in unqualified leads. Deploying Veltrix AI agents added $2.4M in pipeline within 90 days. The AI qualifies leads with human-level empathy and books meetings natively in AE calendars.",
      author: "Marcus Vance",
      role: "Chief Revenue Officer",
      company: "HyperScale Revenue Labs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      impact: "+$2.4M Pipeline Generated"
    },
    {
      quote: "The multi-agent orchestration is pure magic. We set up an autonomous workflow that qualifies web leads, generates custom proposals, and sends follow-up SMS reminders. It’s like having 10 top-tier SDRs working 24/7.",
      author: "Sophia Chen",
      role: "Head of Growth Operations",
      company: "OmniFlow Systems",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      impact: "380% Conversion Rate Boost"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} /> Customer Stories
          </div>
          <h2 className="section-title">
            Loved by High-Growth <span className="gradient-text">Revenue Teams</span>
          </h2>
          <p className="section-subtitle">
            See how innovative tech companies use Veltrix to scale customer engagement and support without increasing headcount.
          </p>
        </div>

        {/* Carousel Container */}
        <LuxuryCard className="carousel-wrapper" glowColor="rgba(249, 115, 22, 0.35)">
          <Quote size={80} className="quote-watermark" />

          <div className="carousel-slide">
            {/* Rating Stars */}
            <div className="rating-stars">
              {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="testimonial-quote">
              "{testimonials[activeIdx].quote}"
            </p>

            {/* Author Profile Footer */}
            <div className="author-row">
              <img 
                src={testimonials[activeIdx].avatar} 
                alt={testimonials[activeIdx].author} 
                className="author-avatar"
              />
              <div className="author-meta">
                <h4 className="author-name">{testimonials[activeIdx].author}</h4>
                <p className="author-role">{testimonials[activeIdx].role} • <b>{testimonials[activeIdx].company}</b></p>
              </div>
              <div className="impact-pill">
                <span>{testimonials[activeIdx].impact}</span>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            <div className="dots-indicator">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-btn ${idx === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                />
              ))}
            </div>

            <div className="nav-buttons">
              <button 
                onClick={() => setActiveIdx((activeIdx - 1 + testimonials.length) % testimonials.length)} 
                className="arrow-btn"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveIdx((activeIdx + 1) % testimonials.length)} 
                className="arrow-btn"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </LuxuryCard>
      </div>

      <style>{`
        .testimonials-section {
          padding: 7rem 0;
          background: rgba(0, 0, 0, 0.15);
          border-top: 1px solid var(--border-color);
          position: relative;
        }

        .carousel-wrapper {
          position: relative;
          padding: 4rem 3.5rem;
          max-width: 950px;
          margin: 0 auto;
          overflow: hidden;
        }

        .quote-watermark {
          position: absolute;
          top: 2rem;
          right: 3rem;
          color: rgba(255, 255, 255, 0.04);
          pointer-events: none;
        }

        .rating-stars {
          display: flex;
          gap: 0.3rem;
          margin-bottom: 1.5rem;
        }

        .testimonial-quote {
          font-size: clamp(1.15rem, 2.5vw, 1.45rem);
          font-weight: 500;
          line-height: 1.6;
          color: var(--text-primary);
          margin-bottom: 2.5rem;
          min-height: 110px;
        }

        .author-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .author-avatar {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent-purple);
        }

        .author-meta {
          flex-grow: 1;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .author-role {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .author-role b {
          color: var(--accent-cyan);
        }

        .impact-pill {
          padding: 0.45rem 1rem;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-green);
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2.5rem;
        }

        .dots-indicator {
          display: flex;
          gap: 0.6rem;
        }

        .dot-btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }

        .dot-btn.active {
          width: 32px;
          border-radius: 6px;
          background: var(--gradient-primary);
        }

        .nav-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .arrow-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-purple);
          background: var(--bg-card-hover);
        }

        @media (max-width: 768px) {
          .carousel-wrapper {
            padding: 2.5rem 1.5rem;
          }
          .impact-pill {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
