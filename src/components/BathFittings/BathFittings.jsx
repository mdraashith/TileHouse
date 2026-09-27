import React from "react";
import { Box, Container, Typography } from "@mui/material";

import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

import { motion } from "framer-motion";
import BathFittingBrands from "./BathFittingBrands";
import BathFittingReviews from "./BathFittingReviews";
const categories = [
  {
    title: "Faucets",
    image: "/img/faucet.png",
  },
  {
    title: "Showers",
    image: "/img/showers.png",
  },
  {
    title: "Hand Showers",
    image: "/img/handshower.png",
  },
  {
    title: "Diverters",
    image: "/img/diverter.png",
  },
  {
    title: "Health Faucets",
    image: "/img/healthfaucet.png",
  },
  {
    title: "Accessories",
    image: "/img/bathaccessories.png",
  },
];

function FeatureItem({ icon, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.8,
      }}
    >
      <Box
        sx={{
          color: "#C8954A",
          display: "flex",

          "& svg": {
            fontSize: 30,
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          fontSize: 10,
          lineHeight: 1.2,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

function CategoryCard({ title, image, index }) {
  return (
    <motion.div
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
        duration: 0.4,
        delay: index * 0.05,
      }}
    >
      <Box
        sx={{
          background: "#fff",
          borderRadius: "6px",
          overflow: "hidden",
          boxShadow: "0 4px 14px rgba(0,0,0,0.10)",
          transition: "0.3s",

          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          },
        }}
      >
        {/* CARD IMAGE */}

        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",

            height: {
              xs: 185,
              sm: 210,
              md: 205,
            },

            objectFit: "cover",

            display: "block",

            transition: "0.4s",

            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />

        {/* CARD NAME */}

        <Box
          sx={{
            height: {
              xs: 52,
              md: 58,
            },

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            px: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: 12,
                sm: 13,
                md: 14,
              },

              fontWeight: 500,

              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}

function BathFittings() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#F7F4EE",
        overflow: "hidden",
      }}
    >
      {/* ================= HERO ================= */}

      <Box
        sx={{
          height: {
            xs: 580,
            sm: 540,
            md: 495,
          },

          display: "flex",

          alignItems: "center",

          position: "relative",

          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(0,0,0,0.96) 0%,
              rgba(0,0,0,0.82) 30%,
              rgba(0,0,0,0.35) 55%,
              rgba(0,0,0,0.05) 100%
            ),
            url("/img/bathfittinghero.png")
          `,

          backgroundSize: "cover",

          backgroundPosition: "center",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            maxWidth: "none",
            px: {
              xs: 2,
              sm: 3,
              md: 0,
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "65%",
                md: "45%",
              },

              color: "#fff",

              ml: 0,
            }}
          >
            {/* SMALL TITLE */}

            <Typography
              sx={{
                fontSize: {
                  xs: 10,
                  md: 11,
                },

                letterSpacing: "1px",

                color: "#C8954A",

                fontWeight: 600,

                mb: 2,
              }}
            >
              BATH FITTINGS
            </Typography>

            {/* MAIN TITLE */}

            <Typography
              sx={{
                fontFamily: "Georgia, serif",

                fontSize: {
                  xs: 47,
                  sm: 55,
                  md: 62,
                },

                lineHeight: 0.98,

                fontWeight: 400,

                mb: 2.5,
              }}
            >
              Design That Flows{" "}

              <Box
                component="span"
                sx={{
                  color: "#C8954A",

                  fontStyle: "italic",
                }}
              >
                With You.
              </Box>
            </Typography>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                maxWidth: 390,

                fontSize: {
                  xs: 13,
                  md: 14,
                },

                lineHeight: 1.6,

                color: "rgba(255,255,255,0.85)",

                mb: 3,
              }}
            >
              Premium bath fittings crafted to bring style,
              comfort and convenience to your everyday living.
            </Typography>

            {/* FEATURES */}

            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                gap: {
                  xs: 2,
                  sm: 3,
                  md: 4,
                },

                mt: 4,
              }}
            >
              <FeatureItem
                icon={<DiamondOutlinedIcon />}
              >
                Premium
                <br />
                Finishes
              </FeatureItem>

              <FeatureItem
                icon={<WaterDropOutlinedIcon />}
              >
                Water
                <br />
                Efficient
              </FeatureItem>

              <FeatureItem
                icon={<ShieldOutlinedIcon />}
              >
                Durable
                <br />
                Performance
              </FeatureItem>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= CATEGORY SECTION ================= */}

      <Box
        sx={{
          background: "#F7F4EE",

          py: {
            xs: 5,
            md: 6,
          },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            width: "100%",

            maxWidth: "none",

            mx: 0,

            px: {
              xs: 2,
              sm: 2,
              md: 2,
            },
          }}
        >
          {/* SECTION HEADING */}

          <Box
            sx={{
              display: "flex",

              justifyContent: "space-between",

              alignItems: "flex-end",

              mb: 4,

              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 10,

                  letterSpacing: "2px",

                  color: "#B48648",

                  fontWeight: 600,

                  mb: 1,
                }}
              >
                EXPLORE BY CATEGORY
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Georgia, serif",

                  fontSize: {
                    xs: 35,
                    sm: 43,
                    md: 47,
                  },

                  lineHeight: 1.05,
                }}
              >
                Our{" "}

                <Box
                  component="span"
                  sx={{
                    color: "#B48648",

                    fontStyle: "italic",
                  }}
                >
                  Bath Fittings
                </Box>{" "}

                Range
              </Typography>
            </Box>
          </Box>

          {/* CATEGORY CARDS */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",

                sm: "repeat(2, minmax(0, 1fr))",

                md: "repeat(6, minmax(0, 1fr))",
              },

              gap: {
                xs: 1.5,
                sm: 2,
                md: 1.8,
              },
            }}
          >
            {categories.map((item, index) => (
              <CategoryCard
                key={item.title}
                title={item.title}
                image={item.image}
                index={index}
              />
            ))}
          </Box>
        </Container>
      </Box>
      <BathFittingBrands />
      <BathFittingReviews /> 
    </Box>
  );
}

export default BathFittings;