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


function ProjectStats() {

    return (

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

            {/* ================= 6+ ================= */}

            <Box
                sx={{
                    py: 2,

                    textAlign: "center",

                    borderRight: {
                        xs:
                            "1px solid rgba(100,90,180,0.25)",

                        sm:
                            "1px solid rgba(100,90,180,0.25)",
                    },

                    borderBottom: {
                        xs:
                            "1px solid rgba(100,90,180,0.25)",

                        sm: "none",
                    },
                }}
            >

                <CodeOutlinedIcon
                    sx={{
                        color: "#A83DFF",

                        fontSize: 35,

                        mb: 0.3,
                    }}
                />

                <Typography
                    sx={{
                        fontSize: 18,

                        fontWeight: 700,
                    }}
                >
                    6+
                </Typography>

                <Typography
                    sx={{
                        color: "#AEB3C5",

                        fontSize: 16,
                    }}
                >
                    Projects Completed
                </Typography>

            </Box>


            {/* ================= 3+ ================= */}

            <Box
                sx={{
                    py: 2,

                    textAlign: "center",

                    borderRight: {
                        xs: "none",

                        sm:
                            "1px solid rgba(100,90,180,0.25)",
                    },

                    borderBottom: {
                        xs:
                            "1px solid rgba(100,90,180,0.25)",

                        sm: "none",
                    },
                }}
            >

                <RocketLaunchOutlinedIcon
                    sx={{
                        color: "#A83DFF",

                        fontSize: 35,

                        mb: 0.3,
                    }}
                />

                <Typography
                    sx={{
                        fontSize: 18,

                        fontWeight: 700,
                    }}
                >
                    3+
                </Typography>

                <Typography
                    sx={{
                        color: "#AEB3C5",

                        fontSize: 16,
                    }}
                >
                    Technologies Used
                </Typography>

            </Box>


            {/* ================= 100% ================= */}

            <Box
                sx={{
                    py: 2,

                    textAlign: "center",

                    borderRight: {
                        xs:
                            "1px solid rgba(100,90,180,0.25)",

                        sm:
                            "1px solid rgba(100,90,180,0.25)",
                    },
                }}
            >

                <StarBorderOutlinedIcon
                    sx={{
                        color: "#A83DFF",

                        fontSize: 35,

                        mb: 0.3,
                    }}
                />

                <Typography
                    sx={{
                        fontSize: 18,

                        fontWeight: 700,
                    }}
                >
                    100%
                </Typography>

                <Typography
                    sx={{
                        color: "#AEB3C5",

                        fontSize: 16,
                    }}
                >
                    Passion & Dedication
                </Typography>

            </Box>


            {/* ================= ALWAYS ================= */}

            <Box
                sx={{
                    py: 2,

                    textAlign: "center",
                }}
            >

                <EmojiEmotionsOutlinedIcon
                    sx={{
                        color: "#A83DFF",

                        fontSize: 35,

                        mb: 0.3,
                    }}
                />

                <Typography
                    sx={{
                        fontSize: 18,

                        fontWeight: 700,
                    }}
                >
                    Always
                </Typography>

                <Typography
                    sx={{
                        color: "#AEB3C5",

                        fontSize: 17,
                    }}
                >
                    Learning New Things
                </Typography>

            </Box>

        </Box>
    );
}


export default ProjectStats;