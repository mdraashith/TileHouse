import React from "react";

import {
    Box,
    Typography,
    LinearProgress,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";

import Tools from "./Tools";
import Professional from "./Professional";


function Skill() {

    const technicalSkills = [
        {
            name: "React.js",
            value: 90,
            image: "/img/react.png",
        },

        {
            name: "JavaScript",
            value: 85,
            image: "/img/javascript.png",
        },

        {
            name: "HTML & CSS",
            value: 95,
            image: "/img/html.png",
            secondImage: "/img/css.png",
        },

        {
            name: "Material UI",
            value: 80,
            image: "/img/mui.png",
        },

        {
            name: "Git & GitHub",
            value: 85,
            image: "/img/git.png",
            secondImage: "/img/github.png",
        },
    ];


    return (

        <Box
            id="skills"
            sx={{
                width: "100%",
                minHeight: "100vh",

                color: "#fff",

                backgroundImage:
                    "url('/img/aboutbg.png')",

                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                px: {
                    xs: 2,
                    sm: 3,
                    md: 5,
                    lg: 6,
                },

                py: {
                    xs: 7,
                    sm: 8,
                    md: 10,
                },

                overflow: "hidden",
            }}
        >

            {/* =====================================================
                    HEADER
            ===================================================== */}

            <Box
                sx={{
                    textAlign: "center",

                    maxWidth: "850px",

                    mx: "auto",

                    mb: {
                        xs: 5,
                        md: 6,
                    },
                }}
            >

                {/* MY SKILLS */}

                <Box
                    sx={{
                        display: "flex",

                        justifyContent: "center",

                        alignItems: "center",

                        gap: 1.5,
                        mt:2,
                        mb: 1.5,
                    }}
                >

                    <Box
                        sx={{
                            width: 8,
                            height: 8,

                            borderRadius: "50%",

                            background: "#A93DFF",

                            boxShadow:
                                "0 0 12px #A93DFF",
                        }}
                    />

                    <Typography
                        sx={{
                            color: "#E2D4FF",

                            fontSize: {
                                xs: 13,
                                sm: 25,
                            },

                            letterSpacing: "4px",

                            fontWeight: 600,
                        }}
                    >
                        MY SKILLS
                    </Typography>

                    <Box
                        sx={{
                            width: 8,
                            height: 8,

                            borderRadius: "50%",

                            background: "#A93DFF",

                            boxShadow:
                                "0 0 12px #A93DFF",
                        }}
                    />

                </Box>


                {/* MAIN TITLE */}

                <Typography
                    component="h1"
                    sx={{
                        fontSize: {
                            xs: "40px",
                            sm: "50px",
                            md: "64px",
                            lg: "72px",
                        },

                        lineHeight: 1.05,

                        fontWeight: 800,

                        letterSpacing: "-2px",

                        mb: 2,
                    }}
                >
                    Skills &{" "}

                    <Box
                        component="span"
                        sx={{
                            background:
                                "linear-gradient(90deg,#C12CFF,#287FFF)",

                            WebkitBackgroundClip:
                                "text",

                            WebkitTextFillColor:
                                "transparent",
                        }}
                    >
                        Expertise
                    </Box>

                </Typography>


                {/* DESCRIPTION */}

                <Typography
                    sx={{
                        color: "#C2C5D5",

                        fontSize: {
                            xs: 16,
                            sm: 15,
                            md: 17,
                        },

                        lineHeight: 1.6,

                        maxWidth: "700px",

                        mx: "auto",
                    }}
                >
                    A passionate Frontend Developer with
                    knowledge in modern web technologies
                    and tools.
                </Typography>


                {/* LINE */}

                <Box
                    sx={{
                        width: 130,

                        height: 3,

                        mx: "auto",

                        mt: 3,

                        borderRadius: 5,

                        background:
                            "linear-gradient(90deg,#C12CFF,#287FFF)",
                    }}
                />

            </Box>


            {/* =====================================================
                    TECHNICAL + TOOLS
            ===================================================== */}

            <Box
                sx={{
                    maxWidth: "1300px",

                    mx: "auto",

                    display: "grid",

                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "1fr 1fr",
                    },

                    gap: 3,

                    alignItems: "stretch",
                }}
            >


                {/* =================================================
                        TECHNICAL SKILLS
                ================================================= */}

                <Box
                    sx={{
                        width: "100%",

                        p: {
                            xs: 2,
                            sm: 3,
                            md: 4,
                        },

                        borderRadius: "18px",

                        border:
                            "1px solid rgba(114,71,255,0.35)",

                        background:
                            "rgba(4,8,30,0.65)",

                        backdropFilter:
                            "blur(10px)",
                    }}
                >

                    {/* TITLE */}

                    <Box
                        sx={{
                            display: "flex",

                            alignItems: "center",

                            gap: 1.5,

                            mb: 4,
                        }}
                    >

                        <Box
                            sx={{
                                width: 50,
                                height: 50,

                                borderRadius: "10px",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                color: "#A43DFF",

                                background:
                                    "rgba(113,48,255,0.18)",

                                border:
                                    "1px solid rgba(130,65,255,0.35)",
                            }}
                        >
                            <CodeIcon />
                        </Box>


                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 22,
                                    sm: 24,
                                    md: 27,
                                },

                                fontWeight: 700,
                            }}
                        >
                            Technical Skills
                        </Typography>

                    </Box>


                    {/* SKILLS */}

                    {technicalSkills.map((skill) => (

                        <Box
                            key={skill.name}
                            sx={{
                                display: "grid",

                                gridTemplateColumns: {
                                    xs: "105px 1fr 40px",
                                    sm: "145px 1fr 45px",
                                    md: "145px 1fr 45px",
                                },

                                alignItems: "center",

                                gap: {
                                    xs: 1,
                                    sm: 2,
                                },

                                mb: 2.8,
                            }}
                        >

                            {/* IMAGE + NAME */}

                            <Box
                                sx={{
                                    display: "flex",

                                    alignItems: "center",

                                    gap: 1,

                                    minWidth: 0,
                                }}
                            >

                                <Box
                                    sx={{
                                        display: "flex",

                                        alignItems: "center",

                                        gap: 0.5,

                                        flexShrink: 0,
                                    }}
                                >

                                    <Box
                                        component="img"
                                        src={skill.image}
                                        alt={skill.name}
                                        sx={{
                                            width: {
                                                xs: 30,
                                                sm: 38,
                                            },

                                            height: {
                                                xs: 30,
                                                sm: 38,
                                            },

                                            objectFit: "contain",
                                        }}
                                    />


                                    {skill.secondImage && (

                                        <Box
                                            component="img"
                                            src={
                                                skill.secondImage
                                            }
                                            alt=""
                                            sx={{
                                                width: {
                                                    xs: 34,
                                                    sm: 45,
                                                },

                                                height: {
                                                    xs: 34,
                                                    sm: 38,
                                                },

                                                objectFit:
                                                    "contain",
                                            }}
                                        />

                                    )}

                                </Box>


                                <Typography
                                    sx={{
                                        color: "#E2E3EA",

                                        fontSize: {
                                            xs: 16,
                                            sm: 14,
                                            md: 16,
                                        },

                                        whiteSpace:
                                            "nowrap",
                                       
                                    }}
                                >
                                    {skill.name}
                                </Typography>

                            </Box>


                            {/* PROGRESS BAR */}

                            <LinearProgress
                                variant="determinate"
                                value={skill.value}
                                sx={{
                                    height: 9,

                                    borderRadius: 10,
                                    ml:8,
                                    backgroundColor:
                                        "rgba(80,85,145,0.25)",

                                    "& .MuiLinearProgress-bar":
                                        {
                                            borderRadius: 10,

                                            background:
                                                "linear-gradient(90deg,#B62CFF,#087EFF)",
                                        },
                                }}
                            />


                            {/* PERCENTAGE */}

                            <Typography
                                sx={{
                                    color: "#fff",

                                    fontSize: {
                                        xs: 16,
                                        sm: 14,
                                    },

                                    fontWeight: 600,

                                    textAlign: "right",
                                }}
                            >
                                {skill.value}%
                            </Typography>

                        </Box>

                    ))}

                </Box>


                {/* =================================================
                        TOOLS & TECHNOLOGIES
                ================================================= */}

                <Tools />

            </Box>


            {/* =====================================================
                    PROFESSIONAL SKILLS
            ===================================================== */}

            <Professional />

        </Box>
    );
}

export default Skill;