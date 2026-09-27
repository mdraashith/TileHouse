import React from "react";
import { useNavigate } from "react-router-dom";
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

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          minHeight: { xs: "85vh", md: "90vh" },
          display: "flex",
          alignItems: "center",
          position: "relative",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(0,0,0,0.78) 0%,
              rgba(0,0,0,0.58) 45%,
              rgba(0,0,0,0.15) 100%
            ),
            url("/img/homebanners.png")
          `,
          backgroundSize: "cover",
          backgroundPosition: { xs: "65% center", md: "center" },
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={8} lg={7}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  sx={{
                    color: "#D9A34A",
                    fontSize: { xs: "13px", md: "16px" },
                    fontWeight: 600,
                    letterSpacing: "4px",
                    mb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Premium Tiles & Bathware
                </Typography>

                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: "42px",
                      sm: "52px",
                      md: "70px",
                      lg: "82px",
                    },
                    lineHeight: 1.05,
                    fontWeight: 500,
                    fontFamily: "'Cormorant Garamond', serif",
                    mb: 3,
                    textShadow: `
                      2px 2px 0 #000,
                      -1px -1px 0 rgba(255,255,255,0.15),
                      4px 4px 10px rgba(0,0,0,0.8)
                    `,
                  }}
                >
                  Spaces That
                  <br />
                  Inspire
                </Typography>

                <Typography
                  sx={{
                    color: "#fff",
                    maxWidth: "650px",
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: 1.8,
                    mb: 4,
                    textShadow: `
                      1px 1px 0 #000,
                      -1px -1px 0 #fff,
                      2px 2px 6px rgba(0,0,0,0.8)
                    `,
                  }}
                >
                  Explore a world of premium tiles, sanitaryware and bath
                  fittings from trusted global brands. Design your dream
                  space with Tile House 360.
                </Typography>

                {/* BUTTONS */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {/* EXPLORE COLLECTIONS */}
                  <Button
                    endIcon={<ArrowForward />}
                    onClick={() => navigate("/gallery")}
                    sx={{
                      background: "#D9A34A",
                      color: "#fff",
                      px: { xs: 3, md: 4 },
                      py: 1.6,
                      borderRadius: 0,
                      fontWeight: 600,
                      letterSpacing: "1px",
                      "&:hover": {
                        background: "#b8832f",
                        transform: "translateY(-3px)",
                      },
                      transition: "0.3s",
                    }}
                  >
                    Explore Collections
                  </Button>

                  {/* VISIT SHOWROOM */}
                  <Button
                    onClick={() =>
                      window.open(
                        "https://share.google/jTjaHUeGx8wyE20sG",
                        "_blank"
                      )
                    }
                    sx={{
                      border: "1px solid rgba(255,255,255,0.8)",
                      color: "#fff",
                      px: { xs: 3, md: 4 },
                      py: 1.6,
                      borderRadius: 0,
                      fontWeight: 600,
                      letterSpacing: "1px",
                      "&:hover": {
                        background: "#fff",
                        color: "#222",
                      },
                    }}
                  >
                    Visit Our Showroom
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= STATS ================= */}
      <Box
        sx={{
          background: "#171717",
          py: { xs: 4, md: 5 },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {[
              {
                icon: <WorkspacePremiumOutlined />,
                number: "6+",
                text: "Leading Brands",
              },
              {
                icon: <GridView />,
                number: "1000+",
                text: "Product Designs",
              },
              {
                icon: <GroupsOutlined />,
                number: "5000+",
                text: "Happy Customers",
              },
              {
                icon: <VerifiedOutlined />,
                number: "10+",
                text: "Years of Trust",
              },
            ].map((item, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#D9A34A",
                        mb: 1,
                        "& svg": {
                          fontSize: { xs: 28, md: 34 },
                        },
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: { xs: 24, md: 32 },
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {item.number}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: 12, md: 14 },
                        color: "rgba(255,255,255,0.7)",
                        letterSpacing: "1px",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= CATEGORIES ================= */}
      <CategoriesSection />

      {/* ================= COLLECTIONS ================= */}
      <CollectionsSection />
    </>
  );
};

export default Hero;