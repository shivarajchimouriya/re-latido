"use client";
import { Container, Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

export default function SpotifyCard({ showPlaylist }: {
  showPlaylist: boolean
}) {
  const pathname = usePathname();
  if (pathname !== "/" || !showPlaylist) {
    return null;
  }
  return (
    <Container
      style={{
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      <Flex
        w="full"
        h="full"
        justify="center"
        scrollSnapAlign="end"
        scrollSnapStop="always"
      >
        <iframe
          style={{
            borderRadius: "12px",
            height: "calc(-160px + 98dvh)",
            marginBottom: "0.5rem",
            width: "100%",
          }}
          src="https://open.spotify.com/embed/playlist/659FanjXkBWDbIEHbUetPl?utm_source=generator&theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Flex>
    </Container>
  );
}
