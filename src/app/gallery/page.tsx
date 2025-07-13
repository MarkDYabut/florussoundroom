import { Flex, Meta, Schema, Column } from "@once-ui-system/core";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { PersonHeader, VideoPlayer } from "@/components";
import { baseURL, gallery, person } from "@/resources";
import { getImagesFromFolder } from "@/utils/galleryUtils";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  // Load all images from the specified folder
  const images = getImagesFromFolder(gallery.imageFolder);

  return (
    <Column maxWidth="l" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <PersonHeader disableRevealFx={true} variant="default" showSocial={true} pageTitle={gallery.label} />
      <VideoPlayer 
        src="/videos/blend-6.mp4"
        alt="Gallery showcase video"
        aspectRatio="9 / 16"
        controls={true}
        muted={false}
        autoPlay={true}
        loop={true}
        poster="/images/gallery/FLORUS-52.jpg"
        marginBottom="xl"
      />
      <MasonryGrid images={images} />
    </Column>
  );
}
