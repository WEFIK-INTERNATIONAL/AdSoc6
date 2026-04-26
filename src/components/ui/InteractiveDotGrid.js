"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const InteractiveDotGrid = () => {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const dotPositions = useRef([]);

  // Pre-calculate positions on mount/resize
  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      dotPositions.current = dotsRef.current.map((dot) => {
        if (!dot) return { x: 0, y: 0 };
        const dotRect = dot.getBoundingClientRect();
        return {
          x: dotRect.left + dotRect.width / 2 - rect.left,
          y: dotRect.top + dotRect.height / 2 - rect.top,
        };
      });
    };

    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
  }, []);

  useGSAP(() => {
    const container = containerRef.current;
    const dots = dotsRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;

      dots.forEach((dot, i) => {
        if (!dot || !dotPositions.current[i]) return;
        const pos = dotPositions.current[i];
        const dist = Math.hypot(mouseX - pos.x, mouseY - pos.y);
        const maxDist = 200;
        
        if (dist < maxDist) {
          const strength = 1 - dist / maxDist;
          const scale = 1 + strength * 1.5;
          const opacity = 0.1 + strength * 0.9;
          
          gsap.to(dot, {
            scale: scale,
            backgroundColor: `rgba(54, 130, 142, ${opacity})`,
            boxShadow: `0 0 ${strength * 20}px rgba(54, 130, 142, ${strength * 0.6})`,
            duration: 0.3,
            overwrite: 'auto',
            ease: 'power1.out',
          });
        } else {
          gsap.to(dot, {
            scale: 1,
            backgroundColor: 'rgba(54, 130, 142, 0.1)',
            boxShadow: '0 0 0px rgba(54, 130, 142, 0)',
            duration: 0.6,
            overwrite: 'auto',
            ease: 'power2.out',
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: containerRef });

  const rows = 14;
  const cols = 35;
  const dots = Array.from({ length: rows * cols });

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 flex flex-wrap gap-10 p-12 items-center justify-center overflow-hidden pointer-events-none"
    >
      {dots.map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="w-1.5 h-1.5 rounded-full bg-primary/10 transition-shadow duration-300"
        />
      ))}
    </div>
  );
};

export default InteractiveDotGrid;
