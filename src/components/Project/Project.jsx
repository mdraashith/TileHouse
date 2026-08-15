import React, { useState } from "react";

import {
    Box,
    Typography,
    Button,
} from "@mui/material";

import ProjectContent from "./ProjectContent";
import ProjectStats from "./ProjectStats";


function Project() {

    const [activeCategory, setActiveCategory] =
        useState("All");


    const categories = [
        "All",
        "Web Sites",
        "JavaScript Projects",
        "React Projects",
        "Other",
    ];


    return (
        <Box
            id="projects"
            sx={{
                width: "100%",

                minHeight: "100vh",

                color: "#fff",

                backgroundImage:
                    "url('/img/aboutbg.png')",

                backgroundSize: "cover",

                backgroundPosition:
                    "center top",

                backgroundRepeat:
                    "no-repeat",

                px: {
                    xs: 1.5,
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

            {/* ================= HEADER ================= */}

            <Box
                sx={{
                    maxWidth: "800px",

                    mx: "auto",

                    textAlign: "center",

                    mb: {
                        xs: 3,
                        md: 4,
                    },
                }}
            >

                {/* MY WORK */}

                <Box
                    sx={{
                        display: "inline-flex",

                        alignItems: "center",

                        gap: 1,

                        px: 2,

                        py: 0.6,
                        mt:2,
                        mb: 1.5,

                        borderRadius: "20px",

                        border:
                            "1px solid rgba(160,70,255,0.45)",

                        background:
                            "rgba(100,40,180,0.15)",

                        boxShadow:
                            "0 0 20px rgba(120,50,255,0.15)",
                    }}
                >

                    <Box
                        sx={{
                            width: 5,
                            height: 5,

                            borderRadius: "50%",

                            background: "#B83DFF",

                            boxShadow:
                                "0 0 8px #B83DFF",
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: {
                                xs: 14,
                                sm: 16,
                            },
                            
                            fontWeight: 600,

                            letterSpacing: "2px",

                            color: "#E5D8FF",
                        }}
                    >
                        MY WORK
                    </Typography>

                    <Box
                        sx={{
                            width: 5,
                            height: 5,

                            borderRadius: "50%",

                            background: "#238DFF",

                            boxShadow:
                                "0 0 8px #238DFF",
                        }}
                    />

                </Box>


                {/* TITLE */}

                <Typography
                    component="h1"
                    sx={{
                        fontSize: {
                            xs: 38,
                            sm: 50,
                            md: 62,
                        },

                        lineHeight: 1.05,

                        fontWeight: 800,

                        letterSpacing: "-2px",

                        mb: 1.5,
                    }}
                >
                    Projects &{" "}

                    <Box
                        component="span"
                        sx={{
                            background:
                                "linear-gradient(90deg,#C329FF,#287EFF)",

                            WebkitBackgroundClip:
                                "text",

                            WebkitTextFillColor:
                                "transparent",
                        }}
                    >
                        Creations
                    </Box>

                </Typography>


                {/* DESCRIPTION */}

                <Typography
                    sx={{
                        color: "#B9BED0",

                        fontSize: {
                            xs: 13,
                            sm: 14,
                            md: 16,
                        },

                        lineHeight: 1.6,

                        maxWidth: "600px",

                        mx: "auto",
                    }}
                >
                    A collection of projects I've built
                    using modern web technologies and
                    tools.
                </Typography>


                {/* LINE */}

                <Box
                    sx={{
                        width: 45,

                        height: 3,

                        mx: "auto",

                        mt: 2,

                        borderRadius: 5,

                        background:
                            "linear-gradient(90deg,#C329FF,#287EFF)",

                        boxShadow:
                            "0 0 12px rgba(150,50,255,0.7)",
                    }}
                />

            </Box>


            {/* ================= CATEGORY ================= */}

            <Box
                sx={{
                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",

                    flexWrap: "wrap",

                    gap: 1,

                    mb: {
                        xs: 3,
                        md: 4,
                    },
                }}
            >

                {categories.map((category) => (

                    <Button
                        key={category}

                        onClick={() =>
                            setActiveCategory(category)
                        }

                        sx={{
                            minWidth: "auto",

                            px: {
                                xs: 1.8,
                                sm: 2.2,
                            },

                            py: 0.6,

                            borderRadius: "20px",

                            color:
                                activeCategory === category
                                    ? "#fff"
                                    : "#AEB2C5",

                            fontSize: {
                                xs: 12,
                                sm: 14,
                            },

                            textTransform: "none",

                            border:
                                activeCategory === category
                                    ? "1px solid rgba(165,60,255,0.7)"
                                    : "1px solid transparent",

                            background:
                                activeCategory === category
                                    ? "linear-gradient(90deg,rgba(155,45,255,0.45),rgba(35,126,255,0.35))"
                                    : "rgba(20,25,55,0.65)",

                            "&:hover": {
                                color: "#fff",

                                background:
                                    "rgba(120,60,220,0.25)",
                            },
                        }}
                    >
                        {category}
                    </Button>

                ))}

            </Box>


            {/* ================= PROJECT CONTENT ================= */}

            <ProjectContent
                activeCategory={activeCategory}
            />


            {/* ================= STATS ================= */}

            <ProjectStats />

        </Box>
    );
}


export default Project;