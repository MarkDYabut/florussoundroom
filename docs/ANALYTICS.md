# Google Analytics Implementation Guide

## Overview
This implementation provides comprehensive Google Analytics 4 (GA4) tracking for the FLORUS Sound Room portfolio website using Next.js 15 and the `@next/third-parties` package.

## Setup Instructions

### 1. Create Google Analytics Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for "FLORUS Sound Room"
3. Get your Measurement ID (format: G-XXXXXXXXXX)

### 2. Configure Environment Variables
1. Copy `.env.example` to `.env.local`
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR_ACTUAL_ID
   ```

### 3. Key Features Implemented

#### Basic Tracking
- **Page views**: Automatic tracking on all pages
- **User engagement**: Session duration, bounce rate
- **Device/browser data**: Automatic collection

#### Custom Events for Your Business
- `booking_inquiry`: When users click booking/contact buttons
- `newsletter_signup`: Newsletter subscription events
- `project_view`: Project page visits
- `blog_read`: Blog post engagement
- `equipment_inquiry`: Equipment rental inquiries
- `social_click`: Social media link clicks
- `gallery_view`: Gallery page visits
- `service_page_view`: Service-specific page views

#### Business-Specific Tracking
- Custom dimensions for sound studio business type
- Location tracking (Toronto)
- Service category tracking

### 4. Usage Examples

#### Track Custom Events
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

function ContactButton() {
  const { trackEvent } = useAnalytics();
  
  const handleClick = () => {
    trackEvent('booking_inquiry', {
      service_type: 'dj_lessons',
      button_location: 'homepage_hero'
    });
  };
  
  return <button onClick={handleClick}>Book Session</button>;
}
```

#### Use Analytics Button Component
```tsx
import { AnalyticsButton } from '@/components';

<AnalyticsButton
  href="/contact"
  eventName="booking_inquiry"
  eventParams={{ service_type: 'studio_rental' }}
  variant="primary"
>
  Book Studio Time
</AnalyticsButton>
```

### 5. Recommended Analytics Setup in Google Analytics

#### Custom Dimensions
1. **Business Type**: 'sound_studio'
2. **Service Category**: 'dj_services', 'equipment_rental', 'production'
3. **User Type**: 'returning_customer', 'new_inquiry'

#### Goals to Set Up
1. **Newsletter Signups**: Track email collection
2. **Booking Inquiries**: Track contact form submissions
3. **Service Page Views**: Track engagement with service pages
4. **Social Media Clicks**: Track social media engagement

#### Key Metrics to Monitor
1. **Most Popular Services**: Which pages get most traffic
2. **Conversion Funnel**: Homepage → Service Page → Contact
3. **Geographic Data**: Where your clients are coming from
4. **Device Usage**: Desktop vs mobile usage patterns
5. **Peak Hours**: When users are most active

### 6. Privacy Considerations
- Analytics only loads in production
- Respects user privacy settings
- No personally identifiable information tracked
- Compliant with GDPR/CCPA requirements

### 7. Development vs Production
- In development: Events are logged to console only
- In production: Events are sent to Google Analytics
- Easy to test without polluting analytics data

## Next Steps
1. Set up your Google Analytics property
2. Add your Measurement ID to environment variables
3. Deploy to production to start collecting data
4. Monitor the first week of data
5. Set up custom reports for business insights

## Business Intelligence Opportunities
- Track which equipment is most inquired about
- Identify peak booking times for better scheduling
- Monitor blog engagement to create more relevant content
- Track social media ROI
- Measure newsletter effectiveness
