import React, { useRef } from 'react';

/**
 * LuxuryCard — Interactive 3D Parallax Tilt & Mouse Spotlight Glow Wrapper
 * Uses Chilean Fire & Mysiv Black styling tokens seamlessly.
 */
export default function LuxuryCard({ 
  children, 
  className = '', 
  style = {}, 
  onClick, 
  tiltAmount = 8,
  glowColor = 'rgba(208, 91, 55, 0.22)',
  ...props 
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    // Only perform 3D tilt calculation on devices with fine pointer (mouse), not touch screens
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -tiltAmount;
    const rotateY = ((x - centerX) / centerX) * tiltAmount;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px) scale(1.015)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      className={`luxury-card glass-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        '--glow-color': glowColor,
        ...style
      }}
      {...props}
    >
      <div className="luxury-spotlight"></div>
      <div className="luxury-border-glow"></div>
      <div className="luxury-card-content">{children}</div>
    </div>
  );
}

