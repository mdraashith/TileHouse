import React from "react";

import {
    Box,
    Typography,
    Button,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";


function ProjectContent({
    activeCategory,
}) {


    // =====================================================
    // PROJECT DATA
    // =====================================================

    const projects = [
        {
            title: "Personal Portfolio",

            category: "Web Sites",

            image: "/img/portfolio.png",

            description:
                "My personal portfolio website to showcase my skills and projects.",

            technologies: [
                "React",
                "Router",
                "Lazy Loading",
                "Framer Motion",
                "Responsive Design",
            ],

            live: "#",
            github: "https://github.com/mdraashith",
        },
        {
            title: "Garden Website",

            category: "Web Sites",

            image: "/img/gardenproject.png",

            description:
                "Developed a responsive static garden website using React and Material UI to showcase plants and gardening services.",

            technologies: [
                "React",
                "MUI",
                "Framer Motion",
                "Shopping",
                "Responsive WebDesign",
            ],

            live: "https://heavengarden-official.vercel.app/",
            github: "https://github.com/mdraashith",
        },
        {
            title: "Interior Design",
            category: "Web Sites",

            image: "/img/interiorproject.png",

            description:
                "Developed a responsive static interior design website using React and Material UI to showcase modern interior ideas.",

            technologies: [
                "React",
                "MUI",
                "Framer Motion",
                "Router",
                "Lazy Loading",
                "Responsive Design",
                "Ideas",
            ],

            live: "https://interiordesign-website.vercel.app/",
            github: "https://github.com/mdraashith",
        },
        {
            title: "Apple Mobile Store",

            category: "Web Sites",

            image: "/img/applestore.png",

            description:
                "Developed a responsive static mobile store website using React and Material UI to showcase mobiles, laptops, accessories, home appliances, and services",

            technologies: [
                "React",
                "MUI",
                "lazy Loading",
                "Router",
                "Framer Motion",
                "Shopping",
                "Responsive WebDesign",
            ],

            live: "https://applemobiles-official.vercel.app/",
            github: "https://github.com/mdraashith",
        },


        {
            title: "Hair Craft",

            category: "Web Sites",

            image: "/img/haircraft.png",

            description:
                "**Hair Craft** is a modern, responsive salon website built with **React.js** and **MUI**. It offers online booking, service details, pricing, reviews, and a premium user experience.",

            technologies: [
                "React",
                "Router",
                "Lazy Loading",
                "Framer Motion",
                "Responsive Design",
            ],

            live: "https://haircraft-website.vercel.app/",
            github: "https://github.com/mdraashith",
        },

        {
            title: "Rock Paper Scissors",

            category: "JavaScript Projects",

            image: "/img/rockgame.png",

            description:
                "Built a responsive Tic Tac Toe game using React and Material UI with game logic and reset functionality.",

            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Logical thinking",
                "Random Choice",
            ],

            live: "https://rockpapersiccors.vercel.app/",
            github: "https://github.com/mdraashith",
        },


        {
            title: "Flames",

            category: "React Projects",

            image: "/img/bg.png",

            description:
                "Built a responsive FLAMES game using React and Material UI with interactive relationship calculation logic.",

            technologies: [
                "React",
                "MUI",
                "JavaScript",
            ],

            live: "https://flamesgame-pi.vercel.app/",
            github: "https://github.com/mdraashith",
        },


        {
            title: "To-Do App",

            category: "React Projects",

            image: "/img/todo.png",

            description:
                "A simple and responsive To-Do application using React.",

            technologies: [
                "React",
                "MUI",
                "Local Storage",
            ],

            live: "https://todosite-ochre.vercel.app/",
            github: "https://github.com/mdraashith",
        },

    ];


    // =====================================================
    // FILTER
    // =====================================================

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                (project) =>
                    project.category === activeCategory
            );


    // =====================================================
    // TECH BADGE
    // =====================================================

    const TechBadge = ({
        children,
    }) => (

        <Box
            sx={{
                px: 1.3,

                py: 0.5,

                borderRadius: "20px",

                color: "#DADCF0",

                fontSize: {
                    xs: 17,
                    sm: 12,
                },

                whiteSpace: "nowrap",

                background:
                    "rgba(103,58,183,0.20)",

                border:
                    "1px solid rgba(133,77,255,0.25)",
            }}
        >
            {children}
        </Box>

    );


    return (

        <Box
            sx={{
                maxWidth: "1180px",

                mx: "auto",

                p: {
                    xs: 1,
                    sm: 1.5,
                    md: 2,
                },

                borderRadius: "12px",

                border:
                    "1px solid rgba(82,78,180,0.35)",

                background:
                    "rgba(3,8,30,0.45)",
            }}
        >


            {/* =================================================
                    FEATURED PROJECT
            ================================================= */}

            <Box
                sx={{
                    display: "grid",

                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "1.15fr 0.85fr",
                    },

                    gap: {
                        xs: 2,
                        md: 2.5,
                    },

                    p: {
                        xs: 1,
                        sm: 1.5,
                        md: 1.5,
                    },

                    mb: 2,

                    borderRadius: "12px",

                    border:
                        "1px solid rgba(90,90,180,0.25)",

                    background:
                        "rgba(7,11,35,0.72)",
                }}
            >


                {/* IMAGE */}

                <Box
                    sx={{
                        width: "100%",

                        aspectRatio: "16 / 9",

                        borderRadius: "9px",

                        overflow: "hidden",

                        background: "#050817",
                    }}
                >

                    <Box
                        component="img"

                        src="/img/nila.png"

                        alt="Nila Physio clinc"

                        sx={{
                            width: "100%",

                            height: "100%",

                            objectFit: "cover",

                            display: "block",

                            transition: "0.5s ease",

                            "&:hover": {
                                transform:
                                    "scale(1.04)",
                            },
                        }}
                    />

                </Box>


                {/* CONTENT */}

                <Box
                    sx={{
                        display: "flex",

                        flexDirection: "column",

                        justifyContent: "center",

                        px: {
                            xs: 1,
                            sm: 1.5,
                            md: 2,
                        },

                        py: {
                            xs: 1,
                            md: 0,
                        },
                    }}
                >


                    {/* FEATURED LABEL */}

                    <Box
                        sx={{
                            display: "inline-flex",

                            width: "fit-content",

                            px: 1.2,

                            py: 0.5,

                            mb: 1,

                            borderRadius: "15px",

                            color: "#DCCAFF",

                            fontSize: 14,

                            fontWeight: 600,

                            background:
                                "rgba(100,40,200,0.18)",

                            border:
                                "1px solid rgba(145,65,255,0.35)",
                        }}
                    >
                        ★ FEATURED PROJECT
                    </Box>


                    {/* TITLE */}

                    <Typography
                        sx={{
                            fontSize: {
                                xs: 22,
                                sm: 25,
                                md: 29,
                            },

                            fontWeight: 700,

                            background:
                                "linear-gradient(90deg,#C12CFF,#357DFF)",

                            WebkitBackgroundClip:
                                "text",

                            WebkitTextFillColor:
                                "transparent",

                            mb: 1,
                        }}
                    >
                        Nila Physio Clinc
                    </Typography>


                    {/* DESCRIPTION */}

                    <Typography
                        sx={{
                            color: "#C1C5D5",

                            fontSize: {
                                xs: 16,
                                sm: 17,
                            },

                            lineHeight: 1.6,

                            mb: 1.5,
                        }}
                    >
                        A modern and responsive physiotherapy clinic website designed to showcase treatments, services, doctors, and appointment booking with a clean and user-friendly healthcare interface.
                    </Typography>


                    <Typography
                        sx={{
                            fontSize: 15,

                            color: "#fff",

                            mb: 0.8,

                            fontWeight: 600,
                        }}
                    >
                        Technologies Used
                    </Typography>


                    {/* TECHNOLOGIES */}

                    <Box
                        sx={{
                            display: "flex",

                            flexWrap: "wrap",

                            gap: 0.7,

                            mb: 1.5,
                        }}
                    >

                        <TechBadge >

                            <Typography sx={{ fontSize: { xs: "16px", md: "14px" } }}>
                                React
                            </Typography>
                        </TechBadge>

                        <TechBadge>
                            <Typography sx={{ fontSize: { xs: "16px", md: "14px" } }}>
                                Material UI
                            </Typography>
                        </TechBadge>

                        <TechBadge>
                            <Typography sx={{ fontSize: { xs: "16px", md: "14px" } }}>
                                Framer Motion
                            </Typography>
                        </TechBadge>

                        <TechBadge>
                            <Typography sx={{ fontSize: { xs: "16px", md: "14px" } }}>
                                React Route
                            </Typography>
                        </TechBadge>

                        <TechBadge>
                            <Typography sx={{ fontSize: { xs: "16px", md: "14px" } }}>
                                Vite
                            </Typography>
                        </TechBadge>

                        <TechBadge>
                            <Typography sx={{ fontSize: { xs: "16px", md: "14px" } }}>
                                SEO
                            </Typography>
                        </TechBadge>


                    </Box>


                    {/* BUTTONS */}

                    <Box
                        sx={{
                            display: "flex",

                            gap: 1,

                            flexWrap: "wrap",
                        }}
                    >

                        <Button
                            href="https://nilaphysio.com/"

                            startIcon={
                                <VisibilityOutlinedIcon />
                            }

                            sx={{
                                color: "#fff",

                                textTransform: "none",

                                fontSize: { xs: 18, md: 16 },

                                px: 2,

                                py: 0.7,

                                borderRadius: "7px",

                                background:
                                    "linear-gradient(90deg,#A92CFF,#287EFF)",
                            }}
                        >
                            Live Demo
                        </Button>


                        <Button
                            href="https://github.com/mdraashith"

                            startIcon={
                                <GitHubIcon />
                            }

                            sx={{
                                color: "#fff",

                                textTransform: "none",

                                fontSize: { xs: 18, md: 16 },

                                px: 2,

                                py: 0.7,

                                borderRadius: "7px",

                                border:
                                    "1px solid rgba(100,110,190,0.4)",

                                background:
                                    "rgba(15,20,55,0.7)",
                            }}
                        >
                            GitHub
                        </Button>

                    </Box>

                </Box>

            </Box>


            {/* =================================================
                    PROJECT GRID
            ================================================= */}

            <Box
                sx={{
                    display: "grid",

                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2,1fr)",
                        md: "repeat(3,1fr)",
                    },

                    gap: 1.5,
                }}
            >

                {filteredProjects.map(
                    (project) => (

                        <Box
                            key={project.title}

                            sx={{
                                minWidth: 0,

                                borderRadius: "10px",

                                overflow: "hidden",

                                border:
                                    "1px solid rgba(90,90,180,0.3)",

                                background:
                                    "rgba(7,11,35,0.72)",

                                transition:
                                    "0.3s ease",

                                "&:hover": {
                                    transform:
                                        "translateY(-5px)",

                                    borderColor:
                                        "rgba(150,65,255,0.7)",

                                    boxShadow:
                                        "0 10px 30px rgba(70,40,200,0.18)",
                                },
                            }}
                        >


                            {/* IMAGE */}

                            <Box
                                sx={{
                                    width: "100%",

                                    aspectRatio: "16 / 9",

                                    overflow: "hidden",

                                    background:
                                        "#050817",
                                }}
                            >

                                <Box
                                    component="img"

                                    src={
                                        project.image
                                    }

                                    alt={
                                        project.title
                                    }

                                    sx={{
                                        width: "100%",

                                        height: "100%",

                                        objectFit:
                                            "cover",

                                        display:
                                            "block",

                                        transition:
                                            "0.4s ease",

                                        "&:hover": {
                                            transform:
                                                "scale(1.05)",
                                        },
                                    }}
                                />

                            </Box>


                            {/* CARD CONTENT */}

                            <Box
                                sx={{
                                    p: {
                                        xs: 1.2,
                                        sm: 1.3,
                                    },
                                }}
                            >

                                <Typography
                                    sx={{
                                        color:
                                            "#C13CFF",

                                        fontSize: {
                                            xs: 13,
                                            sm: 19,
                                        },

                                        fontWeight: 700,

                                        mb: 0.5,
                                    }}
                                >
                                    {
                                        project.title
                                    }
                                </Typography>


                                <Typography
                                    sx={{
                                        color:
                                            "#B9BED0",

                                        fontSize: {
                                            xs: 18,
                                            sm: 14,
                                        },

                                        lineHeight: 1.5,

                                        minHeight:
                                            "30px",

                                        mb: 1,
                                    }}
                                >
                                    {
                                        project.description
                                    }
                                </Typography>


                                {/* TECH */}

                                <Box
                                    sx={{
                                        display:
                                            "flex",

                                        flexWrap:
                                            "wrap",

                                        gap: 0.5,

                                        mb: 1.2,
                                    }}
                                >

                                    {
                                        project.technologies.map(
                                            (tech) => (

                                                <TechBadge
                                                    key={
                                                        tech
                                                    }

                                                >
                                                    {
                                                        tech
                                                    }
                                                </TechBadge>

                                            )
                                        )
                                    }

                                </Box>


                                {/* BUTTONS */}

                                <Box
                                    sx={{
                                        display:
                                            "grid",

                                        gridTemplateColumns:
                                            "1fr 1fr",

                                        gap: 0.7,
                                    }}
                                >

                                    <Button
                                        href={
                                            project.live
                                        }

                                        startIcon={
                                            <VisibilityOutlinedIcon />
                                        }

                                        sx={{
                                            minWidth: 10,
                                            color: "#fff",

                                            textTransform:
                                                "none",

                                            fontSize: { xs: 16, md: 14 },

                                            py: 0.5,

                                            borderRadius:
                                                "6px",

                                            background:
                                                "linear-gradient(90deg,#A72CFF,#287EFF)",
                                        }}
                                    >
                                        Live Demo
                                    </Button>


                                    <Button
                                        href={
                                            project.github
                                        }

                                        startIcon={
                                            <GitHubIcon />
                                        }

                                        sx={{
                                            minWidth: 0,

                                            color: "#fff",

                                            textTransform:
                                                "none",

                                            fontSize: { xs: 16, md: 14 },


                                            py: 0.5,

                                            borderRadius:
                                                "6px",

                                            border:
                                                "1px solid rgba(100,110,190,0.35)",

                                            background:
                                                "rgba(15,20,55,0.7)",
                                        }}
                                    >
                                        GitHub
                                    </Button>

                                </Box>

                            </Box>

                        </Box>

                    )
                )}

            </Box>

        </Box>
    );
}


export default ProjectContent;