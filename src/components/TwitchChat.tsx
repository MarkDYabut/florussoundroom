"use client";

import React, { useEffect, useState } from "react";
import { Column, Flex, IconButton } from "@once-ui-system/core";

interface TwitchChatProps {
  channel?: string;
  height?: string;
  width?: string;
  className?: string;
}

export const TwitchChat: React.FC<TwitchChatProps> = ({
  channel = "xqc",
  height = "400px",
  width = "100%",
  className
}) => {
  const [hostname, setHostname] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  if (!hostname) {
    return (
      <div
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 1000,
        }}
      >
        <IconButton
          icon="message"
          variant="secondary"
          size="l"
          tooltip="Loading chat..."
        />
      </div>
    );
  }

  return (
    <>
      {/* Toggle Button */}
      <div
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 1000,
        }}
      >
        <IconButton
          icon="message"
          variant="secondary"
          size="l"
          tooltip={isOpen ? "Close Twitch Chat" : "Open Twitch Chat"}
          onClick={toggleChat}
        />
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={toggleChat} // Close when clicking backdrop
        >
          {/* Chat Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              height: '600px',
              backgroundColor: '#18181b',
              borderRadius: 'var(--radius-l)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Header with close button */}
            <Flex
              fillWidth
              padding="16"
              horizontal="space-between"
              vertical="center"
              style={{
                backgroundColor: '#0f0f0f',
                borderBottom: '1px solid #333',
              }}
            >
              <span style={{ color: '#fff', fontWeight: 'bold' }}>
                {channel} - Twitch Chat
              </span>
              <IconButton
                icon="close"
                variant="ghost"
                size="s"
                onClick={toggleChat}
                style={{ color: '#fff' }}
              />
            </Flex>

            {/* Chat iframe */}
            <iframe
              src={`https://www.twitch.tv/embed/${channel}/chat?parent=${hostname}`}
              style={{
                width: '100%',
                height: 'calc(100% - 60px)', // Account for header
                border: 'none',
                backgroundColor: '#18181b'
              }}
              title={`${channel} Twitch Chat`}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};
