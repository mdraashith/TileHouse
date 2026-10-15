import React from "react";

import {
    Box,
    Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";

import { motion } from "framer-motion";


// =====================================================
//                  ANIMATION
// =====================================================

const bottomToTop = {
    hidden: {
        opacity: 0,
        y: 70,
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
            staggerChildren: 0.2,
        },
    },
};


function Education() {

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
            }}
        >

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
                        sm: "18px",
                        md: "22px",
                    },

                    border:
                        "1px solid rgba(105,79,200,0.35)",

                    background:
                        "rgba(5,8,30,0.55)",

                    boxSizing: "border-box",

                    overflow: "hidden",
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

                            gap: {
                                xs: 1,
                                sm: 1.5,
                            },

                            mb: {
                                xs: 2.5,
                                sm: 3,
                                md: 4,
                            },

                            minWidth: 0,
                        }}
                    >

                        <SchoolIcon
                            sx={{
                                fontSize: {
                                    xs: 35,
                                    sm: 34,
                                    md: 36,
                                },

                                color: "#A33DFF",

                                flexShrink: 0,
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 24,
                                    sm: 23,
                                    md: 25,
                                },

                                fontWeight: 700,

                                color: "#fff",

                                lineHeight: 1.2,

                                whiteSpace: "nowrap",
                            }}
                        >
                            Education
                        </Typography>

                    </Box>

                </motion.div>


                {/* =====================================================
                            EDUCATION TIMELINE
                ===================================================== */}

                <motion.div
                    variants={staggerContainer}

                    style={{
                        width: "100%",
                    }}
                >

                    <Box
                        sx={{
                            position: "relative",

                            width: "100%",

                            display: "grid",

                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, minmax(0, 1fr))",
                                md: "repeat(2, minmax(0, 1fr))",
                            },

                            gap: {
                                xs: 3,
                                sm: 4,
                                md: 6,
                            },
                            alignItems: "stretch",

                            px: {
                                xs: 0,
                                sm: 0.5,
                                md: 2,
                            },

                            boxSizing: "border-box",

                            minWidth: 0,

                            /* Desktop connecting line */

                            "&::before": {
                                content: '""',

                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "block",
                                },

                                position: "absolute",

                                top: "27px",

                                left:
                                    "calc(50% - 45px)",

                                right:
                                    "calc(50% - 45px)",

                                height: "2px",

                                background:
                                    "rgba(130,90,210,0.35)",

                                zIndex: 0,
                            },
                        }}
                    >

                        {/* =================================================
                                    CURRENT DEGREE - M.SC
                         ================================================= */}

                        <motion.div variants={bottomToTop}>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                    boxSizing: "border-box",
                                    p: { xs: 2, sm: 2.5, md: 3 },
                                    pt: { xs: 2.5, sm: 2.5, md: 3 },
                                    borderRadius: "18px",
                                    border: "1px solid rgba(125,70,255,0.65)",
                                    background: "rgba(10,13,45,0.82)",
                                    zIndex: 1,
                                    transition: "0.3s ease",
                                    boxSizing: "border-box",
                                    minWidth: 0,
                                    "&:hover": {
                                        borderColor: "#8D4DFF",
                                        boxShadow: "0 0 25px rgba(110,60,255,0.22)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "-9px",
                                        left: { xs: "25px", sm: "25px", md: "50%" },
                                        transform: { xs: "none", sm: "none", md: "translateX(-50%)" },
                                        width: 16,
                                        height: 16,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg,#B52CFF,#477CFF)",
                                        border: "3px solid #11143D",
                                        boxShadow: "0 0 12px rgba(144,60,255,0.8)",
                                        zIndex: 2,
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontSize: { xs: 21, sm: 19, md: 23 },
                                        fontWeight: 700,
                                        lineHeight: 1.35,
                                        mb: 1,
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    M.Sc.,Data Science and Business Analytics
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#756CFF",
                                        fontSize: { xs: 17, sm: 15, md: 18 },
                                        fontWeight: 600,
                                        mb: 1,
                                    }}
                                >
                                    2026 - Present
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#D6D8E5",
                                        fontSize: { xs: 17, sm: 15, md: 18 },
                                        fontWeight: 500,
                                        lineHeight: 1.6,
                                        mb: 1,
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Vels Institute of Science, Technology & Advanced Studies (VISTAS)
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#D6D8E5",
                                        fontSize: { xs: 15, sm: 15, md: 17 },
                                        fontWeight: 500,
                                        lineHeight: 1.6,
                                        mb: 1.5,
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Pallavaram, Chennai
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#BFC2D1",
                                        fontSize: { xs: 15, sm: 14, md: 16 },
                                        lineHeight: 1.7,
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Currently pursuing postgraduate studies in data science, business analytics, data analysis, and related technologies.
                                </Typography>
                            </Box>
                        </motion.div>


                        {/* =================================================
                                    B.SC
                        ================================================= */}

                        <motion.div
                            variants={bottomToTop}
                        >

                            <Box
                                sx={{
                                    position: "relative",

                                    width: "100%",

                                    height: "100%",

                                    p: {
                                        xs: 2,
                                        sm: 2.5,
                                        md: 3,
                                    },

                                    pt: {
                                        xs: 2.5,
                                        sm: 2.5,
                                        md: 3,
                                    },

                                    borderRadius: "18px",

                                    border:
                                        "1px solid rgba(125,70,255,0.45)",

                                    background:
                                        "rgba(10,13,45,0.72)",

                                    zIndex: 1,

                                    transition: "0.3s ease",

                                    boxSizing: "border-box",

                                    minWidth: 0,

                                    "&:hover": {
                                        borderColor:
                                            "#8D4DFF",

                                        boxShadow:
                                            "0 0 25px rgba(110,60,255,0.18)",
                                    },
                                }}
                            >

                                {/* ================= DOT ================= */}

                                <Box
                                    sx={{
                                        position: "absolute",

                                        top: "-9px",

                                        left: {
                                            xs: "25px",
                                            sm: "25px",
                                            md: "50%",
                                        },

                                        transform: {
                                            xs: "none",
                                            sm: "none",
                                            md: "translateX(-50%)",
                                        },

                                        width: 16,

                                        height: 16,

                                        borderRadius: "50%",

                                        background:
                                            "linear-gradient(135deg,#B52CFF,#477CFF)",

                                        border:
                                            "3px solid #11143D",

                                        boxShadow:
                                            "0 0 12px rgba(144,60,255,0.8)",

                                        zIndex: 2,
                                    }}
                                />


                                {/* ================= TITLE ================= */}

                                <Typography
                                    sx={{
                                        color: "#fff",

                                        fontSize: {
                                            xs: 21,
                                            sm: 19,
                                            md: 23,
                                        },

                                        fontWeight: 700,

                                        lineHeight: 1.35,

                                        mb: 1,

                                        overflowWrap:
                                            "break-word",
                                    }}
                                >
                                    B.Sc.,Computer Science
                                </Typography>


                                {/* ================= YEAR ================= */}

                                <Typography
                                    sx={{
                                        color: "#756CFF",

                                        fontSize: {
                                            xs: 17,
                                            sm: 15,
                                            md: 18,
                                        },

                                        fontWeight: 600,

                                        mb: 1,
                                    }}
                                >
                                    2023 - 2026
                                </Typography>


                                {/* ================= COLLEGE ================= */}

                                <Typography
                                    sx={{
                                        color: "#D6D8E5",

                                        fontSize: {
                                            xs: 17,
                                            sm: 15,
                                            md: 18,
                                        },

                                        fontWeight: 500,

                                        lineHeight: 1.6,

                                        mb: 1,

                                        overflowWrap:
                                            "break-word",
                                    }}
                                >
                                    A.V.C College (Autonomous)
                                </Typography>


                                {/* ================= LOCATION ================= */}

                                <Typography
                                    sx={{
                                        color: "#D6D8E5",

                                        fontSize: {
                                            xs: 15,
                                            sm: 15,
                                            md: 17,
                                        },

                                        fontWeight: 500,

                                        lineHeight: 1.6,

                                        mb: 1.5,

                                        overflowWrap:
                                            "break-word",
                                    }}
                                >
                                    Mannampandal, Mayiladuthurai -
                                    609 305
                                </Typography>


                                {/* ================= DESCRIPTION ================= */}

                                <Typography
                                    sx={{
                                        color: "#BFC2D1",

                                        fontSize: {
                                            xs: 15,
                                            sm: 14,
                                            md: 16,
                                        },

                                        lineHeight: 1.7,

                                        overflowWrap:
                                            "break-word",
                                    }}
                                >
                                    Focused on software development,
                                    data structures, web technologies
                                    and database management.
                                </Typography>

                            </Box>

                        </motion.div>
                                                        {/* =================================================
                                    HSC
                        ================================================= */}

                                <motion.div
                                    variants={bottomToTop}
                                >

                                    <Box
                                        sx={{
                                            position: "relative",

                                            width: "100%",

                                            height: "100%",

                                            p: {
                                                xs: 2,
                                                sm: 2.5,
                                                md: 3,
                                            },

                                            pt: {
                                                xs: 2.5,
                                                sm: 2.5,
                                                md: 3,
                                            },

                                            borderRadius: "18px",

                                            border:
                                                "1px solid rgba(125,70,255,0.45)",

                                            background:
                                                "rgba(10,13,45,0.72)",

                                            zIndex: 1,

                                            transition: "0.3s ease",

                                            boxSizing: "border-box",

                                            minWidth: 0,

                                            "&:hover": {
                                                borderColor:
                                                    "#8D4DFF",

                                                boxShadow:
                                                    "0 0 25px rgba(110,60,255,0.18)",
                                            },
                                        }}
                                    >

                                        {/* ================= DOT ================= */}

                                        <Box
                                            sx={{
                                                position: "absolute",

                                                top: "-9px",

                                                left: {
                                                    xs: "25px",
                                                    sm: "25px",
                                                    md: "50%",
                                                },

                                                transform: {
                                                    xs: "none",
                                                    sm: "none",
                                                    md: "translateX(-50%)",
                                                },

                                                width: 16,

                                                height: 16,

                                                borderRadius: "50%",

                                                background:
                                                    "linear-gradient(135deg,#B52CFF,#477CFF)",

                                                border:
                                                    "3px solid #11143D",

                                                boxShadow:
                                                    "0 0 12px rgba(144,60,255,0.8)",

                                                zIndex: 2,
                                            }}
                                        />


                                        {/* ================= TITLE ================= */}

                                        <Typography
                                            sx={{
                                                color: "#fff",

                                                fontSize: {
                                                    xs: 21,
                                                    sm: 19,
                                                    md: 22,
                                                },

                                                fontWeight: 700,

                                                lineHeight: 1.35,

                                                mb: 1,

                                                overflowWrap:
                                                    "break-word",
                                            }}
                                        >
                                            Higher Secondary Education
                                        </Typography>


                                        {/* ================= YEAR ================= */}

                                        <Typography
                                            sx={{
                                                color: "#756CFF",

                                                fontSize: {
                                                    xs: 17,
                                                    sm: 15,
                                                    md: 17,
                                                },

                                                fontWeight: 600,

                                                mb: 1,
                                            }}
                                        >
                                            2021 - 2023
                                        </Typography>


                                        {/* ================= SCHOOL ================= */}

                                        <Typography
                                            sx={{
                                                color: "#D6D8E5",

                                                fontSize: {
                                                    xs: 17,
                                                    sm: 15,
                                                    md: 18,
                                                },

                                                fontWeight: 500,

                                                lineHeight: 1.6,

                                                mb: 1,

                                                overflowWrap:
                                                    "break-word",
                                            }}
                                        >
                                            Gurunana Sambanthar
                                            Mission Matriculation
                                            Higher Secondary
                                            School
                                        </Typography>


                                        {/* ================= LOCATION ================= */}

                                        <Typography
                                            sx={{
                                                color: "#D6D8E5",

                                                fontSize: {
                                                    xs: 15,
                                                    sm: 15,
                                                    md: 16,
                                                },

                                                fontWeight: 500,

                                                lineHeight: 1.6,

                                                mb: 1.5,

                                                overflowWrap:
                                                    "break-word",
                                            }}
                                        >
                                            Mayiladuthurai - 609 001
                                        </Typography>


                                        {/* ================= DESCRIPTION ================= */}

                                        <Typography
                                            sx={{
                                                color: "#BFC2D1",

                                                fontSize: {
                                                    xs: 15,
                                                    sm: 14,
                                                    md: 15,
                                                },

                                                lineHeight: 1.7,

                                                overflowWrap:
                                                    "break-word",
                                            }}
                                        >
                                            Completed HSC with Computer
                                            Science stream with excellent
                                            academic record.
                                        </Typography>

                                    </Box>

                                </motion.div>

                                {/* =================================================
                                    SSLC / 10TH
                         ================================================= */}

                                <motion.div variants={bottomToTop}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: "100%",
                                            p: { xs: 2, sm: 2.5, md: 3 },
                                            pt: { xs: 2.5, sm: 2.5, md: 3 },
                                            borderRadius: "18px",
                                            border: "1px solid rgba(125,70,255,0.45)",
                                            background: "rgba(10,13,45,0.72)",
                                            zIndex: 1,
                                            transition: "0.3s ease",
                                            boxSizing: "border-box",
                                            minWidth: 0,
                                            "&:hover": {
                                                borderColor: "#8D4DFF",
                                                boxShadow: "0 0 25px rgba(110,60,255,0.18)",
                                                transform: "translateY(-4px)",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "-9px",
                                                left: { xs: "25px", sm: "25px", md: "50%" },
                                                transform: { xs: "none", sm: "none", md: "translateX(-50%)" },
                                                width: 16,
                                                height: 16,
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg,#B52CFF,#477CFF)",
                                                border: "3px solid #11143D",
                                                boxShadow: "0 0 12px rgba(144,60,255,0.8)",
                                                zIndex: 2,
                                            }}
                                        />

                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontSize: { xs: 21, sm: 19, md: 23 },
                                                fontWeight: 700,
                                                lineHeight: 1.35,
                                                mb: 1,
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            SSLC
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#756CFF",
                                                fontSize: { xs: 17, sm: 15, md: 18 },
                                                fontWeight: 600,
                                                mb: 1,
                                            }}
                                        >
                                            2019 - 2020
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#D6D8E5",
                                                fontSize: { xs: 17, sm: 15, md: 18 },
                                                fontWeight: 500,
                                                lineHeight: 1.6,
                                                mb: 1,
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            Gurunana Sambanthar Mission Matriculation Higher Secondary School
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#D6D8E5",
                                                fontSize: { xs: 15, sm: 15, md: 17 },
                                                fontWeight: 500,
                                                lineHeight: 1.6,
                                                mb: 1.5,
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            Mayiladuthurai - 609 001
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#BFC2D1",
                                                fontSize: { xs: 15, sm: 14, md: 16 },
                                                lineHeight: 1.7,
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            Completed Secondary School Leaving Certificate (SSLC).
                                        </Typography>
                                    </Box>
                                </motion.div>

                    </Box>

                </motion.div>

            </Box>

        </motion.div>
    );
}

export default Education;
