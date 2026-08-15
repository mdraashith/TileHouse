import React, { useState } from "react";

import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    IconButton,
} from "@mui/material";

import {
    NavLink,
    useLocation,
} from "react-router-dom";

import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";


// =====================================================
// NAV COMPONENT
// =====================================================

function Nav() {

    const [mobileOpen, setMobileOpen] =
        useState(false);

    const location = useLocation();


    // =================================================
    // NAV ITEMS
    // =================================================

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


    // =================================================
    // MOBILE MENU
    // =================================================

    const handleMenu = () => {
        setMobileOpen(!mobileOpen);
    };


    const closeMenu = () => {
        setMobileOpen(false);
    };


    // =================================================
    // CHECK ACTIVE PAGE
    // =================================================

    const isActive = (path) => {

        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname === path;
    };


    return (
        <>
            {/* =====================================================
                    MAIN NAVBAR
            ===================================================== */}

            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background:
                        "rgba(3,5,13,0.30)",

                    backdropFilter:
                        "blur(12px)",

                    WebkitBackdropFilter:
                        "blur(12px)",

                    borderBottom:
                        "1px solid rgba(255,255,255,0.08)",

                    boxShadow: "none",

                    zIndex: 1200,
                }}
            >

                <Toolbar
                    sx={{
                        height: {
                            xs: "72px",
                            sm: "80px",
                            md: "88px",
                        },

                        px: {
                            xs: 2,
                            sm: 3,
                            md: 4,
                        },

                        display: "flex",

                        justifyContent:
                            "space-between",
                    }}
                >

                    {/* =================================================
                            LOGO
                    ================================================= */}

                    <Box
                        sx={{
                            display: "flex",

                            alignItems: "center",

                            gap: {
                                xs: 0.7,
                                sm: 1.2,
                                md: 1.5,
                            },
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "28px",
                                    sm: "32px",
                                    md: "38px",
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
                                color: "#fff",

                                fontSize: {
                                    xs: "15px",
                                    sm: "18px",
                                    md: "22px",
                                },

                                fontWeight: 700,

                                whiteSpace: "nowrap",
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


                    {/* =================================================
                            DESKTOP NAVIGATION
                    ================================================= */}

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },

                            alignItems:
                                "center",

                            gap: {
                                md: 3,
                                lg: 5,
                            },

                            height: "88px",
                        }}
                    >

                        {navItems.map((item) => {

                            const active =
                                isActive(item.path);

                            return (

                                <Box
                                    key={item.name}

                                    component={NavLink}

                                    to={item.path}

                                    sx={{
                                        position:
                                            "relative",

                                        height:
                                            "88px",

                                        display:
                                            "flex",

                                        alignItems:
                                            "center",

                                        color:
                                            active
                                                ? "#fff"
                                                : "#BDBDBD",

                                        textDecoration:
                                            "none",

                                        fontSize:
                                            "16px",

                                        fontWeight:
                                            500,

                                        transition:
                                            "0.3s ease",

                                        "&:hover": {
                                            color:
                                                "#fff",
                                        },

                                        "&::after": {
                                            content:
                                                '""',

                                            position:
                                                "absolute",

                                            left: "50%",

                                            bottom:
                                                "16px",

                                            width:
                                                active
                                                    ? "100%"
                                                    : "0%",

                                            height:
                                                "2px",

                                            transform:
                                                "translateX(-50%)",

                                            background:
                                                "linear-gradient(90deg,#C52CFF,#238DFF)",

                                            boxShadow:
                                                "0 0 8px rgba(157,45,255,0.8)",

                                            transition:
                                                "width 0.3s ease",
                                        },

                                        "&:hover::after": {
                                            width:
                                                "100%",
                                        },
                                    }}
                                >
                                    {item.name}
                                </Box>

                            );

                        })}

                    </Box>


                    {/* =================================================
                            DESKTOP LET'S TALK
                    ================================================= */}

                    <Button
                        component={NavLink}

                        to="/contact"

                        endIcon={
                            <SendIcon />
                        }

                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },

                            height: "48px",

                            px: 2.5,

                            borderRadius: "15px",

                            color: "#fff",

                            textTransform:
                                "none",

                            fontSize: "15px",

                            fontWeight: 500,

                            border:
                                "1px solid transparent",

                            background:
                                "linear-gradient(rgba(3,5,13,0.3),rgba(3,5,13,0.3)) padding-box, linear-gradient(110deg,#C329FF,#237EFF) border-box",

                            transition:
                                "0.3s ease",

                            "&:hover": {

                                transform:
                                    "translateY(-2px)",

                                boxShadow:
                                    "0 0 20px rgba(132,43,255,0.35)",
                            },
                        }}
                    >
                        Let's Talk
                    </Button>


                    {/* =================================================
                            MOBILE MENU BUTTON
                    ================================================= */}

                    <IconButton
                        onClick={handleMenu}

                        sx={{
                            display: {
                                xs: "flex",
                                md: "none",
                            },

                            width: 44,

                            height: 44,

                            color: "#fff",

                            border:
                                "1px solid rgba(155,53,255,0.5)",

                            borderRadius: "12px",

                            background:
                                "rgba(80,30,150,0.18)",

                            "&:hover": {
                                background:
                                    "rgba(155,53,255,0.25)",
                            },
                        }}
                    >

                        {mobileOpen ? (
                            <CloseIcon />
                        ) : (
                            <MenuIcon />
                        )}

                    </IconButton>

                </Toolbar>

            </AppBar>


            {/* =====================================================
                    MOBILE BACKDROP
            ===================================================== */}

            {mobileOpen && (

                <Box
                    onClick={closeMenu}

                    sx={{
                        display: {
                            xs: "block",
                            md: "none",
                        },

                        position: "fixed",

                        inset: 0,

                        width: "100vw",

                        height: "100vh",

                        background:
                            "rgba(0,0,0,0.72)",

                        backdropFilter:
                            "blur(5px)",

                        WebkitBackdropFilter:
                            "blur(5px)",

                        zIndex: 1290,
                    }}
                />

            )}


            {/* =====================================================
                    MOBILE DRAWER
            ===================================================== */}

            <Box
                sx={{
                    display: {
                        xs: "flex",
                        md: "none",
                    },

                    position: "fixed",

                    top: 0,

                    right: 0,

                    width: {
                        xs: "82%",
                        sm: "390px",
                    },

                    maxWidth: "390px",

                    height: "100vh",

                    zIndex: 1300,

                    flexDirection:
                        "column",

                    backgroundColor:
                        "#060817",

                    backgroundImage: `
                        radial-gradient(
                            circle at 100% 0%,
                            rgba(155,53,255,0.28),
                            transparent 32%
                        ),

                        radial-gradient(
                            circle at 0% 100%,
                            rgba(35,126,255,0.18),
                            transparent 30%
                        ),

                        linear-gradient(
                            180deg,
                            #0B0820 0%,
                            #060817 50%,
                            #030510 100%
                        )
                    `,

                    borderLeft:
                        "1px solid rgba(155,53,255,0.45)",

                    boxShadow:
                        "-15px 0 50px rgba(0,0,0,0.65)",

                    transform:
                        mobileOpen
                            ? "translateX(0)"
                            : "translateX(100%)",

                    opacity:
                        mobileOpen
                            ? 1
                            : 0,

                    visibility:
                        mobileOpen
                            ? "visible"
                            : "hidden",

                    transition:
                        "transform 0.35s ease, opacity 0.25s ease",

                    overflowY: "auto",

                    overflowX: "hidden",
                }}
            >

                {/* =================================================
                        MOBILE HEADER
                ================================================= */}

                <Box
                    sx={{
                        minHeight: "72px",

                        px: 2.5,

                        display: "flex",

                        alignItems: "center",

                        justifyContent:
                            "space-between",

                        borderBottom:
                            "1px solid rgba(255,255,255,0.08)",

                        flexShrink: 0,
                    }}
                >

                    <Typography
                        sx={{
                            fontSize:
                                "24px",

                            fontWeight: 800,

                            background:
                                "linear-gradient(135deg,#C329FF,#237EFF)",

                            WebkitBackgroundClip:
                                "text",

                            WebkitTextFillColor:
                                "transparent",
                        }}
                    >
                        MR.DEV
                    </Typography>


                    <IconButton
                        onClick={closeMenu}

                        sx={{
                            width: 42,

                            height: 42,

                            color: "#fff",

                            border:
                                "1px solid rgba(255,255,255,0.15)",

                            background:
                                "rgba(255,255,255,0.05)",

                            borderRadius: "50%",

                            "&:hover": {
                                color:
                                    "#C05CFF",

                                background:
                                    "rgba(155,53,255,0.15)",

                                transform:
                                    "rotate(90deg)",
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                </Box>


                {/* =================================================
                        MENU CONTENT
                ================================================= */}

                <Box
                    sx={{
                        px: {
                            xs: 2.5,
                            sm: 3.5,
                        },

                        pt: 4,

                        flex: 1,
                    }}
                >

                    <Typography
                        sx={{
                            color:
                                "#A84DFF",

                            fontSize:
                                "11px",

                            fontWeight: 700,

                            letterSpacing:
                                "3px",

                            mb: 3,
                        }}
                    >
                        MENU
                    </Typography>


                    {/* =================================================
                            MOBILE NAV ITEMS
                    ================================================= */}

                    {navItems.map(
                        (item, index) => {

                            const active =
                                isActive(
                                    item.path
                                );

                            return (

                                <Box
                                    key={
                                        item.name
                                    }

                                    component={
                                        NavLink
                                    }

                                    to={
                                        item.path
                                    }

                                    onClick={
                                        closeMenu
                                    }

                                    sx={{
                                        display:
                                            "flex",

                                        alignItems:
                                            "center",

                                        textDecoration:
                                            "none",

                                        color:
                                            active
                                                ? "#fff"
                                                : "#AEB4C7",

                                        py: 1.7,

                                        px: 1.5,

                                        mb: 0.7,

                                        borderRadius:
                                            "10px",

                                        transition:
                                            "0.25s ease",

                                        background:
                                            active
                                                ? "linear-gradient(90deg,rgba(155,53,255,0.18),rgba(35,126,255,0.08))"
                                                : "transparent",

                                        border:
                                            active
                                                ? "1px solid rgba(155,53,255,0.18)"
                                                : "1px solid transparent",

                                        "&:hover": {
                                            color:
                                                "#fff",

                                            background:
                                                "rgba(155,53,255,0.10)",

                                            transform:
                                                "translateX(5px)",
                                        },
                                    }}
                                >

                                    {/* NUMBER */}

                                    <Typography
                                        sx={{
                                            width:
                                                "32px",

                                            color:
                                                active
                                                    ? "#B24DFF"
                                                    : "#5C6377",

                                            fontSize:
                                                "11px",

                                            fontWeight:
                                                700,

                                            fontFamily:
                                                "monospace",
                                        }}
                                    >
                                        {String(
                                            index + 1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </Typography>


                                    {/* NAME */}

                                    <Typography
                                        sx={{
                                            fontSize:
                                                "18px",

                                            fontWeight:
                                                500,

                                            flex: 1,
                                        }}
                                    >
                                        {
                                            item.name
                                        }
                                    </Typography>


                                    {/* ARROW */}

                                    <Typography
                                        sx={{
                                            color:
                                                active
                                                    ? "#A43DFF"
                                                    : "#666D80",

                                            fontSize:
                                                "18px",
                                        }}
                                    >
                                        →
                                    </Typography>

                                </Box>

                            );
                        }
                    )}


                    {/* =================================================
                            MOBILE LET'S TALK
                    ================================================= */}

                    <Button
                        fullWidth

                        component={
                            NavLink
                        }

                        to="/contact"

                        onClick={
                            closeMenu
                        }

                        endIcon={
                            <SendIcon />
                        }

                        sx={{
                            mt: 3,

                            height: "50px",

                            borderRadius:
                                "12px",

                            color: "#fff",

                            textTransform:
                                "none",

                            fontSize:
                                "14px",

                            fontWeight: 600,

                            border:
                                "1px solid transparent",

                            background:
                                "linear-gradient(#0B0A1B,#0B0A1B) padding-box, linear-gradient(110deg,#C329FF,#237EFF) border-box",

                            boxShadow:
                                "0 0 20px rgba(130,45,255,0.18)",

                            "&:hover": {
                                transform:
                                    "translateY(-2px)",

                                boxShadow:
                                    "0 0 28px rgba(130,45,255,0.35)",
                            },

                            transition:
                                "0.3s ease",
                        }}
                    >
                        Let's Talk
                    </Button>

                </Box>


                {/* =================================================
                        SOCIAL LINKS
                ================================================= */}

                <Box
                    sx={{
                        px: 3,

                        py: 2.5,

                        borderTop:
                            "1px solid rgba(255,255,255,0.08)",

                        flexShrink: 0,
                    }}
                >

                    <Typography
                        sx={{
                            color:
                                "#777D91",

                            fontSize:
                                "10px",

                            letterSpacing:
                                "1.5px",

                            mb: 1.5,
                        }}
                    >
                        CONNECT WITH ME
                    </Typography>


                    <Box
                        sx={{
                            display: "flex",

                            gap: 1,
                        }}
                    >

                        {/* GITHUB */}

                        <IconButton
                            component="a"

                            href="https://github.com/"

                            target="_blank"

                            rel="noopener noreferrer"

                            sx={{
                                color: "#fff",

                                width: 38,

                                height: 38,

                                border:
                                    "1px solid rgba(255,255,255,0.12)",

                                background:
                                    "rgba(255,255,255,0.04)",

                                "&:hover": {
                                    color:
                                        "#C329FF",

                                    borderColor:
                                        "#C329FF",
                                },
                            }}
                        >
                            <GitHubIcon
                                sx={{
                                    fontSize: 20,
                                }}
                            />
                        </IconButton>


                        {/* LINKEDIN */}

                        <IconButton
                            component="a"

                            href="https://www.linkedin.com/"

                            target="_blank"

                            rel="noopener noreferrer"

                            sx={{
                                color: "#fff",

                                width: 38,

                                height: 38,

                                border:
                                    "1px solid rgba(255,255,255,0.12)",

                                background:
                                    "rgba(255,255,255,0.04)",

                                "&:hover": {
                                    color:
                                        "#238DFF",

                                    borderColor:
                                        "#238DFF",
                                },
                            }}
                        >
                            <LinkedInIcon
                                sx={{
                                    fontSize: 20,
                                }}
                            />
                        </IconButton>


                        {/* INSTAGRAM */}

                        <IconButton
                            component="a"

                            href="https://www.instagram.com/"

                            target="_blank"

                            rel="noopener noreferrer"

                            sx={{
                                color: "#fff",

                                width: 38,

                                height: 38,

                                border:
                                    "1px solid rgba(255,255,255,0.12)",

                                background:
                                    "rgba(255,255,255,0.04)",

                                "&:hover": {
                                    color:
                                        "#E040FB",

                                    borderColor:
                                        "#E040FB",
                                },
                            }}
                        >
                            <InstagramIcon
                                sx={{
                                    fontSize: 20,
                                }}
                            />
                        </IconButton>

                    </Box>


                    {/* FOOTER */}

                    <Box
                        sx={{
                            mt: 2,

                            display: "flex",

                            justifyContent:
                                "space-between",
                        }}
                    >

                        <Typography
                            sx={{
                                color:
                                    "#555B6D",

                                fontSize:
                                    "10px",
                            }}
                        >
                            © 2026 MR.DEV
                        </Typography>


                        <Typography
                            sx={{
                                color:
                                    "#555B6D",

                                fontSize:
                                    "10px",
                            }}
                        >
                            Frontend Developer
                        </Typography>

                    </Box>

                </Box>

            </Box>

        </>
    );
}

export default Nav;