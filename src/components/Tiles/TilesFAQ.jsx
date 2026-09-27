import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";

import { Add, Remove, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const faqs = [
  {
    question: "What types of tiles do you offer?",
    answer:
      "We offer wall tiles, floor tiles, vitrified tiles, bathroom tiles, outdoor tiles and designer tiles in a wide range of colours, patterns, finishes and sizes.",
  },
  {
    question: "How do I choose the right tiles for my space?",
    answer:
      "The right tile depends on the room, usage, size, finish and overall interior style. Our team can help you choose tiles that complement your space.",
  },
  {
    question: "Are your tiles suitable for outdoor areas?",
    answer:
      "Yes. We offer specially designed outdoor tiles suitable for balconies, terraces, pathways and other exterior applications.",
  },
  {
    question: "Do you have tiles from leading brands?",
    answer:
      "Yes. We offer collections from reputed tile brands, giving you a wide choice of designs, finishes and styles.",
  },
  {
    question: "Can I visit your showroom before purchasing?",
    answer:
      "Absolutely. You can visit our showroom to explore the collections, compare designs and get expert assistance with your selection.",
  },
  {
    question: "Do you provide guidance for tile selection?",
    answer:
      "Yes. Our team can guide you based on your room, design preference, application requirements and budget.",
  },
];

function TilesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FBFAF7",
        py: {
          xs: 7,
          sm: 9,
          md: 11,
        },
        borderTop: "1px solid #E8E3DB",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "34% 66%",
            },
            gap: {
              xs: 5,
              md: 7,
              lg: 10,
            },
          }}
        >
          {/* LEFT CONTENT */}

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
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: {
                  xs: 10,
                  sm: 11,
                },
                fontWeight: 600,
                letterSpacing: "2.8px",
                color: "#A4773E",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              FAQ
            </Typography>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: 32,
                  sm: 38,
                  md: 44,
                },
                fontWeight: 400,
                lineHeight: 1.12,
                color: "#171717",
                mb: 2,
              }}
            >
              Frequently Asked
              <br />
              Questions
            </Typography>

            <Box
              sx={{
                width: 45,
                height: "2px",
                backgroundColor: "#B88945",
                mb: 2.5,
              }}
            />

            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: {
                  xs: 12,
                  sm: 13,
                  md: 14,
                },
                lineHeight: 1.8,
                color: "#666",
                maxWidth: 330,
              }}
            >
              Have questions about our tile collections, designs
              or showroom? Find quick answers to the most common
              questions below.
            </Typography>

            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mt: 3,
                color: "#9A6E35",
                fontFamily: "'Poppins', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",

                "&:hover": {
                  color: "#6E4B25",
                },
              }}
            >
              Visit our showroom
              <ArrowForward sx={{ fontSize: 17 }} />
            </Box>
          </MotionBox>

          {/* RIGHT FAQ */}

          <Box>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <MotionBox
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  sx={{
                    borderTop: "1px solid #DDD8D0",

                    "&:last-child": {
                      borderBottom: "1px solid #DDD8D0",
                    },
                  }}
                >
                  {/* QUESTION */}

                  <Box
                    onClick={() => handleToggle(index)}
                    sx={{
                      minHeight: {
                        xs: 65,
                        sm: 72,
                      },

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",

                      gap: 2,

                      cursor: "pointer",

                      py: 1.5,

                      "&:hover .question": {
                        color: "#A4773E",
                      },
                    }}
                  >
                    <Typography
                      className="question"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: {
                          xs: 13,
                          sm: 14,
                          md: 15,
                        },
                        fontWeight: 500,
                        color: isOpen ? "#A4773E" : "#222",
                        lineHeight: 1.5,
                        transition: "color 0.25s ease",
                      }}
                    >
                      {faq.question}
                    </Typography>

                    <IconButton
                      disableRipple
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        border: "1px solid",
                        borderColor: isOpen
                          ? "#B88945"
                          : "#D2CCC3",
                        color: "#8E6838",
                        flexShrink: 0,

                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {isOpen ? (
                        <Remove sx={{ fontSize: 17 }} />
                      ) : (
                        <Add sx={{ fontSize: 17 }} />
                      )}
                    </IconButton>
                  </Box>

                  {/* ANSWER */}

                  <Collapse
                    in={isOpen}
                    timeout={300}
                    unmountOnExit
                  >
                    <Box
                      sx={{
                        pb: 2.8,
                        pr: {
                          xs: 4,
                          sm: 6,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: {
                            xs: 11.5,
                            sm: 12.5,
                            md: 13,
                          },
                          lineHeight: 1.8,
                          color: "#707070",
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </Box>
                  </Collapse>
                </MotionBox>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TilesFAQ;