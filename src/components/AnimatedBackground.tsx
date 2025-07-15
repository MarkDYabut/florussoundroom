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
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if we're on mobile and iOS
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) || 
               (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
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

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const gifSrc = currentTheme === 'dark' ? darkGif : lightGif;
    
    // Reset loading state when theme changes to prevent z-index issues
    setImageLoaded(false);
    
    // Preload the image
    const img = new Image();
    img.onload = () => {
      // Use requestAnimationFrame to ensure smooth transition on iOS
      requestAnimationFrame(() => {
        setImageLoaded(true);
        setImageError(false);
      });
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
  const effectiveOpacity = isMobile ? 0.15 : opacity;

  return (
    <div
      className={`animated-background ${className} ${imageLoaded ? 'loaded' : 'loading'} ${imageError ? 'error' : ''} ${isIOS ? 'ios-device' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        opacity: imageLoaded && !imageError ? effectiveOpacity : 0,
        pointerEvents: 'none',
        backgroundImage: imageLoaded && !imageError ? `url(${gifSrc})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: isIOS ? 'opacity 0.3s ease-in-out' : 'opacity 0.5s ease-in-out',
        // Force hardware acceleration on mobile to prevent z-index issues
        transform: 'translateZ(0)',
        willChange: 'opacity',
        // iOS-specific fixes
        ...(isIOS && {
          backfaceVisibility: 'hidden',
          perspective: 1000,
          transformStyle: 'preserve-3d'
        }),
        '--bg-opacity': effectiveOpacity,
        '--mobile-opacity': 0.15
      } as React.CSSProperties & { 
        '--bg-opacity': number; 
        '--mobile-opacity': number;
        backfaceVisibility?: string;
        perspective?: number;
        transformStyle?: string;
      }}
    />
  );
};
