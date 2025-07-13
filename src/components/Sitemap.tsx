import { Flex, SmartLink, Text } from "@once-ui-system/core";
import styles from "./Sitemap.module.scss";

interface SitemapLink {
  href: string;
  label: string;
}

export const Sitemap = () => {
  const sitemapLinks: SitemapLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <Flex
      className={styles.sitemap}
      direction="column"
      gap="16"
      horizontal="center"
      paddingY="24"
    >
      <Text 
        variant="label-default-s" 
        onBackground="neutral-medium"
        className={styles.sitemapTitle}
      >
        Sitemap
      </Text>
      <Flex 
        gap="24" 
        horizontal="center"
        wrap
        className={styles.sitemapLinks}
      >
        {sitemapLinks.map((link) => (
          <SmartLink
            key={link.href}
            href={link.href}
            className={styles.sitemapLink}
          >
            <Text
              variant="body-default-s"
              onBackground="neutral-strong"
            >
              {link.label}
            </Text>
          </SmartLink>
        ))}
      </Flex>
    </Flex>
  );
};
