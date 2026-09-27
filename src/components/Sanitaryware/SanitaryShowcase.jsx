import React from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  AutoAwesomeOutlined,
  WaterDropOutlined,
  SpaOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const features = [
  {
    icon: <AutoAwesomeOutlined />,
    title: "Elegant Designs",
    text: "For Every Space",
  },
  {
    icon: <WaterDropOutlined />,
    title: "Water Saving",
    text: "Technology",
  },
  {
    icon: <SpaOutlined />,
    title: "Hygienic & Easy",
    text: "to Clean",
  },
  {
    icon: <SettingsOutlined />,
    title: "Built For",
    text: "Long Lasting Use",
  },
];

function SanitaryShowcase() {
  return (
    <Box
      sx={{
        bgcolor: "#F8F6F1",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 1.5, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "48% 52%",
            },
            minHeight: {
              xs: "auto",
              md: 430,
            },
            overflow: "hidden",
            bgcolor: "#FDFCF9",
          }}
        >
          {/* LEFT IMAGE */}
          <Box
            sx={{
              position: "relative",
              minHeight: {
                xs: 300,
                sm: 380,
                md: 430,
              },
              overflow: "hidden",
              zIndex: 1,

              /* FULL RIGHT SIDE C-SHAPE */
              "&::after": {
                content: '""',
                position: "absolute",
                top: "-5%",
                right: "-55px",
                width: {
                  md: 130,
                },
                height: "110%",
                bgcolor: "#FDFCF9",
                borderRadius: "50% 0 0 50%",
                zIndex: 2,
              },
            }}
          >
            <Box
              component="img"
              src="/img/sanitary.png"
              alt="Premium Sanitaryware"
              sx={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>

          {/* RIGHT CONTENT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#FDFCF9",
              position: "relative",
              zIndex: 3,
              mt:{xs:0,md:5},
              pl: { xs: 3, sm: 5, md: 1 },
              pr: { xs: 3, sm: 5, md: 10 },
              py: { xs: 4, md: 5 },
            }}
          >
            <MotionBox
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 175px",
                },
                gap: {
                  xs: 4,
                  md: 5,
                },
              }}
            >
              {/* CONTENT */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 10,
                    letterSpacing: "3px",
                    color: "#A56F32",
                    fontWeight: 600,
                    mb: 1.5,
                  }}
                >
                  PREMIUM SANITARYWARE
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: {
                      xs: 40,
                      sm: 48,
                      md: 58,
                    },
                    lineHeight: 0.92,
                    fontWeight: 600,
                    color: "#171717",
                  }}
                >
                  Designed With
                  <br />

                  <Box
                    component="span"
                    sx={{
                      color: "#A8753D",
                    }}
                  >
                    Style & Function
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    maxWidth: 430,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: {
                      xs: 11,
                      sm: 12,
                      md: 14,
                    },
                    lineHeight: 1.75,
                    color: "#5F5A53",
                  }}
                >
                  Discover a wide range of sanitaryware that
                  combines elegance, comfort and innovative
                  technology to suit every space.
                </Typography>
              </Box>

              {/* FEATURES */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderLeft: {
                    xs: "none",
                    md: "1px solid #E5DED4",
                  },
                  pl: {
                    xs: 0,
                    md: 3,
                  },
                  gap: 2.2,
                }}
              >
                {features.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                        width:"100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.8,
                      pb: 2,
                      borderBottom:
                        index !== features.length - 1
                          ? "1px solid #EAE5DD"
                          : "none",
                    }}
                  >
                    
                    <Box
                      sx={{
                        minWidth: 48,
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#A8753D",
                      }}
                    >
                      {React.cloneElement(item.icon, {
                        sx: {
                          fontSize:40,
                        },
                      })}
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#292621",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 12,
                          color: "#777169",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </MotionBox>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SanitaryShowcase;