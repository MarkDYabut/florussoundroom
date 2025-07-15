"use client";

import { GoogleAnalytics } from '@next/third-parties/google';
import { analytics } from '@/resources';

export function Analytics() {
  // Only render analytics in production or when explicitly enabled
  if (!analytics.enabled || !analytics.googleAnalyticsId || process.env.NODE_ENV === 'development') {
    return null;
  }

  return <GoogleAnalytics gaId={analytics.googleAnalyticsId} />;
}
