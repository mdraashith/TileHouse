import React from "react";
import { Box, Typography } from "@mui/material";

import {
  DiamondOutlined,
  VerifiedOutlined,
  GroupsOutlined,
  HeadsetMicOutlined,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const features = [
  {
    title: "Premium Quality",
    subtitle: "Long lasting tiles",
    icon: <DiamondOutlined />,
  },
  {
    title: "Trusted Brands",
    subtitle: "Global collections",
    icon: <VerifiedOutlined />,
  },
  {
    title: "Expert Guidance",
    subtitle: "From selection to installation",
    icon: <GroupsOutlined />,
  },
  {
    title: "After Sales Support",
    subtitle: "Always with you",
    icon: <HeadsetMicOutlined />,
  },
];

function TilesChoice() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FAF8F4",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          minHeight: {
            xs: "auto",
            md: 430,
            lg: 500,
          },

          display: {
            xs: "block",
            md: "flex",
          },

          alignItems: "stretch",
        }}
      >
        {/* ================= LEFT IMAGE ================= */}

        <MotionBox
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          sx={{
            width: {
              xs: "100%",
              md: "41%",
              lg: "39%",
            },

            height: {
              xs: 280,
              sm: 360,
              md: "auto",
            },

            minHeight: {
              md: 430,
              lg: 500,
            },

            backgroundImage: `url("/img/tiles1.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",

            backgroundRepeat: "no-repeat",

            position: "relative",

            /* Curved right side */
            clipPath: {
              xs: "none",
              md: "ellipse(88% 100% at 8% 50%)",
            },
          }}
        />

        {/* ================= RIGHT CONTENT ================= */}

        <MotionBox
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          sx={{
            flex: 1,

            display: "flex",
            flexDirection: "column",

            justifyContent: "center",

            px: {
              xs: 3,
              sm: 5,
              md: 5,
              lg: 6,
            },

            py: {
              xs: 5,
              sm: 6,
              md: 5,
            },
          }}
        >
          {/* TOP HEADER */}

          <Box
            sx={{
              display: "flex",
              alignItems: {
                xs: "flex-start",
                md: "center",
              },

              justifyContent: "space-between",

              gap: 3,

              mb: {
                xs: 4,
                md: 5,
              },

              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            {/* TITLE */}

            <Box>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",

                  fontSize: {
                    xs: 12,
                    sm: 12,
                  },

                  fontWeight: 600,

                  letterSpacing: "2px",

                  color: "#9A7441",

                  mb: 1,
                }}
              >
                WHY CHOOSE
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  gap: {
                    xs: 2,
                    sm: 2.5,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Georgia, serif",

                    fontSize: {
                      xs: 38,
                      sm: 46,
                      md: 48,
                      lg: 54,
                    },

                    fontWeight: 500,

                    lineHeight: 1,

                    color: "#151515",

                    whiteSpace: {
                      xs: "normal",
                      sm: "nowrap",
                    },
                  }}
                >
                  Tile House 360
                </Typography>

                <Box
                  sx={{
                    width: {
                      xs: 35,
                      sm: 45,
                      md: 52,
                    },

                    height: "2px",

                    backgroundColor: "#B88945",

                    flexShrink: 0,
                  }}
                />
              </Box>
            </Box>

            {/* RIGHT DESCRIPTION */}

            <Box
              sx={{
                borderLeft: {
                  xs: "none",
                  md: "1px solid #C8C1B8",
                },

                pl: {
                  xs: 0,
                  md: 4,
                },

                minWidth: {
                  md: 190,
                  lg: 210,
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",

                  fontSize: {
                    xs: 14,
                    sm: 14,
                    md: 16,
                  },

                  lineHeight: 1.55,

                  color: "#222",
                }}
              >
                More than products.
                <br />
                A better experience.
              </Typography>
            </Box>
          </Box>

          {/* ================= FEATURES ================= */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(4, 1fr)",
              },

              width: "100%",
            }}
          >
            {features.map((feature, index) => (
              <MotionBox
                key={feature.title}
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
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                sx={{
                  textAlign: "center",

                  px: {
                    xs: 1,
                    sm: 1.5,
                    md: 1.5,
                    lg: 2,
                  },

                  py: {
                    xs: 2,
                    sm: 1,
                    md: 1,
                  },

                  borderRight: {
                    xs:
                      index % 2 === 0
                        ? "1px solid #DDD7CF"
                        : "none",

                    sm:
                      index !== features.length - 1
                        ? "1px solid #DDD7CF"
                        : "none",
                  },

                  borderBottom: {
                    xs:
                      index < 2
                        ? "1px solid #DDD7CF"
                        : "none",

                    sm: "none",
                  },
                }}
              >
                {/* ICON */}

                <Box
                  sx={{
                    color: "#966D35",

                    display: "flex",

                    justifyContent: "center",

                    mb: 1,
                  }}
                >
                  {React.cloneElement(feature.icon, {
                    sx: {
                      fontSize: {
                        xs: 38,
                        sm: 42,
                        md: 45,
                        lg: 50,
                      },
                    },
                  })}
                </Box>

                {/* TITLE */}

                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",

                    fontSize: {
                      xs: 16,
                      sm: 13,
                      md: 14,
                      lg: 17,
                    },

                    fontWeight: 600,

                    color: "#171717",

                    whiteSpace: {
                      xs: "normal",
                      sm: "nowrap",
                    },

                    mb: 0.5,
                  }}
                >
                  {feature.title}
                </Typography>

                {/* SUBTITLE */}

                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",

                    fontSize: {
                      xs: 12,
                      sm: 12,
                      md: 14,
                    },

                    color: "#666",

                    lineHeight: 1.4,
                  }}
                >
                  {feature.subtitle}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}
export default TilesChoice;