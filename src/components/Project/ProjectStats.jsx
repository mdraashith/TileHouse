import React from "react";

import {
    Box,
    Typography,
} from "@mui/material";

import CodeOutlinedIcon
    from "@mui/icons-material/CodeOutlined";

import RocketLaunchOutlinedIcon
    from "@mui/icons-material/RocketLaunchOutlined";

import StarBorderOutlinedIcon
    from "@mui/icons-material/StarBorderOutlined";

import EmojiEmotionsOutlinedIcon
    from "@mui/icons-material/EmojiEmotionsOutlined";

import { motion } from "framer-motion";


// =====================================================
//                  ANIMATION
// =====================================================

const statAnimation = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },

    visible: {
        opacity: 1,
        scale: 1,

        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};


// =====================================================
//                  PROJECT STATS
// =====================================================

function ProjectStats() {

    const stats = [
        {
            value: "6+",

            label: "Projects Completed",

            icon: <CodeOutlinedIcon />,
        },

        {
            value: "3+",

            label: "Technologies Used",

            icon: <RocketLaunchOutlinedIcon />,
        },

        {
            value: "100%",

            label: "Passion & Dedication",

            icon: <StarBorderOutlinedIcon />,
        },

        {
            value: "Always",

            label: "Learning New Things",

            icon: <EmojiEmotionsOutlinedIcon />,
        },
    ];


    return (

        <motion.div

            initial="hidden"

            whileInView="visible"

            viewport={{
                once: true,
                amount: 0.25,
            }}

            style={{
                width: "100%",
            }}
        >

            <Box
                sx={{
                    maxWidth: "1180px",

                    mx: "auto",

                    mt: 2,

                    display: "grid",

                    gridTemplateColumns: {
                        xs: "repeat(2,1fr)",
                        sm: "repeat(4,1fr)",
                    },

                    borderRadius: "10px",

                    border:
                        "1px solid rgba(90,75,180,0.3)",

                    background:
                        "rgba(7,10,35,0.72)",

                    overflow: "hidden",
                }}
            >

                {stats.map(
                    (stat, index) => (

                        <motion.div
                            key={stat.label}

                            variants={statAnimation}

                            transition={{
                                duration: 0.6,

                                ease: "easeOut",

                                delay:
                                    index * 0.15,
                            }}

                            style={{
                                minWidth: 0,
                            }}
                        >

                            <Box
                                sx={{
                                    py: 2,

                                    textAlign:
                                        "center",

                                    borderRight: {
                                        xs:
                                            index % 2 === 0
                                                ? "1px solid rgba(100,90,180,0.25)"
                                                : "none",

                                        sm:
                                            index !== 3
                                                ? "1px solid rgba(100,90,180,0.25)"
                                                : "none",
                                    },

                                    borderBottom: {
                                        xs:
                                            index < 2
                                                ? "1px solid rgba(100,90,180,0.25)"
                                                : "none",

                                        sm: "none",
                                    },

                                    minHeight: {
                                        xs: 115,
                                        sm: 125,
                                    },

                                    display: "flex",

                                    flexDirection:
                                        "column",

                                    alignItems:
                                        "center",

                                    justifyContent:
                                        "center",

                                    transition:
                                        "0.3s ease",

                                    "&:hover": {
                                        background:
                                            "rgba(100,60,255,0.08)",
                                    },
                                }}
                            >

                                {/* =================================================
                                            ICON
                                ================================================= */}

                                <Box
                                    sx={{
                                        color:
                                            "#A83DFF",

                                        display:
                                            "flex",

                                        alignItems:
                                            "center",

                                        justifyContent:
                                            "center",

                                        "& svg": {
                                            fontSize: 35,
                                        },

                                        mb: 0.3,
                                    }}
                                >
                                    {stat.icon}
                                </Box>


                                {/* =================================================
                                            VALUE
                                ================================================= */}

                                <Typography
                                    sx={{
                                        fontSize: 18,

                                        fontWeight: 700,
                                    }}
                                >
                                    {stat.value}
                                </Typography>


                                {/* =================================================
                                            LABEL
                                ================================================= */}

                                <Typography
                                    sx={{
                                        color:
                                            "#AEB3C5",

                                        fontSize: {
                                            xs: 14,
                                            sm: 16,
                                        },

                                        textAlign:
                                            "center",

                                        lineHeight:
                                            1.4,

                                        px: 1,
                                    }}
                                >
                                    {stat.label}
                                </Typography>

                            </Box>

                        </motion.div>

                    )
                )}

            </Box>

        </motion.div>
    );
}


export default ProjectStats;