import React from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  DiamondOutlined,
  GridViewOutlined,
  HeadsetMicOutlined,
  SpaOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const features = [
  {
    title: "Premium Quality",
    subtitle: "Built to last",
    icon: <DiamondOutlined />,
  },
  {
    title: "Wide Range",
    subtitle: "Styles for every space",
    icon: <GridViewOutlined />,
  },
  {
    title: "Expert Support",
    subtitle: "Guidance at every step",
    icon: <HeadsetMicOutlined />,
  },
  {
    title: "Sustainable Choice",
    subtitle: "A greener tomorrow",
    icon: <SpaOutlined />,
  },
];

const FeatureItem = ({ item, index }) => (
  <MotionBox
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
    }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
    }}
    sx={{
      width: "100%",
      textAlign: "center",
      position: "relative",

      px: {
        xs: 1.5,
        sm: 2,
        md: 3,
      },

      py: {
        xs: 2,
        sm: 1,
        md: 0,
      },
    }}
  >
    {/* ICON */}

    <Box
      sx={{
        color: "#a47a35",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: {
          xs: 0.8,
          sm: 1,
        },
      }}
    >
      {React.cloneElement(item.icon, {
        sx: {
          fontSize: {
            xs: 27,
            sm: 31,
            md: 36,
          },
        },
      })}
    </Box>

    {/* TITLE */}

    <Typography
      sx={{
        fontFamily: "Georgia, serif",
        color: "#111",
        fontSize: {
          xs: 13,
          sm: 15,
          md: 17,
        },
        fontWeight: 600,
        lineHeight: 1.25,
        mb: 0.5,
      }}
    >
      {item.title}
    </Typography>

    {/* SUBTITLE */}

    <Typography
      sx={{
        color: "#555",
        fontSize: {
          xs: 9,
          sm: 11,
          md: 12,
        },
        lineHeight: 1.4,
      }}
    >
      {item.subtitle}
    </Typography>

    {/* VERTICAL DIVIDER */}

    {index !== features.length - 1 && (
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "1px",
          height: {
            sm: 55,
            md: 60,
          },
          background: "#d8d2c7",

          display: {
            xs: "none",
            sm: "block",
          },
        }}
      />
    )}

    {/* MOBILE HORIZONTAL DIVIDER */}

    {index < 2 && (
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "15%",
          right: "15%",
          height: "1px",
          background: "#d8d2c7",

          display: {
            xs: "block",
            sm: "none",
          },
        }}
      />
    )}
  </MotionBox>
);

function Features() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#ece5d0",

        py: {
          xs: 2.5,
          sm: 3.5,
          md: 4.5,
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
        <Box
          sx={{
            display: "grid",

            /* MOBILE = 2 x 2 */
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(4, 1fr)",
            },

            alignItems: "center",
            width: "100%",
          }}
        >
          {features.map((item, index) => (
            <FeatureItem
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Features;