import React from "react";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardMedia,
    IconButton,
} from "@mui/material";

import {
    ArrowForward,
    PlayArrow,
    ChevronLeft,
    ChevronRight,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const collections = [
    {
        title: "Marble Look",
        subtitle: "Timeless Elegance",
        image: "/img/marbel.png",
    },
    {
        title: "Wooden Finish",
        subtitle: "Warm & Inviting",
        image: "/img/wooden.png",
    },
    {
        title: "Stone Finish",
        subtitle: "Natural & Bold",
        image: "/img/stone.png",
    },
    {
        title: "Designer Tiles",
        subtitle: "Unique by Nature",
        image: "/img/design.png",
    },
];

const brands = [
    {
        name: "Kajaria",
        image: "/img/kajaria.png",
    },
    {
        name: "Somany",
        image: "/img/somany.png",
    },
    {
        name: "Simpolo",
        image: "/img/simpolo.png",
    },
    {
        name: "RAK Ceramics",
        image: "/img/rak.png",
    },
    {
        name: "Kerovit",
        image: "/img/kerovit.png",
    },
    {
        name: "Parryware",
        image: "/img/parryware.png",
    },
];

const CollectionsSection = () => {
    const navigate = useNavigate();

    const [brandIndex, setBrandIndex] = React.useState(0);

    const nextBrand = () => {
        setBrandIndex((prev) => (prev + 1) % brands.length);
    };

    const prevBrand = () => {
        setBrandIndex(
            (prev) => (prev - 1 + brands.length) % brands.length
        );
    };

    return (
        <Box sx={{ background: "#fff" }}>

            {/* ================= FEATURED COLLECTIONS ================= */}

            <Box
                sx={{
                    py: { xs: 5, md: 7 },
                    background: "#faf9f6",
                }}
            >
                <Container maxWidth="xl">

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                lg: "280px 1fr",
                            },
                            gap: { xs: 4, lg: 5 },
                            alignItems: "center",
                        }}
                    >

                        {/* LEFT CONTENT */}

                        <MotionBox
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: 12, md: 13 },
                                    fontWeight: 700,
                                    letterSpacing: 2.5,
                                    color: "#b88a32",
                                    mb: 1,
                                    textTransform: "uppercase",
                                }}
                            >
                                Featured Collections
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: { xs: 28, md: 34 },
                                    fontWeight: 600,
                                    lineHeight: 1.15,
                                    color: "#111",
                                    mb: 1.5,
                                }}
                            >
                                Tiles for Every Style
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#666",
                                    fontSize: 14,
                                    lineHeight: 1.7,
                                    maxWidth: 300,
                                    mb: 3,
                                }}
                            >
                                Explore our handpicked collections designed to
                                match every lifestyle.
                            </Typography>

                            {/* VIEW ALL COLLECTIONS */}

                            <Button
                                variant="contained"
                                endIcon={<ArrowForward />}
                                onClick={() => navigate("/tiles")}
                                sx={{
                                    background:
                                        "linear-gradient(135deg, #d7a43b, #b67d19)",
                                    color: "#111",
                                    fontWeight: 700,
                                    borderRadius: 5,
                                    px: 3,
                                    py: 1.3,
                                    textTransform: "none",
                                    boxShadow:
                                        "0 8px 20px rgba(180,130,40,.25)",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(135deg, #e3b653, #c58c25)",
                                        transform: "translateY(-2px)",
                                    },
                                    transition: "0.3s",
                                }}
                            >
                                View All Collections
                            </Button>
                        </MotionBox>

                        {/* COLLECTION CARDS */}

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(2, 1fr)",
                                    md: "repeat(4, 1fr)",
                                },
                                gap: { xs: 1.5, md: 2 },
                            }}
                        >
                            {collections.map((item, index) => (
                                <MotionBox
                                    key={item.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <Card
                                        sx={{
                                            borderRadius: 1.5,
                                            overflow: "hidden",
                                            border: "1px solid #e5e5e5",
                                            boxShadow:
                                                "0 5px 18px rgba(0,0,0,.06)",
                                            transition: "0.35s",
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                boxShadow:
                                                    "0 15px 30px rgba(0,0,0,.12)",
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.title}
                                            sx={{
                                                height: {
                                                    xs: 125,
                                                    sm: 145,
                                                    md: 155,
                                                },
                                                objectFit: "cover",
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                p: { xs: 1.3, md: 1.5 },
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                background: "#fff",
                                            }}
                                        >
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontSize: {
                                                            xs: 12,
                                                            md: 14,
                                                        },
                                                        fontWeight: 700,
                                                        color: "#171717",
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontSize: {
                                                            xs: 10,
                                                            md: 11,
                                                        },
                                                        color: "#888",
                                                        mt: 0.3,
                                                    }}
                                                >
                                                    {item.subtitle}
                                                </Typography>
                                            </Box>

                                            <IconButton
                                                size="small"
                                                sx={{
                                                    width: 35,
                                                    height: 35,
                                                    border: "1px solid #d7a43b",
                                                    color: "#b27d20",
                                                }}
                                            >
                                                <ArrowForward
                                                    sx={{ fontSize: 18 }}
                                                />
                                            </IconButton>
                                        </Box>
                                    </Card>
                                </MotionBox>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ================= 360 SHOWROOM ================= */}

            <Box sx={{ background: "#080b0d" }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "38% 62%",
                        },
                        minHeight: { xs: 480, md: 330 },
                    }}
                >

                    {/* LEFT */}

                    <MotionBox
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        sx={{
                            px: { xs: 3, sm: 5, md: 7 },
                            py: { xs: 5, md: 6 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            background:
                                "linear-gradient(135deg, #080b0d, #11171a)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                letterSpacing: 2.5,
                                fontWeight: 700,
                                color: "#d6a33b",
                                mb: 1,
                            }}
                        >
                            STEP INTO OUR WORLD
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Georgia, serif",
                                color: "#fff",
                                fontSize: { xs: 30, md: 37 },
                                lineHeight: 1.15,
                                maxWidth: 430,
                                mb: 2,
                            }}
                        >
                            Experience Our
                            <br />
                            Showroom in 360°
                        </Typography>

                        <Typography
                            sx={{
                                color: "#c7c7c7",
                                fontSize: 14,
                                lineHeight: 1.7,
                                maxWidth: 420,
                                mb: 3,
                            }}
                        >
                            Take a virtual tour and explore our wide range
                            of collections from the comfort of your home.
                        </Typography>

                        {/* EXPLORE 360° SHOWROOM */}

                        <Button
                            endIcon={<ArrowForward />}
                            onClick={() => navigate("/contact")}
                            sx={{
                                alignSelf: "flex-start",
                                background:
                                    "linear-gradient(135deg, #e2b04c, #b77e1d)",
                                color: "#111",
                                fontWeight: 700,
                                borderRadius: 5,
                                px: 3,
                                py: 1.2,
                                textTransform: "none",
                                "&:hover": {
                                    background:
                                        "linear-gradient(135deg, #edc15f, #ca9130)",
                                },
                            }}
                        >
                            Explore 360° Showroom
                        </Button>
                    </MotionBox>

                    {/* SHOWROOM IMAGE */}

                    <Box
                        sx={{
                            position: "relative",
                            minHeight: { xs: 280, md: 330 },
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="video"
                            src="/img/showroom.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            sx={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                inset: 0,
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                </Box>
            </Box>

            {/* ================= BRANDS ================= */}

            <Box
                sx={{
                    py: { xs: 5, md: 6 },
                    background: "#faf9f6",
                }}
            >
                <Container maxWidth="xl">

                    <Typography
                        sx={{
                            fontSize: 12,
                            letterSpacing: 2.5,
                            fontWeight: 700,
                            color: "#b88a32",
                            mb: 1,
                        }}
                    >
                        OUR BRANDS
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "Georgia, serif",
                            fontSize: { xs: 28, md: 36 },
                            fontWeight: 600,
                            color: "#111",
                            mb: 1,
                        }}
                    >
                        Trusted Global Brands
                    </Typography>

                    <Typography
                        sx={{
                            color: "#777",
                            fontSize: 14,
                            mb: 3,
                        }}
                    >
                        We bring you products from the most reliable and
                        innovative brands in the industry.
                    </Typography>

                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >

                        {/* LEFT ARROW */}

                        <IconButton
                            onClick={prevBrand}
                            sx={{
                                width: 42,
                                height: 42,
                                flexShrink: 0,
                                background: "#fff",
                                border: "1px solid #eee",
                                boxShadow:
                                    "0 4px 12px rgba(0,0,0,.08)",
                                "&:hover": {
                                    background: "#d7a43b",
                                },
                            }}
                        >
                            <ChevronLeft />
                        </IconButton>

                        {/* BRAND CARDS */}

                        <Box
                            sx={{
                                flex: 1,
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(2, 1fr)",
                                    sm: "repeat(3, 1fr)",
                                    md: "repeat(6, 1fr)",
                                },
                                gap: { xs: 1, sm: 1.5 },
                                overflow: "hidden",
                            }}
                        >
                            {brands.map((brand, index) => (
                                <MotionBox
                                    key={brand.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    sx={{
                                        display: {
                                            xs:
                                                index === brandIndex ||
                                                index ===
                                                    (brandIndex + 1) % 6
                                                    ? "flex"
                                                    : "none",

                                            sm:
                                                index >= brandIndex &&
                                                index < brandIndex + 3
                                                    ? "flex"
                                                    : "none",

                                            md: "flex",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: {
                                                xs: 82,
                                                sm: 95,
                                                md: 105,
                                            },
                                            background: "#fff",
                                            border: "1px solid #e7e7e7",
                                            borderRadius: 1.5,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            px: 2,
                                            transition: "0.3s",
                                            "&:hover": {
                                                transform:
                                                    "translateY(-4px)",
                                                boxShadow:
                                                    "0 10px 25px rgba(0,0,0,.08)",
                                            },
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={brand.image}
                                            alt={brand.name}
                                            sx={{
                                                maxWidth: {
                                                    xs: 80,
                                                    sm: 105,
                                                    md: 120,
                                                },
                                                maxHeight: {
                                                    xs: 38,
                                                    sm: 45,
                                                    md: 50,
                                                },
                                                objectFit: "contain",
                                            }}
                                        />
                                    </Box>
                                </MotionBox>
                            ))}
                        </Box>

                        {/* RIGHT ARROW */}

                        <IconButton
                            onClick={nextBrand}
                            sx={{
                                width: 42,
                                height: 42,
                                flexShrink: 0,
                                background: "#fff",
                                border: "1px solid #eee",
                                boxShadow:
                                    "0 4px 12px rgba(0,0,0,.08)",
                                "&:hover": {
                                    background: "#d7a43b",
                                },
                            }}
                        >
                            <ChevronRight />
                        </IconButton>

                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default CollectionsSection;