import React from "react";
import {Box,Container,Typography,Button,} from "@mui/material";
import { Check,ArrowForward,} from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

/* =========================
   REUSABLE COMPONENTS
========================= */

const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  sx = {},
}) => {
  const x = direction === "left" ? -40 : direction === "right" ? 40 : 0;
  const y = direction === "up" ? 25 : 0;

  return (
    <MotionBox
      initial={{
        opacity: 0,
        x,
        y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
      }}
      sx={sx}
    >
      {children}
    </MotionBox>
  );
};


const SectionLabel = ({ children, dark = false }) => (
  <Box>
    <Box
      sx={{
        width: 35,
        height: 2,
        background: "#d5a442",
        mb: 2,
      }}
    />

    <Typography
      sx={{
        color: "#c3953b",
        fontSize: {
          xs: 9,
          md: 10,
        },
        fontWeight: 700,
        letterSpacing: 2,
        textShadow: dark
          ? "1px 1px 5px rgba(0,0,0,.8)"
          : "none",
      }}
    >
      {children}
    </Typography>
  </Box>
);


const FeatureItem = ({ text, index }) => (
  <FadeIn
    direction="left"
    delay={index * 0.08}
    duration={0.4}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.2,
    }}
  >
    <Box
      sx={{
        width: 20,
        height: 20,
        minWidth: 20,
        borderRadius: "50%",
        background:
          "linear-gradient(135deg,#f0c96b,#c89535)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 3px 10px rgba(0,0,0,.35)",
      }}
    >
      <Check
        sx={{
          color: "#171717",
          fontSize: 14,
        }}
      />
    </Box>

    <Typography
      sx={{
        color: "#fff",
        fontSize: {
          xs: 10,
          sm: 11,
          md: 13,
        },
        fontWeight: 500,
        textShadow: "1px 1px 5px rgba(0,0,0,.9)",
      }}
    >
      {text}
    </Typography>
  </FadeIn>
);


const ProcessStep = ({ item, index, last }) => (
  <FadeIn
    delay={index * 0.1}
    sx={{
      position: "relative",
    }}
  >
    <Box
      sx={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        border: "3px solid #b18a43",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#765921",
        fontSize: 15,
        fontWeight: 650,
        mb: 1,
      }}
    >
      {item.number}
    </Box>

    <Typography
      sx={{
        color: "#111",
        fontSize: 17,
        fontWeight: 750,
        mb: 0.4,
      }}
    >
      {item.title}
    </Typography>

    <Typography
      sx={{
        color: "#555",
        fontSize: 12,
        lineHeight: 1.45,
        whiteSpace: "pre-line",
      }}
    >
      {item.text}
    </Typography>

    {!last && (
      <ArrowForward
        sx={{
          position: "absolute",
          top: 25,
          right:80,
          color: "#b4935b",
          fontSize: 30,
          display: {
            xs: "none",
            md: "block",
          },
        }}
      />
    )}
  </FadeIn>
);


/* =========================
   DATA
========================= */

const features = [
  "Premium Quality Products",
  "Wide Range of Designs",
  "Expert Guidance & Support",
  "Customer-First Approach",
];

const process = [
  {
    number: "01",
    title: "Explore",
    text: "Browse our wide\nrange of collections",
  },
  {
    number: "02",
    title: "Choose",
    text: "Get expert guidance\nto find the perfect fit",
  },
  {
    number: "03",
    title: "Plan",
    text: "Visualize and plan\nyour space with ease",
  },
  {
    number: "04",
    title: "Transform",
    text: "Bring your vision\nto life with confidence",
  },
];


/* =========================
   MAIN COMPONENT
========================= */

function WhyChoose() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >

      {/* =========================
          WHY CHOOSE TILEHAUS
      ========================= */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: {
            xs: 400,
            sm: 520,
            md: 420,
          },

          backgroundImage: {
            xs: `
              linear-gradient(
                90deg,
                rgba(0,0,0,.72) 0%,
                rgba(0,0,0,.52) 55%,
                rgba(0,0,0,.15) 100%
              ),
              url("/img/aboutbg.png")
            `,
            md: `url("/img/aboutbg.png")`,
          },

          backgroundSize: "cover",

          backgroundPosition: {
            xs: "center",
            md: "center",
          },

          backgroundRepeat: "no-repeat",

          display: "flex",
          alignItems: "center",
        }}
      >

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            px: {
              xs: 3,
              sm: 5,
              md: 6,
              lg: 7,
            },
          }}
        >

          {/* CONTENT */}

          <FadeIn
            direction="left"
            duration={0.8}
            sx={{
              width: {
                xs: "100%",
                sm: "60%",
                md: "38%",
                lg: "37%",
              },
              color: "#fff",
            }}
          >

            <SectionLabel dark>
              WHY CHOOSE TILEHOUSE 360
            </SectionLabel>

            {/* TITLE */}

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: 32,
                  sm: 38,
                  md: 38,
                  lg: 46,
                },
                lineHeight: 1.08,
                fontWeight: 400,
                color: "#fff",
                mb: 2,
                mt: 1.5,
                textShadow:
                  "2px 2px 8px rgba(0,0,0,.85)",
              }}
            >
              More Than Tiles,
              <br />
              A Better Experience
            </Typography>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                color: "#f1f1f1",
                fontSize: {
                  xs: 11,
                  sm: 12,
                  md: 14,
                },
                lineHeight: 1.65,
                maxWidth: 450,
                mb: 2.5,
                textShadow:
                  "1px 1px 5px rgba(0,0,0,.9)",
              }}
            >
              We don't just sell tiles, we provide complete
              solutions that make your spaces stylish,
              functional and timeless.
            </Typography>

            {/* FEATURES */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.1,
                mb: 3,
              }}
            >
              {features.map((feature, index) => (
                <FeatureItem
                  key={feature}
                  text={feature}
                  index={index}
                />
              ))}
            </Box>
          </FadeIn>

        </Container>
      </Box>


      {/* =========================
          OUR PROCESS
      ========================= */}

      <Box
        sx={{
          background: "#faf9f6",
          py: {
            xs: 4,
            sm: 4.5,
            md: 4,
          },
        }}
      >

        <Container
          maxWidth="xl"
          sx={{
            px: {
              xs: 3,
              sm: 5,
              md: 8,
            },
          }}
        >

          {/* HEADER */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 3,
            }}
          >

            <Box>
              <SectionLabel>
                OUR PROCESS
              </SectionLabel>

              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  color: "#111",
                  fontSize: {
                    xs: 25,
                    sm: 30,
                    md: 40,
                  },
                  lineHeight: 1.1,
                  fontWeight: 500,
                  mt: 1,
                }}
              >
                From Inspiration to Installation
              </Typography>
            </Box>

            <Typography
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
                color: "#444",
                fontSize: 14,
                lineHeight: 1.5,
                width: 310,
                pt: 1,
              }}
            >
              We make it simple for you to create your dream
              space, with a seamless process from selection
              to support.
            </Typography>

          </Box>


          {/* PROCESS */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },
              columnGap: {
                xs: 3,
                md: 5,
              },
              rowGap: {
                xs: 4,
                md: 5,
              },
              pl:{xs:0,md:10},
            }}
          >

            {process.map((item, index) => (
              <ProcessStep
                key={item.number}
                item={item}
                index={index}
                last={index === process.length -1}
              />
            ))}

          </Box>

        </Container>
      </Box>

    </Box>
  );
}

export default WhyChoose;