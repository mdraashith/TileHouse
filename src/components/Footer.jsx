import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import {
  WhatsApp,
  Phone,
  Email,
  LocationOn,
  ArrowForward,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const quickLinks = [
  "Home",
  "About Us",
  "Tiles",
  "Sanitaryware",
  "Bath Fittings",
  "Gallery",
  "Contact",
];

const brands = [
  "Kajaria",
  "Simpolo",
  "Somany",
  "RAK",
  "Kerovit",
  "Parryware",
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg, #080b0d 0%, #111517 50%, #080b0d 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* GOLD TOP LINE */}
      <Box
        sx={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #d9a441, #f5d27a, #d9a441, transparent)",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 3,
            sm: 4,
            md: 6,
            lg: 8,
          },
        }}
      >
        {/* MAIN FOOTER */}
        <Grid
          container
          spacing={{
            xs: 4,
            sm: 5,
            md: 6,
          }}
          sx={{
            py: {
              xs: 5,
              sm: 6,
              md: 7,
            },
          }}
        >
          {/* COMPANY */}
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* LOGO */}
              <Box
                component="img"
                src="/img/log.png"
                alt="Tile House 360"
                sx={{
                  width: {
                    xs: 220,
                    sm: 245,
                    md: 270,
                  },
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  mb: 2.5,
                }}
              />

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: {
                    xs: 13,
                    sm: 13.5,
                    md: 14,
                  },
                  lineHeight: 1.8,
                  maxWidth: 330,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Your one-stop destination for premium tiles,
                sanitaryware and bath fittings.
                <br />
                Style, quality and trust – all under one roof.
              </Typography>

              {/* WHATSAPP */}
              <Box
                sx={{
                  display: "flex",
                  mt: 2.5,
                }}
              >
                <IconButton
                  component="a"
                  href="https://wa.me/918072006215"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 42,
                    height: 42,
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.8)",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      color: "#25D366",
                      borderColor: "#25D366",
                      transform: "translateY(-4px)",
                      backgroundColor: "rgba(37,211,102,0.08)",
                    },
                  }}
                >
                  <WhatsApp sx={{ fontSize: 22 }} />
                </IconButton>
              </Box>
            </MotionBox>
          </Grid>

          {/* QUICK LINKS */}
          <Grid size={{ xs: 6, sm: 6, md: 2.5 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 16,
                    sm: 17,
                    md: 18,
                  },
                  fontWeight: 600,
                  mb: 2,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Quick Links
              </Typography>

              <Box>
                {quickLinks.map((item, index) => (
                  <Typography
                    key={index}
                    component="a"
                    href="#"
                    sx={{
                      display: "block",
                      width: "fit-content",
                      color: "rgba(255,255,255,0.68)",
                      textDecoration: "none",
                      fontSize: {
                        xs: 12,
                        sm: 13,
                        md: 14,
                      },
                      mb: 1,
                      fontFamily: "Poppins, sans-serif",
                      transition: "all 0.25s ease",

                      "&:hover": {
                        color: "#d9a441",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </MotionBox>
          </Grid>

          {/* BRANDS */}
          <Grid size={{ xs: 6, sm: 6, md: 2.5 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 16,
                    sm: 17,
                    md: 18,
                  },
                  fontWeight: 600,
                  mb: 2,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Our Brands
              </Typography>

              {brands.map((brand, index) => (
                <Typography
                  key={index}
                  component="a"
                  href="#"
                  sx={{
                    display: "block",
                    width: "fit-content",
                    color: "rgba(255,255,255,0.68)",
                    textDecoration: "none",
                    fontSize: {
                      xs: 12,
                      sm: 13,
                      md: 14,
                    },
                    mb: 1,
                    fontFamily: "Poppins, sans-serif",
                    transition: "all 0.25s ease",

                    "&:hover": {
                      color: "#d9a441",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {brand}
                </Typography>
              ))}
            </MotionBox>
          </Grid>

          {/* CONTACT */}
          <Grid size={{ xs: 12, sm: 12, md: 3 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 16,
                    sm: 17,
                    md: 18,
                  },
                  fontWeight: 600,
                  mb: 2,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Contact Us
              </Typography>

              {/* PHONE */}
              <Box
                component="a"
                href="tel:+918072006215"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.3,
                  mb: 1.5,
                  textDecoration: "none",
                }}
              >
                <Phone
                  sx={{
                    color: "#d9a441",
                    fontSize: 20,
                  }}
                />

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: {
                      xs: 12,
                      sm: 13,
                      md: 14,
                    },
                  }}
                >
                  +91 80720 06215
                </Typography>
              </Box>

              {/* EMAIL */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.3,
                  mb: 1.5,
                }}
              >
                <Email
                  sx={{
                    color: "#d9a441",
                    fontSize: 20,
                  }}
                />

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: {
                      xs: 12,
                      sm: 13,
                      md: 14,
                    },
                  }}
                >
                  tilehouse360@gmail.com.com
                </Typography>
              </Box>

              {/* LOCATION */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.3,
                }}
              >
                <LocationOn
                  sx={{
                    color: "#d9a441",
                    fontSize: 21,
                  }}
                />

                <Typography
                  component="a"
                  href="https://share.google/jTjaHUeGx8wyE20sG"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: {
                      xs: 12,
                      sm: 13,
                      md: 14,
                    },
                    lineHeight: 1.5,
                    textDecoration: "none",

                    "&:hover": {
                      color: "#d9a441",
                    },
                  }}
                >
                  Chennai,
                  <br />
                  Tamil Nadu
                </Typography>
              </Box>

              {/* ENQUIRY - PHONE DIALER */}
              <Button
                component="a"
                href="tel:+918072006215"
                endIcon={<ArrowForward />}
                sx={{
                  mt: 2.5,
                  width: {
                    xs: "100%",
                    sm: 210,
                    md: 210,
                  },
                  minHeight: 44,
                  borderRadius: "30px",
                  background:
                    "linear-gradient(90deg, #d9a441, #f1cc72)",
                  color: "#111",
                  fontSize: {
                    xs: 12,
                    sm: 13,
                  },
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "none",
                  textDecoration: "none",
                  boxShadow:
                    "0 5px 20px rgba(217,164,65,0.18)",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #f1cc72, #d9a441)",
                    transform: "translateY(-3px)",
                    boxShadow:
                      "0 8px 25px rgba(217,164,65,0.28)",
                  },
                }}
              >
                Enquiry Now
              </Button>
            </MotionBox>
          </Grid>
        </Grid>

        {/* DIVIDER */}
        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.10)",
          }}
        />

        {/* BOTTOM FOOTER */}
        <Box
          sx={{
            minHeight: {
              xs: 100,
              sm: 75,
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            py: {
              xs: 2.5,
              sm: 0,
            },
          }}
        >
          {/* COPYRIGHT */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.48)",
              fontSize: {
                xs: 10,
                sm: 11,
                md: 12,
              },
              textAlign: {
                xs: "center",
                sm: "left",
              },
              fontFamily: "Poppins, sans-serif",
            }}
          >
            © 2025 Tile House 360. All Rights Reserved.
          </Typography>

          {/* TAGLINE */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.48)",
              fontSize: {
                xs: 10,
                sm: 11,
                md: 12,
              },
              textAlign: "center",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Design Better Spaces
            <Box
              component="span"
              sx={{
                mx: 1.5,
                color: "#d9a441",
              }}
            >
              |
            </Box>
            Live Better
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;