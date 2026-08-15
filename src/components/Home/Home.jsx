import React from "react";

import {
    Box,
    Typography,
    Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import TechStack from "./TechStack";
import HeroVisual from "./HeroVisual";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";


function Home() {

    const navigate = useNavigate();


    /* =====================================================
                    PROJECT PAGE
    ===================================================== */

    const handleProjects = () => {
        navigate("/projects");
    };


    /* =====================================================
                    DOWNLOAD RESUME
    ===================================================== */

    const downloadResume = () => {

        const link = document.createElement("a");

        link.href = "/resume.pdf";

        link.download =
            "Mohamed-Raashith-Resume.pdf";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };


    return (
        <>

            {/* =====================================================
                            HOME
            ===================================================== */}

            <Box
                id="home"

                sx={{
                    minHeight: {
                        xs: "auto",
                        md: "100vh",
                    },

                    width: "100%",

                    maxWidth: "100vw",

                    backgroundImage:
                        "url('/img/homebg.png')",

                    backgroundSize: "cover",

                    backgroundPosition: "center",

                    backgroundRepeat: "no-repeat",

                    display: "flex",

                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },

                    alignItems: {
                        xs: "stretch",
                        md: "center",
                    },

                    position: "relative",

                    overflowX: "hidden",

                    pt: {
                        xs: "90px",
                        sm: "100px",
                        md: "88px",
                    },

                    pb: {
                        xs: 5,
                        sm: 6,
                        md: 0,
                    },

                    px: {
                        xs: 2,
                        sm: 3,
                        md: 5,
                        lg: 8,
                        xl: 10,
                    },

                    boxSizing: "border-box",
                }}
            >

                {/* =====================================================
                            LEFT CONTENT
                ===================================================== */}

                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "100%",
                            md: "52%",
                            lg: "50%",
                        },

                        position: "relative",

                        zIndex: 10,

                        mt: {
                            xs: 3,
                            sm: 5,
                            md: 5,
                        },

                        maxWidth: "100%",

                        boxSizing: "border-box",
                    }}
                >

                    {/* =================================================
                                AVAILABLE FOR WORK
                    ================================================= */}

                    <Box
                        sx={{
                            display: "inline-flex",

                            alignItems: "center",

                            gap: 1,

                            px: {
                                xs: 1.2,
                                sm: 1.5,
                            },

                            py: 0.8,

                            border:
                                "1px solid rgba(255,255,255,0.25)",

                            borderRadius: "30px",

                            background:
                                "rgba(5,8,20,0.45)",

                            backdropFilter: "blur(10px)",

                            mb: {
                                xs: 2,
                                sm: 3,
                            },
                        }}
                    >

                        <Box
                            sx={{
                                width: 9,

                                height: 9,

                                borderRadius: "50%",

                                background: "#48E87A",

                                boxShadow:
                                    "0 0 10px rgba(72,232,122,0.8)",

                                flexShrink: 0,
                            }}
                        />

                        <Typography
                            sx={{
                                color: "#fff",

                                fontSize: {
                                    xs: 13,
                                    sm: 13,
                                    md: 13,
                                    lg: 15,
                                },

                                fontWeight: 600,

                                whiteSpace: "nowrap",
                            }}
                        >
                            AVAILABLE FOR WORK
                        </Typography>

                    </Box>


                    {/* =================================================
                                HI
                    ================================================= */}

                    <Typography
                        sx={{
                            color: "#fff",

                            fontSize: {
                                xs: 23,
                                sm: 25,
                                md: 28,
                                lg: 32,
                            },

                            fontWeight: 400,

                            mb: 1,
                        }}
                    >
                        Hi, I'm
                    </Typography>


                    {/* =================================================
                                MOHAMED
                    ================================================= */}

                    <Typography
                        sx={{
                            color: "#fff",

                            fontSize: {
                                xs: "3rem",
                                sm: "3.3rem",
                                md: "4.8rem",
                                lg: "5.3rem",
                            },

                            fontWeight: 800,

                            lineHeight: 0.95,

                            letterSpacing: {
                                xs: "-1px",
                                sm: "-1.5px",
                                md: "-2px",
                                lg: "-3px",
                            },

                            wordBreak: "break-word",
                        }}
                    >
                        MOHAMED
                    </Typography>


                    {/* =================================================
                                RAASHITH
                    ================================================= */}

                    <Typography
                        sx={{
                            fontSize: {
                                xs: "3rem",
                                sm: "3.3rem",
                                md: "4.8rem",
                                lg: "5.3rem",
                            },

                            fontWeight: 800,

                            lineHeight: 1,

                            letterSpacing: {
                                xs: "-1px",
                                sm: "-1.5px",
                                md: "-2px",
                                lg: "-3px",
                            },

                            wordBreak: "break-word",

                            background:
                                "linear-gradient(90deg, #C329FF, #237EFF)",

                            WebkitBackgroundClip:
                                "text",

                            WebkitTextFillColor:
                                "transparent",
                        }}
                    >
                        RAASHITH
                    </Typography>


                    {/* =================================================
                                FRONTEND DEVELOPER
                    ================================================= */}

                    <Typography
                        sx={{
                            mt: {
                                xs: 1.2,
                                sm: 2,
                            },

                            fontSize: {
                                xs: 20,
                                sm: 23,
                                md: 28,
                                lg: 33,
                            },

                            wordBreak: "break-word",

                            fontWeight: 600,

                            color: "#fff",
                        }}
                    >

                        <Box
                            component="span"
                            sx={{
                                color: "#A83DFF",
                            }}
                        >
                            FRONTEND
                        </Box>{" "}
                        DEVELOPER

                    </Typography>


                    {/* =================================================
                                DESCRIPTION
                    ================================================= */}

                    <Box
                        sx={{
                            mt: 2,

                            pl: 2,

                            borderLeft:
                                "2px solid #A83DFF",

                            maxWidth: 450,

                            width: "100%",

                            boxSizing: "border-box",
                        }}
                    >

                        <Typography
                            sx={{
                                color: "#BDBDBD",

                                fontSize: {
                                    xs: 16,
                                    sm: 17,
                                    md: 19,
                                    lg: 19,
                                },

                                fontWeight: 600,

                                lineHeight: 1.5,
                            }}
                        >
                            I build responsive, interactive and
                            user-friendly websites with modern
                            technologies and clean code.
                        </Typography>

                    </Box>


                    {/* =====================================================
                                BUTTONS
                    ===================================================== */}

                    <Box
                        sx={{
                            display: "flex",

                            flexDirection: {
                                xs: "column",
                                sm: "row",
                            },

                            gap: {
                                xs: 1.5,
                                sm: 2,
                            },

                            mt: {
                                xs: 2,
                                sm: 3,
                                md: 2,
                            },

                            width: "100%",

                            flexWrap: "wrap",
                        }}
                    >

                        {/* =================================================
                                    VIEW MY PROJECTS
                        ================================================= */}

                        <Button
                            onClick={handleProjects}

                            endIcon={
                                <ArrowForwardIcon />
                            }

                            sx={{
                                height: {
                                    xs: 50,
                                    sm: 56,
                                    md: 62,
                                },

                                width: {
                                    xs: "65%",
                                    sm: "auto",
                                },

                                px: {
                                    xs: 2.5,
                                    md: 3.5,
                                },

                                borderRadius: "13px",

                                color: "#fff",

                                fontSize: {
                                    xs: 18,
                                    sm: 17,
                                    md: 17,
                                    lg: 16,
                                },

                                fontWeight: 600,

                                textTransform: "none",

                                background:
                                    "linear-gradient(100deg, #A62CFF, #237EFF)",

                                boxShadow:
                                    "0 8px 30px rgba(111,45,255,0.25)",

                                transition: "0.3s",

                                "&:hover": {
                                    background:
                                        "linear-gradient(100deg, #B83CFF, #348AFF)",

                                    transform:
                                        "translateY(-3px)",
                                },
                            }}
                        >
                            View My Projects
                        </Button>


                        {/* =================================================
                                    DOWNLOAD RESUME
                        ================================================= */}

                        <Button
                            onClick={downloadResume}

                            endIcon={
                                <DownloadIcon />
                            }

                            sx={{
                                height: {
                                    xs: 50,
                                    sm: 56,
                                    md: 62,
                                },

                                width: {
                                    xs: "65%",
                                    sm: "auto",
                                },

                                px: {
                                    xs: 2.5,
                                    md: 3.5,
                                },

                                borderRadius: "13px",

                                color: "#fff",

                                fontSize: {
                                    xs: 17,
                                    sm: 17,
                                    md: 17,
                                    lg: 16,
                                },

                                fontWeight: 500,

                                textTransform: "none",

                                border:
                                    "1px solid rgba(255,255,255,0.3)",

                                background:
                                    "rgba(5,8,20,0.4)",

                                backdropFilter:
                                    "blur(10px)",

                                transition: "0.3s",

                                "&:hover": {
                                    borderColor:
                                        "#8B3DFF",

                                    background:
                                        "rgba(100,40,180,0.15)",

                                    transform:
                                        "translateY(-3px)",
                                },
                            }}
                        >
                            Download Resume
                        </Button>

                    </Box>


                    {/* =====================================================
                                SOCIAL ICONS
                    ===================================================== */}

                    <Box
                        sx={{
                            display: "flex",

                            alignItems: "center",

                            gap: {
                                xs: 1,
                                sm: 1.5,
                            },

                            mt: {
                                xs: 3,
                                sm: 3.5,
                            },

                            flexWrap: "wrap",
                        }}
                    >

                        <Typography
                            sx={{
                                color: "#BDBDBD",

                                fontSize: {
                                    xs: 20,
                                    sm: 15,
                                    md: 16,
                                    lg: 20,
                                },

                                fontWeight: 600,

                                mr: 1,
                            }}
                        >
                            Find me on
                        </Typography>


                        {/* =================================================
                                    GITHUB
                        ================================================= */}

                        <Box
                            component="a"

                            href="https://github.com/mdraashith"

                            target="_blank"

                            rel="noopener noreferrer"

                            aria-label="GitHub"

                            sx={{
                                width: {
                                    xs: 35,
                                    sm: 45,
                                },

                                height: {
                                    xs: 35,
                                    sm: 45,
                                },

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                borderRadius: "50%",

                                border:
                                    "1px solid rgba(255,255,255,0.3)",

                                color: "#fff",

                                transition: "0.3s",

                                flexShrink: 0,

                                textDecoration: "none",

                                "&:hover": {
                                    borderColor:
                                        "#238DFF",

                                    boxShadow:
                                        "0 0 15px rgba(35,141,255,0.5)",

                                    transform:
                                        "translateY(-3px)",
                                },
                            }}
                        >
                            <GitHubIcon
                                sx={{
                                    fontSize: "1.5rem",
                                }}
                            />
                        </Box>


                        {/* =================================================
                                    LINKEDIN
                        ================================================= */}

                        <Box
                            component="a"

                            href="https://www.linkedin.com/"

                            target="_blank"

                            rel="noopener noreferrer"

                            aria-label="LinkedIn"

                            sx={{
                                width: {
                                    xs: 35,
                                    sm: 45,
                                },

                                height: {
                                    xs: 35,
                                    sm: 45,
                                },

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                borderRadius: "50%",

                                border:
                                    "1px solid rgba(255,255,255,0.3)",

                                color: "#fff",

                                transition: "0.3s",

                                flexShrink: 0,

                                textDecoration: "none",

                                "&:hover": {
                                    borderColor:
                                        "#238DFF",

                                    boxShadow:
                                        "0 0 15px rgba(35,141,255,0.5)",

                                    transform:
                                        "translateY(-3px)",
                                },
                            }}
                        >
                            <LinkedInIcon
                                sx={{
                                    fontSize: "1.5rem",
                                }}
                            />
                        </Box>


                        {/* =================================================
                                    INSTAGRAM
                        ================================================= */}

                        <Box
                            component="a"

                            href="https://www.instagram.com/"

                            target="_blank"

                            rel="noopener noreferrer"

                            aria-label="Instagram"

                            sx={{
                                width: {
                                    xs: 35,
                                    sm: 45,
                                },

                                height: {
                                    xs: 35,
                                    sm: 45,
                                },

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                borderRadius: "50%",

                                border:
                                    "1px solid rgba(255,255,255,0.3)",

                                color: "#fff",

                                transition: "0.3s",

                                flexShrink: 0,

                                textDecoration: "none",

                                "&:hover": {
                                    borderColor:
                                        "#C329FF",

                                    boxShadow:
                                        "0 0 15px rgba(195,41,255,0.5)",

                                    transform:
                                        "translateY(-3px)",
                                },
                            }}
                        >
                            <InstagramIcon
                                sx={{
                                    fontSize: "1.5rem",
                                }}
                            />
                        </Box>

                    </Box>

                </Box>


                {/* =====================================================
                            HERO VISUAL
                ===================================================== */}

                <HeroVisual />

            </Box>


            {/* =====================================================
                            TECH STACK
            ===================================================== */}

            <TechStack />

        </>
    );
}

export default Home;