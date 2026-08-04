import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MousePointer, RefreshCw } from 'lucide-react';

const TOTAL_FRAMES = 81;
const FRAME_PREFIX = '/images/heroanimation/0802_';

export default function HeroImageSequence({ isBackground = true }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  // Animation frame references for smooth LERP interpolation
  const targetScrollOffsetRef = useRef(0);
  const currentScrollOffsetRef = useRef(0);
  const animFrameIdRef = useRef(null);

  // Helper to format frame path
  const getFrameUrl = (index) => {
    const paddedIndex = String(index).padStart(3, '0');
    return `${FRAME_PREFIX}${paddedIndex}.jpg`;
  };

  // Detect mobile device for frame step optimization (staggered preloading on mobile)
  const isMobileRef = useRef(typeof window !== 'undefined' && (window.innerWidth < 768 || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0)));

  // 1. Optimized Smart Image Preloader (Adaptive loading based on device speed)
  useEffect(() => {
    let isSubscribed = true;
    const loadedImages = new Array(TOTAL_FRAMES);
    let count = 0;

    // Load critical keyframes first (step of 2 on mobile, step of 1 on desktop)
    const step = isMobileRef.current ? 2 : 1;
    const framesToLoad = [];

    for (let i = 0; i < TOTAL_FRAMES; i += step) {
      framesToLoad.push(i);
    }
    // Fill remaining if on desktop
    if (!isMobileRef.current) {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!framesToLoad.includes(i)) framesToLoad.push(i);
      }
    }

    const totalToLoad = framesToLoad.length;

    framesToLoad.forEach((frameIdx) => {
      const img = new Image();
      img.src = getFrameUrl(frameIdx);
      
      const handleLoad = () => {
        if (!isSubscribed) return;
        count++;
        setLoadedCount(count);
        if (count >= Math.min(10, totalToLoad)) {
          // Show backdrop after first 10 keyframes load for zero perceived wait
          setIsLoaded(true);
        }
      };

      const handleError = () => {
        if (!isSubscribed) return;
        count++;
        setLoadedCount(count);
        if (count >= Math.min(10, totalToLoad)) {
          setIsLoaded(true);
        }
      };

      img.onload = handleLoad;
      img.onerror = handleError;
      loadedImages[frameIdx] = img;
    });

    imagesRef.current = loadedImages;

    return () => {
      isSubscribed = false;
    };
  }, []);

  // 2. Canvas frame drawing helper with nearest-loaded frame fallback for lag-free rendering
  const drawFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clampedIdx = (Math.floor(frameIdx) % TOTAL_FRAMES + TOTAL_FRAMES) % TOTAL_FRAMES;
    let img = imagesRef.current[clampedIdx];

    // Fallback to nearest loaded frame if current frame is missing or pending
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let delta = 1; delta < TOTAL_FRAMES; delta++) {
        const prevIdx = (clampedIdx - delta + TOTAL_FRAMES) % TOTAL_FRAMES;
        const nextIdx = (clampedIdx + delta) % TOTAL_FRAMES;
        if (imagesRef.current[prevIdx] && imagesRef.current[prevIdx].complete && imagesRef.current[prevIdx].naturalWidth > 0) {
          img = imagesRef.current[prevIdx];
          break;
        }
        if (imagesRef.current[nextIdx] && imagesRef.current[nextIdx].complete && imagesRef.current[nextIdx].naturalWidth > 0) {
          img = imagesRef.current[nextIdx];
          break;
        }
      }
    }

    if (img && img.complete && img.naturalWidth > 0) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.imageSmoothingEnabled = true;

      // Fit calculation for background cover
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = canvasWidth / canvasHeight;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgAspect;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgAspect;
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, []);

  // 3. Handle window resize for mobile & high-DPI rendering (capped DPR for mobile GPU performance)
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const maxDpr = isMobileRef.current ? 1.5 : 2;
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    const rect = container.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    drawFrame(currentFrameIndex);
  }, [drawFrame, currentFrameIndex]);

  useEffect(() => {
    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions, { passive: true });
    return () => window.removeEventListener('resize', updateCanvasDimensions);
  }, [updateCanvasDimensions]);

  const lastFrameIndexRef = useRef(-1);

  // 4. Ultra-Smooth Dual Auto-Play + Scroll Control Loop (Touch & Passive Scroll Optimized)
  useEffect(() => {
    if (!isLoaded) return;

    let autoPlayFrame = 0;
    let lastTime = performance.now();

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = containerRef.current ? containerRef.current.offsetHeight : window.innerHeight;
      const scrollDistance = Math.max(window.innerHeight * 1.5, heroHeight);
      
      const scrollProgress = Math.min(1, Math.max(0, scrollY / scrollDistance));
      targetScrollOffsetRef.current = scrollProgress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    handleScroll();

    const loop = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Delta-time based continuous auto-play movement (silky 10 frames/sec speed)
      autoPlayFrame = (autoPlayFrame + 10 * dt) % TOTAL_FRAMES;

      // Dynamic LERP factor (slightly higher on mobile for immediate touch responsiveness)
      const lerpSpeed = isMobileRef.current ? 12 : 8;
      const lerpFactor = 1 - Math.exp(-lerpSpeed * dt);
      const scrollDiff = targetScrollOffsetRef.current - currentScrollOffsetRef.current;
      currentScrollOffsetRef.current += scrollDiff * lerpFactor;

      // Combined continuous frame position
      const combinedFrame = (autoPlayFrame + currentScrollOffsetRef.current) % TOTAL_FRAMES;
      const activeFrame = (Math.floor(combinedFrame) + TOTAL_FRAMES) % TOTAL_FRAMES;

      // Direct canvas draw for zero-latency 60 FPS output
      drawFrame(activeFrame);

      if (activeFrame !== lastFrameIndexRef.current) {
        lastFrameIndexRef.current = activeFrame;
        setCurrentFrameIndex(activeFrame);
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isLoaded, drawFrame]);

  const targetTotal = isMobileRef.current ? Math.ceil(TOTAL_FRAMES / 2) : TOTAL_FRAMES;
  const progressPercent = Math.min(100, Math.round((loadedCount / targetTotal) * 100));

  return (
    <div 
      className={`hero-sequence-wrapper ${isBackground ? 'is-bg-mode' : 'is-card-mode'}`} 
      ref={containerRef}
    >
      {/* Subtle loader transition */}
      {!isLoaded && (
        <div className="sequence-loader">
          <div className="loader-content">
            <RefreshCw size={24} className="spinning-icon" />
            <span className="loader-text">Initializing 3D Visuals ({progressPercent}%)</span>
          </div>
        </div>
      )}

      {/* Canvas Scroll Sequence Container */}
      <div className="sequence-canvas-container">
        <canvas ref={canvasRef} className="sequence-canvas" />

        {/* Ambient Top & Bottom Glass Gradients */}
        <div className="canvas-gradient-overlay top"></div>
        <div className="canvas-gradient-overlay bottom"></div>

        {!isBackground && (
          <div className="scroll-indicator-badge">
            <MousePointer size={14} className="scroll-icon-animated" />
            <span>Scroll page down to animate 3D view</span>
          </div>
        )}
      </div>

      <style>{`
        .hero-sequence-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          touch-action: pan-y;
        }

        .hero-sequence-wrapper.is-bg-mode {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: #04030d;
        }

        .hero-sequence-wrapper.is-card-mode {
          position: relative;
          max-width: 1100px;
          margin: 1.5rem auto 0 auto;
          border-radius: var(--radius-lg);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7), var(--shadow-glow);
        }

        .sequence-loader {
          position: absolute;
          inset: 0;
          z-index: 20;
          background: rgba(4, 3, 13, 0.9);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loader-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--accent-fire-light);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .spinning-icon {
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        /* Canvas Container */
        .sequence-canvas-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          user-select: none;
          background: #04030d;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        .sequence-canvas {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          touch-action: pan-y;
        }

        .canvas-gradient-overlay {
          position: absolute;
          left: 0;
          right: 0;
          pointer-events: none;
          z-index: 2;
        }

        .canvas-gradient-overlay.top {
          top: 0;
          height: 140px;
          background: linear-gradient(180deg, rgba(4, 3, 13, 0.95) 0%, transparent 100%);
        }

        .canvas-gradient-overlay.bottom {
          bottom: 0;
          height: 180px;
          background: linear-gradient(0deg, rgba(4, 3, 13, 0.98) 0%, transparent 100%);
        }

        .scroll-indicator-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.2rem;
          background: rgba(18, 14, 42, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .scroll-icon-animated {
          color: var(--accent-fire-light);
          animation: bounce-y 2s infinite ease-in-out;
        }

        @keyframes bounce-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @media (max-width: 768px) {
          .canvas-gradient-overlay.top { height: 90px; }
          .canvas-gradient-overlay.bottom { height: 120px; }
        }
      `}</style>
    </div>
  );
}

