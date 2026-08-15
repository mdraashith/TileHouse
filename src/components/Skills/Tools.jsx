import React from "react";

import {
    Box,
    Typography,
} from "@mui/material";

import BusinessCenterOutlinedIcon
    from "@mui/icons-material/BusinessCenterOutlined";

function Tools() {

    const tools = [
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
        {
            name: "VS Code",
            icon: "vscode",
        },
    ];

    return (
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
                    mb: 3,
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

                        color: "#7D5CFF",

                        background:
                            "rgba(55,65,255,0.18)",
                    }}
                >
                    <BusinessCenterOutlinedIcon />
                </Box>

                <Typography
                    sx={{
                        fontSize: {
                            xs: 25,
                            sm: 27,
                        },
                        fontWeight: 700,
                    }}
                >
                    Tools & Technologies
                </Typography>

            </Box>


            {/* TOOL GRID */}

            <Box
                sx={{
                    display: "grid",

                    gridTemplateColumns: {
                        xs: "repeat(2,1fr)",
                        sm: "repeat(4,1fr)",
                    },

                    gap: {
                        xs: 1.5,
                        sm: 2,
                    },
                }}
            >

                {tools.map((tool) => (
                    <Box
                        key={tool.name}
                        sx={{
                            minHeight: {
                                xs: 120,
                                sm: 135,
                            },

                            borderRadius: "14px",

                            border:
                                "1px solid rgba(94,105,180,0.25)",

                            background:
                                "rgba(10,15,45,0.6)",

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",

                            gap: 1.2,

                            transition: "0.3s ease",

                            "&:hover": {
                                transform:
                                    "translateY(-5px)",

                                borderColor:
                                    "#7548FF",

                                boxShadow:
                                    "0 0 20px rgba(112,60,255,0.2)",
                            },
                        }}
                    >

                        {tool.image ? (
                            <Box
                                component="img"
                                src={tool.image}
                                alt={tool.name}
                                sx={{
                                    width: {
                                        xs: 70,
                                        sm: 58,
                                    },

                                    height: {
                                        xs: 70,
                                        sm: 58,
                                    },

                                    objectFit: "contain",
                                }}
                            />
                        ) : (
                            <Typography
                                sx={{
                                    fontSize: 45,
                                    color: "#168BFF",
                                    fontWeight: 700,
                                }}
                            >
                                {"</>"}
                            </Typography>
                        )}

                        <Typography
                            sx={{
                                color: "#E3E4EC",

                                fontSize: {
                                    xs: 18,
                                    sm: 13,
                                },

                                fontWeight: 500,
                                textAlign: "center",
                            }}
                        >
                            {tool.name}
                        </Typography>

                    </Box>
                ))}

            </Box>

        </Box>
    );
}

export default Tools;