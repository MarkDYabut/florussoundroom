import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp, PersonHeader } from "@/components";
import { Posts } from "@/components/services/Posts";
import { baseURL, services, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: services.title,
    description: services.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(services.title)}`,
    path: services.path,
  });
}

export default function Services() {
  return (
    <Column maxWidth="s">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={services.title}
        description={services.description}
        path={services.path}
        image={`/api/og/generate?title=${encodeURIComponent(services.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/services`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <PersonHeader 
        variant="default" 
        showSocial={false} 
        pageTitle={services.label}
        headerTitle="Professional Sound Engineering Services"
        description="Explore our comprehensive range of professional sound engineering services, mixing techniques, and industry expertise designed to elevate your audio projects and events."
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {services.title}
      </Heading>
      <Column
				fillWidth flex={1}>
				<Posts range={[1,1]} thumbnail direction="column"/>
				<Posts range={[2,3]} thumbnail/>
				<Posts range={[4]} columns="2"/>
			</Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
