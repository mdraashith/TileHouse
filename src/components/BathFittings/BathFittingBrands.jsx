import React from "react";
import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import { ArrowForward, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const brands = [
  { name: "GROHE", style: "grohe" },
  { name: "Jaquar", style: "jaquar" },
  { name: "KOHLER.", style: "kohler" },
  { name: "hindware", style: "hindware" },
  { name: "CERA", style: "cera" },
  { name: "parryware", style: "parryware" },
];

const BathFittingBrands = () => {
  // Duplicate brands for seamless train animation
  const movingBrands = [...brands, ...brands, ...brands];

  return (
    <Box
      sx={{
        background: "#F8F5EF",
        py: { xs: 6, sm: 7, md: 8 },
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 4, md: 6, lg: 7 },
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", md: "flex-end" },
            justifyContent: "space-between",
            gap: 3,
            mb: { xs: 4, md: 5 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 11, sm: 12 },
                letterSpacing: "5px",
                fontWeight: 700,
                color: "#B9823B",
                mb: 1,
              }}
            >
              OUR BRANDS
            </Typography>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: "32px",
                  sm: "40px",
                  md: "50px",
                },
                lineHeight: 1.05,
                color: "#171717",
                fontWeight: 400,
              }}
            >
              Trusted Bath Fittings Brands
            </Typography>
          </Box>

          {/* VIEW ALL BRANDS */}
          <Button
            component={Link}
            to="/brands"
            endIcon={<ArrowForward />}
            sx={{
              flexShrink: 0,
              textTransform: "none",
              border: "1px solid #C59A62",
              borderRadius: "30px",
              px: { xs: 2.5, md: 3 },
              py: 1.2,
              color: "#222",
              fontSize: { xs: 13, md: 14 },
              fontWeight: 600,
              background: "transparent",
              "&:hover": {
                background: "#C59A62",
                color: "#fff",
              },
            }}
          >
            View All Brands
          </Button>
        </Box>

        {/* BRAND TRAIN */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* MOVING AREA */}
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              mx: { xs: 2, md: 3 },
              py: 1,
            }}
          >
            <motion.div
              animate={{
                x: ["0%", "-33.333%"],
              }}
              transition={{
                duration: 18,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                display: "flex",
                width: "max-content",
              }}
            >
              {movingBrands.map((brand, index) => (
                <Box
                  key={`${brand.name}-${index}`}
                  sx={{
                    width: {
                      xs: "150px",
                      sm: "190px",
                      md: "220px",
                      lg: "245px",
                    },
                    height: {
                      xs: 105,
                      sm: 115,
                      md: 125,
                    },
                    flexShrink: 0,
                    mx: { xs: 0.7, sm: 1, md: 1.2 },
                    background: "#FBF9F5",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(0,0,0,0.025)",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.035)",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily:
                        brand.style === "jaquar" ||
                        brand.style === "parryware"
                          ? "Arial, sans-serif"
                          : "Arial, sans-serif",

                      fontWeight:
                        brand.style === "jaquar" ||
                        brand.style === "parryware"
                          ? 700
                          : 800,

                      fontStyle:
                        brand.style === "jaquar" ||
                        brand.style === "parryware"
                          ? "italic"
                          : "normal",

                      fontSize: {
                        xs: "19px",
                        sm: "23px",
                        md: "27px",
                      },

                      letterSpacing:
                        brand.style === "cera" ? "3px" : "0px",

                      color:
                        brand.style === "grohe"
                          ? "#1264A3"
                          : brand.style === "hindware"
                          ? "#D92727"
                          : brand.style === "cera"
                          ? "#1672B8"
                          : "#151515",
                    }}
                  >
                    {brand.name}
                  </Typography>
                </Box>
              ))}
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BathFittingBrands;