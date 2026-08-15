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
                maxWidth: "1200px",
                mx: "auto",

                mt: {
                    xs: 3,
                    sm: 4,
                    md: 5,
                },

                p: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                },

                borderRadius: {
                    xs: "18px",
                    md: "24px",
                },

                border:
                    "1px solid rgba(105,79,200,0.35)",

                background:
                    "rgba(5,8,30,0.55)",
            }}
        >
            {/* ================= TITLE ================= */}

            <Typography
                sx={{
                    color: "#fff",

                    fontSize: {
                        xs: 25,
                        sm: 23,
                        md: 26,
                    },

                    fontWeight: 700,

                    mb: 1,

                    position: "relative",

                    width: "fit-content",

                    "&::after": {
                        content: '""',

                        display: "block",

                        width: {
                            xs: "42px",
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

            {/* ================= SKILLS ================= */}

            <Box
                sx={{
                    display: "grid",

                    gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(4, 1fr)",
                        lg: "repeat(7, 1fr)",
                    },

                    gap: {
                        xs: 1.5,
                        sm: 2,
                        md: 2.5,
                    },

                    mt: {
                        xs: 3,
                        md: 4,
                    },
                }}
            >
                {skills.map((skill) => (
                    <Box
                        key={skill.name}
                        sx={{
                            minHeight: {
                                xs: 130,
                                sm: 140,
                                md: 150,
                            },

                            borderRadius: {
                                xs: "14px",
                                md: "18px",
                            },

                            border:
                                "1px solid rgba(125,135,180,0.18)",

                            background:
                                "rgba(15,20,42,0.65)",

                            display: "flex",

                            flexDirection: "column",

                            alignItems: "center",

                            justifyContent: "center",

                            gap: {
                                xs: 1,
                                md: 1.5,
                            },

                            transition:
                                "0.3s ease",

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
                        <Box
                            component="img"
                            src={skill.image}
                            alt={skill.name}
                            sx={{
                                width: {
                                    xs: 50,
                                    sm: 55,
                                    md: 68,
                                },

                                height: {
                                    xs: 50,
                                    sm: 55,
                                    md: 68,
                                },

                                objectFit: "contain",
                            }}
                        />

                        <Typography
                            sx={{
                                color: "#fff",

                                fontSize: {
                                    xs: 18,
                                    sm: 13,
                                    md: 15,
                                },

                                fontWeight: 500,

                                textAlign: "center",
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