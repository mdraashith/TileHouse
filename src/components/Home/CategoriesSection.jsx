import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  ArrowForward,
  ArrowBack,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const spaces = [
  {
    title: "Living Room",
    subtitle: "Elegant & Modern",
    image: "/img/livingroom.png",
  },
  {
    title: "Bedroom",
    subtitle: "Calm & Cozy",
    image: "/img/bedroom.png",
  },
  {
    title: "Kitchen",
    subtitle: "Stylish & Functional",
    image: "/img/kitchen.png",
  },
  {
    title: "Bathroom",
    subtitle: "Refresh Your Space",
    image: "/img/bathroom.png",
  },
  {
    title: "Outdoor",
    subtitle: "Built for Nature",
    image: "/img/outdoor.png",
  },
 {
    title: "Commercial",
    subtitle: "Designed for Business",
    image: "/img/commercial.png",
  },
  {
    title: "Pooja Room",
    subtitle: "Divine Spaces, Timeless Elegance",
    image: "/img/poojairoom.png",
  },
  {
    title: "Mosque",
    subtitle: "Serenity in Every Detail",
    image: "/img/masque.png",
  },
  {
    title: "Church",
    subtitle: "Graceful Spaces, Lasting Beauty",
    image: "/img/church.png",
  },
  
];

const CategoriesSection = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(
    theme.breakpoints.between("sm", "md")
  );

  const visibleCount = isMobile
    ? 2
    : isTablet
    ? 3
    : 4;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const viewportRef = useRef(null);

  /* ==============================
     CALCULATE CARD WIDTH
  ============================== */

  useEffect(() => {
    const calculateWidth = () => {
      if (!viewportRef.current) return;

      const width =
        viewportRef.current.clientWidth;

      const gap = isMobile
        ? 12
        : isTablet
        ? 16
        : 18;

      const cardWidth =
        (width - gap * (visibleCount - 1)) /
        visibleCount;

      setSlideWidth(cardWidth + gap);
    };

    calculateWidth();

    window.addEventListener(
      "resize",
      calculateWidth
    );

    return () => {
      window.removeEventListener(
        "resize",
        calculateWidth
      );
    };
  }, [visibleCount, isMobile, isTablet]);

  /* ==============================
     NEXT
  ============================== */

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= spaces.length - visibleCount) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* ==============================
     PREVIOUS
  ============================== */

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return spaces.length - visibleCount;
      }

      return prev - 1;
    });
  };

  return (
    <Box
      component="section"
      sx={{
        background: "#fff",
        py: {
          xs: 5,
          sm: 6,
          md: 7,
        },
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 2.5,
            sm: 4,
            md: 5,
            lg: 6,
          },
        }}
      >
        {/* ================= HEADER ================= */}

        <MotionBox
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          sx={{
            display: "flex",
            alignItems: {
              xs: "flex-start",
              md: "flex-end",
            },
            justifyContent: "space-between",
            gap: 2,
            mb: {
              xs: 3,
              md: 3.5,
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#b58a35",
                fontSize: {
                  xs: 10,
                  sm: 11,
                  md: 12,
                },
                fontWeight: 600,
                letterSpacing: 2.2,
                textTransform: "uppercase",
                mb: 0.7,
                fontFamily:
                  "Poppins, sans-serif",
              }}
            >
              Shop By Space
            </Typography>

            <Typography
              sx={{
                color: "#111",
                fontFamily:
                  "Georgia, serif",
                fontWeight: 500,
                fontSize: {
                  xs: 27,
                  sm: 32,
                  md: 38,
                  lg: 40,
                },
                lineHeight: 1.1,
              }}
            >
              Find the Perfect Fit for Every Space
            </Typography>
          </Box>

          {/* VIEW ALL */}

          <Box
            component="button"
            sx={{
              border: "none",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              color: "#222",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600,
              fontFamily:
                "Poppins, sans-serif",
              p: 0,

              "&:hover": {
                color: "#b58a35",
              },
            }}
          >
            View All Spaces

            <ArrowForward
              sx={{
                fontSize: 18,
                color: "#b58a35",
              }}
            />
          </Box>
        </MotionBox>

        {/* ================= CAROUSEL ================= */}

        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          {/* LEFT ARROW */}

          <IconButton
            onClick={prevSlide}
            aria-label="Previous spaces"
            sx={{
              position: "absolute",
              left: {
                xs: -8,
                sm: -16,
                md: -20,
              },
              top: "50%",
              transform:
                "translateY(-50%)",

              zIndex: 20,

              width: {
                xs: 38,
                sm: 44,
                md: 48,
              },

              height: {
                xs: 38,
                sm: 44,
                md: 48,
              },

              background: "#fff",

              border:
                "1px solid #d9a441",

              color: "#111",

              boxShadow:
                "0 5px 20px rgba(0,0,0,0.15)",

              "&:hover": {
                background: "#d9a441",
                color: "#111",
              },
            }}
          >
            <ArrowBack />
          </IconButton>

          {/* RIGHT ARROW */}

          <IconButton
            onClick={nextSlide}
            aria-label="Next spaces"
            sx={{
              position: "absolute",
              right: {
                xs: -8,
                sm: -16,
                md: -20,
              },
              top: "50%",
              transform:
                "translateY(-50%)",
              zIndex: 20,
              width: {
                xs: 38,
                sm: 44,
                md: 48,
              },
              height: {
                xs: 38,
                sm: 44,
                md: 48,
              },
              background: "#fff",
              border:
                "1px solid #d9a441",
              color: "#111",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.15)",
              "&:hover": {
                background: "#d9a441",
                color: "#111",
              },
            }}
          >
            <ArrowForward />
          </IconButton>

          {/* ================= VIEWPORT ================= */}

          <Box
            ref={viewportRef}
            sx={{
              overflow: "hidden",
              mx: {
                xs: 1,
                sm: 2,
                md: 1,
              },
            }}
          >
            {/* ================= SLIDER ================= */}

            <MotionBox
              animate={{
                x: -(currentIndex * slideWidth),
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              sx={{
                display: "flex",

                gap: {
                  xs: "12px",
                  sm: "16px",
                  md: "18px",
                },

                width: "max-content",
              }}
            >
              {spaces.map((space) => (
                <Box
                  key={space.title}
                  sx={{
                    width: {
                      xs: "calc((100vw - 70px) / 2)",
                      sm: "calc((100vw - 125px) / 3)",
                      md: "calc((100vw - 145px) / 4)",
                    },

                    maxWidth: {
                      md: 290,
                      lg: 310,
                    },

                    height: {
                      xs: 220,
                      sm: 250,
                      md: 290,
                      lg: 310,
                    },

                    position: "relative",

                    borderRadius: "12px",

                    overflow: "hidden",

                    cursor: "pointer",

                    background: "#ddd",

                    flexShrink: 0,

                    "&:hover .space-image": {
                      transform: {
                        md: "scale(1.07)",
                      },
                    },

                    "&:hover .card-arrow": {
                      background:
                        "#d9a441",
                      color: "#111",
                      borderColor:
                        "#d9a441",
                    },
                  }}
                >
                  {/* IMAGE */}

                  <Box
                    component="img"
                    className="space-image"
                    src={space.image}
                    alt={space.title}
                    sx={{
                      width: "100%",
                      height: "100%",

                      objectFit: "cover",

                      display: "block",

                      transition:
                        "transform 0.6s cubic-bezier(.22,1,.36,1)",
                    }}
                  />

                  {/* GRADIENT */}

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,

                      background:
                        "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.82) 100%)",
                    }}
                  />

                  {/* TEXT */}

                  <Box
                    sx={{
                      position:
                        "absolute",

                      left: {
                        xs: 12,
                        sm: 15,
                        md: 17,
                      },

                      right: 50,

                      bottom: {
                        xs: 12,
                        sm: 15,
                        md: 17,
                      },

                      zIndex: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",

                        fontSize: {
                          xs: 14,
                          sm: 16,
                          md: 18,
                        },

                        fontWeight: 600,

                        lineHeight: 1.2,

                        fontFamily:
                          "Poppins, sans-serif",

                        textShadow:
                          "1px 2px 6px rgba(0,0,0,0.8)",
                      }}
                    >
                      {space.title}
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "rgba(255,255,255,0.82)",

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
                      {space.subtitle}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </MotionBox>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default CategoriesSection;