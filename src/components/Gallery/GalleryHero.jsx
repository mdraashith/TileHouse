import React from "react";
import { Box, Container, Typography } from "@mui/material";
import GalleryCollections from "./GalleryCollections";

const GalleryHero = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: {
            xs: 400,
            sm: 540,
            md: 450,
          },
          overflow: "hidden",
        }}
      >
        {/* HERO IMAGE */}

        <Box
          component="img"
          src="/img/galleryhero.png"
          alt="Luxury Bathroom"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* LIGHT OVERLAY */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.82) 0%, rgba(255, 255, 255, 0.29) 38%, rgba(255,255,255,0.05) 70%)",
          }}
        />

        {/* CONTENT */}

        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "65%",
                md: "48%",
              },
              pt: {
                xs: 2,
                md: 0,
              },
            }}
          >
            {/* SMALL TITLE */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#A96D2A",
                  fontSize: {
                    xs: 10,
                    md: 11,
                  },
                  fontWeight: 700,
                  letterSpacing: 4,

                  textShadow:
                    "0 1px 2px rgba(0,0,0,0.18)",
                }}
              >
                OUR GALLERY
              </Typography>

              <Box
                sx={{
                  width: 45,
                  height: "1px",
                  background: "#A96D2A",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.15)",
                }}
              />
            </Box>

            {/* MAIN TITLE */}

            <Typography
              sx={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",

                fontSize: {
                  xs: 46,
                  sm: 58,
                  md: 72,
                },

                lineHeight: 1.02,

                color: "#171717",

                fontWeight: 400,

                textShadow: `
                  1px 1px 0 rgba(255,255,255,0.9),
                  2px 2px 5px rgba(0,0,0,0.25)
                `,
              }}
            >
              Spaces That
            </Typography>

            <Typography
              sx={{
                fontFamily:
                  "Georgia, 'Times New Roman', serif",

                fontSize: {
                  xs: 46,
                  sm: 58,
                  md: 72,
                },

                lineHeight: 1.02,

                color: "#B47735",

                fontStyle: "italic",

                fontWeight: 400,

                textShadow: `
                  1px 1px 0 rgba(255,255,255,0.95),
                  2px 2px 6px rgba(0,0,0,0.28)
                `,
              }}
            >
              Inspire You
            </Typography>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                mt: 3,

                maxWidth: 500,

                color: "#4F4B46",

                fontSize: {
                  xs: 14,
                  sm: 15,
                  md: 16,
                },

                lineHeight: 1.6,

                fontWeight: 500,

                textShadow: `
                  0 1px 2px rgba(255,255,255,0.9),
                  0 2px 4px rgba(0,0,0,0.18)
                `,
              }}
            >
              Explore our collection of beautifully designed
              spaces featuring premium tiles, sanitaryware
              and bath fittings. Get inspired for your next
              project.
            </Typography>
          </Box>
        </Container>
      </Box>

      <GalleryCollections />
    </>
  );
};

export default GalleryHero;