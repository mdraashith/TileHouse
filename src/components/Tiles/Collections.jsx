import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";

import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

/* =========================
   COLLECTIONS
========================= */

const collections = [
  {
    title: "Marble",
    subtitle: "Timeless elegance",
    image: "/img/marbles.png",
  },
  {
    title: "Stone",
    subtitle: "Natural beauty",
    image: "/img/stone.png",
  },
  {
    title: "Wooden",
    subtitle: "Warm & versatile",
    image: "/img/wooden.png",
  },
  {
    title: "Concrete",
    subtitle: "Modern appeal",
    image: "/img/Concrete.png",
  },
  {
    title: "Terrazzo",
    subtitle: "Bold expressions",
    image: "/img/terrazzo.png",
  },
  {
    title: "Designer",
    subtitle: "Unique by design",
    image: "/img/designertile.png",
  },
   {
    title: "Designer",
    subtitle: "Unique by design",
    image: "/img/kitchenwall.png",
  },
   {
    title: "Designer",
    subtitle: "Unique by design",
    image: "/img/walltitles4.png",
  },
   {
    title: "Designer",
    subtitle: "Unique by design",
    image: "/img/walltitles2.png",
  },
   {
    title: "Designer",
    subtitle: "Unique by design",
    image: "/img/walltitles3.png",
  },
];

function Collections() {
  return (
    <Box
      sx={{
        mt: {
          xs: 3,
          md: 2,
        },
        background: "#F5F1E9",
        py: {
          xs: 5,
          md: 6,
        },
      }}
    >

      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >

        {/* COLLECTION HEADER */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr 1fr",
            },
            alignItems: "center",
            gap: 3,
            mb: 3.5,
          }}
        >

          {/* LEFT */}

          <Box>

            <Typography
              sx={{
                fontSize: 12,
                letterSpacing: "2px",
                color: "#966A3B",
                mb: 0.8,
                fontFamily: "'Forum', serif",
                fontWeight: 550,
              }}
            >
              EXPLORE OUR
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >

              <Typography
                sx={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                  fontSize: {
                    xs: 36,
                    sm: 40,
                    md: 45,
                  },
                  lineHeight: 1,
                }}
              >
                Collections
              </Typography>

              <Box
                sx={{
                  width: 35,
                  height: "1.5px",
                  background: "#A8753C",
                  mt: 1,
                }}
              />

            </Box>

          </Box>


          {/* CENTER */}

          <Typography
            sx={{
              fontSize: {
                xs: 14,
                md: 16,
              },
              fontWeight:500,
              fontFamily:"ui-monospace",
              color: "#555",
              maxWidth: 260,
              justifySelf: {
                md: "center",
              },
            }}
          >
            A curated range of surfaces to suit every
            style, space and personality.
          </Typography>


          {/* RIGHT */}

          <Button
            component={Link}
            to="/gallery"
            endIcon={<ArrowForward />}
            sx={{
              justifySelf: {
                md: "end",
              },
              color: "#79572F",
              fontSize: 14,
              textTransform: "none",
              p: 0,
              fontFamily:"sans-serif",
              fontWeight:600,
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            View All Collections
          </Button>

        </Box>


        {/* ==================================================
            COLLECTION GRID
        ================================================== */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: {
              xs: 1.5,
              sm: 2,
            },
          }}
        >

          {collections.map((item, index) => (
            <MotionBox
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
            >

              {/* IMAGE */}

              <Box
                sx={{
                  width: "100%",
                  height: {
                    xs: 250,
                    sm: 255,
                    md: 350,
                    lg: 350,
                  },
                  overflow: "hidden",
                  background: "#DDD",
                }}
              >

                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s ease",

                    "&:hover": {
                      transform: "scale(1.06)",
                    },
                  }}
                />

              </Box>


              {/* TITLE */}

              <Typography
                sx={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                  fontSize: {
                    xs: 14,
                    md: 18,
                  },
                  textAlign:"center",
                  fontWeight: 600,
                  mt: 1.2,
                }}
              >
                {item.title}
              </Typography>


              {/* SUBTITLE */}

              <Typography
                sx={{
                  fontSize: {
                    xs: 13,
                    md: 13,
                  },
                  color: "#666",
                  textAlign:"center",
                  mt: 0.3,
                }}
              >
                {item.subtitle}
              </Typography>

            </MotionBox>
          ))}

        </Box>

      </Container>

    </Box>
  );
}

export default Collections;