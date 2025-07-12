"use client";

import { useCallback } from 'react';
import { analytics } from '@/resources';

// Custom event types for your business
type EventName = 
  | 'booking_inquiry'
  | 'newsletter_signup'
  | 'project_view'
  | 'blog_read'
  | 'contact_form_submit'
  | 'equipment_inquiry'
  | 'social_click'
  | 'gallery_view'
  | 'service_page_view';

interface EventParams {
  [key: string]: string | number | boolean;
}

export function useAnalytics() {
  const trackEvent = useCallback((eventName: EventName, parameters?: EventParams) => {
    // Only track in production and when analytics is enabled
    if (!analytics.enabled || !analytics.googleAnalyticsId || process.env.NODE_ENV === 'development') {
      console.log('Analytics (dev mode):', eventName, parameters);
      return;
    }

    // Check if gtag is available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        ...parameters,
        // Add custom dimensions for your business
        custom_business_type: 'sound_studio',
        custom_location: 'toronto',
        page_path: window.location.pathname,
      });
    }
  }, []);

  const trackPageView = useCallback((path: string, title?: string) => {
    if (!analytics.enabled || !analytics.googleAnalyticsId || process.env.NODE_ENV === 'development') {
      return;
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', analytics.googleAnalyticsId, {
        page_path: path,
        page_title: title,
      });
    }
  }, []);

  return { trackEvent, trackPageView };
}
