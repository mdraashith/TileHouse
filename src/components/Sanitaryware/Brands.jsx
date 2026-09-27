import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const brands = [
  {
    name: "KAJARIA",
    image: "/img/kajaria.png",
    category: "Tiles",
  },
  {
    name: "SOMANY",
    image: "/img/somany.png",
    category: "Tiles",
  },
  {
    name: "SIMPOLO",
    image: "/img/simpolo.png",
    category: "Tiles",
  },
  {
    name: "RAK",
    image: "/img/rak.png",
    category: "Tiles & Bathware",
  },
  {
    name: "KEROVIT",
    image: "/img/kerovit.png",
    category: "Sanitaryware",
  },
  {
    name: "PARRYWARE",
    image: "/img/parryware.png",
    category: "Bathroom Solutions",
  },
];

function Brands() {
  return (
    <Box
      sx={{
        bgcolor: "#F7F5F0",
        minHeight: "100vh",
        color: "#171717",
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          pt: { xs: 5, sm: 7, md: 11 },
          pb: { xs: 4, sm: 5, md: 5 },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 2, sm: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              gap: { xs: 3, md: 5 },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* LEFT */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: 9, sm: 10 },
                  fontWeight: 600,
                  letterSpacing: "3px",
                  color: "#B48648",
                  mb: { xs: 1.5, md: 2 },
                }}
              >
                OUR BRANDS
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: {
                    xs: 42,
                    sm: 56,
                    md: 78,
                  },
                  fontWeight: 500,
                  lineHeight: 0.88,
                  letterSpacing: "-1.5px",
                }}
              >
                Brands that
                <br />

                <Box
                  component="span"
                  sx={{
                    color: "#B48648",
                    fontStyle: "italic",
                  }}
                >
                  define quality.
                </Box>
              </Typography>
            </Box>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                width: { xs: "100%", sm: "80%", md: 350 },
                maxWidth: 350,
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: 11, sm: 12 },
                lineHeight: 1.8,
                color: "#77736D",
              }}
            >
              A curated collection of trusted names, bringing
              together innovation, craftsmanship and timeless
              design.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* BRAND GRID */}
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 5,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gap: {
              xs: 1.2,
              sm: 1.8,
              md: 1.5,
            },
          }}
        >
          {brands.map((brand, index) => (
            <MotionBox
              key={brand.name}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              sx={{
                position: "relative",
                width: "100%",
                height: {
                  xs: 175,
                  sm: 205,
                  md: 230,
                },
                minWidth: 0,
                bgcolor: "#FFFFFF",
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid #E7E2D9",
                cursor: "pointer",
                transition: "all .4s ease",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow:
                    "0 18px 40px rgba(30,25,18,.12)",
                  borderColor: "#C59A5A",
                },

                "&:hover .brandImage": {
                  transform: "scale(1.06)",
                },

                "&:hover .arrow": {
                  transform: "rotate(45deg)",
                  bgcolor: "#B48648",
                  color: "#fff",
                },
              }}
            >
              {/* NUMBER */}
              <Typography
                sx={{
                  position: "absolute",
                  top: { xs: 9, sm: 12, md: 14 },
                  left: { xs: 10, sm: 14, md: 16 },
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 8,
                  color: "#A9A39A",
                  letterSpacing: "1px",
                  zIndex: 2,
                }}
              >
                0{index + 1}
              </Typography>

              {/* ARROW */}
              <Box
                className="arrow"
                sx={{
                  position: "absolute",
                  top: { xs: 8, sm: 10, md: 12 },
                  right: { xs: 8, sm: 10, md: 12 },
                  width: { xs: 28, sm: 32, md: 34 },
                  height: { xs: 28, sm: 32, md: 34 },
                  borderRadius: "50%",
                  border: "1px solid #DDD7CD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#555",
                  transition: "all .4s ease",
                  zIndex: 2,
                }}
              >
                <ArrowForward
                  sx={{
                    fontSize: {
                      xs: 14,
                      sm: 16,
                      md: 17,
                    },
                  }}
                />
              </Box>

              {/* LOGO */}
              <Box
                sx={{
                  height: {
                    xs: "62%",
                    sm: "64%",
                    md: "68%",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: { xs: 1.5, sm: 2, md: 3 },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  className="brandImage"
                  src={brand.image}
                  alt={brand.name}
                  sx={{
                    width: {
                      xs: "72%",
                      sm: "68%",
                      md: "72%",
                    },
                    maxWidth: 210,
                    height: {
                      xs: 58,
                      sm: 70,
                      md: 80,
                    },
                    objectFit: "contain",
                    transition: "transform .5s ease",
                  }}
                />
              </Box>

              {/* BOTTOM */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  minHeight: {
                    xs: 52,
                    sm: 57,
                    md: 60,
                  },
                  px: {
                    xs: 1,
                    sm: 1.5,
                    md: 2,
                  },
                  py: {
                    xs: 1,
                    md: 1.5,
                  },
                  borderTop: "1px solid #EEE9E1",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: {
                      xs: 8,
                      sm: 9,
                      md: 10,
                    },
                    fontWeight: 600,
                    letterSpacing: {
                      xs: ".3px",
                      md: ".8px",
                    },
                    color: "#292621",
                    whiteSpace: "nowrap",
                  }}
                >
                  {brand.name}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: {
                      xs: 6.5,
                      sm: 7.5,
                      md: 8,
                    },
                    color: "#99938A",
                    letterSpacing: ".3px",
                    textAlign: "right",
                  }}
                >
                  {brand.category}
                </Typography>
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Container>

      {/* BOTTOM STATEMENT */}
      <Box
        sx={{
          py: {
            xs: 6,
            sm: 7,
            md: 10,
          },
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: {
              xs: 25,
              sm: 34,
              md: 42,
            },
            lineHeight: 1.1,
            fontWeight: 500,
          }}
        >
          Curated brands.

          <Box
            component="span"
            sx={{
              color: "#B48648",
              fontStyle: "italic",
              ml: { xs: 0.5, sm: 1 },
            }}
          >
            Endless possibilities.
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default Brands;