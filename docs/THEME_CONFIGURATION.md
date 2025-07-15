# Theme Configuration

This document describes how to configure theme behavior in your Magic Portfolio project.

## Overview

The theme system allows you to control whether users can switch between light and dark modes, or force a specific theme mode. This is useful for branding requirements or when you want to maintain a consistent visual experience.

## Configuration

Theme behavior is configured in `src/resources/once-ui.config.js`:

```javascript
// Theme configuration
const theme = {
  enabled: true, // Set to false to disable theme switching entirely
  forceMode: null, // Set to 'light' or 'dark' to force a specific theme, or null for normal behavior
};
```

## Configuration Options

### `enabled` (boolean)
- **Default**: `true`
- **Description**: Controls whether theme switching is available to users
- **When `false`**: 
  - Theme toggle button is hidden from the header
  - Users cannot switch themes
  - Defaults to light mode unless `forceMode` is specified

### `forceMode` (string | null)
- **Default**: `null`
- **Accepted values**: `'light'`, `'dark'`, or `null`
- **Description**: Forces a specific theme mode regardless of user preference
- **When set to a theme**:
  - Theme toggle button is hidden
  - The specified theme is always used
  - User's saved theme preferences are ignored
  - System preference is ignored

## Usage Examples

### Disable Theme Switching (Light Mode Only)
```javascript
const theme = {
  enabled: false,
  forceMode: null, // Will default to light mode
};
```

### Force Dark Mode
```javascript
const theme = {
  enabled: true, // Can be true or false, doesn't matter when forceMode is set
  forceMode: 'dark',
};
```

### Force Light Mode
```javascript
const theme = {
  enabled: true,
  forceMode: 'light',
};
```

### Normal Theme Switching (Default)
```javascript
const theme = {
  enabled: true,
  forceMode: null,
};
```

## How It Works

### 1. Configuration Loading
The theme configuration is loaded during the initial page render in `layout.tsx`.

### 2. Theme Initialization
During page load, the system:
- Checks if theme switching is enabled
- Applies forced mode if specified
- Falls back to user preferences or system preferences if normal behavior is enabled

### 3. Component Behavior
- **Header**: Only shows theme toggle if `theme.enabled` is `true` and no `forceMode` is set
- **ThemeToggle**: Returns `null` (doesn't render) if theme switching is disabled or forced

### 4. Persistence
- When theme switching is disabled or forced, user preferences are not saved to localStorage
- When re-enabled, the system will use default behavior (system preference)

## Implementation Details

The implementation involves several key files:

1. **`src/resources/once-ui.config.js`**: Theme configuration
2. **`src/app/layout.tsx`**: Theme initialization script
3. **`src/components/Header.tsx`**: Conditional theme toggle rendering
4. **`src/components/ThemeToggle.tsx`**: Theme toggle component with configuration checks

## Considerations

### SEO and Performance
- The theme is applied before the page renders to prevent flash of incorrect theme
- Configuration is embedded in the initial HTML to avoid additional requests

### Accessibility
- When theme switching is disabled, ensure your chosen theme meets accessibility requirements
- Consider providing alternative high-contrast options if needed

### User Experience
- Users expect dark/light mode to be available in modern applications
- If disabling theme switching, consider whether it aligns with your brand requirements
- Forced themes should be tested thoroughly across all content types

## Troubleshooting

### Theme Toggle Still Visible
- Check that both `theme.enabled` is properly configured
- Ensure the configuration is exported correctly from `once-ui.config.js`
- Verify the import in `Header.tsx` includes the `theme` object

### Theme Not Being Enforced
- Check that `forceMode` is set to a valid value (`'light'` or `'dark'`)
- Clear browser localStorage to remove any cached theme preferences
- Check browser console for any initialization errors

### Configuration Not Taking Effect
- Restart your development server after changing configuration
- Check that the configuration is properly exported and imported
- Verify there are no JavaScript errors in the browser console
