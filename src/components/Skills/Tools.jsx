import React from "react";

import {
    Box,
    Typography,
} from "@mui/material";

import BusinessCenterOutlinedIcon
    from "@mui/icons-material/BusinessCenterOutlined";

import { motion } from "framer-motion";


// =====================================================
//                  ANIMATION
// =====================================================

const bottomToTop = {
    hidden: {
        opacity: 0,
        y: 60,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};


const staggerContainer = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};


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

        <motion.div
            initial="hidden"

            whileInView="visible"

            viewport={{
                once: true,
                amount: 0.15,
            }}

            variants={staggerContainer}

            style={{
                width: "100%",
                height: "100%",
            }}
        >

            <Box
                sx={{
                    width: "100%",

                    /*
                        Technical Skills box-க்கு
                        same height
                    */

                    height: "100%",

                    boxSizing: "border-box",

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

                    display: "flex",

                    flexDirection: "column",
                }}
            >

                {/* =====================================================
                                TITLE
                ===================================================== */}

                <motion.div
                    variants={bottomToTop}
                >

                    <Box
                        sx={{
                            display: "flex",

                            alignItems: "center",

                            gap: 1.5,

                            mb: 3,

                            flexShrink: 0,
                        }}
                    >

                        <Box
                            sx={{
                                width: 50,

                                height: 50,

                                borderRadius: "10px",

                                display: "flex",

                                alignItems: "center",

                                justifyContent:
                                    "center",

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
                                    xs: 24,
                                    sm: 27,
                                },

                                fontWeight: 700,
                            }}
                        >
                            Tools & Technologies
                        </Typography>

                    </Box>

                </motion.div>


                {/* =====================================================
                                TOOL GRID
                ===================================================== */}

                <motion.div
                    variants={staggerContainer}

                    style={{
                        width: "100%",
                    }}
                >

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

                            width: "100%",
                        }}
                    >

                        {tools.map((tool) => (

                            <motion.div
                                key={tool.name}

                                variants={bottomToTop}

                                style={{
                                    height: "100%",
                                }}
                            >

                                <Box
                                    sx={{
                                        minHeight: {
                                            xs: 120,
                                            sm: 135,
                                        },

                                        height: "100%",

                                        boxSizing:
                                            "border-box",

                                        borderRadius:
                                            "14px",

                                        border:
                                            "1px solid rgba(94,105,180,0.25)",

                                        background:
                                            "rgba(10,15,45,0.6)",

                                        display: "flex",

                                        flexDirection:
                                            "column",

                                        alignItems:
                                            "center",

                                        justifyContent:
                                            "center",

                                        gap: 1.2,

                                        transition:
                                            "0.3s ease",

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

                                    {/* =================================================
                                                TOOL IMAGE
                                    ================================================= */}

                                    {tool.image ? (

                                        <Box
                                            component="img"

                                            src={tool.image}

                                            alt={tool.name}

                                            sx={{
                                                width: {
                                                    xs: 50,
                                                    sm: 58,
                                                },

                                                height: {
                                                    xs: 50,
                                                    sm: 58,
                                                },

                                                objectFit:
                                                    "contain",
                                            }}
                                        />

                                    ) : (

                                        <Typography
                                            sx={{
                                                fontSize: 40,

                                                color:
                                                    "#168BFF",

                                                fontWeight: 700,
                                            }}
                                        >
                                            {"</>"}
                                        </Typography>

                                    )}


                                    {/* =================================================
                                                TOOL NAME
                                    ================================================= */}

                                    <Typography
                                        sx={{
                                            color:
                                                "#E3E4EC",

                                            fontSize: {
                                                xs: 17,
                                                sm: 13,
                                            },

                                            fontWeight: 600,

                                            textAlign:
                                                "center",
                                        }}
                                    >
                                        {tool.name}
                                    </Typography>

                                </Box>

                            </motion.div>

                        ))}

                    </Box>

                </motion.div>

            </Box>

        </motion.div>
    );
}


export default Tools;