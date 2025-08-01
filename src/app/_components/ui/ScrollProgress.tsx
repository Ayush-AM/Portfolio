'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface ScrollProgressProps {
  progress: number;
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="fixed right-6 top-1/2 z-40 h-40 w-1 -translate-y-1/2 rounded-full bg-white/10">
      <motion.div 
        className={`absolute bottom-0 w-full rounded-full ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}`}
        style={{ height: `${progress * 100}%` }}
        initial={{ height: '0%' }}
        animate={{ height: `${progress * 100}%` }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}