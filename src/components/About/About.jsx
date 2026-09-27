import React from "react";
import {Box,Container,Typography,Button,} from "@mui/material";
import {ArrowForward,VisibilityOutlined,FavoriteBorderOutlined,AutoAwesomeOutlined,} from "@mui/icons-material";
import { Feature, motion } from "framer-motion";
import WhyChoose from "./WhyChoose";
import Features from "./Features";

const MotionBox = motion(Box);
const stats = [
  ["10+", "Years of Experience"],
  ["5000+", "Happy Customers"],
  ["1000+", "Unique Tile Designs"],
  ["50+", "Trusted Global Brands"],
];
const About = () => {
  return (
    <Box sx={{ background: "#fff", overflow: "hidden" }}>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 350, sm: 600, md: 450 },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5,7,8,.88) 0%,
              rgba(5,7,8,.72) 32%,
              rgba(5,7,8,.35) 58%,
              rgba(5,7,8,.08) 100%
            ),
            url("/img/aboutbanner.png")
          `,
          backgroundSize: {xs:"cover",md:"100% 100%"},
          backgroundRepeat:"no-repeat",
          backgroundPosition: {
            xs: "62% center",
            md: "center",
          },
        }}
      >
        <Container maxWidth="xl">
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            sx={{
              width: { xs: "100%", sm: "75%", md: "52%" },
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                color: "#d5a442",
                fontSize: { xs: 11, md: 13 },
                fontWeight: 750,
                letterSpacing: 2.5,
                mb: 2,
              }}
            >
              ABOUT US
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: 38,
                  sm: 48,
                  md: 58,
                  lg: 64,
                },
                fontWeight: 500,
                lineHeight: 1.05,
                mb: 3,
                textShadow: "2px 3px 10px rgba(0,0,0,.6)",
              }}
            >
              Designing Spaces
              <br />
              That Inspire
            </Typography>

            <Typography
              sx={{
                maxWidth: 560,
                color: "#eeeeee",
                fontSize: { xs: 13, md: 18 },
                lineHeight: 1.8,
                mb: 3.5,
                textShadow: "1px 1px 5px #000",
              }}
            >
              At TileHaus, we believe tiles are more than just
              surfaces — they are the foundation of beautiful
              lives. We bring together design, quality and
              innovation to create spaces you'll love, today
              and for years to come.
            </Typography>
          </MotionBox>
        </Container>
      </Box>


      {/* =====================================================
          STATS
      ===================================================== */}
      <Box
        sx={{
          background: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
            }}
          >
            {stats.map(([number, label], index) => (
              <MotionBox
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                sx={{
                  py: { xs: 3, md: 3.5 },
                  textAlign: "center",
                  position: "relative",

                  "&:not(:last-child)::after": {
                    content: '""',
                    position: "absolute",
                    right: 0,
                    top: "25%",
                    height: "50%",
                    width: "1px",
                    background: "#ddd",
                    display: {
                      xs: index % 2 === 1
                        ? "none"
                        : "block",
                      md: "block",
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Georgia, serif",
                    fontSize: {
                      xs: 28,
                      md: 48,
                    },
                    color: "#111",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {number}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 10, md: 12 },
                    color: "#555",
                    fontWeight: 550,
                  }}
                >
                  {label}
                </Typography>

                <Box
                  sx={{
                    width: 25,
                    height: 2,
                    background: "#c99a3b",
                    mx: "auto",
                    mt: 1.2,
                  }}
                />
              </MotionBox>
            ))}
          </Box>
        </Container>
      </Box>


      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          background: "#faf9f6",
        }}
      >
        <Container maxWidth="xl">

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "42% 58%",
              },
              gap: {
                xs: 5,
                md: 7,
                lg: 9,
              },
              alignItems: "center",
            }}
          >

            {/* IMAGE SIDE */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              sx={{
                position: "relative",
                pl: { xs: 0, md: 1 },
              }}
            >
              <Box
                component="img"
                src="/img/aboutstory.png"
                alt="TileHaus Interior"
                sx={{
                  width: "100%",
                  height: {
                    xs: 400,
                    sm: 470,
                    md: 500,
                  },
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* FLOATING TILE CARD */}
              <Box
                sx={{
                  position: "absolute",
                  right: {
                    xs: -5,
                    sm: 10,
                    md: -35,
                  },
                  bottom: {
                    xs: -25,
                    md: -35,
                  },
                  width: {
                    xs: 155,
                    sm: 175,
                    md: 185,
                  },
                  background: "#fff",
                  p: 1.5,
                  boxShadow:
                    "0 15px 40px rgba(0,0,0,.15)",
                }}
              >
                <Box
                  component="img"
                  src="/img/marbles.png"
                  alt="Marble Tile"
                  sx={{
                    width: "100%",
                    height: 150,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "cursive",
                    fontSize: 22,
                    color: "#333",
                    mt: 1,
                    lineHeight: 1,
                  }}
                >
                  Timeless
                  <br />
                  Spaces
                </Typography>

                <Typography
                  sx={{
                    fontSize: 8,
                    letterSpacing: 1,
                    color: "#777",
                    mt: 1.2,
                    textTransform: "uppercase",
                  }}
                >
                  Inspired by Nature
                  <br />
                  Crafted for Life
                </Typography>
              </Box>
            </MotionBox>


            {/* CONTENT SIDE */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                sx={{
                  color: "#bd8b2e",
                  fontSize: 13,
                  fontFamily:"ui-rounded",
                  fontWeight: 750,
                  letterSpacing: 2,
                  mb: 1.5,
                }}
              >
                OUR STORY
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: {
                    xs: 34,
                    sm: 42,
                    md: 48,
                  },
                  lineHeight: 1.08,
                  fontWeight: 550,
                  color: "#111",
                  mb: 3,
                }}
              >
                From a Vision
                <br />
                to a Trusted Brand
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  fontSize: {
                    xs: 13,
                    md: 15,
                  },
                  lineHeight: 1.8,
                  maxWidth: 750,
                  mb: 3,
                }}
              >
                TileHouse was founded with a simple idea — to make
                high-quality tiles accessible to everyone who
                dreams of a better space. Over the years, we have
                grown into a trusted name, offering a wide range
                of tiles that combine design, durability and
                innovation.
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  fontSize: {
                    xs: 13,
                    md: 15,
                  },
                  lineHeight: 1.8,
                  maxWidth: 750,
                  mb: 4,
                }}
              >
                Today, we continue to inspire homes, businesses
                and communities with spaces that truly matter.
              </Typography>

              <Box
                sx={{
                  width: 28,
                  height: 2,
                  background: "#c99a3b",
                  mb: 3,
                }}
              />


              {/* MISSION / VISION / VALUES */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(3, 1fr)",
                  },
                  gap: {
                    xs: 3,
                    sm: 2,
                  },
                }}
              >

                {/* MISSION */}
                <Box
                  sx={{
                    pr: { sm: 2 },
                    borderRight: {
                      sm: "2px solid #ddd",
                    },
                  }}
                >
                  <AutoAwesomeOutlined
                    sx={{
                      color: "#b88327",
                      fontSize: 40,
                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#222",
                      mb: 0.7,
                    }}
                  >
                    Our Mission
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "#666",
                      lineHeight: 1.6,
                    }}
                  >
                    Enhance lives through beautiful spaces
                  </Typography>
                </Box>


                {/* VISION */}
                <Box
                  sx={{
                    px: { sm: 2 },
                    borderRight: {
                      sm: "2px solid #ddd",
                    },
                  }}
                >
                  <VisibilityOutlined
                    sx={{
                      color: "#b88327",
                      fontSize: 35,
                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#222",
                      mb: 0.7,
                    }}
                  >
                    Our Vision
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "#666",
                      lineHeight: 1.6,
                    }}
                  >
                    To be a global leader in tile solutions
                  </Typography>
                </Box>


                {/* VALUES */}
                <Box
                  sx={{
                    pl: { sm: 2 },
                  }}
                >
                  <FavoriteBorderOutlined
                    sx={{
                      color: "#b88327",
                      fontSize: 30,
                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#222",
                      mb: 0.7,
                    }}
                  >
                    Our Values
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "#666",
                      lineHeight: 1.6,
                    }}
                  >
                    Quality, Integrity, Customer Happiness
                  </Typography>
                </Box>
              </Box>
            </MotionBox>
          </Box>
        </Container>
      </Box>
      <WhyChoose/>
      <Features/>
    </Box>
  );
};
export default About;