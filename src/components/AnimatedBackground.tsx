'use client';

import React, { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  lightGif?: string;
  darkGif?: string;
  opacity?: number;
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  lightGif = '/gifs/light-background.gif',
  darkGif = '/gifs/dark-background.gif',
  opacity = 0.2,
  className = ''
}) => {
  const [currentTheme, setCurrentTheme] = useState<string>('light');
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTheme = () => {
      setCurrentTheme(document.documentElement.getAttribute('data-theme') || 'light');
    };

    // Initial theme detection
    updateTheme();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const gifSrc = currentTheme === 'dark' ? darkGif : lightGif;
    
    // Preload the image
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setImageError(false);
    };
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(false);
    };
    img.src = gifSrc;
  }, [currentTheme, darkGif, lightGif, mounted]);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  const gifSrc = currentTheme === 'dark' ? darkGif : lightGif;

  return (
    <div
      className={`animated-background ${className} ${imageLoaded ? 'loaded' : 'loading'} ${imageError ? 'error' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        opacity: imageLoaded && !imageError ? opacity : 0,
        pointerEvents: 'none',
        backgroundImage: imageLoaded && !imageError ? `url(${gifSrc})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'opacity 0.5s ease-in-out, background-image 0.3s ease',
        '--bg-opacity': opacity
      } as React.CSSProperties & { '--bg-opacity': number }}
    />
  );
};
