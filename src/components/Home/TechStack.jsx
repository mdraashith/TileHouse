import React from "react";
import {
    Box,
    Typography,
} from "@mui/material";

function TechStack() {
    const techStack = [
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
            name: "MUI",
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
                maxWidth: "100vw",

                backgroundImage: "url('/img/homebg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",

                px: {
                    xs: 1.2,
                    sm: 2,
                    md: 4,
                    lg: 5,
                },

                py: {
                    xs: 1.5,
                    sm: 2,
                    md: 2,
                },

                display: "flex",
                justifyContent: "center",

                position: "relative",
                zIndex: 20,

                boxSizing: "border-box",
                overflowX: "hidden",
            }}
        >
            {/* MAIN CONTAINER */}

            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1290px",

                    minHeight: {
                        xs: "auto",
                        md: "82px",
                    },

                    display: {
                        xs: "grid",
                        sm: "grid",
                        md: "flex",
                    },

                    gridTemplateColumns: {
                        xs: "repeat(2, minmax(0, 1fr))",
                        sm: "repeat(4, minmax(0, 1fr))",
                    },

                    alignItems: "center",

                    px: {
                        xs: 1,
                        sm: 1.5,
                        md: 2,
                        lg: 3,
                    },

                    py: {
                        xs: 1.5,
                        sm: 1.5,
                        md: 0,
                    },

                    border:
                        "1px solid rgba(125,70,255,0.65)",

                    borderRadius: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                    },

                    background:
                        "rgba(4,7,20,0.92)",

                    boxShadow:
                        "0 0 25px rgba(60,50,255,0.12)",

                    overflow: "hidden",
                    boxSizing: "border-box",
                }}
            >
                {/* TITLE */}

                <Box
                    sx={{
                        minWidth: {
                            md: 145,
                        },

                        gridColumn: {
                            xs: "1 / -1",
                            sm: "1 / -1",
                        },

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",

                        py: {
                            xs: 0.5,
                            sm: 0.8,
                            md: 0,
                        },

                        mb: {
                            xs: 1,
                            sm: 1.2,
                            md: 0,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            color: "#A83DFF",

                            fontSize: {
                                xs: 15,
                                sm: 16,
                                md: 17,
                                lg: 18,
                            },

                            fontWeight: 700,

                            whiteSpace: "nowrap",
                        }}
                    >
                        Tech Stack
                    </Typography>

                    <Box
                        sx={{
                            width: {
                                xs: 48,
                                sm: 55,
                                md: 62,
                            },

                            height: 2,

                            mt: 0.5,

                            background:
                                "linear-gradient(90deg, #C329FF, #237EFF)",
                        }}
                    />
                </Box>

                {/* DESKTOP DIVIDER */}

                <Box
                    sx={{
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "block",
                        },

                        width: "1px",
                        height: 35,

                        mx: 1.5,

                        background:
                            "rgba(255,255,255,0.15)",

                        flexShrink: 0,
                    }}
                />

                {techStack.map((tech, index) => (
                    <React.Fragment key={tech.name}>
                        {/* DIVIDER - DESKTOP ONLY */}

                        {index > 0 && (
                            <Box
                                sx={{
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },

                                    width: "1px",
                                    height: 35,

                                    background:
                                        "rgba(255,255,255,0.15)",

                                    mx: 1,

                                    flexShrink: 0,
                                }}
                            />
                        )}

                        {/* TECH ITEM */}

                        <Box
                            sx={{
                                flex: 1,
                                minWidth: 0,

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                gap: {
                                    xs: 0.6,
                                    sm: 0.8,
                                    md: 1,
                                },

                                py: {
                                    xs: 1,
                                    sm: 1.2,
                                    md: 0,
                                },

                                px: {
                                    xs: 0.5,
                                    sm: 0.7,
                                    md: 0.5,
                                },

                                borderRadius: "10px",

                                transition:
                                    "background 0.2s ease",

                                "&:hover": {
                                    background:
                                        "rgba(125,70,255,0.08)",
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={tech.image}
                                alt={tech.name}
                                sx={{
                                    width: {
                                        xs: 30,
                                        sm: 34,
                                        md: 40,
                                    },

                                    height: {
                                        xs: 30,
                                        sm: 34,
                                        md: 40,
                                    },

                                    objectFit: "contain",

                                    flexShrink: 0,
                                }}
                            />

                            <Typography
                                sx={{
                                    color: "#fff",

                                    fontSize: {
                                        xs: 10.5,
                                        sm: 12,
                                        md: 14,
                                        lg: 15,
                                    },

                                    fontWeight: {
                                        xs: 500,
                                        md: 400,
                                    },

                                    whiteSpace: "nowrap",

                                    overflow: "hidden",

                                    textOverflow: "ellipsis",

                                    minWidth: 0,
                                }}
                            >
                                {tech.name}
                            </Typography>
                        </Box>
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
}

export default TechStack;
