'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { LoadingScreen } from './_components/LoadingScreen';

// Dynamically import the Portfolio3D component to avoid SSR issues with Three.js
const Portfolio3D = dynamic(() => import('./_components/Portfolio3D').then(mod => ({ default: mod.Portfolio3D })), {
  ssr: false,
  loading: () => <div className="flex h-screen w-full items-center justify-center"><p>Loading 3D environment...</p></div>
});

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative h-screen w-full overflow-hidden dark:bg-black dark:text-white">
      <Portfolio3D />
    </main>
  );
}
