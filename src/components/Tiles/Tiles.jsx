import React from "react";
import {
    Box,
    Container,
    Typography,
    Button,
} from "@mui/material";

import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Collections from "./Collections";
import TilesChoice from "./TilesChoice";
import TilesFAQ from "./TilesFAQ";

const MotionBox = motion(Box);

/* =========================
   MAIN CATEGORIES
========================= */

const categories = [
    {
        title: "TILES",
        description: "Surfaces for a better tomorrow.",
        image: "/img/tile1.png",
        button: "Explore Tiles",
        bottomText: (
            <>
                Wall Tiles&nbsp;&nbsp; | &nbsp;&nbsp;Floor Tiles&nbsp;&nbsp; | <br />
                Vitrified Tiles&nbsp;&nbsp; | &nbsp;&nbsp;Designer Tiles
            </>
        ),
        link: "/tiles",
    },
    {
        title: "SANITARYWARE",
        description: "Comfort meets modern living.",
        image: "/img/tile2.png",
        button: "Explore Products",
        bottomText: (
            <>
                Wash Basins&nbsp;&nbsp; | &nbsp;&nbsp;EWC&nbsp;&nbsp; | <br />
                Smart Solutions&nbsp;&nbsp; | &nbsp;&nbsp;Accessories
            </>
        ),
        link: "/sanitaryware",
    },
    {
        title: "BATH FITTINGS",
        description: "Details that make a difference.",
        image: "/img/tile3.png",
        button: "Explore Range",
        bottomText: (
            <>
                Showers&nbsp;&nbsp; | &nbsp;&nbsp;Faucets&nbsp;&nbsp; | <br />
                Diverters&nbsp;&nbsp; | &nbsp;&nbsp;Accessories
            </>
        ),
        link: "/bath-fittings",
    },
];

function Tiles() {
    return (
        <Box
            sx={{
                background: "#FAF8F4",
                minHeight: "100vh",
                color: "#171717",
                overflow: "hidden",
            }}
        >

            {/* ==================================================
          INTRO
      ================================================== */}

            <Box
                sx={{
                    pt: {
                        xs: 5,
                        sm: 7,
                        md: 5,
                    },
                    pb: {
                        xs: 4,
                        md: 5,
                    },
                    textAlign: "center",
                }}
            >
                <Container maxWidth="lg">

                    {/* SMALL TOP TEXT */}

                    <Typography
                        sx={{
                            fontSize: {
                                xs: "9px",
                                sm: "12px",
                            },
                            fontFamily: "ui-sans-serif",
                            letterSpacing: {
                                xs: "3px",
                                sm: "4px",
                            },
                            color: "#946B3C",
                            fontWeight: 650,
                            mb: 1.5,
                            textTransform: "uppercase",
                        }}
                    >
                        PREMIUM SURFACES. BETTER SPACES.
                    </Typography>

                    {/* MAIN TITLE */}

                    <Typography
                        component="h1"
                        sx={{
                            fontFamily: "Georgia, 'Times New Roman', serif",
                            fontSize: {
                                xs: "38px",
                                sm: "50px",
                                md: "62px",
                                lg: "75px",
                            },
                            lineHeight: {
                                xs: 1.05,
                                md: 1,
                            },
                            fontWeight: 400,
                            letterSpacing: {
                                xs: "-1.5px",
                                md: "-3px",
                            },
                            mb: 1,
                        }}
                    >
                        DESIGN{" "}
                        <Box
                            component="span"
                            sx={{
                                color: "#9B7040",
                            }}
                        >
                            YOUR SPACE
                        </Box>
                    </Typography>

                    {/* DESCRIPTION */}

                    <Typography
                        sx={{
                            maxWidth: 610,
                            mx: "auto",
                            fontSize: {
                                xs: "12px",
                                sm: "13px",
                                md: "16px",
                            },
                            lineHeight: 1.65,
                            color: "#4E4E4E",
                            fontFamily: "ui-rounded",
                            fontWeight: 650,
                        }}
                    >
                        Premium tiles, sanitaryware and bath fittings to create
                        spaces that reflect your style, today and for tomorrow.
                    </Typography>

                    {/* GOLD LINE */}

                    <Box
                        sx={{
                            width: 43,
                            height: "2.5px",
                            background: "#A8753C",
                            mx: "auto",
                            mt: -0.1,
                        }}
                    />

                </Container>
            </Box>


            {/* ==================================================
          RIGHT SIDE + CATEGORY CARDS
      ================================================== */}

            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 3,
                    },
                }}
            >

                {/* RIGHT SIDE VERTICAL TEXT */}

                <Box
                    sx={{
                        position: "absolute",
                        right: {
                            xs: 20,
                            sm: 25,
                            md: 35,
                        },
                        top: {
                            xs: -165,
                            sm: -180,
                            md: -205,
                        },
                        display: {
                            xs: "none",
                            sm: "flex",
                        },
                        alignItems: "flex-start",
                        gap: 2,
                    }}
                >

                    <Box
                        sx={{
                            width: "1px",
                            height: 110,
                            background: "#A99F93",
                        }}
                    />

                    <Box>

                        <Typography
                            sx={{
                                fontSize: 12,
                                letterSpacing: "2px",
                                lineHeight: 2,
                                color: "#222",
                            }}
                        >
                            SPACES
                            <br />
                            INSPIRE
                            <br />
                            BETTER
                            <br />
                            LIVING
                        </Typography>

                        <Box
                            sx={{
                                width: 25,
                                height: 1,
                                background: "#A8753C",
                                mt: 1,
                            }}
                        />

                    </Box>

                </Box>


                {/* ==================================================
            THREE CATEGORY CARDS
        ================================================== */}

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                        },
                        gap: {
                            xs: 2,
                            md: 2,
                        },
                    }}
                >

                    {categories.map((item, index) => (
                        <MotionBox
                            key={item.title}
                            initial={{
                                opacity: 0,
                                y: 35,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.12,
                            }}
                            sx={{
                                position: "relative",
                                height: {
                                    xs: 300,
                                    sm: 400,
                                    md: 350,
                                    lg: 370,
                                },
                                overflow: "hidden",
                                background: "#1f2121",
                            }}
                        >

                            {/* IMAGE */}

                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.8s ease",
                                }}
                            />

                            {/* CONTENT */}

                            <Box
                                sx={{
                                    position: "relative",
                                    zIndex: 2,
                                    height: "100%",
                                    p: {
                                        xs: 3,
                                        sm: 3.2,
                                        md: 3,
                                    },
                                    mt: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >

                                <Box>

                                    {/* TITLE */}

                                    <Typography
                                        sx={{
                                            fontFamily: "'Bodoni Moda', serif",
                                            fontWeight: 550,
                                            letterSpacing: "2px",
                                            fontSize: {
                                                xs: 22,
                                                md: 22,
                                            },
                                        }}
                                    >
                                        {item.title}
                                    </Typography>


                                    {/* SMALL LINE */}

                                    <Box
                                        sx={{
                                            width: 35,
                                            height: "1.5px",
                                            background: "#A8753C",
                                            mt: -0.1,
                                            mb: 2,
                                        }}
                                    />


                                    {/* DESCRIPTION */}

                                    <Typography
                                        sx={{
                                            maxWidth: 145,
                                            fontFamily: "'Bodoni Moda', serif",
                                            fontSize: {
                                                xs: 14,
                                                md: 14,
                                            },
                                            lineHeight: 1.65,
                                            color: "#454545", fontWeight: 500,
                                        }}
                                    >
                                        {item.description}
                                    </Typography>


                                    {/* BUTTON */}

                                    <Button
                                        component={Link}
                                        to={item.link}
                                        endIcon={
                                            <ArrowForward
                                                sx={{
                                                    fontSize: "16px !important",
                                                }}
                                            />
                                        }
                                        sx={{
                                            mt: 3,
                                            border: "1.5px solid #B1844B",
                                            borderRadius: "25px",
                                            fontFamily: "'Tenor Sans', sans-serif",
                                            px: 2,
                                            py: 0.7,
                                            minWidth: 0,
                                            textTransform: "none",
                                            color: "#222",
                                            fontSize: 11,
                                            background:
                                                "rgba(255,255,255,0.35)",
                                            transition: "all 0.3s ease",
                                            fontWeight: 550,
                                            "&:hover": {
                                                background: "#B1844B",
                                                color: "#fff",
                                                borderColor: "#B1844B",
                                            },
                                        }}
                                    >
                                        {item.button}
                                    </Button>

                                </Box>


                                {/* BOTTOM TEXT */}

                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: 12,
                                            md: 12,
                                        },
                                        lineHeight: 1.5,
                                        color: "#2E2E2E", fontWeight: 550,
                                        fontFamily: "'Forum', serif",
                                        mb: 2,
                                    }}
                                >
                                    {item.bottomText}
                                </Typography>

                            </Box>

                        </MotionBox>
                    ))}

                </Box>

            </Container>



            <Collections />

            <TilesChoice />
            <TilesFAQ />

        </Box>
    );
}

export default Tiles;