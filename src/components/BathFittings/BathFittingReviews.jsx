import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";

import {
  Add,
  Remove,
  Star,
  ArrowBackIosNew,
  ArrowForwardIos,
  FormatQuote,
} from "@mui/icons-material";

import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What bath fittings do you offer?",
    a: "Faucets, showers, hand showers, diverters, health faucets and bathroom accessories.",
  },
  {
    q: "Which finishes are available?",
    a: "Chrome, matte black, brushed gold, gunmetal and other premium finishes are available.",
  },
  {
    q: "Can I visit the showroom?",
    a: "Yes. You can visit our showroom and explore different products and finishes.",
  },
  {
    q: "Do you provide installation support?",
    a: "Our team can guide you with installation requirements based on the selected product.",
  },
];

const reviews = [
  {
    name: "Arun Kumar",
    city: "Chennai",
    text: "Beautiful collection and excellent finishing. The fittings gave our bathroom a completely premium look.",
  },
  {
    name: "Priya S",
    city: "Mayiladuthurai",
    text: "Really loved the collection. The team helped us choose the right fittings for our new home.",
  },
  {
    name: "Karthik Raj",
    city: "Kumbakonam",
    text: "Good quality products with modern designs. The overall showroom experience was very smooth.",
  },
  {
    name: "Sanjay M",
    city: "Pondicherry",
    text: "The finish and quality were exactly what we were looking for. Very happy with the final selection.",
  },
];

const BathFittingReviews = () => {
  const [faq, setFaq] = useState(0);
  const [review, setReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setReview((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <Box sx={{ background: "#F8F5EF" }}>

      {/* ================= FAQ ================= */}

      <Box sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">

          <Box sx={{ mb: 5 }}>
            <Typography
              sx={{
                color: "#B98545",
                fontSize: 11,
                letterSpacing: 4,
                fontWeight: 700,
                mb: 1,
              }}
            >
              FREQUENTLY ASKED
            </Typography>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: { xs: 34, md: 48 },
                color: "#191919",
              }}
            >
              Everything you need to know.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 2,
            }}
          >
            {faqs.map((item, i) => {
              const active = faq === i;

              return (
                <Box
                  key={i}
                  onClick={() => setFaq(active ? null : i)}
                  sx={{
                    background: active ? "#20201E" : "#fff",
                    border: "1px solid #E5DED3",
                    borderRadius: 2,
                    p: { xs: 2.5, md: 3 },
                    cursor: "pointer",
                    transition: "0.3s",
                    minHeight: active ? 175 : 100,
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,.07)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: active ? "#fff" : "#222",
                        fontSize: { xs: 14, md: 16 },
                      }}
                    >
                      {item.q}
                    </Typography>

                    <IconButton
                      size="small"
                      sx={{
                        color: active ? "#C99550" : "#777",
                      }}
                    >
                      {active ? <Remove /> : <Add />}
                    </IconButton>
                  </Box>

                  <AnimatePresence>
                    {active && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <Typography
                          sx={{
                            color: "#BDB9B1",
                            fontSize: 13,
                            lineHeight: 1.8,
                            mt: 2,
                            pr: 4,
                          }}
                        >
                          {item.a}
                        </Typography>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* ================= REVIEWS ================= */}

      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background: "#ECE7DE",
        }}
      >
        <Container maxWidth="lg">

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              mb: 5,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#B98545",
                  fontSize: 11,
                  letterSpacing: 4,
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                CUSTOMER STORIES
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: { xs: 34, md: 48 },
                  color: "#191919",
                }}
              >
                What our customers say.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                onClick={prev}
                sx={{
                  border: "1px solid #C8BBA9",
                  width: 42,
                  height: 42,
                }}
              >
                <ArrowBackIosNew sx={{ fontSize: 15 }} />
              </IconButton>

              <IconButton
                onClick={next}
                sx={{
                  background: "#B98545",
                  color: "#fff",
                  width: 42,
                  height: 42,
                  "&:hover": {
                    background: "#9D6E35",
                  },
                }}
              >
                <ArrowForwardIos sx={{ fontSize: 15 }} />
              </IconButton>
            </Box>
          </Box>

          {/* REVIEW CARDS */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 2,
            }}
          >
            {[0, 1, 2].map((offset) => {
              const index =
                (review + offset) % reviews.length;

              const item = reviews[index];

              return (
                <motion.div
                  key={`${review}-${offset}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: offset * 0.08,
                  }}
                >
                  <Box
                    sx={{
                      background:
                        offset === 1 ? "#20201E" : "#fff",
                      color:
                        offset === 1 ? "#fff" : "#222",
                      minHeight: 285,
                      borderRadius: 2,
                      p: 3.5,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      border:
                        offset === 1
                          ? "none"
                          : "1px solid #E0D8CC",
                    }}
                  >
                    <FormatQuote
                      sx={{
                        position: "absolute",
                        right: 20,
                        top: 15,
                        fontSize: 55,
                        color:
                          offset === 1
                            ? "rgba(201,149,80,.18)"
                            : "rgba(201,149,80,.15)",
                      }}
                    />

                    <Box>
                      <Box sx={{ display: "flex", gap: 0.3 }}>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            sx={{
                              fontSize: 17,
                              color: "#C99550",
                            }}
                          />
                        ))}
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: "Georgia, serif",
                          fontSize: 18,
                          lineHeight: 1.65,
                          mt: 3,
                          color:
                            offset === 1
                              ? "#F4F0E8"
                              : "#333",
                        }}
                      >
                        “{item.text}”
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        mt: 3,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 42,
                          height: 42,
                          background: "#C99550",
                          fontSize: 13,
                        }}
                      >
                        {item.name
                          .split(" ")
                          .map((x) => x[0])
                          .join("")}
                      </Avatar>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: 13,
                            fontWeight: 700,
                          }}
                        >
                          {item.name}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 11,
                            color:
                              offset === 1
                                ? "#AAA"
                                : "#888",
                            mt: 0.3,
                          }}
                        >
                          {item.city}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </Box>

          {/* DOTS */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 0.8,
              mt: 3,
            }}
          >
            {reviews.map((_, i) => (
              <Box
                key={i}
                onClick={() => setReview(i)}
                sx={{
                  width: i === review ? 28 : 7,
                  height: 7,
                  borderRadius: 10,
                  background:
                    i === review
                      ? "#B98545"
                      : "#C8BFB2",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BathFittingReviews;