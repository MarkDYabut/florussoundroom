import React from "react";
import { Column, Flex, Icon, Text, Button } from "@once-ui-system/core";
import { IconName } from "@/resources/icons";

export interface NavigationItem {
  id: string;
  label: string;
  icon: IconName;
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
        style={{ maxWidth: "600px" }}
      >
        {items.map((item) => (
          <Button
            key={item.id}
            href={item.href}
            variant="secondary"
            size="l"
            style={{
              minWidth: "100px",
              minHeight: "100px",
              borderRadius: "50%",
              padding: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon 
              name={item.icon} 
              size="xl" 
              onBackground="neutral-strong"
            />
          </Button>
        ))}
      </Flex>
    </Column>
  );
}
