import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css'
import '@/resources/animated-background.css'

import classNames from "classnames";

import { Background, Column, Flex, Meta, opacity, SpacingToken } from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers, TwitchChat, Analytics, SetmoreButton } from '@/components';
import { baseURL, effects, fonts, style, dataStyle, home, theme } from '@/resources';

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const themeConfig = ${JSON.stringify(theme)};
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    'solid-style': style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    'viz-style': dataStyle.variant,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Handle theme configuration
                  let finalTheme;
                  
                  if (!themeConfig.enabled || themeConfig.forceMode) {
                    // Theme switching disabled or forced mode
                    finalTheme = themeConfig.forceMode || 'light';
                  } else {
                    // Normal theme behavior
                    const resolveTheme = (themeValue) => {
                      if (!themeValue || themeValue === 'system') {
                        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                      }
                      return themeValue;
                    };
                    
                    const savedTheme = localStorage.getItem('data-theme');
                    finalTheme = resolveTheme(savedTheme);
                  }
                  
                  root.setAttribute('data-theme', finalTheme);
                  
                  // Apply any saved style overrides (only if theme switching is enabled)
                  if (themeConfig.enabled && !themeConfig.forceMode) {
                    const styleKeys = Object.keys(config);
                    styleKeys.forEach(key => {
                      const value = localStorage.getItem('data-' + key);
                      if (value) {
                        root.setAttribute('data-' + key, value);
                      }
                    });
                  }
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
        <script 
          id="setmore_script" 
          type="text/javascript" 
          src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"
        />
      </head>
      <Analytics />
      <Providers>
        <Column as="body" background="page" fillWidth style={{minHeight: "100vh"}} margin="0" padding="0" horizontal="center">
          <Background
            position="fixed"
            mask={{
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
              cursor: effects.mask.cursor,
            }}
            gradient={{
              display: effects.gradient.display,
              opacity: effects.gradient.opacity as opacity,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
            }}
            dots={{
              display: effects.dots.display,
              opacity: effects.dots.opacity as opacity,
              size: effects.dots.size as SpacingToken,
              color: effects.dots.color,
            }}
            grid={{
              display: effects.grid.display,
              opacity: effects.grid.opacity as opacity,
              color: effects.grid.color,
              width: effects.grid.width,
              height: effects.grid.height,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as opacity,
              size: effects.lines.size as SpacingToken,
              thickness: effects.lines.thickness,
              angle: effects.lines.angle,
              color: effects.lines.color,
            }}
          />
          <Flex fillWidth minHeight="16" hide="s"/>
            <Header />
            <Flex
              zIndex={0}
              fillWidth
              padding="l"
              horizontal="center"
              flex={1}
            >
              <Flex horizontal="center" fillWidth minHeight="0">
                <RouteGuard>
                  {children}
                </RouteGuard>
              </Flex>
            </Flex>
            <Footer/>
            {/* Twitch Chat Toggle */}
            {/* <TwitchChat channel="xqc" /> */}
            <SetmoreButton />
            
            {/* Force black text colors after page load */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    function forceBlackText() {
                      const root = document.documentElement;
                      
                      // Override all neutral color CSS variables
                      const neutralVars = [
                        '--neutral-on-background-strong',
                        '--neutral-on-background-medium', 
                        '--neutral-on-background-weak',
                        '--neutral-text-strong',
                        '--neutral-text-medium',
                        '--neutral-text-weak',
                        '--scheme-neutral-100',
                        '--scheme-neutral-200',
                        '--scheme-neutral-300',
                        '--scheme-neutral-400',
                        '--scheme-neutral-500',
                        '--scheme-neutral-600',
                        '--scheme-neutral-700',
                        '--scheme-neutral-800',
                        '--scheme-neutral-900',
                        '--scheme-neutral-1000',
                        '--scheme-neutral-1100',
                        '--scheme-neutral-1200'
                      ];
                      
                      neutralVars.forEach(varName => {
                        root.style.setProperty(varName, '#000000', 'important');
                      });
                      
                      // Force all text elements to black
                      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th, label');
                      textElements.forEach(el => {
                        if (el.style) {
                          el.style.setProperty('color', '#000000', 'important');
                        }
                      });
                    }
                    
                    // Run immediately
                    forceBlackText();
                    
                    // Run after DOM is loaded
                    if (document.readyState === 'loading') {
                      document.addEventListener('DOMContentLoaded', forceBlackText);
                    }
                    
                    // Run after everything is loaded
                    window.addEventListener('load', forceBlackText);
                    
                    // Run periodically to catch any dynamic content
                    setInterval(forceBlackText, 500);
                  })();
                `
              }}
            />
          </Column>
        </Providers>
      </Flex>
  );
}
