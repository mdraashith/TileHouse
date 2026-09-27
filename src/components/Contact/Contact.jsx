import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ContactDetails from "./ContactDetails";

const Contact = () => {
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    minHeight: {
                        xs: 400,
                        sm: 400,
                        md: 450,
                    },
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",

                    backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0,0,0,0.92) 0%,
            rgba(0,0,0,0.82) 25%,
            rgba(0,0,0,0.55) 43%,
            rgba(0,0,0,0.12) 68%,
            rgba(0,0,0,0.05) 100%
          ),
          url("/img/contacthero.png")
        `,

                    backgroundSize: "cover",

                    backgroundPosition: {
                        xs: "62% center",
                        sm: "center center",
                        md: "center center",
                    },

                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        px: {
                            xs: 3,
                            sm: 5,
                            md: 8,
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "70%",
                                md: "48%",
                                lg: "45%",
                            },
                        }}
                    >
                        {/* SMALL TITLE */}

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                mb: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#D49A3A",
                                    fontSize: {
                                        xs: 11,
                                        sm: 12,
                                        md: 13,
                                    },
                                    fontWeight: 600,
                                    letterSpacing: 3,
                                    textTransform: "uppercase",
                                    textShadow:
                                        "1px 1px 3px rgba(0,0,0,0.8)",
                                }}
                            >
                                CONTACT US
                            </Typography>

                            <Box
                                sx={{
                                    width: 45,
                                    height: "1px",
                                    background: "#D49A3A",
                                    boxShadow:
                                        "0 1px 4px rgba(0,0,0,0.8)",
                                }}
                            />
                        </Box>

                        {/* MAIN TITLE */}

                        <Typography
                            sx={{
                                fontFamily:
                                    "Georgia, 'Times New Roman', serif",

                                color: "#fff",

                                fontSize: {
                                    xs: 43,
                                    sm: 54,
                                    md: 65,
                                    lg: 70,
                                },

                                lineHeight: 1.02,

                                fontWeight: 400,

                                textShadow: `
                2px 2px 0 rgba(0,0,0,0.95),
                3px 4px 10px rgba(0,0,0,0.9),
                0 8px 20px rgba(0,0,0,0.7)
              `,
                            }}
                        >
                            Let’s Build
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily:
                                    "Georgia, 'Times New Roman', serif",

                                color: "#D08B2E",

                                fontSize: {
                                    xs: 43,
                                    sm: 54,
                                    md: 65,
                                    lg: 70,
                                },

                                lineHeight: 1.02,

                                fontStyle: "italic",

                                fontWeight: 400,

                                textShadow: `
                1px 1px 0 rgba(0,0,0,0.9),
                3px 4px 10px rgba(0,0,0,0.85)
              `,
                            }}
                        >
                            Your Dream Space
                        </Typography>

                        {/* DESCRIPTION */}

                        <Typography
                            sx={{
                                mt: 3,

                                maxWidth: 500,

                                color: "#fff",

                                fontSize: {
                                    xs: 14,
                                    sm: 15,
                                    md: 16,
                                },

                                lineHeight: 1.6,

                                fontFamily: "Poppins, sans-serif",

                                textShadow: `
                1px 1px 2px #000,
                2px 2px 6px rgba(0,0,0,0.9)
              `,
                            }}
                        >
                            Get in touch with us for tiles, bathware,
                            sanitaryware and complete interior solutions.
                            Our team is here to help you create beautiful
                            spaces.
                        </Typography>
                    </Box>
                </Container>

            </Box>
            <ContactDetails />
        </>
    );
};

export default Contact;