"use client";

import React from "react";
import { Column, Flex, Icon, Text, Button } from "@once-ui-system/core";
import { IconName } from "@/resources/icons";
import styles from "./LandingNavigation.module.scss";

export interface NavigationItem {
  id: string;
  label: string;
  icon?: IconName;
  image?: string; // Path to custom image
  href: string;
  external?: boolean;
  description?: string;
  subtext?: string; // Small text to display below the logo
}

interface LandingNavigationProps {
  items: NavigationItem[];
  title?: string;
  subtitle?: string;
  showLabels?: boolean;
  showSubtext?: boolean; // Option to show/hide subtext below logos
}

export function LandingNavigation({ items, title, subtitle, showLabels = false, showSubtext = false }: LandingNavigationProps) {
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
        wrap={false}
        horizontal="center" 
        vertical="center"
        style={{ 
          maxWidth: "100%",
          gap: "clamp(20px, 6vw, 40px)",
          justifyContent: "center",
          flexWrap: "nowrap"
        }}
      >
        {items.map((item) => (
          <Column
            key={item.id}
            gap="xs"
            horizontal="center"
            vertical="center"
            style={{
              minWidth: "clamp(120px, 15vw, 150px)",
            }}
          >
            <div
              style={{
                minWidth: "clamp(120px, 15vw, 150px)",
                minHeight: "clamp(120px, 15vw, 150px)",
                borderRadius: "50%",
                padding: "clamp(30px, 5vw, 45px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                backdropFilter: "blur(8px)",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                cursor: "pointer"
              }}            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.opacity = "0.9";
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
                  className={styles.spinningImage}
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
                  className={styles.spinningIcon}
                />
              ) : null}
            </div>
            
            {/* Conditional subtext below the logo */}
            {showSubtext && item.subtext && (
              <Text 
                variant="body-default-xs" 
                onBackground="neutral-weak" 
                align="center"
                style={{ 
                  marginTop: "8px",
                  fontSize: "clamp(10px, 2vw, 12px)",
                  textAlign: "center"
                }}
              >
                {item.subtext}
              </Text>
            )}
          </Column>
        ))}
      </Flex>
    </Column>
  );
}
