import React, { useEffect, useState } from "react";

import {
    Box,
    Typography,
    Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import TechStack from "./TechStack";
import HeroVisual from "./HeroVisual";

import ArrowForwardIcon
    from "@mui/icons-material/ArrowForward";

import DownloadIcon
    from "@mui/icons-material/Download";

import GitHubIcon
    from "@mui/icons-material/GitHub";

import LinkedInIcon
    from "@mui/icons-material/LinkedIn";

import InstagramIcon
    from "@mui/icons-material/Instagram";


// =====================================================
//              LEFT → RIGHT ANIMATION
// =====================================================

const leftToRight = {
    hidden: {
        opacity: 0,
        x: -60,
    },

    visible: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};


// =====================================================
//              CONTENT STAGGER
// =====================================================

const contentContainer = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};


function Home() {

    const navigate = useNavigate();


    // =====================================================
    //              CHANGING ROLES
    // =====================================================

    const roles = [
        "FRONTEND DEVELOPER",
        "UI DESIGNER",
        "WEB DEVELOPER",
        "FREELANCER",
    ];


    const [currentRole, setCurrentRole] =
        useState(0);


    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentRole(
                (prev) =>
                    (prev + 1) % roles.length
            );

        }, 2500);


        return () => {
            clearInterval(interval);
        };

    }, []);


    // =====================================================
    //              PROJECT PAGE
    // =====================================================

    const handleProjects = () => {

        navigate("/projects");

    };


    // =====================================================
    //              DOWNLOAD RESUME
    // =====================================================

    const downloadResume = () => {

        const link =
            document.createElement("a");

        link.href = "/Md_Raashith_Resume_Updated.pdf";

        link.download =
            "MdRaashith-Resume.pdf";

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

                    backgroundPosition:
                        "center",

                    backgroundRepeat:
                        "no-repeat",

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

                <motion.div

                    variants={contentContainer}

                    initial="hidden"

                    animate="visible"

                    style={{
                        width: "100%",
                    }}
                >

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

                        <motion.div

                            animate={{
                                y: [0, -7, 0, 7, 0],
                            }}

                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}

                            style={{
                                display:
                                    "inline-block",
                            }}
                        >

                            <Box
                                sx={{
                                    display:
                                        "inline-flex",

                                    alignItems:
                                        "center",

                                    gap: 1,

                                    px: {
                                        xs: 1.2,
                                        sm: 1.5,
                                    },

                                    py: 0.8,

                                    border:
                                        "1px solid rgba(255,255,255,0.25)",

                                    borderRadius:
                                        "30px",

                                    background:
                                        "rgba(5,8,20,0.45)",

                                    backdropFilter:
                                        "blur(10px)",

                                    mb: {
                                        xs: 2,
                                        sm: 3,
                                    },
                                }}
                            >

                                {/* GREEN LIGHT */}

                                <Box
                                    sx={{
                                        width: 9,

                                        height: 9,

                                        borderRadius:
                                            "50%",

                                        background:
                                            "#48E87A",

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

                                        whiteSpace:
                                            "nowrap",
                                    }}
                                >
                                    AVAILABLE FOR WORK
                                </Typography>

                            </Box>

                        </motion.div>


                        {/* =================================================
                                    HI, I'M
                        ================================================= */}

                        <motion.div
                            variants={leftToRight}
                        >

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

                        </motion.div>


                        {/* =================================================
                                    MOHAMED
                        ================================================= */}

                        <motion.div
                            variants={leftToRight}
                        >

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

                                    wordBreak:
                                        "break-word",
                                }}
                            >
                                MOHAMED
                            </Typography>

                        </motion.div>


                        {/* =================================================
                                    RAASHITH
                        ================================================= */}

                        <motion.div
                            variants={leftToRight}
                        >

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

                                    wordBreak:
                                        "break-word",

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

                        </motion.div>


                        {/* =================================================
                                    CHANGING ROLE
                        ================================================= */}

                        <motion.div
                            variants={leftToRight}
                        >

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

                                    fontWeight: 600,

                                    color: "#fff",

                                    minHeight: {
                                        xs: "30px",
                                        sm: "35px",
                                        md: "42px",
                                    },

                                    display: "flex",

                                    alignItems:
                                        "center",

                                    flexWrap:
                                        "wrap",

                                    overflow: "hidden",
                                }}
                            >

                                <AnimatePresence
                                    mode="wait"
                                >

                                    <motion.span

                                        key={
                                            roles[
                                                currentRole
                                            ]
                                        }

                                        initial={{
                                            opacity: 0,
                                            y: 25,
                                        }}

                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}

                                        exit={{
                                            opacity: 0,
                                            y: -25,
                                        }}

                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                        }}

                                        style={{
                                            color:
                                                "#A83DFF",

                                            display:
                                                "inline-block",

                                            whiteSpace:
                                                "normal",
                                        }}
                                    >
                                        {
                                            roles[
                                                currentRole
                                            ]
                                        }

                                    </motion.span>

                                </AnimatePresence>

                            </Typography>

                        </motion.div>


                        {/* =================================================
                                    DESCRIPTION
                        ================================================= */}

                        <motion.div
                            variants={leftToRight}
                        >

                            <Box
                                sx={{
                                    mt: 2,

                                    pl: 2,

                                    borderLeft:
                                        "2px solid #A83DFF",

                                    maxWidth: 450,

                                    width: "100%",

                                    boxSizing:
                                        "border-box",
                                }}
                            >

                                <Typography
                                    sx={{
                                        color:
                                            "#BDBDBD",

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
                                    I build responsive,
                                    interactive and
                                    user-friendly websites
                                    with modern technologies
                                    and clean code.
                                </Typography>

                            </Box>

                        </motion.div>


                        {/* =====================================================
                                    BUTTONS
                        ===================================================== */}

                        <motion.div
                            variants={leftToRight}
                        >

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

                                {/* ================= PROJECT ================= */}

                                <Button
                                    onClick={
                                        handleProjects
                                    }

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

                                        borderRadius:
                                            "13px",

                                        color: "#fff",

                                        fontSize: {
                                            xs: 18,
                                            sm: 17,
                                            md: 17,
                                            lg: 16,
                                        },

                                        fontWeight: 600,

                                        textTransform:
                                            "none",

                                        background:
                                            "linear-gradient(100deg, #A62CFF, #237EFF)",

                                        boxShadow:
                                            "0 8px 30px rgba(111,45,255,0.25)",

                                        transition:
                                            "0.3s",

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


                                {/* ================= RESUME ================= */}

                                <Button
                                    onClick={
                                        downloadResume
                                    }

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

                                        borderRadius:
                                            "13px",

                                        color: "#fff",

                                        fontSize: {
                                            xs: 17,
                                            sm: 17,
                                            md: 17,
                                            lg: 16,
                                        },

                                        fontWeight: 500,

                                        textTransform:
                                            "none",

                                        border:
                                            "1px solid rgba(255,255,255,0.3)",

                                        background:
                                            "rgba(5,8,20,0.4)",

                                        backdropFilter:
                                            "blur(10px)",

                                        transition:
                                            "0.3s",

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

                        </motion.div>


                        {/* =====================================================
                                    SOCIAL ICONS
                        ===================================================== */}

                        <motion.div
                            variants={leftToRight}
                        >

                            <Box
                                sx={{
                                    display: "flex",

                                    alignItems:
                                        "center",

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
                                        color:
                                            "#BDBDBD",

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


                                {/* ================= GITHUB ================= */}

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

                                        alignItems:
                                            "center",

                                        justifyContent:
                                            "center",

                                        borderRadius:
                                            "50%",

                                        border:
                                            "1px solid rgba(255,255,255,0.3)",

                                        color: "#fff",

                                        transition:
                                            "0.3s",

                                        flexShrink: 0,

                                        textDecoration:
                                            "none",

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
                                            fontSize:
                                                "1.5rem",
                                        }}
                                    />

                                </Box>


                                {/* ================= LINKEDIN ================= */}

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

                                        alignItems:
                                            "center",

                                        justifyContent:
                                            "center",

                                        borderRadius:
                                            "50%",

                                        border:
                                            "1px solid rgba(255,255,255,0.3)",

                                        color: "#fff",

                                        transition:
                                            "0.3s",

                                        flexShrink: 0,

                                        textDecoration:
                                            "none",

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
                                            fontSize:
                                                "1.5rem",
                                        }}
                                    />

                                </Box>


                                {/* ================= INSTAGRAM ================= */}

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

                                        alignItems:
                                            "center",

                                        justifyContent:
                                            "center",

                                        borderRadius:
                                            "50%",

                                        border:
                                            "1px solid rgba(255,255,255,0.3)",

                                        color: "#fff",

                                        transition:
                                            "0.3s",

                                        flexShrink: 0,

                                        textDecoration:
                                            "none",

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
                                            fontSize:
                                                "1.5rem",
                                        }}
                                    />

                                </Box>

                            </Box>

                        </motion.div>

                    </Box>

                </motion.div>


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