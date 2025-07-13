import React from "react";
import Script from "next/script";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema, Icon, IconButton } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes, social } from "@/resources";
import { Mailchimp, AnimatedBackground, ImageCarousel, PersonHeader, VideoPlayer } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/services/Posts";

export default function Home() {
  return (
    <>
      {/* Animated GIF Background - only on home page */}
      {/* <AnimatedBackground 
        lightGif="/gifs/light-background.gif"
        darkGif="/gifs/dark-background.gif"
        opacity={0.2}
      /> */}
      
      <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="m">
        {/* Brand Logo and Location Section */}
        <PersonHeader 
          variant={"default"} 
          showSocial={true}
          headerTitle="Toronto Hub for DJ Craft & Sound Culture"
          description="All-in-one destination in Toronto for professional DJ services, offering dynamic DJ bookings, premium gear rentals, and hands-on lessons to empower aspiring and seasoned artists alike—where sound meets skill in a creative, collaborative space."
        />
        
        <Column fillWidth>
          {home.featured.display && (
            <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
                href={home.featured.href}>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          {/* <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx> */}
          {/* Image Row */}
          <RevealFx translateY="12" delay={0.6} fillWidth paddingBottom="24">
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
          </RevealFx>
          {/* Setmore Booking Button */}
          <RevealFx translateY="16" delay={0.8} fillWidth horizontal="center" paddingBottom="48">
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
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      

      {/* Studio Video Showcase */}
      <Column fillWidth maxWidth="l" gap="m">
        {/* <Column fillWidth gap="4" horizontal="center">
          <Heading as="h2" variant="display-strong-s" wrap="balance" align="center">
            Experience FLORUS Sound Room
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            Discover our state-of-the-art studio and professional DJ equipment
          </Text>
        </Column> */}
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


      {/* Image Carousel Section */}
      <ImageCarousel 
        title="Studio Gallery"
        subtitle="Experience the creative atmosphere at FLORUS Sound Room"
        maxImages={8}
        showHeader={false}
      />
      {/* <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/services"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from our services
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />} */}

      {/* Setmore Booking Script */}
      <Script
        id="setmore_script"
        src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"
        strategy="lazyOnload"
      />
    </Column>
    </>
  );
}
