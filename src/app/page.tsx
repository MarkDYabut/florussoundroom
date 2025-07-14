import React from "react";
import { Column, Schema } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { LandingNavigation, PersonHeader } from "@/components";
import { landingNavigation, landingNavigationFlower } from "@/config/landingNavigation";

export default function Home() {
  return (
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
      
      {/* PersonHeader Section */}
      <Column fillWidth gap="m">
        <PersonHeader 
          variant="compact"
        />
      </Column>

      {/* Custom Landing Navigation - Florus Branding */}
      <Column fillWidth gap="m" horizontal="center" vertical="center" style={{ minHeight: "50vh" }}>
        <LandingNavigation 
          items={landingNavigation.items}
          showSubtext={landingNavigation.showSubtext}
        />
      </Column>

      {/* Custom Landing Navigation - Flower Logos */}
      <Column fillWidth gap="m" horizontal="center" vertical="center" style={{ minHeight: "50vh" }}>
        <LandingNavigation 
          items={landingNavigationFlower.items}
          showSubtext={landingNavigationFlower.showSubtext}
        />
      </Column>
    </Column>
  );
}
