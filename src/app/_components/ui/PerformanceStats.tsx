'use client';

import { useEffect, useState } from 'react';

export function PerformanceStats() {
  const [fps, setFps] = useState(0);
  const [memory, setMemory] = useState(0);
  const [showStats, setShowStats] = useState(false);
  
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let frameId: number;
    
    const updateStats = () => {
      const now = performance.now();
      frameCount++;
      
      if (now >= lastTime + 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
        
        // Get memory usage if available
        if (window.performance && (performance as any).memory) {
          const memoryInfo = (performance as any).memory;
          setMemory(Math.round(memoryInfo.usedJSHeapSize / (1024 * 1024)));
        }
      }
      
      frameId = requestAnimationFrame(updateStats);
    };
    
    // Toggle stats with 'P' key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'p' || e.key === 'P') {
        setShowStats(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    frameId = requestAnimationFrame(updateStats);
    
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  if (!showStats) return null;
  
  return (
    <div className="fixed left-4 top-4 z-50 rounded-md bg-black/70 px-3 py-1 text-xs font-mono text-white">
      <div>FPS: {fps}</div>
      {memory > 0 && <div>Memory: {memory} MB</div>}
    </div>
  );
}