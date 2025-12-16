import React from "react";
import { Column, Schema } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { LandingNavigation, PersonHeader, ConditionalRevealFx } from "@/components";
import { landingNavigation, landingNavigationFlower } from "@/config/landingNavigation";

export default function Home() {
  return (
    <Column paddingTop="l" maxWidth="m" gap="m" horizontal="center" style={{ minHeight: "100vh" }}>
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

      {/* PersonHeader Section */}
      <Column fillWidth gap="m" style={{ paddingTop: '4rem' }}>
        <PersonHeader
          variant="compact"
        />
      </Column>



      {/* Custom Landing Navigation - Florus Branding */}
      <Column fillWidth gap="m" horizontal="center" vertical="center" >

        <ConditionalRevealFx translateY="4" delay={0.1} fillWidth horizontal="center">
          <LandingNavigation
            items={landingNavigation.items}
            showSubtext={landingNavigation.showSubtext}
          />
        </ConditionalRevealFx>
      </Column>

      {/* Custom Landing Navigation - Flower Logos */}
      {/* <Column fillWidth gap="m" horizontal="center" vertical="center" style={{ minHeight: "50vh" }}>
        <LandingNavigation 
          items={landingNavigationFlower.items}
          showSubtext={landingNavigationFlower.showSubtext}
        />
      </Column> */}

      <radio-player-banner host="s9be0c0f94.dj.radio.co" stream-url="https://streaming.radio.co/s9be0c0f94/listen"
        position="top" fixed>
      </radio-player-banner>
      <radio-player-banner theme="sunset" host="sc87d838f8.dj.radio.co" stream-url="https://streamer.radio.co/sc87d838f8/listen"
        position="bottom" fixed>
      </radio-player-banner>

      {/* <radio-player-vinyl vinyl-color="black" size="300" theme="default" label-text="FLORUS" label-subtext="RADIO"></radio-player-vinyl> */}

      {/* Radio Player */}
      {/* <Column fillWidth gap="m" horizontal="center">
        <radio-player
          host="s9be0c0f94.dj.radio.co"
          stream-url="https://streaming.radio.co/s9be0c0f94/listen"
          refresh-interval="30"
          show-controls="true"
          show-history="true">
        </radio-player>
      </Column> */}
    </Column>
  );
}
