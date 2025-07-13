"use client";

import React from "react";
import { Flex, Text, Icon, SmartLink } from "@once-ui-system/core";

interface LocationProps {
  address: string;
  city?: string;
  country?: string;
  variant?: "default" | "compact" | "footer";
  showIcon?: boolean;
  className?: string;
}

export const Location: React.FC<LocationProps> = ({
  address,
  city,
  country,
  variant = "default",
  showIcon = true,
  className = ""
}) => {
  // Create the full address string
  const fullAddress = [address, city, country].filter(Boolean).join(", ");
  
  // Create Google Maps URL
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  
  // Format display text based on variant
  const getDisplayText = () => {
    switch (variant) {
      case "compact":
        return city || address;
      case "footer":
        return fullAddress;
      default:
        return fullAddress;
    }
  };

  const getTextVariant = () => {
    switch (variant) {
      case "compact":
        return "body-default-m";
      case "footer":
        return "body-default-s";
      default:
        return "body-default-m";
    }
  };

  const getIconSize = () => {
    switch (variant) {
      case "compact":
        return "xs";
      case "footer":
        return "xs";
      default:
        return "s";
    }
  };

  const getGap = () => {
    switch (variant) {
      case "compact":
        return "4";
      case "footer":
        return "4";
      default:
        return "8";
    }
  };

  return (
    <SmartLink
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ textDecoration: 'none' }}
    >
      <Flex 
        gap={getGap()} 
        vertical="center" 
        horizontal="center"
        style={{ 
          transition: 'opacity 0.2s ease',
          cursor: 'pointer'
        }}
        className="location-hover"
      >
        {showIcon && (
          <Icon 
            onBackground="accent-weak" 
            name="globe" 
            size={getIconSize()}
          />
        )}
        <Text 
          variant={getTextVariant()} 
          onBackground="neutral-weak"
          style={{ 
            textAlign: variant === "footer" ? "left" : "center",
            whiteSpace: variant === "footer" ? "nowrap" : "normal"
          }}
        >
          {getDisplayText()}
        </Text>
      </Flex>
    </SmartLink>
  );
};
