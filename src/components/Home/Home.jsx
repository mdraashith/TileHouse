import React from "react";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";

import TechStack from "./TechStack";
import HeroVisual from "./HeroVisual";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";


function Home() {
    return (
        <>
            <Box
                id="home"
                sx={{
                    minHeight: {
                            xs: "auto",
                            md: "100vh",
                        },
                    width: "100%",
                    backgroundImage: "url('/img/homebg.png')",
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
                    overflow: "hidden",

                    pt: {
                        xs: "105px",
                        sm: "110px",
                        md: "88px",
                    },

                    pb: {
                        xs: 5,
                        sm: 6,
                        md: 0,
                    },

                    px: {
                        xs: 2.5,
                        sm: 4,
                        md: 6,
                        lg: 10,
                    },
                }}
            >

                {/* ================= LEFT CONTENT ================= */}

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
                            xs: 5,
                            md: 0,
                        },
                    }}
                >

                    {/* Available */}

                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,

                            px: 1.5,
                            py: 0.8,

                            border:
                                "1px solid rgba(255,255,255,0.25)",

                            borderRadius: "30px",

                            background:
                                "rgba(5,8,20,0.45)",

                            backdropFilter: "blur(10px)",

                            mb: 3,
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
                            }}
                        />

                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: {
                                    xs: 12,
                                    md: 14,
                                },
                                fontWeight: 500,
                            }}
                        >
                            AVAILABLE FOR WORK
                        </Typography>
                    </Box>


                    {/* Hi */}

                    <Typography
                        sx={{
                            color: "#fff",
                            fontSize: {
                                xs: 24,
                                md: 30,
                            },
                            fontWeight: 400,
                            mb: 1,
                        }}
                    >
                        Hi, I'm
                    </Typography>


                    {/* Mohamed */}

                    <Typography
                        sx={{
                            color: "#fff",

                            fontSize: {
                                xs: "42px",
                                sm: "58px",
                                md: "76px",
                                lg: "88px",
                            },

                            fontWeight: 800,
                            lineHeight: 0.95,
                            letterSpacing: {
                                xs: "-2px",
                                sm: "-2.5px",
                                md: "-3px",
                            },
                            whiteSpace: {
                                xs: "normal",
                                sm: "nowrap",
                            },
                        }}
                    >
                        MOHAMED
                    </Typography>


                    {/* Raashith */}

                    <Typography
                        sx={{
                            fontSize: {
                                xs: "42px",
                                sm: "58px",
                                md: "76px",
                                lg: "88px",
                            },

                            fontWeight: 800,
                            lineHeight: 1,
                            letterSpacing: {
                                xs: "-2px",
                                sm: "-2.5px",
                                md: "-3px",
                            },
                            whiteSpace: {
                                xs: "normal",
                                sm: "nowrap",
                            },

                            background:
                                "linear-gradient(90deg, #C329FF, #237EFF)",

                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        RAASHITH
                    </Typography>


                    {/* Frontend */}

                    <Typography
                        sx={{
                            mt: {
                                xs: 1.5,
                                sm: 2,
                            },

                            fontSize: {
                                xs: 20,
                                sm: 25,
                                md: 30,
                                lg: 32,
                            },

                            whiteSpace: {
                                xs: "normal",
                                sm: "nowrap",
                            },

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


                    {/* Description */}

                    <Box
                        sx={{
                            mt: 2,
                            pl: 2,
                            borderLeft: "2px solid #A83DFF",
                            maxWidth: 450,
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#BDBDBD",

                                fontSize: {
                                    xs: 14,
                                    md: 16,
                                },

                                lineHeight: 1.7,
                            }}
                        >
                            I build responsive, interactive and
                            user-friendly websites with modern
                            technologies and clean code.
                        </Typography>
                    </Box>


                    {/* ================= BUTTONS ================= */}

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: {
                                xs: "column",
                                sm: "row",
                            },
                            gap: 2,
                            mt: {
                                xs: 3,
                                sm: 3.5,
                                md: 4,
                            },
                            width: "100%",
                        }}
                    >

                        <Button
                            endIcon={<ArrowForwardIcon />}
                            href="#projects"
                            sx={{
                                height: {
                                    xs: 54,
                                    sm: 58,
                                    md: 62,
                                },
                                width: {
                                    xs: "100%",
                                    sm: "auto",
                                },
                                px: {
                                    xs: 2.5,
                                    md: 3.5,
                                },

                                borderRadius: "13px",

                                color: "#fff",
                                fontSize: 16,
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


                        <Button
                            endIcon={<DownloadIcon />}
                            sx={{
                                height: {
                                    xs: 54,
                                    sm: 58,
                                    md: 62,
                                },
                                width: {
                                    xs: "100%",
                                    sm: "auto",
                                },
                                px: {
                                    xs: 2.5,
                                    md: 3.5,
                                },

                                borderRadius: "13px",

                                color: "#fff",

                                fontSize: 16,
                                fontWeight: 500,

                                textTransform: "none",

                                border:
                                    "1px solid rgba(255,255,255,0.3)",

                                background:
                                    "rgba(5,8,20,0.4)",

                                backdropFilter: "blur(10px)",

                                transition: "0.3s",

                                "&:hover": {
                                    borderColor: "#8B3DFF",

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


                    {/* ================= SOCIAL ================= */}

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
                                fontSize: 16,
                                mr: 1,
                            }}
                        >
                            Find me on
                        </Typography>


                        {/* Github */}

                        <Box
                            component="a"
                            href="#"
                            sx={{
                                width: {
                                    xs: 40,
                                    sm: 45,
                                },
                                height: {
                                    xs: 40,
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

                                "&:hover": {
                                    borderColor: "#238DFF",

                                    boxShadow:
                                        "0 0 15px rgba(35,141,255,0.5)",

                                    transform:
                                        "translateY(-3px)",
                                },
                            }}
                        >
                            <GitHubIcon />
                        </Box>


                        {/* LinkedIn */}

                        <Box
                            component="a"
                            href="#"
                            sx={{
                                width: {
                                    xs: 40,
                                    sm: 45,
                                },
                                height: {
                                    xs: 40,
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

                                "&:hover": {
                                    borderColor: "#238DFF",

                                    boxShadow:
                                        "0 0 15px rgba(35,141,255,0.5)",

                                    transform:
                                        "translateY(-3px)",
                                },
                            }}
                        >
                            <LinkedInIcon />
                        </Box>


                        {/* Instagram */}

                        <Box
                            component="a"
                            href="#"
                            sx={{
                                width: {
                                    xs: 40,
                                    sm: 45,
                                },
                                height: {
                                    xs: 40,
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

                                "&:hover": {
                                    borderColor: "#C329FF",

                                    boxShadow:
                                        "0 0 15px rgba(195,41,255,0.5)",

                                    transform:
                                        "translateY(-3px)",
                                },
                            }}
                        >
                            <InstagramIcon />
                        </Box>

                    </Box>

                </Box>
                   <HeroVisual/>  
                </Box>
            <TechStack/>
        </>
    );
}
export default Home;