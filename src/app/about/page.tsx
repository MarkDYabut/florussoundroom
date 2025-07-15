import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Badge,
  Row
} from "@once-ui-system/core";
import { baseURL, about, person, social, home, newsletter, routes } from "@/resources";
import { PersonHeader, VideoPlayer, ImageCarousel, ConditionalRevealFx, Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/services/Posts";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import Script from "next/script";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <PersonHeader 
              variant="default" 
              showSocial={true} 
              pageTitle={about.label}
              headerTitle="Toronto Hub for DJ Craft & Sound Culture"
              description="All-in-one destination in Toronto for professional DJ services, offering dynamic DJ bookings, premium gear rentals, and hands-on lessons to empower aspiring and seasoned artists alike—where sound meets skill in a creative, collaborative space."
              className={styles.textAlign} 
            />
          </Column>

          {/* Featured Badge Section from Homepage */}
          {home.featured.display && (
            <ConditionalRevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
                href={home.featured.href}>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </ConditionalRevealFx>
          )}

          {/* Image Gallery Row from Homepage */}
          <ConditionalRevealFx translateY="12" delay={0.6} fillWidth paddingBottom="24">
            <Row fillWidth gap="12" horizontal="center">
              <Flex flex={1}>
                <img
                  src="/images/gallery/FLORUS-3.jpg"
                  alt="FLORUS Sound Room Studio"
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '8px' 
                  }}
                />
              </Flex>
              <Flex flex={1}>
                <img
                  src="/images/projects/project-01/image-01.jpg"
                  alt="FLORUS Sound Room Equipment"
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '8px' 
                  }}
                />
              </Flex>
              <Flex flex={1}>
                <img
                  src="/images/gallery/FLORUS-23.jpg"
                  alt="FLORUS Sound Room Atmosphere"
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '8px' 
                  }}
                />
              </Flex>
            </Row>
          </ConditionalRevealFx>

          {/* Setmore Booking Button from Homepage */}
          <ConditionalRevealFx translateY="16" delay={0.8} fillWidth horizontal="center" paddingBottom="48">
            <Button
              id="Setmore_button_iframe"
              href="https://florussoundroom.setmore.com"
              variant="primary"
              size="l"
              weight="strong"
              fillWidth
              style={{ 
                maxWidth: '400px',
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: 'bold'
              }}
            >
              Book Your Session Now
            </Button>
          </ConditionalRevealFx>

          {/* Subline from Homepage */}
          <ConditionalRevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="wrap" align="center" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </ConditionalRevealFx>

          {/* Studio Video Showcase from Homepage */}
          <Column fillWidth maxWidth="l" gap="m" marginBottom="xl">
            <VideoPlayer
              src="/videos/studio-v2.mp4"
              alt="FLORUS Sound Room Studio Tour"
              aspectRatio="9 / 16"
              radius="l"
              controls={true}
              autoPlay={true}
              muted={true}
              loop={true}
              marginBottom="24"
            />
          </Column>

          {/* Image Carousel from Homepage */}
          <Column fillWidth marginBottom="xl">
            <ImageCarousel 
              title="Studio Gallery"
              subtitle="Experience the creative atmosphere at FLORUS Sound Room"
              maxImages={8}
              showHeader={false}
            />
          </Column>

          <Column fillWidth marginBottom="xl">
            <Heading as="h2" variant="display-strong-s" marginBottom="m">
              Who Are We?
            </Heading>
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {/* Secondary Studio Video (from about page) */}
          <Column fillWidth marginBottom="xl">
            <VideoPlayer
              src="/videos/florus-do-west.mp4"
              alt="FLORUS Sound Room Studio Experience"
              aspectRatio="16 / 9"
              radius="m"
              controls={true}
              autoPlay={true}
              muted={true}
              loop={true}
              poster="/images/gallery/FLORUS-3.jpg"
              marginBottom="16"
            />
          </Column>

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>

      {/* Newsletter from Homepage (if enabled) */}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}

      {/* Setmore Booking Script */}
      <Script
        id="setmore_script"
        src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"
        strategy="lazyOnload"
      />
    </Column>
  );
}
