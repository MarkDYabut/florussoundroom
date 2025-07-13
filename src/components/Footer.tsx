import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import { Location } from "@/components/Location";
import { Sitemap } from "@/components/Sitemap";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      direction="column"
    >
      {/* Sitemap Section */}
      <Sitemap />
      
      {/* Divider */}
      <Flex
        maxWidth="m"
        fillWidth
        paddingX="16"
        style={{
          borderTop: "1px solid var(--neutral-alpha-weak)",
        }}
      />

      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
        mobileDirection="column"
      >
        <Flex gap="12" vertical="center" mobileDirection="column">
          <Text variant="body-default-s" onBackground="neutral-strong">
            <Text onBackground="neutral-weak">© {currentYear} /</Text>
            <Text paddingX="4">{person.name}</Text>
            <Text onBackground="neutral-weak" style={{ display: 'none' }}>
              {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
              / Build your portfolio with{" "}
              <SmartLink
                href="https://once-ui.com/products/magic-portfolio"
              >
                Once UI
              </SmartLink>
            </Text>
          </Text>
          <Location 
            address={person.address.street}
            city={person.address.city}
            country={person.address.country}
            variant="footer"
            showIcon={true}
          />
        </Flex>
        <Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
