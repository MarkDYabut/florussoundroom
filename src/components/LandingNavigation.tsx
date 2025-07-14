"use client";

import React from "react";
import { Column, Flex, Icon, Text, Button } from "@once-ui-system/core";
import { IconName } from "@/resources/icons";

export interface NavigationItem {
  id: string;
  label: string;
  icon?: IconName;
  image?: string; // Path to custom image
  href: string;
  external?: boolean;
  description?: string;
}

interface LandingNavigationProps {
  items: NavigationItem[];
  title?: string;
  subtitle?: string;
  showLabels?: boolean;
}

export function LandingNavigation({ items, title, subtitle, showLabels = false }: LandingNavigationProps) {
  return (
    <Column fillWidth gap="xl" horizontal="center" vertical="center">
      {(title || subtitle) && showLabels && (
        <Column fillWidth gap="s" horizontal="center">
          {title && (
            <Text variant="display-strong-l" align="center">
              {title}
            </Text>
          )}
          {subtitle && (
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              {subtitle}
            </Text>
          )}
        </Column>
      )}
      
      <Flex 
        gap="l" 
        wrap
        horizontal="center" 
        vertical="center"
        style={{ 
          maxWidth: "800px",
          gap: "clamp(16px, 4vw, 32px)"
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              minWidth: "clamp(140px, 18vw, 160px)",
              minHeight: "clamp(140px, 18vw, 160px)",
              borderRadius: "50%",
              padding: "clamp(30px, 5vw, 45px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              backdropFilter: "blur(8px)",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.opacity = "0.8";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.opacity = "1";
            }}
            onClick={() => {
              if (item.external) {
                window.open(item.href, "_blank", "noopener noreferrer");
              } else {
                window.location.href = item.href;
              }
            }}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.label}
                style={{
                  width: "clamp(80px, 10vw, 100px)",
                  height: "clamp(80px, 10vw, 100px)",
                  objectFit: "contain"
                }}
              />
            ) : item.icon ? (
              <Icon 
                name={item.icon} 
                size="xl" 
                onBackground="neutral-strong"
              />
            ) : null}
          </div>
        ))}
      </Flex>
    </Column>
  );
}
