import React from "react";

import {
    Box,
    Typography,
    IconButton,
} from "@mui/material";

import GitHubIcon
    from "@mui/icons-material/GitHub";

import LinkedInIcon
    from "@mui/icons-material/LinkedIn";

import InstagramIcon
    from "@mui/icons-material/Instagram";

import WhatsAppIcon
    from "@mui/icons-material/WhatsApp";

import KeyboardArrowUpIcon
    from "@mui/icons-material/KeyboardArrowUp";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";


function Footer() {

    // =====================================================
    // QUICK LINKS
    // =====================================================

    const navItems = [
        {
            name: "Home",
            path: "/",
        },

        {
            name: "About",
            path: "/about",
        },

        {
            name: "Skills",
            path: "/skills",
        },

        {
            name: "Projects",
            path: "/projects",
        },

        {
            name: "Contact",
            path: "/contact",
        },
    ];


    // =====================================================
    // SOCIAL LINKS
    // =====================================================

    const socialLinks = [
        {
            icon: <GitHubIcon />,
            link: "https://github.com/mdraashith",
            label: "GitHub",
        },

        {
            icon: <LinkedInIcon />,
            link: "https://www.linkedin.com/",
            label: "LinkedIn",
        },

        {
            icon: <InstagramIcon />,
            link: "https://www.instagram.com/",
            label: "Instagram",
        },

        {
            icon: <WhatsAppIcon />,
            link: "https://wa.me/919597212376",
            label: "WhatsApp",
        },
    ];


    // =====================================================
    // SCROLL TO TOP
    // =====================================================

    const scrollTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };


    return (

        <Box
            component="footer"

            sx={{
                position: "relative",

                width: "100%",

                color: "#fff",

                // ==========================================
                // PLAIN DARK BACKGROUND
                // ==========================================

                background: "#030510",

                borderTop:
                    "1px solid rgba(120,70,255,0.25)",

                overflow: "hidden",
            }}
        >

            {/* =====================================================
                            MAIN FOOTER
            ===================================================== */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
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
                    ease: "easeOut",
                }}
            >

                <Box
                    sx={{
                        maxWidth: "1200px",

                        mx: "auto",

                        width: "100%",

                        boxSizing: "border-box",

                        px: {
                            xs: 2,
                            sm: 3,
                            md: 5,
                        },

                        py: {
                            xs: 5,
                            sm: 6,
                            md: 7,
                        },
                    }}
                >

                    {/* =================================================
                                FOOTER GRID
                    ================================================= */}

                    <Box
                        sx={{
                            display: "grid",

                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "1.3fr 1fr 1fr",
                            },

                            gap: {
                                xs: 4,
                                sm: 3,
                                md: 5,
                            },
                        }}
                    >

                        {/* =================================================
                                    BRAND
                        ================================================= */}

                        <Box>

                            {/* LOGO */}

                            <Box
                                sx={{
                                    display: "flex",

                                    alignItems:
                                        "center",

                                    gap: 1.2,

                                    mb: 1.5,

                                    flexWrap:
                                        "wrap",
                                }}
                            >

                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: 32,
                                            sm: 36,
                                        },

                                        fontWeight: 800,

                                        letterSpacing:
                                            "-2px",

                                        background:
                                            "linear-gradient(135deg,#9B35FF,#286DFF)",

                                        WebkitBackgroundClip:
                                            "text",

                                        WebkitTextFillColor:
                                            "transparent",
                                    }}
                                >
                                    MR
                                </Typography>


                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: 20,
                                            sm: 22,
                                        },

                                        fontWeight: 700,
                                    }}
                                >
                                    RAASHITH

                                    <Box
                                        component="span"

                                        sx={{
                                            color:
                                                "#963CFF",
                                        }}
                                    >
                                        .DEV
                                    </Box>

                                </Typography>

                            </Box>


                            {/* DESCRIPTION */}

                            <Typography
                                sx={{
                                    color:
                                        "#9DA3B7",

                                    fontSize: {
                                        xs: 14,
                                        sm: 15,
                                    },

                                    lineHeight:
                                        1.7,

                                    maxWidth:
                                        "380px",
                                }}
                            >
                                Frontend Developer passionate
                                about creating modern,
                                responsive and user-friendly
                                web experiences.
                            </Typography>


                            {/* =================================================
                                        SOCIAL ICONS
                            ================================================= */}

                            <Box
                                sx={{
                                    display:
                                        "flex",

                                    gap: 1,

                                    mt: 2.5,

                                    flexWrap:
                                        "wrap",
                                }}
                            >

                                {socialLinks.map(
                                    (social) => (

                                        <IconButton
                                            key={
                                                social.label
                                            }

                                            component="a"

                                            href={
                                                social.link
                                            }

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            aria-label={
                                                social.label
                                            }

                                            sx={{
                                                width: 42,

                                                height: 42,

                                                color:
                                                    "#B8BDCE",

                                                border:
                                                    "1px solid rgba(110,100,190,0.35)",

                                                borderRadius:
                                                    "10px",

                                                background:
                                                    "rgba(15,20,50,0.6)",

                                                transition:
                                                    "0.3s ease",

                                                "&:hover":
                                                {
                                                    color:
                                                        "#fff",

                                                    borderColor:
                                                        "#9344FF",

                                                    background:
                                                        "rgba(120,50,220,0.18)",

                                                    transform:
                                                        "translateY(-4px)",

                                                    boxShadow:
                                                        "0 0 18px rgba(130,50,255,0.3)",
                                                },
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>

                                    )
                                )}

                            </Box>

                        </Box>


                        {/* =================================================
                                    QUICK LINKS
                        ================================================= */}

                        <Box>

                            <Typography
                                sx={{
                                    fontSize: 18,

                                    fontWeight: 700,

                                    mb: 2,

                                    color: "#fff",
                                }}
                            >
                                Quick Links
                            </Typography>


                            <Box
                                sx={{
                                    display:
                                        "flex",

                                    flexDirection:
                                        "column",

                                    gap: 1.2,
                                }}
                            >

                                {navItems.map(
                                    (item) => (

                                        <Box
                                            key={
                                                item.path
                                            }

                                            component={Link}

                                            to={
                                                item.path
                                            }

                                            sx={{
                                                width:
                                                    "fit-content",

                                                color:
                                                    "#9DA3B7",

                                                textDecoration:
                                                    "none",

                                                fontSize:
                                                    14,

                                                fontWeight:
                                                    500,

                                                cursor:
                                                    "pointer",

                                                transition:
                                                    "0.25s ease",

                                                "&:hover":
                                                {
                                                    color:
                                                        "#B74CFF",

                                                    transform:
                                                        "translateX(5px)",
                                                },
                                            }}
                                        >
                                            {item.name}
                                        </Box>

                                    )
                                )}

                            </Box>

                        </Box>


                        {/* =================================================
                                    LET'S CONNECT
                        ================================================= */}

                        <Box>

                            <Typography
                                sx={{
                                    fontSize: 18,

                                    fontWeight: 700,

                                    mb: 2,

                                    color: "#fff",
                                }}
                            >
                                Let's Connect
                            </Typography>


                            <Typography
                                sx={{
                                    color:
                                        "#9DA3B7",

                                    fontSize:
                                        14,

                                    lineHeight:
                                        1.7,

                                    mb: 1.5,

                                    maxWidth:
                                        "300px",
                                }}
                            >
                                Have a project or
                                opportunity in mind?
                                Let's build something
                                amazing together.
                            </Typography>


                            {/* CONTACT BUTTON */}

                            <Box
                                component={Link}

                                to="/contact"

                                sx={{
                                    display:
                                        "inline-flex",

                                    alignItems:
                                        "center",

                                    justifyContent:
                                        "center",

                                    px: 2.2,

                                    py: 1,

                                    borderRadius:
                                        "9px",

                                    textDecoration:
                                        "none",

                                    color:
                                        "#fff",

                                    fontSize:
                                        14,

                                    fontWeight:
                                        600,

                                    background:
                                        "linear-gradient(100deg,#A92CFF,#287EFF)",

                                    transition:
                                        "0.3s ease",

                                    cursor:
                                        "pointer",

                                    "&:hover":
                                    {
                                        transform:
                                            "translateY(-3px)",

                                        boxShadow:
                                            "0 8px 25px rgba(100,40,255,0.3)",
                                    },
                                }}
                            >
                                Contact Me
                            </Box>

                        </Box>

                    </Box>


                    {/* =================================================
                                DIVIDER
                    ================================================= */}

                    <Box
                        sx={{
                            width: "100%",

                            height: "1px",

                            mt: {
                                xs: 4,
                                md: 5,
                            },

                            background:
                                "linear-gradient(90deg,transparent,rgba(130,70,255,0.4),transparent)",
                        }}
                    />


                    {/* =================================================
                                BOTTOM FOOTER
                    ================================================= */}

                    <Box
                        sx={{
                            display: "flex",

                            alignItems:
                                "center",

                            justifyContent:
                                "space-between",

                            gap: 2,

                            mt: 2.5,

                            flexWrap:
                                "wrap",
                        }}
                    >

                        {/* COPYRIGHT */}

                        <Typography
                            sx={{
                                color:
                                    "#777D91",

                                fontSize: {
                                    xs: 12,
                                    sm: 13,
                                },

                                lineHeight:
                                    1.5,
                            }}
                        >
                            © 2026 Mohamed Raashith.
                            All rights reserved.
                        </Typography>


                        {/* BUILT WITH */}

                        <Typography
                            sx={{
                                color:
                                    "#777D91",

                                fontSize: {
                                    xs: 12,
                                    sm: 13,
                                },

                                lineHeight:
                                    1.5,
                            }}
                        >
                            Built with React & MUI
                        </Typography>


                        {/* =================================================
                                    SCROLL TOP
                        ================================================= */}

                        <IconButton
                            onClick={
                                scrollTop
                            }

                            aria-label=
                                "Scroll to top"

                            sx={{
                                width: 38,

                                height: 38,

                                color:
                                    "#fff",

                                border:
                                    "1px solid rgba(120,70,255,0.4)",

                                borderRadius:
                                    "9px",

                                background:
                                    "rgba(100,40,180,0.12)",

                                transition:
                                    "0.3s ease",

                                "&:hover":
                                {
                                    background:
                                        "rgba(120,50,220,0.25)",

                                    borderColor:
                                        "#9344FF",

                                    transform:
                                        "translateY(-3px)",

                                    boxShadow:
                                        "0 0 15px rgba(130,50,255,0.3)",
                                },
                            }}
                        >
                            <KeyboardArrowUpIcon />
                        </IconButton>

                    </Box>

                </Box>

            </motion.div>

        </Box>
    );
}


export default Footer;