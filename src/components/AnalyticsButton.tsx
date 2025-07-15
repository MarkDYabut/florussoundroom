"use client";

import { Button } from "@once-ui-system/core";
import { useAnalytics } from "@/hooks/useAnalytics";

interface AnalyticsButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  eventName: string;
  eventParams?: Record<string, string | number | boolean>;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "s" | "m" | "l";
  prefixIcon?: string;
  suffixIcon?: string;
  [key: string]: any;
}

export function AnalyticsButton({
  href,
  onClick,
  children,
  eventName,
  eventParams = {},
  ...buttonProps
}: AnalyticsButtonProps) {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    // Track the event
    trackEvent(eventName as any, {
      ...eventParams,
      button_text: typeof children === 'string' ? children : 'button_click',
    });

    // Execute any custom onClick handler
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      href={href}
      onClick={handleClick}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}
