import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { PersonHeader } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <PersonHeader 
        variant="default" 
        showSocial={true} 
        pageTitle={work.label}
        headerTitle="Past Work & Project Experiences"
        description="Sound engineering projects, DJ services, and equipment installations that showcase our expertise in delivering exceptional audio experiences for events, venues, and artists."
      />
      <Projects />
    </Column>
  );
}
