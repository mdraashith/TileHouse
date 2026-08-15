import React from "react";
import {
    Box,
    Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
function Education() {
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
                    md: "22px",
                },

                border:
                    "1px solid rgba(105,79,200,0.35)",

                background:
                    "rgba(5,8,30,0.55)",
            }}
        >
            {/* ================= TITLE ================= */}

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,

                    mb: {
                        xs: 3,
                        md: 4,
                    },
                }}
            >
                <SchoolIcon
                    sx={{
                        fontSize: {
                            xs: 45,
                            sm: 27,
                            md: 30,
                        },

                        color: "#A33DFF",

                        
                    }}
                />

                <Typography
                    sx={{
                        fontSize: {
                            xs: 25,
                            sm: 22,
                            md: 24,
                        },

                        fontWeight: 700,

                        color: "#fff",
                    }}
                >
                    Education
                </Typography>
            </Box>

            {/* ================= TIMELINE ================= */}

            <Box
                sx={{
                    position: "relative",

                    display: "grid",

                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "1fr 1fr",
                    },

                    gap: {
                        xs: 4,
                        md: 10,
                    },

                    px: {
                        xs: 0,
                        md: 2,
                    },

                    /* Connecting line */

                    "&::before": {
                        content: '""',

                        display: {
                            xs: "none",
                            md: "block",
                        },

                        position: "absolute",

                        top: "27px",

                        left: "calc(50% - 45px)",

                        right: "calc(50% - 45px)",

                        height: "2px",

                        background:
                            "rgba(130,90,210,0.35)",

                        zIndex: 0,
                    },
                }}
            >
                {/* ================= B.SC ================= */}

                <Box
                    sx={{
                        position: "relative",

                        p: {
                            xs: 2,
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

                        "&:hover": {
                            borderColor: "#8D4DFF",

                            boxShadow:
                                "0 0 25px rgba(110,60,255,0.18)",
                        },
                    }}
                >
                    {/* Timeline Dot */}

                    <Box
                        sx={{
                            position: "absolute",

                            top: "-9px",

                            left: {
                                xs: "25px",
                                md: "50%",
                            },

                            transform: {
                                xs: "none",
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
                        }}
                    />

                    <Typography
                        sx={{
                            color: "#fff",

                            fontSize: {
                                xs: 25,
                                sm: 18,
                                md: 20,
                            },

                            fontWeight: 700,

                            mb: 1,
                        }}
                    >
                        B.Sc., Computer Science
                    </Typography>

                    <Typography
                        sx={{
                            color: "#756CFF",

                            fontSize: {
                                xs: 18,
                                sm: 15,
                            },

                            fontWeight: 600,

                            mb: 1,
                        }}
                    >
                        2023 - 2026
                    </Typography>

                    <Typography
                        sx={{
                            color: "#D6D8E5",

                            fontSize: {
                                xs: 22,
                                sm: 16,
                            },

                            fontWeight: 500,

                            lineHeight: 1.6,

                            mb: 1,
                        }}
                    >
                        A.V.C College (Autonomous)
                    </Typography>

                    <Typography
                        sx={{
                            color: "#D6D8E5",

                            fontSize: {
                                xs: 20,
                                sm: 16,
                            },

                            fontWeight: 500,

                            lineHeight: 1.6,

                            mb: 1.5,
                        }}
                    >
                        Mannampandal, Mayiladuthurai -
                        609 305
                    </Typography>

                    <Typography
                        sx={{
                            color: "#BFC2D1",

                            fontSize: {
                                xs: 16,
                                sm: 17,
                            },

                            lineHeight: 1.7,
                        }}
                    >
                        Focused on software development,
                        data structures, web technologies
                        and database management.
                    </Typography>
                </Box>

                {/* ================= HSC ================= */}

                <Box
                    sx={{
                        position: "relative",

                        p: {
                            xs: 2,
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

                        "&:hover": {
                            borderColor: "#8D4DFF",

                            boxShadow:
                                "0 0 25px rgba(110,60,255,0.18)",
                        },
                    }}
                >
                    {/* Timeline Dot */}

                    <Box
                        sx={{
                            position: "absolute",

                            top: "-9px",

                            left: {
                                xs: "25px",
                                md: "50%",
                            },

                            transform: {
                                xs: "none",
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
                        }}
                    />

                    <Typography
                        sx={{
                            color: "#fff",

                            fontSize: {
                                xs: 25,
                                sm: 18,
                                md: 20,
                            },

                            fontWeight: 700,

                            mb: 1,
                        }}
                    >
                        Higher Secondary Education
                    </Typography>

                    <Typography
                        sx={{
                            color: "#756CFF",

                            fontSize: {
                                xs: 18,
                                sm: 15,
                            },

                            fontWeight: 600,

                            mb: 1,
                        }}
                    >
                        2021 - 2023
                    </Typography>

                    <Typography
                        sx={{
                            color: "#D6D8E5",

                            fontSize: {
                                xs: 20,
                                sm: 16,
                            },

                            fontWeight: 500,

                            lineHeight: 1.6,

                            mb: 1,
                        }}
                    >
                        Gurunana Sambanthar Mission
                        Matriculation Higher Secondary
                        School
                    </Typography>

                    <Typography
                        sx={{
                            color: "#D6D8E5",

                            fontSize: {
                                xs: 19,
                                sm: 16,
                            },

                            fontWeight: 500,

                            lineHeight: 1.6,

                            mb: 1.5,
                        }}
                    >
                        Mayiladuthurai - 609 001
                    </Typography>

                    <Typography
                        sx={{
                            color: "#BFC2D1",

                            fontSize: {
                                xs: 17,
                                sm: 15,
                            },

                            lineHeight: 1.7,
                        }}
                    >
                        Completed HSC with Computer
                        Science stream with excellent
                        academic record.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Education;