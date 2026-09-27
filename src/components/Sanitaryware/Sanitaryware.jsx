import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import {
  ArrowForward,
  DiamondOutlined,
  WaterDropOutlined,
  SpaOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Brands from "./Brands";
import SanitaryShowcase from "./SanitaryShowcase";

const MotionBox = motion(Box);

const categories = [
  { title: "Toilets", image: "/img/toilet.png" },
  { title: "Wash Basins", image: "/img/washbasin.png" },
  { title: "Pedestal Basins", image: "/img/pedestalbasin.png" },
  { title: "Urinals", image: "/img/urinal.png" },
  { title: "Cisterns", image: "/img/cistern.png" },
];

const features = [
  { icon: <DiamondOutlined />, text: "Premium\nQuality" },
  { icon: <WaterDropOutlined />, text: "Hygienic\n& Easy to Clean" },
  { icon: <SpaOutlined />, text: "Modern\nDesigns" },
];

function Sanitaryware() {
  return (
    <Box sx={{ bgcolor: "#FAF8F4", color: "#171717" }}>

      {/* HERO */}
      <Box
        sx={{
          minHeight: { xs: 430, sm: 470, md: 500 },
          display: "flex",
          alignItems: "center",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10,10,9,.94) 0%,
              rgba(10,10,9,.78) 38%,
              rgba(10,10,9,.25) 70%,
              rgba(10,10,9,.05) 100%
            ),
            url("/img/sanitaryhero.png")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="xl">
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            sx={{ width: { xs: "100%", sm: "65%", md: "45%" } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                  letterSpacing: "3px",
                  color: "#C89B5B",
                  fontWeight: 600,
                }}
              >
                SANITARYWARE
              </Typography>

              <Box
                sx={{
                  width: 38,
                  height: 1,
                  bgcolor: "#C89B5B",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: { xs: 42, sm: 50, md: 58 },
                lineHeight: 0.95,
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Designed For a Better{" "}
              <Box component="span" sx={{ color: "#C99752" }}>
                Tomorrow
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 390,
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: 11, sm: 12, md: 13 },
                lineHeight: 1.7,
                color: "rgba(255,255,255,.82)",
              }}
            >
              Experience premium sanitaryware crafted to bring
              comfort, elegance and functionality to every space.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: { xs: 1.5, sm: 3 },
                mt: 4,
                alignItems: "center",
              }}
            >
              {features.map((item, i) => (
                <React.Fragment key={i}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ color: "#C99752" }}>
                      {item.icon}
                    </Box>

                    <Typography
                      sx={{
                        whiteSpace: "pre-line",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: { xs: 8, sm: 14 },
                        lineHeight: 1.3,
                        color: "#fff",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>

                  {i < 2 && (
                    <Box
                      sx={{
                        width: 2,
                        height: 28,
                        bgcolor: "rgba(255,255,255,.25)",
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* CATEGORIES */}
      <Box
        sx={{
          py: { xs: 5, md: 7 },
          bgcolor: "#FAF9F6",
        }}
      >
        <Container maxWidth="xl">

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              mb: 4,
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                  letterSpacing: "1.5px",
                  color: "#A4773E",
                  mb: 1,
                }}
              >
                EXPLORE OUR RANGE
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
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: { xs: 34, sm: 42, md: 50 },
                    fontWeight: 650,
                    lineHeight: 1,
                  }}
                >
                  Sanitaryware Categories
                </Typography>

                <Box
                  sx={{
                    width: 38,
                    height: 2,
                    bgcolor: "#B88945",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* CATEGORY CARDS */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(5,1fr)",
              },
              gap: 2,
            }}
          >
            {categories.map((item, index) => (
              <MotionBox
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                sx={{
                  bgcolor: "#fff",
                  border: "1px solid #E7E1D8",
                  borderRadius: 5,
                  overflow: "hidden",
                  transition: "0.3s",

                  /* MOBILE CENTER ALIGN */
                  width: { xs: "70%", md: "100%" },
                  height:"100%",
                  ml: { xs: "auto", md: 0 },
                  mr: { xs: "auto", md: 0 },

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow:
                      "0 15px 35px rgba(55,42,25,.12)",
                  },
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    height: {
                      xs: 240,
                      sm: 260,
                      md: 250,
                      lg: 270,
                    },
                    overflow: "hidden",
                    bgcolor: "#EEEAE3",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform .5s ease",

                      "&:hover": {
                        transform: "scale(1.04)",
                      },
                    }}
                  />
                </Box>

                {/* NAME ONLY */}
                <Box
                  sx={{
                    py: 2,
                    textAlign: "center",
                    bgcolor: "#fff",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontSize: { xs: 20, md: 22 },
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Box
                    sx={{
                      width: 30,
                      height: 1,
                      bgcolor: "#B88945",
                      mx: "auto",
                      mt: 1,
                    }}
                  />
                </Box>
              </MotionBox>
            ))}
          </Box>

        </Container>
      </Box>
      {/* SANITARYWARE VIDEO */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          bgcolor: "#F2EEE7",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              height: { xs: 420, sm: 480, md: 540 },
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(55,42,25,.15)",
            }}
          >
            {/* VIDEO */}
            <Box
              component="video"
              src="/img/sanitaryvideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            /> 
          </Box>
        </Container>
      </Box>
      <SanitaryShowcase />
      <Brands/>
    </Box>
  );
}
export default Sanitaryware;