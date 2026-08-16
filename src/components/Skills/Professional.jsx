import React from "react";

import {
    Box,
    Typography,
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbOutlinedIcon
    from "@mui/icons-material/LightbulbOutlined";
import CodeIcon from "@mui/icons-material/Code";
import DevicesOutlinedIcon
    from "@mui/icons-material/DevicesOutlined";
import RocketLaunchOutlinedIcon
    from "@mui/icons-material/RocketLaunchOutlined";

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
            staggerChildren: 0.18,
        },
    },
};


// =====================================================
//                  PROFESSIONAL
// =====================================================

function Professional() {

    const professionalSkills = [
        {
            title: "Problem Solving",

            description:
                "Analytical thinking to solve complex problems.",

            icon: <LightbulbOutlinedIcon />,
        },

        {
            title: "Clean Code",

            description:
                "Writing maintainable, scalable and clean code.",

            icon: <CodeIcon />,
        },

        {
            title: "Responsive Design",

            description:
                "Building responsive and user-friendly interfaces.",

            icon: <DevicesOutlinedIcon />,
        },

        {
            title: "Fast Learner",

            description:
                "Quickly learning new technologies & tools.",

            icon: <RocketLaunchOutlinedIcon />,
        },

        {
            title: "Team Collaboration",

            description:
                "Working effectively in team environments.",

            icon: <GroupsIcon />,
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
        >

            <Box
                sx={{
                    maxWidth: "1300px",

                    mx: "auto",

                    mt: 3,

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

                {/* =================================================
                                TITLE
                ================================================= */}

                <motion.div
                    variants={bottomToTop}
                >

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

                                justifyContent:
                                    "center",

                                color: "#A43DFF",

                                background:
                                    "rgba(113,48,255,0.18)",

                                border:
                                    "1px solid rgba(130,65,255,0.35)",
                            }}
                        >
                            <GroupsIcon />
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
                            Professional Skills
                        </Typography>

                    </Box>

                </motion.div>


                {/* =================================================
                            PROFESSIONAL SKILLS
                ================================================= */}

                <motion.div
                    variants={staggerContainer}
                >

                    <Box
                        sx={{
                            display: "grid",

                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2,1fr)",
                                lg: "repeat(5,1fr)",
                            },
                        }}
                    >

                        {professionalSkills.map(
                            (skill, index) => (

                                <motion.div
                                    key={skill.title}

                                    variants={bottomToTop}

                                    style={{
                                        height: "100%",
                                    }}
                                >

                                    <Box
                                        sx={{
                                            px: {
                                                xs: 2,
                                                sm: 2,
                                                lg: 3,
                                            },

                                            py: {
                                                xs: 2,
                                                lg: 1,
                                            },

                                            textAlign:
                                                "center",

                                            borderRight: {
                                                lg:
                                                    index !==
                                                    professionalSkills.length - 1
                                                        ? "1px solid rgba(100,100,180,0.25)"
                                                        : "none",
                                            },

                                            borderBottom: {
                                                xs:
                                                    index !==
                                                    professionalSkills.length - 1
                                                        ? "1px solid rgba(100,100,180,0.2)"
                                                        : "none",

                                                sm:
                                                    index < 3
                                                        ? "1px solid rgba(100,100,180,0.2)"
                                                        : "none",

                                                lg: "none",
                                            },
                                        }}
                                    >

                                        {/* =================================
                                                    ICON
                                        ================================= */}

                                        <Box
                                            sx={{
                                                color:
                                                    "#A23DFF",

                                                display:
                                                    "flex",

                                                justifyContent:
                                                    "center",

                                                mb: 1.5,

                                                "& svg": {
                                                    fontSize: {
                                                        xs: 44,
                                                        md: 45,
                                                    },
                                                },
                                            }}
                                        >
                                            {skill.icon}
                                        </Box>


                                        {/* =================================
                                                    TITLE
                                        ================================= */}

                                        <Typography
                                            sx={{
                                                color:
                                                    "#fff",

                                                fontSize: {
                                                    xs: 17,
                                                    sm: 15,
                                                },

                                                fontWeight:
                                                    700,

                                                mb: 1,
                                            }}
                                        >
                                            {skill.title}
                                        </Typography>


                                        {/* =================================
                                                DESCRIPTION
                                        ================================= */}

                                        <Typography
                                            sx={{
                                                color:
                                                    "#B9BDCE",

                                                fontSize: {
                                                    xs: 15,
                                                    sm: 13,
                                                },

                                                lineHeight:
                                                    1.6,
                                            }}
                                        >
                                            {skill.description}
                                        </Typography>

                                    </Box>

                                </motion.div>

                            )
                        )}

                    </Box>

                </motion.div>

            </Box>

        </motion.div>
    );
}


export default Professional;