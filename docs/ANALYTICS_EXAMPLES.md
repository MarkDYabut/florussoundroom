# Analytics Implementation Examples

## Example 1: Update Your Setmore Booking Button

In your `layout.tsx`, you currently have a Setmore booking button. Here's how to add analytics tracking:

```tsx
// Before (current implementation)
<a 
  style={{
    position: 'fixed', 
    right: '-2px', 
    top: '25%', 
    display: 'block', 
    zIndex: 20000
  }} 
  id="Setmore_button_iframe" 
  href="https://florussoundroom.setmore.com"
>
  <img 
    style={{border: 'none'}}
    src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Calendar/Setmore-Book-Now.png" 
    alt="Book an appointment with FLORUS SOUND ROOM using Setmore" 
  />
</a>

// After (with analytics tracking)
import { useAnalytics } from '@/hooks/useAnalytics';

function BookingButton() {
  const { trackEvent } = useAnalytics();
  
  const handleBookingClick = () => {
    trackEvent('booking_inquiry', {
      booking_type: 'setmore',
      button_location: 'fixed_sidebar',
      service_type: 'general_inquiry'
    });
  };
  
  return (
    <a 
      style={{
        position: 'fixed', 
        right: '-2px', 
        top: '25%', 
        display: 'block', 
        zIndex: 20000
      }} 
      id="Setmore_button_iframe" 
      href="https://florussoundroom.setmore.com"
      onClick={handleBookingClick}
    >
      <img 
        style={{border: 'none'}}
        src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Calendar/Setmore-Book-Now.png" 
        alt="Book an appointment with FLORUS SOUND ROOM using Setmore" 
      />
    </a>
  );
}
```

## Example 2: Track Social Media Clicks

Update your social links in components to track clicks:

```tsx
// In your social media components
import { AnalyticsButton } from '@/components';

// SoundCloud link with tracking
<AnalyticsButton
  href="https://soundcloud.com/florussoundroom"
  eventName="social_click"
  eventParams={{
    social_platform: 'soundcloud',
    link_location: 'footer'
  }}
  prefixIcon="github" // Your current icon
  variant="secondary"
>
  SoundCloud
</AnalyticsButton>
```

## Example 3: Track Newsletter Signups

In your Mailchimp component, add tracking:

```tsx
// When form is submitted successfully
const { trackEvent } = useAnalytics();

const handleNewsletterSignup = () => {
  trackEvent('newsletter_signup', {
    signup_location: 'blog_page',
    user_type: 'new_subscriber'
  });
};
```

## Example 4: Track Project/Blog Engagement

In your blog and project pages, track reading engagement:

```tsx
// In blog/project pages
useEffect(() => {
  const timer = setTimeout(() => {
    trackEvent('blog_read', {
      article_title: post.metadata.title,
      article_category: post.metadata.tag,
      read_duration: '30_seconds'
    });
  }, 30000); // After 30 seconds of reading

  return () => clearTimeout(timer);
}, []);
```

## Google Analytics Dashboard Setup

### Custom Reports to Create:

1. **Service Performance Report**
   - Dimensions: Page Title, Service Type
   - Metrics: Page Views, Average Engagement Time
   - Filter: Pages containing '/work' or service keywords

2. **Booking Conversion Funnel**
   - Step 1: Homepage visit
   - Step 2: Service page visit  
   - Step 3: Booking inquiry event
   - Step 4: External booking link click

3. **Content Performance**
   - Blog post engagement
   - Most popular equipment inquiries
   - Gallery viewing patterns

4. **Client Journey Analysis**
   - First-time vs returning visitors
   - Mobile vs desktop usage
   - Peak activity times

### Key Metrics to Monitor:

1. **Business Metrics:**
   - Booking inquiry rate
   - Equipment rental interest
   - Newsletter signup rate
   - Social media engagement

2. **Content Metrics:**
   - Most popular blog posts
   - Equipment guides performance
   - Gallery engagement

3. **Technical Metrics:**
   - Page load times
   - Mobile responsiveness
   - Search engine performance
