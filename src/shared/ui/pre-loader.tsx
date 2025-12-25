'use client';

import { cn } from '@/shared/libs/cn';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
  className?: string;
}

export const Preloader = ({ onComplete, className }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleLoad = () => {
      setOpacity(0);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 300);
    };

    if (document.readyState === 'complete') {
      setTimeout(handleLoad, 1500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(handleLoad, 1500);
      });
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={cn('fixed inset-0 z-50 flex items-center justify-center bg-white', className)}
      style={{ opacity, transition: 'opacity 0.3s ease-in-out' }}
    >
      <video autoPlay className="size-[100px]" loop muted src="/videos/preloader.mp4" />
    </div>
  );
};
