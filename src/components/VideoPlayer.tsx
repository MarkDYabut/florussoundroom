"use client";

import React, { useRef, useState } from "react";
import { Flex, Button, Icon } from "@once-ui-system/core";

interface VideoPlayerProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  aspectRatio?: string;
  radius?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingX?: string;
  paddingY?: string;
  border?: string;
  background?: string;
  maxWidth?: string | number;
  minWidth?: string | number;
  fillWidth?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  alt = "Video",
  width = "100%",
  height = "auto",
  aspectRatio = "16 / 9",
  radius = "m",
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  poster,
  className = "",
  style = {},
  marginTop = "8",
  marginBottom = "16",
  marginLeft,
  marginRight,
  margin,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingX,
  paddingY,
  border = "neutral-alpha-medium",
  background,
  maxWidth,
  minWidth,
  fillWidth = true,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const containerStyle: React.CSSProperties = {
    width: fillWidth ? "100%" : width,
    maxWidth: maxWidth || "100%",
    minWidth: minWidth || "auto",
    aspectRatio: aspectRatio,
    borderRadius: `var(--radius-${radius})`,
    border: border ? `1px solid var(--${border})` : undefined,
    backgroundColor: background ? `var(--${background})` : undefined,
    overflow: "hidden",
    position: "relative",
    marginTop: marginTop ? `var(--static-space-${marginTop})` : undefined,
    marginBottom: marginBottom ? `var(--static-space-${marginBottom})` : undefined,
    marginLeft: marginLeft ? `var(--static-space-${marginLeft})` : undefined,
    marginRight: marginRight ? `var(--static-space-${marginRight})` : undefined,
    margin: margin ? `var(--static-space-${margin})` : undefined,
    padding: padding ? `var(--static-space-${padding})` : undefined,
    paddingTop: paddingTop ? `var(--static-space-${paddingTop})` : undefined,
    paddingBottom: paddingBottom ? `var(--static-space-${paddingBottom})` : undefined,
    paddingLeft: paddingLeft ? `var(--static-space-${paddingLeft})` : undefined,
    paddingRight: paddingRight ? `var(--static-space-${paddingRight})` : undefined,
    ...style,
  };

  const videoStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  return (
    <div style={containerStyle} className={className}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        muted={muted}
        playsInline
        style={videoStyle}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        aria-label={alt}
        {...props}
      >
        Your browser does not support the video tag.
      </video>
      
      {!controls && (
        <Flex
          position="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <Button
            variant="secondary"
            size="l"
            onClick={handlePlayPause}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "white",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
            }}
          >
            <Icon name={isPlaying ? "pause" : "play"} size="l" />
          </Button>
        </Flex>
      )}
    </div>
  );
};

export default VideoPlayer;
