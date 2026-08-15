import React from 'react'
import {
    Box,
    Typography,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
function HeroVisual() {
    return (
        <>


            {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

            <Box
                sx={{
                    position: {
                        xs: "relative",
                        md: "absolute",
                    },

                    right: {
                        xs: "auto",
                        md: "1%",
                        lg: "3%",
                    },

                    top: {
                        xs: "auto",
                        md: "88px",
                    },

                    width: {
                        xs: "100%",
                        sm: "100%",
                        md: "51%",
                        lg: "50%",
                    },

                    height: {
                        xs: "440px",
                        sm: "500px",
                        md: "calc(100% - 88px)",
                    },

                    mt: {
                        xs: 4,
                        sm: 5,
                        md: 0,
                    },

                    zIndex: 4,

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "flex-end",
                }}
            >

                {/* ================= PERSON ================= */}

                <Box
                    component="img"
                    src="/img/Myppics.png"
                    alt="Mohamed Raashith"
                    sx={{
                        width: {
                            xs: "72%",
                            sm: "60%",
                            md: "70%",
                            lg: "72%",
                        },
                        m:{xs:-5,md:0},
                        maxWidth: {
                            xs: "350px",
                            sm: "380px",
                            md: "440px",
                        },

                        height: "auto",

                        objectFit: "contain",

                        position: "absolute",

                        bottom: 0,

                        zIndex: 2,

                        filter:
                            "drop-shadow(0 15px 35px rgba(0,0,0,0.45))",
                    }}
                />
                {/* ================= CODE ICON ================= */}

                <Box
                    sx={{
                        display: { xs: "block", md: "flex" },
                        position: "absolute",
                        left: {
                            xs: "4%",
                            sm: "8%",
                            md: "8%",
                        },
                        top: {
                            xs: "7%",
                            sm: "8%",
                            md: "10%",
                        },
                        width: {
                            xs: 58,
                            sm: 68,
                            md: 80,
                        },
                        height: {
                            xs: 58,
                            sm: 68,
                            md: 80,
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border:
                            "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "16px",
                        background:
                            "rgba(8,10,28,0.65)",
                        backdropFilter: "blur(12px)",
                        zIndex: 5,
                        boxShadow:
                            "0 10px 30px rgba(0,0,0,0.25)",
                    }}
                >
                    <CodeIcon
                        sx={{
                            fontSize: {
                                xs: 38,
                                sm: 45,
                                md: 55,
                            },
                            color: "#239AFF",
                        }}
                    />
                </Box>
                {/* ================= 10+ PROJECTS ================= */}
                <Box
                    sx={{
                        display: { xs: "block", md: "block" },
                        position: "absolute",
                        right: {
                            xs: "1%",
                            sm: "3%",
                            md: "4%",
                        },
                        top: {
                            xs: "2%",
                            sm: "3%",
                            md: "3%",
                        },
                        width: {
                            xs: 125,
                            sm: 145,
                            md: 170,
                        },
                        p: {
                            xs: 1.5,
                            sm: 2,
                            md: 2.5,
                        },
                        border:
                            "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "16px",
                        background:
                            "rgba(8,10,28,0.65)",
                        backdropFilter: "blur(12px)",
                        zIndex: 5,
                    }}
                >
                    <RocketLaunchIcon
                        sx={{
                            fontSize: {
                                xs: 28,
                                md: 35,
                            },
                            color: "#00BFFF",
                            mb: 1,
                        }}
                    />

                    <Typography
                        sx={{
                            color: "#fff",
                            fontSize: {
                                xs: 24,
                                sm: 27,
                                md: 30,
                            },
                            fontWeight: 600,
                            lineHeight: 1,
                        }}
                    >
                        6+
                    </Typography>

                    <Typography
                        sx={{
                            color: "#D0D0D0",
                            fontSize: {
                                xs: 12,
                                sm: 14,
                                md: 16,
                            },
                            width: {
                                xs: "auto",
                                md: 155,
                            },
                            mt: 1,
                            lineHeight: 1.4,
                        }}
                    >
                        Projects Completed
                    </Typography>
                </Box>
                {/* ================= 2+ YEARS ================= */}

                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        position: "absolute",

                        right: {
                            xs: "1%",
                            sm: "3%",
                            md: "-3%",
                        },
                        top: {
                            xs: "38%",
                            sm: "35%",
                            md: "34%",
                        },
                        width: {
                            xs: 125,
                            sm: 140,
                            md: 155,
                        },
                        p: {
                            xs: 1.5,
                            sm: 2,
                            md: 2.5,
                        },
                        border:
                            "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "16px",
                        background:
                            "rgba(8,10,28,0.65)",
                        backdropFilter: "blur(12px)",
                        zIndex: 5,
                    }}
                >
                    <CodeIcon
                        sx={{
                            fontSize: 35,
                            color: "#00BFFF",
                            mb: 1,
                        }}
                    />
                    <Typography
                        sx={{
                            color: "#fff",
                            fontSize: {
                                xs: 24,
                                sm: 27,
                                md: 30,
                            },
                            fontWeight: 600,
                            lineHeight: 1,
                        }}
                    >
                        2+
                    </Typography>

                    <Typography
                        sx={{
                            color: "#D0D0D0",
                            fontSize: {
                                xs: 12,
                                sm: 14,
                                md: 16,
                            },
                            mt: 1,
                            width: {
                                xs: "auto",
                                md: 155,
                            },
                            lineHeight: 1.4,
                        }}
                    >
                        Years of Learning
                    </Typography>
                </Box>


                {/* =====================================================
              CODE EDITOR CARD
          ===================================================== */}

                <Box
                    sx={{
                        position: "absolute",
                        left: {
                            xs: "40%",
                            sm: "50%",
                            md: "8%",
                        },
                        transform: {
                            xs: "translateX(-50%)",
                            md: "none",
                        },
                        bottom: {
                            xs: "-5%",
                            md: "1%",
                        },
                        width: {
                            xs: "75%",
                            sm: "80%",
                            md: "390px",
                            lg: "460px",
                        },
                        minHeight: {
                            xs: 190,
                            sm: 220,
                            md: 255,
                        },
                        border:
                            "1px solid rgba(255,255,255,0.22)",
                        borderRadius: "18px",
                        background:
                            "rgba(8,10,28,0.65)",
                        backdropFilter: "blur(2px)",
                        boxShadow:
                            "0 20px 50px rgba(0,0,0,0.35)",
                        zIndex: 6,
                        overflow: "hidden",
                    }}
                >
                    {/* Window Header */}

                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,

                            px: 2,

                            py: 1.5,

                            borderBottom:
                                "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        <Box
                            sx={{
                                width: {
                                    xs: 10,
                                    md: 13,
                                },
                                height: {
                                    xs: 10,
                                    md: 13,
                                },
                                borderRadius: "50%",
                                background: "#C329FF",
                            }}
                        />

                        <Box
                            sx={{
                                width: {
                                    xs: 10,
                                    md: 13,
                                },
                                height: {
                                    xs: 10,
                                    md: 13,
                                },
                                borderRadius: "50%",
                                background: "#7D4CFF",
                            }}
                        />

                        <Box
                            sx={{
                                width: {
                                    xs: 10,
                                    md: 13,
                                },
                                height: {
                                    xs: 10,
                                    md: 13,
                                },
                                borderRadius: "50%",
                                background: "#287EFF",
                            }}
                        />
                    </Box>


                    {/* Code */}

                    <Box
                        sx={{
                            p: {
                                xs: 1.5,
                                sm: 2,
                                md: 2.5,
                            },

                            fontFamily:
                                "monospace",

                            fontSize: {
                                xs: 9,
                                sm: 11,
                                md: 13,
                                lg: 14,
                            },

                            lineHeight: 1.9,
                        }}
                    >

                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                            }}
                        >
                            01&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#E05AFF" }}
                            >
                                const
                            </Box>{" "}
                            <Box
                                component="span"
                                sx={{ color: "#55D9FF" }}
                            >
                                developer
                            </Box>{" "}
                            = {"{"}
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                            }}
                        >
                            02&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#fff" }}
                            >
                                Name:
                            </Box>{" "}
                            <Box
                                component="span"
                                sx={{ color: "#54E66D" }}
                            >
                                "Mohamed Raashith",
                            </Box>
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                            }}
                        >
                            03&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#fff" }}
                            >
                                Role:
                            </Box>{" "}
                            <Box
                                component="span"
                                sx={{ color: "#54E66D" }}
                            >
                                "Frontend Developer",
                            </Box>
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                            }}
                        >
                            04&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#fff" }}
                            >
                                Skills:
                            </Box>{" "}
                            <Box
                                component="span"
                                sx={{ color: "#54E66D" }}
                            >
                                ["Frontend", "React.js"]
                            </Box>
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                            }}
                        >
                            05&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#fff" }}
                            >
                                passion:
                            </Box>{" "}
                            <Box
                                component="span"
                                sx={{ color: "#54E66D" }}
                            >
                                "Building amazing
                            </Box>
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                            }}
                        >
                            06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box
                                component="span"
                                sx={{ color: "#54E66D" }}
                            >
                                web experiences"
                            </Box>
                        </Typography>


                        <Typography
                            component="div"
                            sx={{
                                color: "#777",
                                fontFamily: "monospace",
                            }}
                        >
                            07&nbsp;&nbsp;{"};"}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default HeroVisual
