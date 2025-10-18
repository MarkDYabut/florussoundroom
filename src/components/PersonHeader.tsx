import React from "react";
import { Heading, Flex, Text, Button, Column, Icon, IconButton } from "@once-ui-system/core";
import { person, social } from "@/resources";
import { Location } from "@/components/Location";
import { ConditionalRevealFx } from "./ConditionalRevealFx";

interface PersonHeaderProps {
  showSocial?: boolean;
  variant?: "default" | "compact" | "about";
  className?: string;
  pageTitle?: string; // Add prop for page title
  headerTitle?: string; // H1 title
  description?: string | React.ReactNode; // Description paragraph
}

export const PersonHeader: React.FC<PersonHeaderProps> = ({ 
  showSocial = true, 
  variant = "default",
  className = "",
  pageTitle,
  headerTitle,
  description
}) => {
  // Determine the display title based on whether pageTitle is provided
  const displayTitle = pageTitle || person.name;
  if (variant === "about") {
    // Simplified header for about page without RevealFx
    return (
      <Column fillWidth gap="m" horizontal="center" paddingTop="48" className={className}>
        <Heading variant="display-strong-xl" style={{ textAlign: 'center' }}>
          {displayTitle}
        </Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
          {person.role}
        </Text>
        {headerTitle && (
          <Heading as="h1" variant="heading-strong-xl" style={{ textAlign: 'center' }} marginTop="l">
            {headerTitle}
          </Heading>
        )}
        {description && (
          <Text variant="body-default-l" onBackground="neutral-medium" style={{ textAlign: 'center', maxWidth: '600px' }} marginTop="s">
            {description}
          </Text>
        )}
        {showSocial && social.length > 0 && (
          <Flex paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
            {social.map(
              (item) =>
                item.link && (
                    <React.Fragment key={item.name}>
                        <Button
                            className="s-flex-hide"
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                        />
                        <IconButton
                            className="s-flex-show"
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                        />
                    </React.Fragment>
                ),
            )}
          </Flex>
        )}
      </Column>
    );
  }

  if (variant === "compact") {
    // Compact variant - logo only
    return (
      <ConditionalRevealFx translateY="4" fillWidth horizontal="center" paddingTop="32" paddingBottom="16" className={className}>
        <Column gap="s" horizontal="center">
          <ConditionalRevealFx translateY="8" delay={0.1}>
            <img 
              src={person.avatar} 
              alt={person.name}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </ConditionalRevealFx>
        </Column>
      </ConditionalRevealFx>
    );
  }

  // Default variant for index page
  const content = (
    <Column gap="m" horizontal="center">
      <ConditionalRevealFx translateY="8" delay={0.1}>
        <img 
          src={person.avatar} 
          alt={person.name}
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      </ConditionalRevealFx>
      <Heading variant="display-strong-xl" wrap="balance" style={{ textAlign: 'center' }}>
        {displayTitle}
      </Heading>
      <Text variant="display-default-s" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
        {person.role}
      </Text>
      <Location 
        address={person.address.street}
        city={person.address.city}
        country={person.address.country}
        variant="default"
        showIcon={true}
      />
      {headerTitle && (
        <Heading as="h1" variant="heading-strong-xl" style={{ textAlign: 'center' }} marginTop="l">
          {headerTitle}
        </Heading>
      )}
      {description && (
        <Text variant="body-default-l" onBackground="neutral-medium" style={{ textAlign: 'center', maxWidth: '600px' }} marginTop="s">
          {description}
        </Text>
      )}
      {showSocial && social.length > 0 && (
        <Flex paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
          {social.map(
            (item) =>
              item.link && (
                  <React.Fragment key={item.name}>
                      <Button
                          className="s-flex-hide"
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                      />
                      <IconButton
                          className="s-flex-show"
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                      />
                  </React.Fragment>
              ),
          )}
        </Flex>
      )}
    </Column>
  );

  // Always use ConditionalRevealFx - it will handle the animation logic based on the route
  return (
    <ConditionalRevealFx translateY="4" fillWidth horizontal="center" paddingTop="48" paddingBottom="32" className={className}>
      {content}
    </ConditionalRevealFx>
  );
};
