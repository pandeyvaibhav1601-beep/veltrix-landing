import React, { useState } from 'react';
import { X, Play, Pause, CheckCircle2, Bot, Sparkles, Volume2, Shield } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const demoSteps = [
    { title: '1. Inbound Lead Qualification', desc: 'AI agent instantly responds to website visitors, asks qualification questions, and syncs intent data.' },
    { title: '2. Autonomous Calendar Booking', desc: 'Agent evaluates account tier and books high-value prospects directly into AE calendar.' },
    { title: '3. Omnichannel Ticket Resolution', desc: 'Support agent resolves 90%+ routine technical issues instantly via knowledge base retrieval.' }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon"><Sparkles size={18} /></div>
            <div>
              <h3>Veltrix Platform Interactive Demo</h3>
              <p>See how AI agents automate end-to-end customer lifecycle</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Video Screen Simulation */}
        <div className="video-viewport">
          {/* Overlay controls */}
          <div className="video-screen">
            <div className="demo-stage-badge">
              <span className="live-dot"></span> LIVE DEMO PREVIEW
            </div>

            {/* Dynamic Interactive Stage Output */}
            <div className="stage-content">
              <div className="agent-avatar-large">
                <Bot size={40} />
              </div>
              <h4 className="stage-title">{demoSteps[currentStep].title}</h4>
              <p className="stage-desc">{demoSteps[currentStep].desc}</p>
              
              <div className="simulated-progress-pills">
                <div className="pill-metric">Response Latency: <b>240ms</b></div>
                <div className="pill-metric">Confidence Rating: <b>99.8%</b></div>
                <div className="pill-metric">CRM Sync: <b>Active</b></div>
              </div>
            </div>

            {/* Video Controls Bar */}
            <div className="video-controls">
              <button onClick={() => setIsPlaying(!isPlaying)} className="play-pause-btn">
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <div className="progress-timeline">
                {demoSteps.map((step, idx) => (
                  <button 
                    key={idx}
                    className={`timeline-step ${idx === currentStep ? 'active' : ''}`}
                    onClick={() => setCurrentStep(idx)}
                  >
                    <span>Step {idx + 1}</span>
                  </button>
                ))}
              </div>
              <div className="volume-icon"><Volume2 size={18} /></div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="security-note">
            <Shield size={16} /> Ready to deploy custom agents for your business?
          </div>
          <a href="#pricing" onClick={onClose} className="btn btn-primary btn-modal-cta">
            Start Free 14-Day Trial
          </a>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 6, 18, 0.85);
          backdrop-filter: blur(12px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-container {
          width: 100%;
          max-width: 820px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.6), var(--shadow-glow);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .modal-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .modal-header h3 {
          font-size: 1.15rem;
          font-weight: 700;
        }

        .modal-header p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .modal-close-btn {
          color: var(--text-muted);
          padding: 0.4rem;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.1);
        }

        .video-viewport {
          padding: 1.5rem;
        }

        .video-screen {
          position: relative;
          background: linear-gradient(145deg, #0b0e24, #12183c);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          min-height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          overflow: hidden;
        }

        .demo-stage-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.8rem;
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-cyan);
          width: fit-content;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-cyan);
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        .stage-content {
          text-align: center;
          max-width: 550px;
          margin: 1.5rem auto;
        }

        .agent-avatar-large {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          background: var(--gradient-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
        }

        .stage-title {
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .stage-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .simulated-progress-pills {
          display: flex;
          gap: 0.8rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .pill-metric {
          font-size: 0.8rem;
          padding: 0.35rem 0.85rem;
          background: rgba(255,255,255,0.06);
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .pill-metric b {
          color: var(--accent-cyan);
        }

        .video-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .play-pause-btn {
          color: var(--text-primary);
          padding: 0.4rem;
        }

        .progress-timeline {
          display: flex;
          gap: 0.5rem;
          flex-grow: 1;
        }

        .timeline-step {
          flex: 1;
          padding: 0.5rem;
          background: rgba(255,255,255,0.06);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .timeline-step.active {
          background: rgba(99, 102, 241, 0.2);
          border-color: var(--accent-purple);
          color: var(--text-primary);
        }

        .volume-icon {
          color: var(--text-muted);
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.75rem;
          background: rgba(0,0,0,0.15);
          border-top: 1px solid var(--border-color);
        }

        .security-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .btn-modal-cta {
          padding: 0.65rem 1.5rem;
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
}
