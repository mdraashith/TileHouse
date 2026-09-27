import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from "@mui/material";

import {
  ArrowForward,
  WorkspacePremiumOutlined,
  GridView,
  GroupsOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";

import { motion } from "framer-motion";

import CategoriesSection from "./CategoriesSection";
import CollectionsSection from "./CollectionsSection";

const MotionBox = motion(Box);

const stats = [
  {
    value: "6+",
    title: "Leading Brands",
    icon: <WorkspacePremiumOutlined />,
  },
  {
    value: "1000+",
    title: "Product Designs",
    icon: <GridView />,
  },
  {
    value: "5000+",
    title: "Happy Customers",
    icon: <GroupsOutlined />,
  },
  {
    value: "10+",
    title: "Years of Trust",
    icon: <VerifiedOutlined />,
  },
];

const Hero = () => {
  return (
    <>
      {/* ================= HERO ================= */}

      <Box
        sx={{
          position: "relative",
          minHeight: {
            xs: 560,
            sm: 620,
            md: 600,
          },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",

          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(0,0,0,0.88) 0%,
              rgba(0,0,0,0.72) 24%,
              rgba(0,0,0,0.42) 46%,
              rgba(0,0,0,0.12) 70%,
              rgba(0,0,0,0) 100%
            ),
            url("/img/homebanners.png")
          `,

          backgroundSize: "cover",

          backgroundPosition: {
            xs: "62% center",
            sm: "center center",
            md: "center center",
          },

          backgroundRepeat: "no-repeat",

          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.12), transparent 45%, rgba(0,0,0,0.25))",
            pointerEvents: "none",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,

            px: {
              xs: 3,
              sm: 5,
              md: 7,
              lg: 8,
            },
          }}
        >
          <MotionBox
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            sx={{
              width: {
                xs: "100%",
                sm: "75%",
                md: "48%",
                lg: "43%",
              },

              pt: {
                xs: 4,
                md: 0,
              },
            }}
          >
            {/* SMALL TITLE */}

            <Typography
              sx={{
                color: "#d9a441",

                fontSize: {
                  xs: 11,
                  sm: 12,
                  md: 13,
                },

                fontWeight: 600,

                letterSpacing: {
                  xs: 2,
                  md: 2.5,
                },

                textTransform: "uppercase",

                mb: 1.5,

                fontFamily: "Poppins, sans-serif",

                textShadow: `
                  1px 1px 0 rgba(0,0,0,0.9),
                  0 2px 5px rgba(0,0,0,0.8)
                `,
              }}
            >
              Premium Tiles & Bathware
            </Typography>

            {/* MAIN TITLE */}

            <Typography
              component="h1"
              sx={{
                color: "#fff",

                fontFamily:
                  "Georgia, 'Times New Roman', serif",

                fontWeight: 400,

                fontSize: {
                  xs: 42,
                  sm: 52,
                  md: 64,
                  lg: 70,
                },

                lineHeight: 1.02,

                letterSpacing: "-1px",

                mb: 2.5,

                textShadow: `
                  2px 2px 0 rgba(0,0,0,0.95),
                  3px 4px 10px rgba(0,0,0,0.9),
                  0 8px 25px rgba(0,0,0,0.65)
                `,
              }}
            >
              Spaces
              <br />
              That Inspire
            </Typography>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                color: "#fff",

                fontFamily: "Poppins, sans-serif",

                fontSize: {
                  xs: 12,
                  sm: 13,
                  md: 14,
                },

                lineHeight: 1.7,

                maxWidth: 390,

                mb: 3,

                textShadow: `
                  1px 1px 0 #000,
                  2px 2px 6px rgba(0,0,0,0.9),
                  0 4px 12px rgba(0,0,0,0.75)
                `,
              }}
            >
              Explore a world of premium tiles, sanitaryware and
              bath fittings from trusted global brands. Design your
              dream space with Tile House 360.
            </Typography>

            {/* BUTTONS */}

            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                flexWrap: "wrap",
              }}
            >
              <Button
                endIcon={<ArrowForward />}
                sx={{
                  background:
                    "linear-gradient(90deg, #d9a441, #f1cc72)",

                  color: "#111",

                  borderRadius: "30px",

                  px: {
                    xs: 2.5,
                    sm: 3,
                  },

                  py: 1.2,

                  fontSize: {
                    xs: 11,
                    sm: 12,
                  },

                  fontWeight: 600,

                  textTransform: "none",

                  fontFamily: "Poppins, sans-serif",

                  boxShadow:
                    "0 7px 22px rgba(0,0,0,0.35)",

                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #f1cc72, #d9a441)",

                    transform: "translateY(-2px)",
                  },

                  transition: "all 0.3s ease",
                }}
              >
                Explore Collections
              </Button>

              <Button
                endIcon={<ArrowForward />}
                onClick={() =>
                  window.open(
                    "https://share.google/jTjaHUeGx8wyE20sG",
                    "_blank"
                  )
                }
                sx={{
                  color: "#fff",

                  border:
                    "1px solid rgba(255,255,255,0.8)",

                  borderRadius: "30px",

                  px: {
                    xs: 2.5,
                    sm: 3,
                  },

                  py: 1.15,

                  fontSize: {
                    xs: 11,
                    sm: 12,
                  },

                  fontWeight: 500,

                  textTransform: "none",

                  fontFamily: "Poppins, sans-serif",

                  background:
                    "rgba(0,0,0,0.28)",

                  backdropFilter: "blur(6px)",

                  textShadow:
                    "1px 1px 3px rgba(0,0,0,0.8)",

                  "&:hover": {
                    background:
                      "rgba(255,255,255,0.14)",

                    borderColor: "#d9a441",

                    color: "#fff",
                  },
                }}
              >
                Visit Our Showroom
              </Button>
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* ================= STATS ================= */}

      <Box
        sx={{
          background:
            "linear-gradient(90deg, #080b0d, #111517, #080b0d)",

          color: "#fff",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: {
              xs: 2,
              sm: 4,
              md: 6,
            },
          }}
        >
          <Grid
            container
            sx={{
              minHeight: {
                xs: 110,
                sm: 115,
                md: 125,
              },
            }}
          >
            {stats.map((stat, index) => (
              <Grid
                size={{
                  xs: 6,
                  md: 3,
                }}
                key={stat.title}
              >
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
                    once: false,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    gap: {
                      xs: 1,
                      sm: 1.5,
                      md: 2,
                    },

                    borderRight:
                      index !== 3
                        ? {
                            xs:
                              index === 1
                                ? "none"
                                : "1px solid rgba(255,255,255,0.10)",
                            md:
                              "1px solid rgba(255,255,255,0.10)",
                          }
                        : "none",

                    borderBottom: {
                      xs:
                        index < 2
                          ? "1px solid rgba(255,255,255,0.10)"
                          : "none",

                      md: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: 34,
                        sm: 40,
                        md: 45,
                      },

                      height: {
                        xs: 34,
                        sm: 40,
                        md: 45,
                      },

                      border:
                        "1px solid #b88a32",

                      borderRadius: "50%",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      color: "#d9a441",

                      flexShrink: 0,

                      "& svg": {
                        fontSize: {
                          xs: 18,
                          sm: 21,
                          md: 24,
                        },
                      },
                    }}
                  >
                    {stat.icon}
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",

                        fontSize: {
                          xs: 16,
                          sm: 18,
                          md: 20,
                        },

                        fontWeight: 600,

                        lineHeight: 1.1,

                        fontFamily:
                          "Poppins, sans-serif",
                      }}
                    >
                      {stat.value}
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "rgba(255,255,255,0.62)",

                        fontSize: {
                          xs: 9,
                          sm: 10,
                          md: 11,
                        },

                        mt: 0.5,

                        fontFamily:
                          "Poppins, sans-serif",
                      }}
                    >
                      {stat.title}
                    </Typography>
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CategoriesSection />

      <CollectionsSection />
    </>
  );
};

export default Hero;