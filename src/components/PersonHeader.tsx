import React from "react";
import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Icon, IconButton } from "@once-ui-system/core";
import { person, social } from "@/resources";

interface PersonHeaderProps {
  showSocial?: boolean;
  variant?: "default" | "compact" | "about";
  className?: string;
  disableRevealFx?: boolean;
}

export const PersonHeader: React.FC<PersonHeaderProps> = ({ 
  showSocial = true, 
  variant = "default",
  className = "",
  disableRevealFx = false
}) => {
  if (variant === "about") {
    // Simplified header for about page without RevealFx
    return (
      <Column fillWidth gap="m" horizontal="center" className={className}>
        <Heading variant="display-strong-xl" style={{ textAlign: 'center' }}>
          {person.name}
        </Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
          {person.role}
        </Text>
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

  // Default variant for index page
  const content = (
    <Column gap="m" horizontal="center">
      <Avatar src={person.avatar} size="xl" />
      <Heading variant="display-strong-xl" wrap="balance" style={{ textAlign: 'center' }}>
        {person.name}
      </Heading>
      <Text variant="display-default-s" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
        {person.role}
      </Text>
      <Flex gap="8" vertical="center" horizontal="center">
        <Icon onBackground="accent-weak" name="globe" />
        <Text variant="body-default-m" onBackground="neutral-weak">
          {person.location.split('/').pop()}
        </Text>
      </Flex>
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

  if (disableRevealFx) {
    return (
      <Flex fillWidth horizontal="center" paddingBottom="32" className={className}>
        {content}
      </Flex>
    );
  }

  return (
    <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="32" className={className}>
      {content}
    </RevealFx>
  );
};
