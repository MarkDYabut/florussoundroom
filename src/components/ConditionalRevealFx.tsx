"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { RevealFx } from '@once-ui-system/core';
import { animations } from '@/resources';

interface ConditionalRevealFxProps {
  children: React.ReactNode;
  [key: string]: any; // Allow any RevealFx props to be passed through
}

export const ConditionalRevealFx: React.FC<ConditionalRevealFxProps> = ({ 
  children, 
  ...revealFxProps 
}) => {
  const pathname = usePathname();
  const shouldAnimate = animations.shouldEnableRevealFx(pathname);

  if (!shouldAnimate) {
    // If animations are disabled, render children without RevealFx wrapper
    // but preserve layout-related props like padding and margin using Once UI classes
    const { 
      translateY, 
      delay, 
      fillWidth, 
      horizontal, 
      paddingTop, 
      paddingBottom, 
      paddingLeft, 
      paddingRight,
      className,
      marginBottom,
      marginTop,
      ...otherProps 
    } = revealFxProps;
    
    // Build className for Once UI spacing
    let combinedClassName = className || '';
    if (fillWidth) combinedClassName += ' fill-width';
    if (horizontal === 'center') combinedClassName += ' horizontal-center';
    if (horizontal === 'start') combinedClassName += ' horizontal-start';
    if (horizontal === 'end') combinedClassName += ' horizontal-end';

    // Build inline styles for padding and margin
    const inlineStyles: React.CSSProperties = {};
    if (paddingTop) inlineStyles.paddingTop = `var(--static-space-${paddingTop})`;
    if (paddingBottom) inlineStyles.paddingBottom = `var(--static-space-${paddingBottom})`;
    if (paddingLeft) inlineStyles.paddingLeft = `var(--static-space-${paddingLeft})`;
    if (paddingRight) inlineStyles.paddingRight = `var(--static-space-${paddingRight})`;
    if (marginTop) inlineStyles.marginTop = `var(--static-space-${marginTop})`;
    if (marginBottom) inlineStyles.marginBottom = `var(--static-space-${marginBottom})`;

    return (
      <div 
        className={combinedClassName}
        style={inlineStyles}
      >
        {children}
      </div>
    );
  }

  return (
    <RevealFx {...revealFxProps}>
      {children}
    </RevealFx>
  );
};
