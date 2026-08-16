import React from "react";

import {
    Box,
    Typography,
} from "@mui/material";


function SkillsExpertise() {

    const skills = [
        {
            name: "React.js",
            image: "/img/react.png",
        },
        {
            name: "JavaScript",
            image: "/img/javascript.png",
        },
        {
            name: "HTML5",
            image: "/img/html.png",
        },
        {
            name: "CSS3",
            image: "/img/css.png",
        },
        {
            name: "Material UI",
            image: "/img/mui.png",
        },
        {
            name: "Git",
            image: "/img/git.png",
        },
        {
            name: "GitHub",
            image: "/img/github.png",
        },
    ];


    return (
        <Box
            sx={{
                width: "100%",

                maxWidth: "1200px",

                mx: "auto",

                mt: {
                    xs: 3,
                    sm: 4,
                    md: 5,
                },

                p: {
                    xs: 1.5,
                    sm: 2.5,
                    md: 4,
                },

                borderRadius: {
                    xs: "16px",
                    sm: "20px",
                    md: "24px",
                },

                border:
                    "1px solid rgba(105,79,200,0.35)",

                background:
                    "rgba(5,8,30,0.55)",

                boxSizing: "border-box",

                overflow: "hidden",

                minWidth: 0,
            }}
        >

            {/* =====================================================
                            TITLE
            ===================================================== */}

            <Typography
                sx={{
                    color: "#fff",

                    fontSize: {
                        xs: 23,
                        sm: 23,
                        md: 26,
                    },

                    fontWeight: 700,

                    mb: 1,

                    position: "relative",

                    width: "fit-content",

                    maxWidth: "100%",

                    lineHeight: 1.3,

                    "&::after": {
                        content: '""',

                        display: "block",

                        width: {
                            xs: "40px",
                            sm: "44px",
                            md: "48px",
                        },

                        height: "3px",

                        mt: 0.8,

                        borderRadius: "5px",

                        background:
                            "linear-gradient(90deg, #C52CFF, #238DFF)",
                    },
                }}
            >
                Skills & Expertise
            </Typography>


            {/* =====================================================
                            SKILLS GRID
            ===================================================== */}

            <Box
                sx={{
                    width: "100%",

                    display: "grid",

                    /*
                        Mobile      → 2 columns
                        Small tablet → 3 columns
                        Tablet       → 4 columns
                        Desktop      → 7 columns
                    */

                    gridTemplateColumns: {
                        xs: "repeat(2, minmax(0, 1fr))",
                        sm: "repeat(3, minmax(0, 1fr))",
                        md: "repeat(4, minmax(0, 1fr))",
                        lg: "repeat(7, minmax(0, 1fr))",
                    },

                    gap: {
                        xs: 1.2,
                        sm: 1.8,
                        md: 2,
                        lg: 1.5,
                    },

                    mt: {
                        xs: 2.5,
                        sm: 3,
                        md: 3.5,
                    },

                    minWidth: 0,
                }}
            >

                {skills.map((skill) => (

                    <Box
                        key={skill.name}

                        sx={{
                            width: "100%",

                            minWidth: 0,

                            minHeight: {
                                xs: 115,
                                sm: 125,
                                md: 140,
                                lg: 145,
                            },

                            p: {
                                xs: 1,
                                sm: 1.2,
                                md: 1.5,
                            },

                            borderRadius: {
                                xs: "12px",
                                sm: "14px",
                                md: "17px",
                            },

                            border:
                                "1px solid rgba(125,135,180,0.18)",

                            background:
                                "rgba(15,20,42,0.65)",

                            display: "flex",

                            flexDirection:
                                "column",

                            alignItems:
                                "center",

                            justifyContent:
                                "center",

                            gap: {
                                xs: 0.8,
                                sm: 1,
                                md: 1.3,
                            },

                            transition:
                                "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",

                            boxSizing: "border-box",

                            overflow: "hidden",

                            "&:hover": {
                                transform:
                                    "translateY(-5px)",

                                borderColor:
                                    "rgba(130,70,255,0.6)",

                                boxShadow:
                                    "0 0 20px rgba(100,60,255,0.18)",
                            },
                        }}
                    >

                        {/* =================================================
                                    SKILL IMAGE
                        ================================================= */}

                        <Box
                            component="img"

                            src={skill.image}

                            alt={skill.name}

                            sx={{
                                width: {
                                    xs: 50,
                                    sm: 48,
                                    md: 58,
                                    lg: 62,
                                },

                                height: {
                                    xs: 50,
                                    sm: 48,
                                    md: 58,
                                    lg: 62,
                                },

                                maxWidth: "100%",

                                objectFit: "contain",

                                display: "block",

                                flexShrink: 0,
                            }}
                        />


                        {/* =================================================
                                    SKILL NAME
                        ================================================= */}

                        <Typography
                            sx={{
                                color: "#fff",

                                fontSize: {
                                    xs: 16,
                                    sm: 14,
                                    md: 15,
                                    lg: 15,
                                },

                                fontWeight: 700,

                                textAlign: "center",

                                lineHeight: 1.3,

                                width: "100%",

                                maxWidth: "100%",

                                overflow: "hidden",

                                textOverflow:
                                    "ellipsis",

                                whiteSpace:
                                    "nowrap",

                                minWidth: 0,
                            }}
                        >
                            {skill.name}
                        </Typography>

                    </Box>

                ))}

            </Box>

        </Box>
    );
}


export default SkillsExpertise;