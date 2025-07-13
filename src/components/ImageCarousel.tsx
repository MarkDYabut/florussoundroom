"use client";

import React, { useState, useEffect } from 'react';
import { 
  Carousel, 
  Column, 
  Heading, 
  Text, 
  Button
} from "@once-ui-system/core";
import { ConditionalRevealFx } from './ConditionalRevealFx';

interface ImageCarouselProps {
  title?: string;
  subtitle?: string;
  maxImages?: number;
  showHeader?: boolean;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  title = "Studio Gallery",
  subtitle = "Behind the scenes at FLORUS Sound Room",
  maxImages = 12,
  showHeader = true
}) => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    // Generate array of available FLORUS images
    const images: string[] = [];
    for (let i = 1; i <= Math.min(maxImages, 81); i++) {
      images.push(`/images/gallery/FLORUS-${i}.jpg`);
    }
    
    // Shuffle array for variety on each load
    const shuffled = images.sort(() => Math.random() - 0.5);
    setGalleryImages(shuffled.slice(0, maxImages));
  }, [maxImages]);

  const carouselItems = galleryImages.map((imageSrc, index) => ({
    slide: imageSrc,
    alt: `FLORUS Sound Room Gallery Image ${index + 1}`
  }));

  if (galleryImages.length === 0) {
    return null; // Don't render until images are loaded
  }

  return (
    <ConditionalRevealFx translateY="16" delay={0.4}>
      <Column fillWidth gap="m" marginBottom="xl">
        {showHeader && (title || subtitle) && (
          <Column gap="s" paddingX="s">
            {title && (
              <Heading as="h2" variant="display-strong-s" wrap="balance">
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
                {subtitle}
              </Text>
            )}
          </Column>
        )}
        
        <Carousel
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
          items={carouselItems}
        />
        
        <Column paddingX="s" horizontal="center">
          <Button
            variant="secondary"
            size="m"
            href="/gallery"
            suffixIcon="arrowRight"
          >
            View Full Gallery
          </Button>
        </Column>
      </Column>
    </ConditionalRevealFx>
  );
};
